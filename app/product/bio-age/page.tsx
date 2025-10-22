import Image from "next/image";
import styles from "./page.module.css";

const HERO_COPY = [
  "세계 최초 40만 여 명의 임상 데이터를 기반으로 개발된 바이오에이지 생체나이 측정 시스템은 설문이 아닌 실제 건강검진 데이터를 분석하여 개인의 건강상태와 노화 정도를 정밀하게 진단합니다.",
  "객관화된 생체나이와 노화요인 분석 결과를 제공해 의료기관, 기업, 지자체 등 다양한 환경에서 예방 중심의 헬스케어 프로그램을 운영할 수 있도록 돕습니다.",
];

const DEVELOPMENT_HIGHLIGHTS = [
  "개인의 노화 정도를 생물학적 나이로 정량화하여 관리 지표로 활용합니다.",
  "노화방지 치료의 효과를 객관적으로 평가하고 피드백할 수 있습니다.",
  "식이·운동·스트레스 등 생활습관 개선 가이드를 체계적으로 제공합니다.",
  "정기적인 반복 측정을 통해 개인의 노화 속도 변화를 추적합니다.",
];

const BACKGROUND_TEXT =
  "현대적인 노화방지 의학이 본격화된 이후, 과학적 근거가 있는 노화 측정 도구에 대한 연구가 지속되었습니다. 대한생체나이의학연구소는 축적된 임상 데이터를 기반으로 생체 표지자를 종합한 생물학적 나이를 산출할 수 있는 프로토콜을 개발해 노화방지 진료의 새로운 장을 열었습니다.";

const SYSTEM_HIGHLIGHTS = [
  {
    number: "01",
    title: "7종의 기능나이 분석",
    description:
      "건강검진 데이터를 토대로 종합 생체나이와 신체·대사·혈관·심폐·면역·콩팥·관절 기능나이를 과학적으로 산출합니다.",
  },
  {
    number: "02",
    title: "개인 건강상태 기반 분석",
    description:
      "개인별 노화 요인을 진단해 건강증진, 질병 예방, 생활습관 개선을 위한 맞춤형 프로그램을 제안합니다.",
  },
  {
    number: "03",
    title: "개선 정도 및 노화속도 추적",
    description:
      "연속 데이터를 활용해 생체나이 개선도와 3년간의 노화 속도 변화를 추적하며 관리 효율을 높입니다.",
  },
];

const SCIENCE_GALLERY = [
  {
    image: "/resources/images/sub/sub_0201_img_0201.jpg",
    title: "보건신기술(HT) 인증",
    description: "생체나이 측정 기술은 보건복지부 보건신기술 인증을 통해 신뢰성을 확보했습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0202.jpg",
    title: "Affymetrix Genchip 호환",
    description: "미국 Affymetrix Genchip compatible 인증을 국내에서 유일하게 획득했습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0203.jpg",
    title: "세계일류상품 선정",
    description: "산업자원부 세계 일류상품으로 선정되어 기술 경쟁력을 인정받았습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0204.jpg",
    title: "다수의 학술 검증",
    description: "개발 소프트웨어와 분석 기술은 100편 이상의 SCI 논문에서 인용되었습니다.",
  },
];

const GENOME_HIGHLIGHTS = [
  "미국 Affymetrix Genchip compatible 인증(국내 유일)",
  "전 산업자원부 세계 일류상품 인증(유전체 정보 분석 분야 유일)",
  "100편 이상의 SCI 논문에 인용된 분석 알고리즘과 소프트웨어",
  "유전체 분석 기술 및 진단 마커 관련 특허 2건 보유",
];

const MEASUREMENT_FLOW = [
  {
    title: "건강검진",
    description:
      "종합검진과 직장검진 등 실제 건강검진 데이터를 기반으로 생체나이와 7가지 기능나이를 측정합니다.",
    image: "/resources/images/sub/sub_0201_img_0301.jpg",
  },
  {
    title: "건강상태 객관적 분석/평가",
    description: "생체나이 측정시스템을 통해 분석 리포트를 발행하고 건강상태를 객관화합니다.",
    image: "/resources/images/sub/sub_0201_img_0302.jpg",
  },
];

