import React from "react";
import styles from "./StepsBanner.module.css";

type Step = {
  no: string; // "01"
  title: string; // "건강(종합)검진 실시"
  image: string; // 배경이미지 경로
  alt: string;
};

const STEPS: Step[] = [
  {
    no: "01",
    title: "건강(종합)검진 실시",
    image: "/resources/images/sub/sub_0201_img_0303.jpg",
    alt: "건강검진 장면",
  },
  {
    no: "02",
    title: "생체나이 측정 신청",
    image: "/resources/images/sub/sub_0201_img_0304.jpg",
    alt: "채혈 장면",
  },
  {
    no: "03",
    title: "분석 리포트 수령",
    image: "/resources/images/sub/sub_0201_img_0305.jpg",
    alt: "분석 리포트",
  },
];

export default function StepsBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {STEPS.map((s) => (
          <div
            key={s.no}
            className={styles.card}
            aria-label={`${s.no} ${s.title}`}
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <span className="sr-only">{s.alt}</span>
            <div className={styles.overlay} />
            <div className={styles.center}>
              <strong className={styles.no}>{s.no}</strong>
              <span className={styles.title}>{s.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
