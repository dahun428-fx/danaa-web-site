import Image from "next/image";
import styles from "./page.module.css";

const CI_SECTIONS = [
  {
    title: "워드마크",
    image: "/resources/images/sub/sub_0503_img_01.jpg",
    description:
      "다나아데이터의 워드마크는 C와 I, O를 유기적으로 연결해 첨단성과 신뢰감, 그리고 고객과의 끊임없는 소통을 표현합니다. 모든 응용 매체에서 비례와 색상을 임의로 변경하지 말고 원본 데이터를 사용해 주세요.",
  },
  {
    title: "로고타입",
    image: "/resources/images/sub/sub_0503_img_02.jpg",
    description:
      "로고타입은 워드마크와 조합해 다나아데이터의 브랜드 이미지를 전달하는 핵심 요소입니다. 가로나 세로 형태 등 제공된 규격을 그대로 활용하며, 서체 변경이나 변형을 금지합니다.",
  },
  {
    title: "시그니처",
    image: "/resources/images/sub/sub_0503_img_03.jpg",
    description:
      "시그니처는 워드마크와 로고타입의 조합을 체계화한 버전입니다. 상하/좌우 조합 등 가이드라인에 따른 비례와 여백을 유지하여 사용해야 합니다.",
  },
  {
    title: "전용 색상",
    image: "/resources/images/sub/sub_0503_img_04.jpg",
    description:
      "그라데이션과 솔리드 컬러를 포함한 전용 색상은 브랜드 일관성을 유지하기 위한 필수 요소입니다. 인쇄 및 디지털 환경에 맞춰 CMYK와 RGB 값을 준수해 주세요.",
  },
  {
    title: "색상 적용 가이드",
    image: "/resources/images/sub/sub_0503_img_05.jpg",
    description:
      "배경 색상에 따른 로고 적용 예시입니다. 구성요소의 대비가 명확하게 드러나도록 가이드에 제시된 조합을 참고해 주세요.",
  },
  {
    title: "사용 금지 규정",
    image: "/resources/images/sub/sub_0503_img_06.jpg",
    description:
      "워드마크의 왜곡, 비례 변경, 색상 변형, 요소 추가 및 삭제 등은 브랜드 이미지를 훼손하므로 금지합니다.",
  },
] as const;

export default function PrCiPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.intro}>
        <h1>CI 매뉴얼</h1>
        <p>
          다나아데이터의 시각 정체성을 올바르게 활용하기 위한 기본 가이드입니다.
          워드마크, 로고타입, 전용 색상, 사용 금지 규정을 확인하고 브랜드
          일관성을 유지해 주세요.
        </p>
      </section>

      {CI_SECTIONS.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2>{section.title}</h2>
          <div className={styles.imageWrap}>
            <Image
              src={section.image}
              alt={section.title}
              width={960}
              height={640}
            />
          </div>
          <p className={styles.description}>{section.description}</p>
        </section>
      ))}

      <section className={styles.guide}>
        사용 시 의문 사항이 있다면{" "}
        <strong>contact@danaa.co.kr</strong> 또는 <strong>02-550-8967</strong>로
        연락 주세요. 정확한 원본 파일이 필요하시면 담당자에게 요청해 드립니다.
      </section>
    </main>
  );
}
