import Image from "next/image";

const BUSINESS_NEEDS = [
  {
    title: "예방 중심의 건강경영 요구",
    description:
      "질병 발견 위주의 건강검진만으로는 임직원 건강을 차별화해 관리하기 어렵습니다. 예방과 생활습관 개선을 중시하는 새로운 건강경영 전략이 필요합니다.",
  },
  {
    title: "참여를 이끌 실질적 프로그램",
    description:
      "복지 차원의 지원만으로는 임직원 참여율이 낮습니다. 데이터 기반으로 성과를 확인하고 동기부여할 수 있는 프로그램이 요구됩니다.",
  },
  {
    title: "투자 대비 효과 측정",
    description:
      "기업은 건강관리 투자에 대한 객관적 성과와 통합 리포트를 원합니다. 누적 데이터를 분석해 개선 결과를 확인할 수 있는 솔루션이 필요합니다.",
  },
] as const;

const ADVANTAGES = [
  "생체나이 기반의 실질적인 건강증진 서비스 제공",
  "건강상태를 수치화한 새로운 관리지표(생체나이, 노화속도) 제시",
  "부서·성별·연령별 건강통계와 노화 요인 분석으로 조직 현황 파악",
  "건강등수·개선도 공개로 임직원 참여와 동기부여 강화",
  "기업 맞춤 건강증진 프로그램과 연계 가능한 토탈 솔루션",
] as const;

const PROCESS = [
  {
    title: "건강분석",
    summary: "검진센터",
    description: "건강검진과 생체나이 결과를 결합해 기업·임직원 상태를 진단합니다.",
  },
  {
    title: "관리기준 제시",
    summary: "데이터 분석",
    description:
      "기업 건강증진 리포트를 통해 부서별 노화요인과 우선 관리 항목을 제안합니다.",
  },
  {
    title: "맞춤 프로그램 운영",
    summary: "Wellness 실행",
    description:
      "생체나이 개선 목표를 기반으로 영양·운동·스트레스 관리 프로그램을 제공합니다.",
  },
] as const;

const REPORT_BUNDLES = [
  {
    audience: "인사/검진 담당자용",
    title: "기업건강분석 리포트",
    points: [
      "기업 아이덴티티에 맞춘 커스터마이징 표지와 구성",
      "전체 요약 대시보드로 건강 수준을 직관적으로 확인",
      "기업 생체나이 추세와 부서별·성별/연령별 비교 분석",
      "핵심 노화 요인과 위험 요인에 대한 개선 전략 제시",
    ],
  },
  {
    audience: "임직원용",
    title: "전사 게재형 리포트",
    points: [
      "전사 공지용 요약 리포트로 기업 건강 상태 공유",
      "개인별 생체나이 결과와 건강등수를 안내하여 동기 부여",
      "맞춤 케어 프로그램과 연동할 수 있는 실행 가이드 제공",
    ],
  },
] as const;

const VALUE_TAGS = [
  "데이터 기반 건강경영",
  "참여 중심 프로그램",
  "성과 측정 & 피드백",
  "기업 맞춤 리포트",
  "지속 가능한 웰니스",
] as const;

export default function ProductBizcarePage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-20">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
        <div className="flex flex-col gap-5">
          <h1 className="text-[clamp(2rem,3.2vw,2.8rem)] font-bold leading-tight text-brand-navy">
            기업건강분석 BIZCARE
          </h1>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            다나아데이터 BIZCARE는 임직원 건강 데이터를 기반으로 기업의 노화도와
            건강위험 요인을 분석하고, 맞춤형 프로그램을 설계하는 기업 건강경영
            솔루션입니다.
          </p>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            생체나이 결과를 활용해 조직 수준의 건강 문제를 정확히 진단하고,
            실행 가능한 개선 전략과 리포트를 제공하여 건강한 조직 문화를 만듭니다.
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] shadow-[0_28px_54px_rgba(15,23,42,0.12)]">
          <Image
            src="/resources/images/sub/sub_0202_img_01.jpg"
            alt="기업건강분석 프로그램 소개"
            width={620}
            height={480}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">
            기업 건강증진 프로그램이 필요한 이유
          </h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            헬스케어 투자 효과를 극대화하기 위한 고민을 해결합니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {BUSINESS_NEEDS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 text-[0.98rem] leading-relaxed text-brand-navy/80 shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-sky-500">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header>
          <h2 className="text-[1.8rem] font-bold text-brand-navy">주요 특장점</h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {ADVANTAGES.map((advantage) => (
            <article
              key={advantage}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-6 py-7 text-[0.98rem] leading-relaxed text-brand-navy/80 shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
            >
              <p>{advantage}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">적용 프로세스</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            생체나이 진단부터 맞춤 프로그램 실행까지 체계적으로 지원합니다.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {PROCESS.map((stage, index) => (
            <article
              key={stage.title}
              className="flex flex-col gap-3 rounded-[22px] bg-brand-navy px-7 py-7 text-white shadow-[0_24px_48px_rgba(15,23,42,0.24)]"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/65">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.25rem] font-semibold">{stage.title}</h3>
              <p className="text-[0.95rem] font-semibold text-sky-300">
                {stage.summary}
              </p>
              <p className="text-[0.98rem] leading-relaxed text-white/80">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.8rem] font-bold text-brand-navy">
            분석 리포트 구성
          </h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            대상자별로 필요한 정보를 나누어 정확한 의사결정을 돕습니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {REPORT_BUNDLES.map((bundle) => (
            <article
              key={bundle.audience}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_18px_38px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-sky-500">
                {bundle.audience}
              </h3>
              <p className="font-medium text-brand-navy/80">{bundle.title}</p>
              <ul className="flex list-disc flex-col gap-2 pl-5 text-[0.98rem] leading-relaxed text-brand-navy/80">
                {bundle.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[28px] border border-sky-400/30 bg-[linear-gradient(135deg,rgba(14,165,233,0.1),rgba(37,99,235,0.08))] px-8 py-8">
          <h3 className="text-[1.35rem] font-semibold text-brand-navy">
            임직원 참여를 이끄는 맞춤형 프로그램
          </h3>
          <p className="text-[0.98rem] leading-relaxed text-brand-navy/75">
            생체나이 개선 목표를 명확히 제시하고, 건강등수 관리와 개선도 피드백을
            제공하여 임직원이 자연스럽게 프로그램에 참여하도록 설계되어 있습니다.
            1년 단위로 변화를 추적해 건강경영의 성과를 수치로 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <header>
          <h2 className="text-[1.8rem] font-bold text-brand-navy">기대 효과</h2>
        </header>
        <ul className="flex flex-wrap gap-3">
          {VALUE_TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-sky-400/20 px-4 py-2 text-[0.95rem] font-medium text-sky-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
