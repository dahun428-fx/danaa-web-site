import React from "react";
import Image from "next/image";
import styles from "./StepProcess.module.css";

type StepItem = {
  step: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  note?: string; // 소제목 아래 한 줄 (없으면 생략)
};

const STEPS: StepItem[] = [
  {
    step: 1,
    imageSrc: "/resources/images/sub/sub_0201_img_0301.jpg",
    imageAlt: "건강검진 현미경 검사 이미지",
    title: "건강검진",
    description:
      "설문이 아닌 종합검진, 직장 공단검진 등 실제 건강검진 결과 데이터를 바탕으로 노화와 관련된 핵심 생체 기능 7종(신체, 대사, 혈관, 심폐, 면역, 공백, 관절 기능나이)과 함께, 이를 종합한 생체나이를 측정합니다.",
  },
  {
    step: 2,
    imageSrc: "/resources/images/sub/sub_0201_img_0302.jpg",
    imageAlt: "분석 리포트 이미지",
    title: "건강상태 객관적 분석/평가",
    description: "생체나이 측정시스템을 통한 분석리포트 제공",
  },
];

export default function StepProcess() {
  return (
    <section className={styles.section}>
      {STEPS.map((s, idx) => (
        <div key={s.step} className={styles.block}>
          <div className={styles.media}>
            <Image
              src={s.imageSrc}
              alt={s.imageAlt}
              width={640}
              height={420}
              priority={idx === 0}
            />
          </div>

          <div className={styles.copy}>
            <div className={styles.badge}>STEP {s.step}</div>
            <h3 className={styles.title}>{s.title}</h3>
            {s.note && <p className={styles.note}>{s.note}</p>}
            <p className={styles.desc}>{s.description}</p>
          </div>

          {/* 단계 사이 구분 화살표 */}
          {idx < STEPS.length - 1 && (
            <div className={styles.separator} aria-hidden="true">
              <span className={styles.arrow} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
