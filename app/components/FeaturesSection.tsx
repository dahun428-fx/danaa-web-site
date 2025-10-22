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
    <section
      className="relative mx-4 -mt-16 rounded-[32px] bg-white px-6 py-16 shadow-[0_40px_80px_rgba(15,23,42,0.08)] sm:mx-auto sm:max-w-[1100px] sm:px-10 lg:px-12"
      id="benefits"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-12 text-center">
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.12em] text-brand-blue">
            다나아데이터 생체나이
          </p>
          <h2 className="text-3xl font-bold text-brand-navy sm:text-[2.4rem]">
            이런 점이 좋습니다
          </h2>
        </header>
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col overflow-hidden rounded-[24px] border border-brand-navy/10 bg-[linear-gradient(180deg,rgba(37,99,235,0.06)_0%,rgba(15,23,42,0)_60%)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)]"
            >
              <div
                className="w-full pt-[70%]"
                style={{ backgroundImage: `url(${feature.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                role="img"
                aria-label={feature.title}
              />
              <div className="flex flex-col gap-4 px-6 pb-8 pt-7">
                <h3 className="text-xl font-semibold text-brand-navy">
                  {feature.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-brand-navy/75">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
