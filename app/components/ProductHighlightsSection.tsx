type Highlight = {
  title: string;
  description: string;
  image: string;
  accent: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "생체나이",
    description:
      "생체나이, 주요 노화 요인 분석과 함께 맞춤형 관리 가이드를 제공합니다.",
    image: "/resources/images/sec02_img01.jpg",
    accent: "linear-gradient(135deg, #ef4444, #f97316)",
  },
  {
    title: "신질환관리",
    description:
      "만성질환의 발병 가능성을 사전에 파악하고 건강 위험도를 관리합니다.",
    image: "/resources/images/sec02_img02.jpg",
    accent: "linear-gradient(135deg, #22c55e, #14b8a6)",
  },
  {
    title: "유전자검사",
    description:
      "미래 질병 위험을 예측해 집중 관리가 필요한 영역을 안내합니다.",
    image: "/resources/images/sec02_img03.jpg",
    accent: "linear-gradient(135deg, #2563eb, #6366f1)",
  },
  {
    title: "알츠하이머 검사",
    description:
      "간단한 채혈로 알츠하이머병 위험도를 예측하는 세계 최초 검사입니다.",
    image: "/resources/images/sec02_img04.jpg",
    accent: "linear-gradient(135deg, #0f172a, #4f46e5)",
  },
  {
    title: "장내미생물 검사",
    description:
      "장내 미생물 분석을 기반으로 면역과 체중 관리를 돕는 맞춤형 솔루션을 제공합니다.",
    image: "/resources/images/sec02_img05.jpg",
    accent: "linear-gradient(135deg, #0ea5e9, #818cf8)",
  },
];

export function ProductHighlightsSection() {
  return (
    <section
      className='bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.08),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.1),transparent_45%)]'
      id="solutions"
    >
      <div className="container">
        <header className="mb-12 text-center">
          <p className="mb-3 text-[0.9rem] uppercase tracking-[0.15em] text-brand-navy/60">
            헬스케어 상품 라인업
          </p>
          <h2 className="text-3xl font-bold text-brand-navy sm:text-[2.5rem]">
            개인별 맞춤 솔루션
          </h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="group relative min-h-[280px] overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
            >
              <div
                className="absolute inset-0 scale-[1.05] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
                role="presentation"
              />
              <div className="absolute inset-0 flex flex-col justify-end gap-5 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.85)_80%)] px-8 py-10 text-white sm:px-10">
                <span
                  className="inline-flex h-1 w-12 rounded-full"
                  style={{ backgroundImage: item.accent }}
                />
                <h3 className="text-[1.8rem] font-bold">{item.title}</h3>
                <p className="text-base leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductHighlightsSection;
