import Image from "next/image";
import styles from "./page.module.css";

const HERO_LINES = [
  "2002년 2월, 대한생체나이의학연구소 의료진을 중심으로 설립된",
  "생체나이 측정시스템 개발 회사입니다.",
];

export default function CompanyIntroPage() {
  return (
    <main className={styles.wrapper}>
      {/* 상단 인사말 헤더 */}
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h2 className={styles.subtitle}>인사말</h2>
          <h1 className={styles.headline}>
            {HERO_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className={styles.lead}>
            <strong>
              2013년에는 생명공학 벤처기업 ㈜이즈텍과의 합병으로, 통계전문가를
              확보함과 동시에 유전체 사업 쪽으로도 분야를 넓혀가고 있습니다.
            </strong>
          </p>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/resources/images/sub/sub01_img01.jpg"
            alt="연구소 연구 이미지"
            width={640}
            height={760}
            priority
          />
        </div>
      </section>

      {/* 본문 */}
      <section className={styles.content}>
        <p>
          바이오에이지 생체나이는 신체기능 혹은 설문지만을 이용한 기존 측정
          시스템과 달리, 검진자의 실제 데이터를 임상 빅데이터(국내 40만 건
          이상)를 바탕으로 비교·분석한 세계 최초의 생체나이 측정 시스템입니다.
          과학적이고 의학적인 자료를 기반으로 일반인들이 이해하기 쉬운 그래프와
          수치를 통해 본인의 건강상태 혹은 노화 정도를 나이로 제시하는 전문 측정
          시스템이라고 할 수 있습니다.
        </p>
        <p>
          생체나이는 보건산업진흥원에서 보건신기술(HT) 인증, 생체나이 관련 특허
          2건을 통해 학술적 검증을 거쳤으며, 전국 주요 대학병원과 종합병원,
          종합검진센터, 수탁검진센터를 중심으로 폭넓게 사용되고 있습니다. 또한,
          만성질환 레포트와 당뇨관리 리포트를 제공하고 있으며, 기업용 건강검진
          서비스 및 유전자 분석 서비스를 확장하여 헬스케어 발전을 위해 노력하고
          있습니다.
        </p>
        <p>
          지금까지의 학술적, 기술적 성취에 머무르지 않고 지속적인 연구, 개발을
          통해 의료산업 발전에 이바지하고 대한민국의 새로운 국가 경쟁력이 될 수
          있도록 최선을 다할 것입니다.
        </p>
      </section>

      {/* 서명 */}
      <section className={styles.signature}>
        <span>감사합니다.</span>
        <span>
          ㈜다나아데이터 대표이사 <strong>이창재</strong>
        </span>
      </section>
    </main>
  );
}
