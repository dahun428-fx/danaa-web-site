import Image from "next/image";
import styles from "./page.module.css";

const SERVICE_ELEMENTS = [
  {
    title: "잠재 질병 위험도",
    description:
      "유전적 요인으로 발생 가능성이 높은 질병을 사전에 파악해 선제적으로 관리합니다.",
  },
  {
    title: "식이 타입 · 영양소",
    description:
      "체질에 맞는 식이 유형과 필요 영양성분을 분석해 맞춤형 영양 전략을 제시합니다.",
  },
  {
    title: "맞춤 운동 전략",
    description:
      "체질과 유전자 특성에 기반한 운동 반응성을 분석해 최적의 운동 가이드를 제안합니다.",
  },
] as const;

const ANALYSIS_PACKAGES = [
  {
    title: "암 질환",
    items: [
      "위암, 대장암, 폐암, 간암, 갑상선암, 췌장암, 방광암, 식도암, 신장암",
      "남성 특화: 전립선암, 고환암",
      "여성 특화: 유방암, 자궁내막암, 난소암",
    ],
  },
  {
    title: "일반 질환",
    items: [
      "파킨슨병, 알츠하이머병, 뇌졸중, 뇌동맥류, 고혈압, 편두통, 제2형 당뇨, 골다공증, 고관절염, 비만, 만성폐쇄성질환, 심근경색증, 심박세동, 천식, 우울증",
    ],
  },
] as const;

const CUSTOM_OPTIONS = [
  {
    title: "수검자 직접 선택",
    description:
      "가족력, 성별, 관심 질환 등에 따라 필요한 검사 항목을 자유롭게 선택할 수 있습니다.",
  },
  {
    title: "다양한 검사 타입",
    description:
      "풍부한 검사 라인업으로 개인 맞춤형 케어플랜을 구성하고 체계적인 관리가 가능합니다.",
  },
] as const;

const RELIABILITY_POINTS = [
  "질병관리청 신고를 완료한 공인 검사기관에서 진행해 검사 정확도를 보증합니다.",
  "한국인·동아시아인을 대상으로 한 연구 데이터를 기반으로 분석합니다.",
  "유전체 및 바이오인포매틱스 전문 인력이 데이터 해석과 상담을 지원합니다.",
] as const;

const PROCESS_STEPS = [
  "유전자 검사 상담 및 동의서 작성",
  "혈액 채취",
  "DNA 추출 및 유전정보 분석",
  "유전자 분석 리포트 제작",
  "의료진 상담 및 맞춤 건강관리",
] as const;

const TEST_STRENGTHS = [
  {
    title: "한국인 맞춤 유전자 분석",
    description:
      "한국인에게 특이적으로 작용하는 유전 변이를 집중 분석해 위험도를 보다 정확하게 도출합니다.",
  },
  {
    title: "정확한 검사 체계",
    description:
      "질병관리청 유전자검사기관으로 등록된 기관에서 수행하며 다년간 최고 등급을 획득한 검사 품질을 제공합니다.",
  },
  {
    title: "검증된 기술력과 경험",
    description:
      "차세대 염기서열 분석 기반 암 유전자 패널 검사 수행 경험을 바탕으로 정확한 분석과 상담을 보장합니다.",
  },
] as const;

const SERVICE_TAGS = [
  "고위험 질환 조기 대응",
  "맞춤 영양·운동 전략",
  "한국인 대상 데이터",
  "전문 의료진 상담",
  "사후 관리 연계",
] as const;

export default function ProductGenopacPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>GenoPAC 유전자 분석 서비스</h1>
          <p>
            GenoPAC은 개인의 고유 유전정보를 분석해 선천적 질병 위험도를 예측하고,
            맞춤형 건강관리 전략을 제안하는 프리미엄 헬스케어 솔루션입니다.
          </p>
          <p>
            전체 유전자의 0.1% 차이에 주목하여 암·만성질환을 포함한 다양한 건강
            위험 요인을 진단하고, 식이·운동·생활습관 개선을 위한 실행 가이드까지
            제공합니다.
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/resources/images/sub/sub_0203_img_01.jpg"
            alt="GenoPAC 유전자 분석 서비스"
            width={640}
            height={480}
            priority
          />
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>제공 서비스</h2>
          <p>맞춤 의학을 위한 핵심 유전자 분석 정보를 제공합니다.</p>
        </header>
        <div className={styles.cardGrid}>
          {SERVICE_ELEMENTS.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>분석 카테고리</h2>
          <p>관심 영역에 따라 다양한 맞춤 패키지를 구성할 수 있습니다.</p>
        </header>
        <div className={styles.cardGrid}>
          {ANALYSIS_PACKAGES.map((pack) => (
            <article key={pack.title} className={styles.card}>
              <h3>{pack.title}</h3>
              <ul>
                {pack.items.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>선택형 맞춤 관리</h2>
        </header>
        <div className={styles.cardGrid}>
          {CUSTOM_OPTIONS.map((option) => (
            <article key={option.title} className={styles.card}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>분석 신뢰도</h2>
        </header>
        <div className={styles.cardGrid}>
          {RELIABILITY_POINTS.map((point) => (
            <article key={point} className={styles.card}>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>서비스 프로세스</h2>
        </header>
        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((step, index) => (
            <article key={step} className={styles.process}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>유전자검사 강점</h2>
        </header>
        <div className={styles.cardGrid}>
          {TEST_STRENGTHS.map((strength) => (
            <article key={strength.title} className={styles.card}>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>유의사항</h2>
        </header>
        <div className={styles.card}>
          <p>
            GenoPAC 유전자 검사는 질병의 유전적 위험도를 예측하기 위한 서비스로
            질병 유무를 진단하는 용도로 사용될 수 없습니다. 가족력, 생활습관 등
            환경적 요인을 함께 고려해야 하며, 정확한 진단을 위해서는 별도의
            의료적 검사가 필요합니다.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2>기대 효과</h2>
        </header>
        <ul className={styles.tagList}>
          {SERVICE_TAGS.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
