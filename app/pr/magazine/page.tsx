import BoardPage from "@/app/components/board/BoardPage";

export const dynamic = "force-dynamic";

export default function PrMagazinePage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <BoardPage
      moduleId={5}
      title="건강 매거진"
      description="건강한 삶을 위한 인사이트와 다나아데이터의 노하우를 공유합니다."
      basePath="/pr/magazine"
      searchParams={searchParams}
    />
  );
}
