import Image from "next/image";

const BENEFITS = [
  {
    title: "노화방지 진료의 새로운 기준",
    points: [
      "개인의 노화 정도를 생물학적 나이로 정량화하여 관리합니다.",
      "노화방지 치료 효과와 프로그램 성과를 객관적으로 검증할 수 있습니다.",
      "식습관·운동·호르몬 등 맞춤형 항산화 처방을 지원합니다.",
    ],
  },
  {
    title: "임상 빅데이터 기반 예측",
    points: [
      "40만 건 이상의 건강검진 데이터를 활용한 알고리즘을 적용합니다.",
      "실제 검진 수치를 활용해 7가지 기능별 생체나이와 노화 정도를 파악합니다.",
      "개인별 건강위험 요인을 조기에 발견하고 개선 방향을 제안합니다.",
    ],
  },
  {
    title: "생활습관 개선까지 연결",
    points: [
      "영양·운동·스트레스 관리 가이드를 통합 제공하여 행동 변화를 돕습니다.",
      "반복 측정을 통해 노화 속도 변화를 추적하고 개선 정도를 확인합니다.",
      "기관, 기업, 개인 맞춤 케어 프로그램과 연계가 가능합니다.",
    ],
  },
] as const;

const MEASUREMENT_STEPS = [
  {
    title: "검진 데이터 수집",
    description:
      "건강검진·혈액검사 결과와 기초 설문을 기반으로 생체신호 데이터를 확보합니다.",
  },
  {
    title: "AI 알고리즘 분석",
    description:
      "개인 데이터를 임상 빅데이터와 비교·분석해 생체나이와 기능별 노화 지표를 산출합니다.",
  },
  {
    title: "리포트 발행",
    description:
      "생체나이, 노화 속도, 질환 위험도, 건강관리 우선순위를 시각화한 리포트를 제공합니다.",
  },
  {
    title: "맞춤형 케어",
    description:
      "영양·운동·생활습관 개선 프로그램을 연계하여 지속적인 건강관리를 지원합니다.",
  },
] as const;

const REPORT_FEATURES = [
  {
    title: "생체나이 & 기능나이",
    description:
      "실제 나이와 비교해 종합 생체나이와 7가지 주요 기능별 나이를 도출합니다.",
  },
  {
    title: "노화 속도 추적",
    description:
      "누적 건강검진 데이터를 활용해 3년 이내 노화 속도 변화와 개선 정도를 확인합니다.",
  },
  {
    title: "위험인자 진단",
    description:
      "질병·생활습관 위험요인을 점수화하고 우선 관리가 필요한 항목을 제안합니다.",
  },
  {
    title: "생활습관 가이드",
    description:
      "영양, 운동, 스트레스 관리 등 맞춤형 실천 전략을 텍스트와 그래프로 안내합니다.",
  },
] as const;

const INDUSTRY_USE_CASES = [
  "대학병원·종합병원 건강검진센터",
  "기업 건강경영 및 복지 프로그램",
  "지방자치단체·공공기관 건강증진사업",
  "프리미엄 헬스케어 & 웰니스 리조트",
  "디지털 헬스케어 및 보험 서비스",
] as const;

const CERTIFICATIONS = [
  "보건복지부 보건신기술(HT) 인증 획득",
  "생체나이 예측 알고리즘 관련 특허 2건 보유",
  "국내외 200여 기관 도입 및 운영",
  "한국노화학회 등 다수의 학술 검증 완료",
] as const;

export default function ProductBioAgePage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-20">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight text-brand-navy">
            생체나이 측정 시스템
          </h1>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            세계 최초로 40만 건 이상의 임상 데이터를 기반으로 개발된
            다나아데이터 생체나이 측정 시스템은 설문이 아닌 실제 검진 데이터를
            분석하여 개인의 건강상태와 노화 정도를 정밀하게 진단합니다.
          </p>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            객관적인 데이터를 바탕으로 노화 속도와 위험요인을 파악하고
            맞춤형 건강관리 전략을 제시하여 의료기관, 기업, 지자체에서 폭넓게
            활용되고 있습니다.
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] shadow-[0_28px_58px_rgba(15,23,42,0.12)]">
          <Image
            src="/resources/images/sub/sub_0201_img_01.jpg"
            alt="생체나이 측정 시스템 설명"
            width={640}
            height={480}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">핵심 가치</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            생체나이 측정 시스템은 단순한 검진을 넘어 과학적인 건강관리
            경험을 제공합니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-brand-blue">
                {benefit.title}
              </h3>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-[0.98rem] leading-relaxed text-brand-navy/80">
                {benefit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">측정 프로세스</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            데이터 수집부터 맞춤 케어까지 일관된 프로세스로 운영됩니다.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {MEASUREMENT_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="flex flex-col gap-3 rounded-[20px] bg-brand-navy px-7 py-7 text-white shadow-[0_24px_48px_rgba(15,23,42,0.25)]"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.25rem] font-semibold">{step.title}</h3>
              <p className="text-[0.98rem] leading-relaxed text-white/80">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">리포트 특징</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            다양한 분석 항목을 통해 개인별 맞춤 건강전략을 제안합니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {REPORT_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-6 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-brand-blue">
                {feature.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-brand-navy/80">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">주요 활용 분야</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            다양한 산업 영역과 연계해 새로운 헬스케어 가치를 창출합니다.
          </p>
        </header>
        <ul className="flex flex-wrap gap-3">
          {INDUSTRY_USE_CASES.map((item) => (
            <li
              key={item}
              className="rounded-full bg-brand-blue/15 px-4 py-2 text-[0.95rem] font-medium text-brand-blue"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">과학적 검증</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            신뢰할 수 있는 기술력을 토대로 지속적인 연구개발을 이어가고 있습니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CERTIFICATIONS.map((item) => (
            <article
              key={item}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-6 py-7 text-[0.98rem] leading-relaxed text-brand-navy/80 shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
