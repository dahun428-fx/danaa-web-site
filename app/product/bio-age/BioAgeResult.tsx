import SevenBioAges, { BioAgeItem } from "./BioAgeItem";

const ITEMS: BioAgeItem[] = [
  {
    no: "01",
    title: "신체나이",
    desc: "건강과 노화를 결정하는 기본 요소인 체력 및 체형(비만) 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040201.jpg",
  },
  {
    no: "02",
    title: "대사나이",
    desc: "대사증후군(고혈압, 당뇨, 비만)과 관련된 주요 장기 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040202.jpg",
  },
  {
    no: "03",
    title: "혈관나이",
    desc: "혈관 노화에 영향을 주는 혈압과 콜레스테롤 등의 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040203.jpg",
  },
  {
    no: "04",
    title: "심폐나이",
    desc: "생명유지에 필요한 호흡 및 순환계의 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040204.jpg",
  },
  {
    no: "05",
    title: "면역나이",
    desc: "외부에서 침입하는 병균으로부터 우리 몸을 방어하는 작용 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040205.jpg",
  },
  {
    no: "06",
    title: "콩팥나이",
    desc: "노폐물을 처리하고 체내 항상성을 유지하는 콩팥의 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040206.jpg",
  },
  {
    no: "07",
    title: "관절나이",
    desc: "관절 기능에 영향을 주는 체중과 근육 및 염증 상태를 종합한 나이",
    image: "/resources/images/sub/sub_0201_img_040207.jpg",
  },
];

export default function BioAgeResult() {
  return (
    <main>
      <SevenBioAges items={ITEMS} centerLast />
    </main>
  );
}
