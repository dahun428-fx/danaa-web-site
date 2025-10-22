import Link from "next/link";
import type { BoardPage as BoardData } from "@/app/lib/board";
import { fetchBoard } from "@/app/lib/board";
import styles from "./board.module.css";
import { email_info } from "@/app/config/constant";

type BoardPageProps = {
  moduleId: number;
  title: string;
  description: string;
  basePath: string;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
  externalUrl?: string;
  emptyMessage?: string;
};

function resolvePageParam(value: string | string[] | undefined, fallback = 1) {
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
      <main className={styles.wrapper}>
        <section className={styles.intro}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            게시판을 불러오는 도중 문제가 발생했습니다. 잠시 후 다시 시도해
            주시고, 문제가 지속되면{" "}
            <Link href={`mailto:${email_info}`}>{email_info}</Link>로 문의해
            주세요.
          </p>
        </section>
      </main>
    );
  }

  const { items, currentPage, totalPages } = board;
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <main className={styles.wrapper}>
      <section className={styles.intro}>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td className={styles.empty} colSpan={4}>
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={`${item.no}-${item.href}`}>
                  <td className={item.isNotice ? styles.notice : undefined}>
                    {item.isNotice ? "공지" : item.no}
                  </td>
                  <td>
                    <Link
                      href={item.href}
                      className={styles.titleLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </Link>
                  </td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.pagination}>
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage - 1 },
            }}
            className={styles.pageBtn}
            aria-disabled={!hasPrev}
            tabIndex={hasPrev ? 0 : -1}
            prefetch={false}
          >
            이전
          </Link>
          <span className={`${styles.pageBtn} ${styles.pageBtnActive}`}>
            {currentPage}
          </span>
          <Link
            href={{
              pathname: basePath,
              query: { page: currentPage + 1 },
            }}
            className={styles.pageBtn}
            aria-disabled={!hasNext}
            tabIndex={hasNext ? 0 : -1}
            prefetch={false}
          >
            다음
          </Link>
        </div>
        <Link
          className={styles.externalLink}
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