const HEALTH_CHECK_STEPS = [
  {
    step: "01",
    title: "건강(종합)검진 실시",
    description: "정기적인 종합검진으로 개인별 기초 데이터를 확보합니다.",
    image: "/resources/images/sub/sub_0201_img_0303.jpg",
  },
  {
    step: "02",
    title: "생체나이 측정 신청",
    description: "검진센터 또는 기업 프로그램을 통해 생체나이 분석을 의뢰합니다.",
    image: "/resources/images/sub/sub_0201_img_0304.jpg",
  },
  {
    step: "03",
    title: "분석 리포트 수령",
    description: "개선 가이드가 담긴 결과 리포트를 통해 생활습관을 지속적으로 관리합니다.",
    image: "/resources/images/sub/sub_0201_img_0305.jpg",
  },
];

const FUNCTION_AGES = [
  {
    title: "신체나이",
    description:
      "체력과 체형(비만) 상태를 종합해 기본적인 신체 노화를 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040201.jpg",
  },
  {
    title: "대사나이",
    description:
      "고혈압·당뇨·비만 등 대사증후군과 관련된 장기 상태를 종합한 나이입니다.",
    image: "/resources/images/sub/sub_0201_img_040202.jpg",
  },
  {
    title: "혈관나이",
    description:
      "혈압과 콜레스테롤 등 혈관 노화에 영향을 주는 요소를 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040203.jpg",
  },
  {
    title: "심폐나이",
    description: "호흡과 순환 기능 상태를 종합해 생명 유지 능력을 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040204.jpg",
  },
  {
    title: "면역나이",
    description: "외부 병원체에 대한 방어 능력을 평가해 면역력 저하를 조기에 확인합니다.",
    image: "/resources/images/sub/sub_0201_img_040205.jpg",
  },
  {
    title: "콩팥나이",
    description: "노폐물 처리와 체내 항상성 유지 기능을 종합적으로 판단합니다.",
    image: "/resources/images/sub/sub_0201_img_040206.jpg",
  },
  {
    title: "관절나이",
    description: "체중·근육·염증 상태를 통해 관절 기능의 노화 정도를 확인합니다.",
    image: "/resources/images/sub/sub_0201_img_040207.jpg",
  },
];

const PREMIUM_REPORT = [
  {
    title: "생체나이",
    description: "현재 노화 상태와 생체나이를 직관적으로 파악할 수 있습니다.",
    image: "/resources/images/sub/sub_0201_img_040301.jpg",
  },
  {
    title: "주요 노화 요인",
    description: "개인별 노화 요인과 건강관리 우선순위를 제시합니다.",
    image: "/resources/images/sub/sub_0201_img_040302.jpg",
  },
  {
    title: "스트레스 관리 가이드",
    description: "스트레스 유형과 관리 솔루션을 제공합니다.",
    image: "/resources/images/sub/sub_0201_img_040303.jpg",
  },
  {
    title: "영양·운동 가이드",
    description: "영양·운동 중심의 맞춤형 실천 전략을 안내합니다.",
    image: "/resources/images/sub/sub_0201_img_040304.jpg",
  },
];

const DISEASE_REPORT = [
  {
    title: "질환 발병 가능성 비교",
    description: "동일 연령대와 비교해 주요 만성질환의 발병 위험도를 제시합니다.",
    image: "/resources/images/sub/sub_0201_img_040401.jpg",
  },
  {
    title: "질병 예측 결과",
    description: "제2형 당뇨, 고혈압, 뇌혈관질환, 관상동맥질환의 발병 가능성을 예측합니다.",
    image: "/resources/images/sub/sub_0201_img_040402.jpg",
  },
  {
    title: "맞춤형 관리",
    description: "위험 요인에 따른 운동·식이 개선 방안을 제공합니다.",
    image: "/resources/images/sub/sub_0201_img_040403.jpg",
  },
];

