"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

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
    <section className={styles.section} id="top">
      <div className={styles.slider}>
        {SLIDES.map((slide, index) => (
          <article
            key={slide.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <p className={styles.eyebrow}>{slide.eyebrow}</p>
              <h1 className={styles.title}>
                {slide.title}
                {slide.highlight ? (
                  <span className={styles.highlight}>{slide.highlight}</span>
                ) : null}
              </h1>
              <p className={styles.description}>{slide.description}</p>
            </div>
          </article>
        ))}
        <div className={styles.dots} role="tablist" aria-label="히어로 배너">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`${styles.dot} ${
                index === activeIndex ? styles.dotActive : ""
              }`}
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
