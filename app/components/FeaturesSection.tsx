import styles from "./FeaturesSection.module.css";

const FEATURES = [
  {
    title: "높은 정확도",
    description:
      "최신 통계 기법을 적용해 생체나이와 노화 속도를 정밀하게 분석합니다.",
    image: "/resources/images/sec01_img01.jpg",
  },
  {
    title: "생체 기능 종합 분석",
    description:
      "노화와 관련된 7가지 주요 생체 기능을 측정하고 핵심 건강지표를 제공합니다.",
    image: "/resources/images/sec01_img02.jpg",
  },
  {
    title: "맞춤형 결과 리포트",
    description:
      "개인별로 필요한 건강관리 우선순위와 생활습관 가이드를 제안합니다.",
    image: "/resources/images/sec01_img03.jpg",
  },
  {
    title: "검증된 시스템",
    description:
      "다양한 과학적 인증을 받은 믿을 수 있는 생체나이 측정 솔루션입니다.",
    image: "/resources/images/sec01_img04.jpg",
  },
];

export function FeaturesSection() {
  return (
    <section className={styles.section} id="benefits">
      <div className="container">
        <header className={styles.header}>
          <p>바이오에이지 생체나이</p>
          <h2>이런 점이 좋습니다</h2>
        </header>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <div
                className={styles.thumbnail}
                style={{ backgroundImage: `url(${feature.image})` }}
                role="img"
                aria-label={feature.title}
              />
              <div className={styles.body}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
