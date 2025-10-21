"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlight?: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "세계 최초 검진 데이터 기반",
    title: "생체나이 측정 시스템",
    description:
      "실제 건강검진 데이터를 기반으로 개인의 건강 상태와 노화 정도를 정밀하게 분석합니다.",
    highlight: "BIO-AGE",
    image: "/resources/images/main_slider01.jpg",
  },
  {
    id: 2,
    eyebrow: "나의 몸은 지금 몇 살일까요?",
    title: "바이오에이지로 건강 관리 시작",
    description:
      "과학적으로 검증된 분석과 맞춤형 리포트를 통해 건강한 라이프스타일을 설계해 보세요.",
    image: "/resources/images/main_slider02.jpg",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[520px] overflow-hidden" id="top">
      <div className="relative min-h-[520px]">
        {SLIDES.map((slide, index) => (
          <article
            key={slide.id}
            className={`absolute inset-0 bg-center bg-cover flex items-center justify-center transition-opacity duration-800 ease-in-out transform ${index === activeIndex ? "opacity-100 scale-100 z-20" : "opacity-0 scale-102"}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/45 to-blue-950/55" />
            <div className="relative z-30 w-full max-w-screen-xl px-6 py-24 text-white">
              <p className="uppercase tracking-wider text-xs mb-5 opacity-85">
                {slide.eyebrow}
              </p>
              <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-tight mb-6">
                {slide.title}
                {slide.highlight ? (
                  <span className="block text-[clamp(2.8rem,5vw,4rem)] font-extrabold text-sky-400 mt-1">
                    {slide.highlight}
                  </span>
                ) : null}
              </h1>
              <p className="max-w-md text-lg font-light leading-relaxed text-white/85">
                {slide.description}
              </p>
            </div>
          </article>
        ))}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50" role="tablist" aria-label="히어로 배너">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ease-in-out ${index === activeIndex ? "bg-sky-400 scale-125" : "bg-white/40"}`}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              aria-label={`${index + 1}번째 슬라이드 보기`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

