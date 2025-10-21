from __future__ import annotations

import re
from collections import deque
from pathlib import Path
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen
from urllib.error import HTTPError, URLError

HTML_DIR = Path("generated")
PUBLIC_DIR = Path("public")
BASE_DOMAIN = "bio-age.co.kr"
BASE_SCHEME = "http"
ASSET_EXTENSIONS = {
    ".css",
    ".js",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".ico",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".otf",
    ".mp4",
    ".webm",
}


def iter_html() -> list[str]:
    return [
        (HTML_DIR / "head.html").read_text(encoding="utf-8"),
        (HTML_DIR / "body.html").read_text(encoding="utf-8"),
    ]


def is_asset(url: str) -> bool:
    parsed = urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        return False
    if parsed.netloc and parsed.netloc != BASE_DOMAIN:
        return False
    suffix = Path(parsed.path).suffix.lower()
    return suffix in ASSET_EXTENSIONS


def extract_urls(html: str) -> set[str]:
    urls: set[str] = set()
    attr_pattern = re.compile(r'(?:href|src|data-src|action)=(["\'])(.*?)\1')
    url_func_pattern = re.compile(r"url\((['\"]?)(.*?)\1\)")

    for match in attr_pattern.finditer(html):
        urls.add(match.group(2))
    for match in url_func_pattern.finditer(html):
        urls.add(match.group(2))

    return urls


def normalize_url(url: str, base: str) -> str:
    parsed = urlparse(url)
    if parsed.scheme in {"http", "https"}:
        if parsed.netloc == BASE_DOMAIN:
            return parsed._replace(scheme=BASE_SCHEME).geturl()
        return url
    if url.startswith("//"):
        return f"https:{url}"
    absolute = urljoin(base, url)
    parsed = urlparse(absolute)
    if parsed.netloc == BASE_DOMAIN:
        return parsed._replace(scheme=BASE_SCHEME).geturl()
    return absolute


def download(url: str) -> Path | None:
    parsed = urlparse(url)
    if parsed.netloc != BASE_DOMAIN:
        return None

    target_path = PUBLIC_DIR / parsed.path.lstrip("/")
    target_path.parent.mkdir(parents=True, exist_ok=True)

    if target_path.exists():
        return target_path

    try:
        with urlopen(url) as response:  # noqa: S310 (trusted domain)
            data = response.read()
    except (HTTPError, URLError) as error:
        print(f"Failed to download {url}: {error}")
        return None
    else:
        target_path.write_bytes(data)
        return target_path


def extract_from_css(css_path: Path, source_url: str) -> list[str]:
    urls: list[str] = []
    content = css_path.read_text(encoding="utf-8", errors="ignore")
    pattern = re.compile(r"url\((['\"]?)(.*?)\1\)")
    for match in pattern.finditer(content):
        candidate = match.group(2)
        # Skip data URIs
        if candidate.startswith("data:") or candidate.startswith("about:"):
            continue
        absolute = normalize_url(candidate, source_url)
        urls.append(absolute)
    return urls


def main() -> None:
    base_url = f"https://{BASE_DOMAIN}/"
    initial_urls: set[str] = set()
    for html in iter_html():
        for url in extract_urls(html):
            absolute = normalize_url(url, base_url)
            if is_asset(absolute):
                initial_urls.add(absolute)

    queue: deque[str] = deque(initial_urls)
    seen: set[str] = set()

    while queue:
        url = queue.popleft()
        if url in seen:
            continue
        seen.add(url)

        local_path = download(url)
        if local_path is None:
            continue

        if local_path.suffix.lower() == ".css":
            extra_urls = extract_from_css(local_path, url)
            for extra_url in extra_urls:
                absolute = normalize_url(extra_url, url)
                if is_asset(absolute) and absolute not in seen:
                    queue.append(absolute)


if __name__ == "__main__":
    main()
