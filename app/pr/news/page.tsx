import BoardPage from "@/app/components/board/BoardPage";

export default function PrNewsPage({}: {}) {
  return (
    <BoardPage
      moduleId={4}
      title="보도자료"
      description="언론에 소개된 다나아데이터의 소식과 인터뷰를 한눈에 확인하세요."
      basePath="/pr/news"
    />
  );
}
