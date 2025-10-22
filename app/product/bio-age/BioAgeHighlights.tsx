import React from "react";
import styles from "./BioAgeHighlights.module.css";

type Item = {
  no: string; // 01, 02, 03
  title: string; // 오각형 안의 제목(줄바꿈 포함 가능)
  desc: string; // 아래 설명
};

const ITEMS: Item[] = [
  {
    no: "01",
    title: "7종의\n기능나이 분석",
    desc: "건강검진결과를 토대로 종합신체나이를 포함한 7종의 기능 나이를 과학적으로 분석합니다.",
  },
  {
    no: "02",
    title: "개인건강상태에\n기초한 분석",
    desc: "분석된 데이터를 바탕으로 개인건강상태에 기초한 건강증진, 질병 예방, 노화방지를 위한 생활습관 개선프로그램을 제공합니다.",
  },
  {
    no: "03",
    title: "개선정도 및 3년간의\n노화속도 분석",
    desc: "건강검진 데이터에 따른 개인의 생체나이 개선 정도와 3년간의 노화속도 변화를 통한 건강관리가 가능합니다.",
  },
];

export default function BioAgeHighlights() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {ITEMS.map((it) => (
          <article key={it.no} className={styles.card}>
            <Pentagon className={styles.pentagon} />
            <div className={styles.inner}>
              <span className={styles.no}>{it.no}</span>
              <span className={styles.sep}>|</span>
              <h3 className={styles.title}>
                {it.title.split("\n").map((line, i) => (
                  <span key={i} className={styles.breakLine}>
                    {line}
                  </span>
                ))}
              </h3>
            </div>
            <p className={styles.desc}>{it.desc}</p>
          </article>
        ))}
      </div>

      <div className={styles.banner}>
        <p>
          알고리즘을 통해 개인의 실제 검진 데이터를 분석하여, 생체나이 및
          노화속도를 측정하고, 이에 따른 영양/운동/스트레스 관리 가이드를
          제공합니다.
        </p>
      </div>
    </section>
  );
}

/** 베이지 외곽선 오각형 (SVG) */
function Pentagon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 220"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M120 8 L228 88 L188 208 L52 208 L12 88 Z"
        fill="none"
        stroke="#E7DBCF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
