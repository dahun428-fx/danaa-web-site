import Image from "next/image";

const HERO_LINES = [
  "세계 최초 생체나이 측정시스템을 개발한",
  "대한생체나이의학연구소를 소개합니다.",
] as const;

const GOALS = [
  {
    title: "웰에이징 선도",
    description:
      "노화를 과학적으로 진단하고 예방함으로써 누구나 건강하게 오래 살 수 있는 웰에이징 사회를 구현합니다.",
  },
  {
    title: "의료·산업 발전 기여",
    description:
      "임상 연구와 기술개발을 통해 노화방지의학의 발전과 의료산업의 혁신에 기여합니다.",
  },
  {
    title: "지속적인 연구 네트워크",
    description:
      "국내외 연구기관과의 교류 및 산학협력을 통해 미래 헬스케어 기술과 서비스를 공동으로 모색합니다.",
  },
] as const;

const PURPOSES = [
  "과학적이고 임상적으로 접근 가능한 노화 측정 시스템 개발",
  "노화 및 건강증진 기술 개발과 관련 산업 발전에의 기여",
  "국제 학술 교류를 통한 선진 의료기술의 수용과 확산",
  "산학협동을 통한 연구 및 제품 개발",
] as const;

export default function ResearchOverviewPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-20">
      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
        <div className="flex flex-col gap-5">
          <p className="text-[0.9rem] uppercase tracking-[0.18em] text-brand-navy/55">
            Bio-Age Research Institute
          </p>
          <h1 className="flex flex-col gap-1 text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-tight text-brand-navy">
            {HERO_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
            생체나이 측정 기술을 기반으로 노화를 진단·예방할 수 있는 솔루션을
            연구하며, 데이터 기반 헬스케어의 새로운 기준을 만들어 가고 있습니다.
          </p>
          <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
            축적된 임상 데이터와 첨단 통계 기법을 활용해 개인 맞춤형 건강관리
            전략을 제시하고, 노화방지 의학과 의료산업 발전에 기여합니다.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] shadow-[0_32px_64px_rgba(15,23,42,0.18)]">
          <Image
            src="/resources/images/sub/sub_0301_img_01.jpg"
            alt="대한생체나이의학연구소 연구 장면"
            width={720}
            height={540}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="grid gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.9rem] font-bold text-brand-navy">설립 목표</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            삶의 질을 높이고 국가 의료비를 절감할 수 있는 미래 헬스케어 생태계를
            구축합니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {GOALS.map((goal) => (
            <article
              key={goal.title}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-brand-blue">
                {goal.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-brand-navy/75">
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-[1.9rem] font-bold text-brand-navy">설립 목적</h2>
          <p className="text-[1rem] leading-relaxed text-brand-navy/70">
            다나아데이터는 노화를 정밀하게 측정하고 관리할 수 있는 기술을 통해
            건강수명을 연장하는 것을 목표로 합니다.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PURPOSES.map((purpose, index) => (
            <article
              key={purpose}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-[1.2rem] font-semibold text-brand-blue">
                목적 {String(index + 1).padStart(2, "0")}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-brand-navy/75">
                {purpose}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[20px] border border-brand-blue/20 bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(59,130,246,0.04))] px-7 py-7 text-[0.98rem] leading-relaxed text-brand-navy/75">
        노화방지 의학의 발전은 개인의 삶의 질 향상과 국가 의료비 절감에 기여하는
        만큼, 연구소는 데이터 기반의 노화 측정과 건강증진 기술 개발을 지속해
        나가고 있습니다.
      </section>
    </main>
  );
}
