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
  "프리미엄 헬스케어 및 웰니스 리조트",
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
    <main className="mx-auto w-full max-w-screen-xl px-6 py-20 flex flex-col gap-16 md:px-4 md:py-16">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            생체나이 측정 시스템
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            세계 최초로 40만 건 이상의 임상 데이터를 기반으로 개발된
            바이오에이지 생체나이 측정 시스템은 설문이 아닌 실제 검진 데이터를
            분석하여 개인의 건강상태와 노화 정도를 정밀하게 진단합니다.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            객관적인 데이터를 바탕으로 노화 속도와 위험요인을 파악하고
            맞춤형 건강관리 전략을 제시하여 의료기관, 기업, 지자체에서 폭넓게
            활용되고 있습니다.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/resources/images/sub/sub_0201_img_01.jpg"
            alt="생체나이 측정 시스템 설명"
            width={640}
            height={480}
            priority
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">핵심 가치</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            생체나이 측정 시스템은 단순한 검진을 넘어 과학적인 건강관리
            경험을 제공합니다.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-blue-600">
                {benefit.title}
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-base leading-relaxed text-gray-700">
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
          <h2 className="text-3xl font-bold text-gray-900">측정 프로세스</h2>
          <p className="text-base text-gray-700 leading-relaxed">데이터 수집부터 맞춤 케어까지 일관된 프로세스로 운영됩니다.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MEASUREMENT_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-2xl bg-gray-900 text-white p-7 flex flex-col gap-3 shadow-lg">
              <span className="text-sm tracking-wider uppercase opacity-70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-base leading-relaxed text-gray-200">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">리포트 특징</h2>
          <p className="text-base text-gray-700 leading-relaxed">다양한 분석 항목을 통해 개인별 맞춤 건강전략을 제안합니다.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPORT_FEATURES.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg flex flex-col gap-3">
              <h3>{feature.title}</h3>
              <p className="text-base leading-relaxed text-gray-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">주요 활용 분야</h2>
          <p className="text-base text-gray-700 leading-relaxed">다양한 산업 영역과 연계해 새로운 헬스케어 가치를 창출합니다.</p>
        </header>
        <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
          {INDUSTRY_USE_CASES.map((item) => (
            <li key={item} className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-base">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">과학적 검증</h2>
          <p className="text-base text-gray-700 leading-relaxed">신뢰할 수 있는 기술력을 토대로 지속적인 연구개발을 이어가고 있습니다.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((item) => (
            <article key={item} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg flex flex-col gap-3">
              <p className="text-base leading-relaxed text-gray-700">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
