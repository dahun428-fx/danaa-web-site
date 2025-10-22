import Link from "next/link";
import type { BoardPage as BoardData } from "@/app/lib/board";
import { fetchBoard } from "@/app/lib/board";

type BoardPageProps = {
  moduleId: number;
  title: string;
  description: string;
  basePath: string;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
  externalUrl?: string;
  emptyMessage?: string;
};

function resolvePageParam(
  value: string | string[] | undefined,
  fallback = 1,
) {
  if (Array.isArray(value)) {
    return resolvePageParam(value[0], fallback);
  }

  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export async function BoardPage({
  moduleId,
  title,
  description,
  basePath,
  searchParams,
  externalUrl = `http://bio-age.co.kr/Module/Board/Board.asp?ModuleID=${moduleId}`,
  emptyMessage = "등록된 게시물이 없습니다.",
}: BoardPageProps) {
  const params = searchParams ? await searchParams : {};
  const page = resolvePageParam(params.page, 1);

  let board: BoardData;

  try {
    board = await fetchBoard(moduleId, page);
  } catch {
    return (
      <main className="mx-auto flex w-full max-w-[960px] flex-col gap-8 px-5 py-20">
        <section className="flex flex-col gap-3">
          <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
            {title}
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
            {description}
          </p>
          <p className="text-[0.95rem] leading-relaxed text-brand-navy/70">
            게시판을 불러오는 도중 문제가 발생했습니다. 잠시 후 다시 시도해
            주시고, 문제가 지속되면{" "}
            <Link
              href="mailto:contact@danaa.co.kr"
              className="font-medium text-brand-blue hover:underline"
            >
              contact@danaa.co.kr
            </Link>
            로 문의해 주세요.
          </p>
        </section>
      </main>
    );
  }

  const { items, currentPage, totalPages } = board;
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <main className="mx-auto flex w-full max-w-[960px] flex-col gap-10 px-5 py-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          {title}
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          {description}
        </p>
      </section>

      <div className="overflow-hidden rounded-[24px] border border-brand-navy/10 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-20 border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-4 text-center text-[0.98rem] font-semibold text-brand-navy">
                번호
              </th>
              <th className="border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-4 text-left text-[0.98rem] font-semibold text-brand-navy">
                제목
              </th>
              <th className="hidden border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-4 text-center text-[0.98rem] font-semibold text-brand-navy sm:table-cell">
                작성자
              </th>
              <th className="w-32 border-b border-brand-navy/10 bg-brand-navy/5 px-4 py-4 text-center text-[0.98rem] font-semibold text-brand-navy">
                작성일
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td className="px-4 py-12 text-center text-brand-navy/60" colSpan={4}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={`${item.no}-${item.href}`}>
                  <td
                    className={`border-b border-brand-navy/10 px-4 py-4 text-center text-[0.98rem] ${item.isNotice ? "font-semibold text-pink-600" : "text-brand-navy/75"}`}
                  >
                    {item.isNotice ? "공지" : item.no}
                  </td>
                  <td className="border-b border-brand-navy/10 px-4 py-4 text-[0.98rem] text-brand-navy/80">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 font-medium text-brand-blue hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="hidden border-b border-brand-navy/10 px-4 py-4 text-center text-[0.98rem] text-brand-navy/70 sm:table-cell">
                    {item.author}
                  </td>
                  <td className="border-b border-brand-navy/10 px-4 py-4 text-center text-[0.98rem] text-brand-navy/70">
                    {item.date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage - 1 },
            }}
            className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-[12px] border border-brand-navy/20 bg-white px-3 text-[0.95rem] font-medium text-brand-navy transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40"
            aria-disabled={!hasPrev}
            tabIndex={hasPrev ? 0 : -1}
            prefetch={false}
          >
            이전
          </Link>
          <span className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-[12px] border border-transparent bg-sky-500 px-3 text-[0.95rem] font-semibold text-white">
            {currentPage}
          </span>
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage + 1 },
            }}
            className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-[12px] border border-brand-navy/20 bg-white px-3 text-[0.95rem] font-medium text-brand-navy transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40"
            aria-disabled={!hasNext}
            tabIndex={hasNext ? 0 : -1}
            prefetch={false}
          >
            다음
          </Link>
        </div>
        <Link
          className="inline-flex items-center gap-1 font-medium text-sky-500 hover:underline"
          href={externalUrl}
          target="_blank"
          rel="noreferrer"
        >
          기존 사이트에서 보기
        </Link>
      </div>
    </main>
  );
}

export default BoardPage;
