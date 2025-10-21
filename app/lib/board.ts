const BOARD_BASE_URL = "http://bio-age.co.kr";

export type BoardItem = {
  no: string;
  title: string;
  author: string;
  date: string;
  href: string;
  isNotice: boolean;
};

export type BoardPage = {
  items: BoardItem[];
  currentPage: number;
  totalPages: number;
};

function stripHtml(input: string) {
  return input.replace(/<[^>]+>/g, " ");
}

function decodeHtml(html: string) {
  return stripHtml(html)
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function ensureAbsoluteUrl(href: string) {
  return href.startsWith("http") ? href : `${BOARD_BASE_URL}${href}`;
}

function parseBoard(html: string, fallbackPage: number): BoardPage {
  const items: BoardItem[] = [];
  const rowRegex =
    /<tr[^>]*>([\s\S]*?<td[^>]*>[\s\S]*?)<\/tr>/gi;
  let match: RegExpExecArray | null;

  while ((match = rowRegex.exec(html)) !== null) {
    const row = match[1];
    if (!/BoardView\.asp/i.test(row)) {
      continue;
    }

    const rowMatch =
      /<td[^>]*>(.*?)<\/td>[\s\S]*?<td[^>]*>[\s\S]*?<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>[\s\S]*?<td[^>]*>(.*?)<\/td>[\s\S]*?<td[^>]*>(.*?)<\/td>/i.exec(
        row,
      );

    if (!rowMatch) {
      continue;
    }

    const [, noHtml, href, titleHtml, authorHtml, dateHtml] = rowMatch;
    const no = decodeHtml(noHtml);
    const title = decodeHtml(titleHtml);
    const author = decodeHtml(authorHtml);
    const date = decodeHtml(dateHtml);

    items.push({
      no: no.length ? no : "-",
      title,
      author,
      date,
      href: ensureAbsoluteUrl(href),
      isNotice: /공지|notice/i.test(no) || /\[공지\]/i.test(title),
    });
  }

  const currentMatch =
    /<li[^>]*class="page-item\s+active"[^>]*>\s*<a[^>]*>(\d+)<\/a>/i.exec(
      html,
    );
  const numericMatches = Array.from(
    html.matchAll(/<a[^>]*class="page-link"[^>]*>(\d+)<\/a>/gi),
  ).map((entry) => Number(entry[1]));

  const currentPage =
    currentMatch && !Number.isNaN(Number(currentMatch[1]))
      ? Number(currentMatch[1])
      : fallbackPage;
  const totalPages = numericMatches.length
    ? Math.max(...numericMatches)
    : currentPage;

  return {
    items,
    currentPage,
    totalPages,
  };
}

export async function fetchBoard(
  moduleId: number,
  page = 1,
): Promise<BoardPage> {
  const endpoint =
    page > 1
      ? `${BOARD_BASE_URL}/Module/Board/Board.asp?ModuleID=${moduleId}&Page=${page}`
      : `${BOARD_BASE_URL}/Module/Board/Board.asp?ModuleID=${moduleId}`;

  const response = await fetch(endpoint, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `게시판을 불러오지 못했습니다. (HTTP ${response.status})`,
    );
  }

  const html = await response.text();

  if (html.includes("등록된 글이 없습니다")) {
    return {
      items: [],
      currentPage: page,
      totalPages: page,
    };
  }

  return parseBoard(html, page);
}
