import React from "react";
import styles from "./PentagonProcess.module.css";

type Step = {
  no: string; // "01"
  title: string; // 오각형 안의 제목 (줄바꿈은 \n)
  caption: string; // 오각형 아래 설명
};

type Props = {
  steps?: Step[];
  middleNote?: string; // 중앙 콜아웃 텍스트
  footerNote?: string; // 하단 배너 텍스트
};

const DEFAULT_STEPS: Step[] = [
  { no: "01", title: "계약", caption: "생체나이 측정시스템 사용 계약" },
  {
    no: "02",
    title: "환자등록&\n검사결과 값 입력",
    caption:
      "자동으로 기존 검사결과 입력수치를 통하여 BIO-AGE가 계산될 수 있는 프로그램 환경구축",
  },
  {
    no: "03",
    title: "생체나이 출력",
    caption: "내부 시스템에 최적화 시킨 프로그램으로 사용 효율성 최대화",
  },
];

export default function PentagonProcess({
  steps = DEFAULT_STEPS,
  middleNote = "사용자 요구 사항을 최대한 반영한 전용 프로그램 세팅",
  footerNote = "기존 시스템에서의 부가 작업 없이 결과물을 출력할 수 있는 시스템 구축",
}: Props) {
  return (
    <section className={styles.section}>
      {/* 3개 스텝 */}
      <div className={styles.row}>
        {steps.map((s, i) => (
          <div key={s.no} className={styles.col}>
            <Pentagon className={styles.pentagon} />
            <div className={styles.centerInside}>
              <span className={styles.no}>{s.no}</span>
              <span className={styles.sep}>|</span>
              <h3 className={styles.title}>
                {s.title.split("\n").map((t, idx) => (
                  <span key={idx} className={styles.ln}>
                    {t}
                  </span>
                ))}
              </h3>
            </div>
            <p className={styles.caption}>{s.caption}</p>

            {/* 가운데 화살표 */}
            {i < steps.length - 1 && (
              <div className={styles.arrow} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* 중앙 콜아웃 + 가이드 라인 */}
      <div className={styles.middleWrap}>
        <div className={styles.middleBox}>{middleNote}</div>
      </div>

      {/* 하단 배너 */}
      <div className={styles.footer}>{footerNote}</div>
    </section>
  );
}

/** 외곽선 오각형 SVG */
function Pentagon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 220" aria-hidden="true">
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
