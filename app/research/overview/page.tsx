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
    <main className="mx-auto w-full max-w-screen-xl px-6 py-20 flex flex-col gap-16 md:px-4 md:py-16">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-sm tracking-wider uppercase text-gray-500">
            Bio-Age Research Institute
          </p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {HERO_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            생체나이 측정 기술을 기반으로 노화를 진단·예방할 수 있는 솔루션을
            연구하며, 데이터 기반 헬스케어의 새로운 기준을 만들어 가고 있습니다.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            축적된 임상 데이터와 첨단 통계 기법을 활용해 개인 맞춤형 건강관리
            전략을 제시하고, 노화방지 의학과 의료산업 발전에 기여합니다.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/resources/images/sub/sub_0301_img_01.jpg"
            alt="대한생체나이의학연구소 연구 장면"
            width={720}
            height={540}
            priority
          />
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">설립 목표</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            삶의 질을 높이고 국가 의료비를 절감할 수 있는 미래 헬스케어 생태계를
            구축합니다.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS.map((goal) => (
            <article key={goal.title} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-blue-700">
                {goal.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">설립 목적</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            바이오에이지는 노화를 정밀하게 측정하고 관리할 수 있는 기술을 통해
            건강수명을 연장하는 것을 목표로 합니다.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PURPOSES.map((purpose, index) => (
            <article key={purpose} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-blue-700">목적 {String(index + 1).padStart(2, "0")}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-blue-100/30 border border-blue-300/70 p-7 text-base text-gray-700 leading-relaxed">
        노화방지 의학의 발전은 개인의 삶의 질 향상과 국가 의료비 절감에 기여하는
        만큼, 연구소는 데이터 기반의 노화 측정과 건강증진 기술 개발을 지속해
        나가고 있습니다.
      </section>
    </main>
  );
}
