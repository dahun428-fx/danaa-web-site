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
      className="bg-white rounded-3xl w-[calc(100%-3rem)] mx-auto -mt-16 p-12 shadow-xl md:w-[calc(100%-2rem)] md:p-6 lg:grid-cols-2 lg:gap-6"
      id="benefits"
    >
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <p className="text-sm tracking-wider uppercase text-blue-600 mb-3">
            바이오에이지 생체나이
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            이런 점이 좋습니다
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-blue-600/10 to-transparent border border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div
                className="w-full pt-[70%] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${feature.image})` }}
                role="img"
                aria-label={feature.title}
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
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
