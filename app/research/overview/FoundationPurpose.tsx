import CommonTableSection from "@/app/components/section/CommonTableSection";

const PURPOSE_LIST = [
  "과학적이며, 임상적으로 쉽게 접근할 수 있는 노화 측정시스템의 개발",
  "노화 및 건강증진을 위한 기술 개발 및 산업 발전에 기여",
  "국제 학술교류를 통해 선진 의료기술 수용",
  "산학협동을 통한 연구 및 제품 개발",
];

export default function FoundationPurpose() {
  return <CommonTableSection heading="설립 목적" items={PURPOSE_LIST} />;
}
