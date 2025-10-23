import BoardPage from "@/app/components/board/BoardPage";

export default function SupportNoticesPage({}: {}) {
  return (
    <BoardPage
      moduleId={1}
      title="공지사항"
      description="서비스 공지와 업데이트 소식을 확인하세요. 게시물 제목을 선택하면 상세 내용을 기존 사이트에서 열람하실 수 있습니다."
      basePath="/support/notices"
    />
  );
}
