"use client";

import clsx from "clsx";
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
    title: "다나아데이터로 건강 관리 시작",
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
    <section className="relative min-h-[520px] overflow-hidden px-0 py-0" id="top">
      <div className="relative min-h-[520px] overflow-hidden">
        {SLIDES.map((slide, index) => (
          <article
            key={slide.id}
            className={clsx(
              "absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-0 transition-all duration-700 ease-out",
              "scale-[1.02]",
              index === activeIndex && "z-[2] scale-100 opacity-100"
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          >
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(11,33,79,0.7)_0%,rgba(25,58,108,0.45)_35%,rgba(5,15,34,0.55)_100%)]" />
            <div className="relative z-[3] mx-auto w-full max-w-[1100px] px-6 py-20 text-white sm:py-24 lg:py-28">
              <p className="mb-5 text-[0.8rem] uppercase tracking-[0.2em] text-white/80">
                {slide.eyebrow}
              </p>
              <h1 className="text-[2.5rem] font-bold leading-tight sm:text-[3rem] lg:text-[3.5rem]">
                {slide.title}
                {slide.highlight ? (
                  <span className="mt-1 block text-[2.8rem] font-extrabold text-brand-cyan sm:text-[3.4rem] lg:text-[4rem]">
                    {slide.highlight}
                  </span>
                ) : null}
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/85">
                {slide.description}
              </p>
            </div>
          </article>
        ))}
        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3 sm:bottom-10"
          role="tablist"
          aria-label="히어로 배너"
        >
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={clsx(
                "h-3 w-3 rounded-full bg-white/40 transition-transform duration-300",
                index === activeIndex && "scale-110 bg-brand-cyan"
              )}
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
