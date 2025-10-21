import BoardPage from "@/app/components/board/BoardPage";

export const dynamic = "force-dynamic";

export default function SupportFaqPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <BoardPage
      moduleId={3}
      title="자주 묻는 질문"
      description="서비스 이용과 관련해 자주 문의하시는 질문을 정리했습니다. 보다 자세한 답변이 필요하시면 별도로 문의해 주세요."
      basePath="/support/faq"
      searchParams={searchParams}
    />
  );
}