const USE_CASES = [
  "일반 종합 정기 검진",
  "직장 종합 정기 검진",
  "정기 건강체크 및 비만·체형 검사",
  "노화방지·비만·웰빙 특수 클리닉",
  "노인·여성·남성 갱년기 종합검진",
  "기업 및 기관 맞춤 프로그램",
];

const ADOPTION_PROCESS = [
  "생체나이 측정시스템 사용 계약",
  "기존 검사결과와 연동되는 프로그램 환경 구축",
  "기관 내부 운영 방식에 맞춘 최적화로 사용 효율성 극대화",
];

const DIFFERENTIATION = {
  traditional: {
    title: "기존 건강검진",
    bullets: [
      "질병 발견이 주 목적이라 결과가 질병 유무에만 치중",
      "일회성 검진으로 끝나 후속 관리가 어렵습니다.",
      "차별화된 피드백이 부족해 고객 충성도가 낮습니다.",
    ],
    result: "재검진이나 장기 고객 확보가 어려움",
  },
  bioAge: {
    title: "바이오에이지 생체나이 측정시스템",
    bullets: [
      "노화도와 노화 요인을 정밀 분석해 맞춤 관리 지침을 제공합니다.",
      "지속적인 피드백으로 질병 예방과 개선 효과를 확보합니다.",
    ],
    highlights: ["기존 검진과의 차별성", "재검진율 증가", "추가 관리고객 확보"],
    result: "위험군 고객의 예방관리를 통해 신규 고객과 매출 확대를 기대할 수 있습니다.",
    note: "고객 만족도 제고를 통해 경쟁력 있는 검진센터로 도약할 수 있습니다.",
  },
} as const;

