import re
from urllib.parse import urlparse
from pathlib import Path

BASE_DOMAIN = "bio-age.co.kr"
SOURCE_URL = urlparse(f"https://{BASE_DOMAIN}")
SOURCE = Path("scraped/index.html")
GENERATED_DIR = Path("generated")
HEAD_FILE = GENERATED_DIR / "head.html"
BODY_FILE = GENERATED_DIR / "body.html"


def to_local_path(url: str) -> str:
    parsed = urlparse(url)
    if parsed.netloc and parsed.netloc != SOURCE_URL.netloc:
        return url
    path = parsed.path or "/"
    if parsed.query:
        path += f"?{parsed.query}"
    if parsed.fragment:
        path += f"#{parsed.fragment}"
    return path


def convert_site_urls(content: str) -> str:
    def replace_attr(match: re.Match) -> str:
        attr = match.group("attr")
        quote = match.group("quote")
        url = match.group("url")
        local_path = to_local_path(url)
        return f'{attr}={quote}{local_path}{quote}'

    def replace_url(match: re.Match) -> str:
        quote = match.group("quote") or ""
        url = match.group("url")
        local_path = to_local_path(url)
        if quote:
            return f"url({quote}{local_path}{quote})"
        return f"url({local_path})"

    attr_pattern = re.compile(
        r'(?P<attr>href|src|action)=(?P<quote>["\'])(?P<url>https?://[^"\']+)(?P=quote)'
    )
    url_pattern = re.compile(
        r'url\((?P<quote>["\']?)(?P<url>https?://[^"\')]+)(?P=quote)\)'
    )

    content = attr_pattern.sub(replace_attr, content)
    content = url_pattern.sub(replace_url, content)
    return content


def extract_sections(html: str) -> tuple[str, str]:
    try:
        head = html.split("<head>", 1)[1].split("</head>", 1)[0]
        body = html.split("<body>", 1)[1].split("</body>", 1)[0]
    except IndexError as exc:
        raise RuntimeError("Unable to split HTML into <head> and <body> sections") from exc
    return head.strip(), body.strip()


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Missing source HTML at {SOURCE}")

    raw_html = SOURCE.read_text(encoding="utf-8")
    head_html, body_html = extract_sections(raw_html)
    head_html = convert_site_urls(head_html)
    body_html = convert_site_urls(body_html)

    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    HEAD_FILE.write_text(head_html, encoding="utf-8")
    BODY_FILE.write_text(body_html, encoding="utf-8")


if __name__ == "__main__":
    main()
