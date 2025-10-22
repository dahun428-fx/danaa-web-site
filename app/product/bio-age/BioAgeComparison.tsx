import React from "react";
import styles from "./BioAgeComparison.module.css";

const LEGACY_POINTS = [
  "질병 발견이 주 목적 · 검사결과가 질병의 유무에만 치중",
  "일회성 검진",
  "차별화된 피드백 없음",
];

const BIOAGE_POINTS = [
  "노화도 및 노화요인 분석/평가",
  "실질적인 건강증진과 노화관리 지침을 제공 · 질병 예방 및 지속적인 피드백을 통해 효과적인 관리 가능",
];

const BENEFITS = [
  "기존 검진과의 차별성",
  "재검진율 증가",
  "추가 관리고객 확보",
];

export default function BioAgeComparison() {
  return (
    <section className={styles.section}>
      {/* 좌측: 원형 2개 + 화살표 */}
      <div className={styles.left}>
        <div className={`${styles.circle} ${styles.hollow}`}>
          <span>기존 건강검진</span>
        </div>

        <div className={styles.downArrow} aria-hidden="true" />

        <div className={`${styles.circle} ${styles.filled}`}>
          <span>
            바이오에이지
            <br />
            생체나이
            <br />
            측정시스템
          </span>
        </div>
      </div>

      {/* 우측: 컨텐츠 */}
      <div className={styles.right}>
        <ul className={styles.list}>
          {LEGACY_POINTS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.resultRow}>
          <span className={styles.badge}>결과</span>
          <span className={styles.resultText}>
            재검진, 장기고객 등 적극적인 유도가 어려움
          </span>
        </div>

        <ul className={styles.list} style={{ marginTop: "10rem" }}>
          {BIOAGE_POINTS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className={styles.benefitPanel}>
          {BENEFITS.map((b) => (
            <div key={b} className={styles.benefitItem}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="#c9ab8a"
                  strokeWidth="2"
                />
                <path
                  d="M7 12.5l3 3L17 9.8"
                  fill="none"
                  stroke="#c9ab8a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className={styles.resultRow}>
          <span className={styles.badge}>결과</span>
          <span className={styles.resultText}>
            검사결과 중 30% 이상을 차지하는 위험군(건강회색지대) 고객
            예방관리(추가확보) 가능
          </span>
        </div>

        <hr className={styles.rule} />

        <p className={styles.highlight}>
          고객 만족도 제고를 통해 경쟁력 있고 차별화 된 검진센터가 될 수
          있습니다.
        </p>

        <hr className={styles.rule} />
      </div>
    </section>
  );
}
