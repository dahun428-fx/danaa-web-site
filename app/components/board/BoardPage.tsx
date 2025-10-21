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
      <main className="mx-auto w-full max-w-screen-lg px-6 py-20 flex flex-col gap-10 md:px-4 md:py-16">
        <section className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          <p className="text-base text-red-600">
            게시판을 불러오는 도중 문제가 발생했습니다. 잠시 후 다시 시도해
            주시고, 문제가 지속되면{" "}
            <Link href="mailto:contact@danaa.co.kr" className="text-blue-600 hover:underline">
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
    <main className="mx-auto w-full max-w-screen-lg px-6 py-20 flex flex-col gap-10 md:px-4 md:py-16">
      <section className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </section>

      <div className="rounded-3xl border border-gray-100 overflow-hidden bg-white shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="p-4 text-left text-base font-semibold text-gray-900 w-20 text-center">번호</th>
              <th scope="col" className="p-4 text-left text-base font-semibold text-gray-900">제목</th>
              <th scope="col" className="p-4 text-left text-base font-semibold text-gray-900 w-36 text-center hidden md:table-cell">작성자</th>
              <th scope="col" className="p-4 text-left text-base font-semibold text-gray-900 w-28 text-center">작성일</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td className="text-center p-12 text-base text-gray-600" colSpan={4}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={`${item.no}-${item.href}`} className="border-b border-gray-100 last:border-b-0">
                  <td className={`p-4 text-base text-gray-700 text-center ${item.isNotice ? "text-pink-600 font-semibold" : ""}`}>
                    {item.isNotice ? "공지" : item.no}
                  </td>
                  <td className="p-4 text-base text-gray-700">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td className="p-4 text-base text-gray-700 text-center hidden md:table-cell">{item.author}</td>
                  <td className="p-4 text-base text-gray-700 text-center">{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2">
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage - 1 },
            }}
            className={`min-w-[2.5rem] h-10 rounded-xl border border-gray-200 bg-white text-gray-900 font-medium inline-flex items-center justify-center ${!hasPrev ? "pointer-events-none opacity-35" : ""}`}
            aria-disabled={!hasPrev}
            tabIndex={hasPrev ? 0 : -1}
            prefetch={false}
          >
            이전
          </Link>
          <span className="min-w-[2.5rem] h-10 rounded-xl border border-blue-600 bg-blue-600 text-white font-medium inline-flex items-center justify-center">
            {currentPage}
          </span>
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage + 1 },
            }}
            className={`min-w-[2.5rem] h-10 rounded-xl border border-gray-200 bg-white text-gray-900 font-medium inline-flex items-center justify-center ${!hasNext ? "pointer-events-none opacity-35" : ""}`}
            aria-disabled={!hasNext}
            tabIndex={hasNext ? 0 : -1}
            prefetch={false}
          >
            다음
          </Link>
        </div>
        <Link className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline" href={externalUrl} target="_blank" rel="noreferrer">
          기존 사이트에서 보기
        </Link>
      </div>
    </main>
  );
}

export default BoardPage;
