import BoardPage from "@/app/components/board/BoardPage";

export default function ProductResourcesPage({}: {}) {
  return (
    <BoardPage
      moduleId={7}
      title="자료실"
      description="다나아데이터 제품과 관련된 공지, 보도자료, 리소스를 확인하실 수 있는 게시판입니다. 게시물 제목을 선택하면 기존 사이트의 상세 페이지로 이동합니다."
      basePath="/product/resources"
    />
  );
}