export default function ProductBioAgePage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>생체나이 측정 시스템</h1>
          {HERO_COPY.map((paragraph) => (
            <p key={paragraph} className={styles.caption}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/resources/images/sub/sub_0201_img_01.jpg"
            alt="생체나이 측정 시스템 설명"
            width={640}
            height={480}
            priority
          />
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>개요</h2>
          <p>
            설문에 의존하던 기존 노화 측정의 한계를 넘어 실제 임상 데이터를
            기반으로 개인의 건강 상태를 입체적으로 분석합니다.
          </p>
        </header>
        <ul className={styles.bulletList}>
          {DEVELOPMENT_HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.highlightNote}>
          알고리즘을 통해 개인의 검진 데이터를 분석하여 생체나이와 노화속도를
          측정하고, 이에 따른 영양·운동·스트레스 관리 가이드를 제공합니다.
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>개발배경</h2>
        </header>
        <div className={styles.mediaGrid}>
          <article className={styles.mediaCard}>
            <div className={styles.mediaImage}>
              <Image
                src="/resources/images/sub/sub_0201_img_03.jpg"
                alt="생체나이 연구 역사"
                width={640}
                height={480}
              />
            </div>
            <div className={styles.mediaBody}>
              <p>{BACKGROUND_TEXT}</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>핵심 분석 포인트</h2>
        </header>
        <div className={styles.featureGrid}>
          {SYSTEM_HIGHLIGHTS.map((item) => (
            <article key={item.title} className={styles.featureCard}>
              <span className={styles.featureNumber}>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>과학/학술적 인증</h2>
        </header>
        <div className={styles.imageGallery}>
          {SCIENCE_GALLERY.map((item) => (
            <figure key={item.title} className={styles.imageCard}>
              <Image src={item.image} alt={item.title} width={320} height={220} />
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <ul className={styles.bulletList}>
          {GENOME_HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <header>
          <h2>측정 방법</h2>
        </header>
        <div className={styles.mediaGrid}>
          {MEASUREMENT_FLOW.map((item) => (
            <article key={item.title} className={styles.mediaCard}>
              <div className={styles.mediaImage}>
                <Image src={item.image} alt={item.title} width={480} height={320} />
              </div>
              <div className={styles.mediaBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <h3 className={styles.subheading}>생체나이 건강검진 절차</h3>
        <div className={styles.mediaGrid}>
          {HEALTH_CHECK_STEPS.map((item) => (
            <article key={item.title} className={styles.mediaCard}>
              <div className={styles.mediaImage}>
                <Image src={item.image} alt={item.title} width={480} height={320} />
              </div>
              <div className={styles.mediaBody}>
                <span className={styles.featureNumber}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>결과 분석</h2>
        </header>
        <div className={styles.mediaGrid}>
          <article className={styles.mediaCard}>
            <div className={styles.mediaImage}>
              <Image
                src="/resources/images/sub/sub_0201_img_0401.jpg"
                alt="생체나이란"
                width={640}
                height={420}
              />
            </div>
            <div className={styles.mediaBody}>
              <h3>생체나이란?</h3>
              <p>
                주민등록상의 출생 나이가 아닌 현재의 생리·기능적 건강상태와 노화 정도를 나타내는 실제 나이입니다.
                생체나이는 노화 진단과 예방 관리에 있어 가장 핵심적인 지표로 활용됩니다.
              </p>
            </div>
          </article>
        </div>

        <h3 className={styles.subheading}>종합 생체나이 제공 항목</h3>
        <div className={styles.metricsGrid}>
          {FUNCTION_AGES.map((item) => (
            <article key={item.title} className={styles.metricCard}>
              <Image src={item.image} alt={item.title} width={320} height={220} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <h3 className={styles.subheading}>생체나이 분석 리포트 (고급형)</h3>
        <div className={styles.reportGrid}>
          {PREMIUM_REPORT.map((item) => (
            <article key={item.title} className={styles.reportCard}>
              <Image src={item.image} alt={item.title} width={320} height={220} />
              <div className={styles.reportBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className={styles.subheading}>생체나이 분석 리포트 (질환관리형)</h3>
        <p className={styles.caption}>
          한국인 30만여 명의 임상 데이터를 기반으로 제2형 당뇨, 고혈압, 뇌혈관질환, 관상동맥질환의 발병 가능성을 예측하고
          동일 연령대와 비교한 위험도를 제시합니다.
        </p>
        <div className={styles.reportGrid}>
          {DISEASE_REPORT.map((item) => (
            <article key={item.title} className={styles.reportCard}>
              <Image src={item.image} alt={item.title} width={320} height={220} />
              <div className={styles.reportBody}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>적용 분야</h2>
        </header>
        <ul className={styles.bulletList}>
          {USE_CASES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className={styles.subheading}>운영 프로세스</h3>
        <ul className={styles.bulletList}>
          {ADOPTION_PROCESS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className={styles.subheading}>도입 효과</h3>
        <div className={styles.comparison}>
          <article className={styles.comparisonColumn}>
            <h3>{DIFFERENTIATION.traditional.title}</h3>
            <ul className={styles.bulletList}>
              {DIFFERENTIATION.traditional.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.comparisonFooter}>
              결과: {DIFFERENTIATION.traditional.result}
            </div>
          </article>
          <article className={styles.comparisonColumn}>
            <h3>{DIFFERENTIATION.bioAge.title}</h3>
            <ul className={styles.bulletList}>
              {DIFFERENTIATION.bioAge.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className={styles.listPlain}>
              {DIFFERENTIATION.bioAge.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.comparisonFooter}>
              결과: {DIFFERENTIATION.bioAge.result}
            </div>
            <div className={styles.highlightNote}>{DIFFERENTIATION.bioAge.note}</div>
          </article>
        </div>
      </section>
    </main>
  );
}
