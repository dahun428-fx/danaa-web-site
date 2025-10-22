import React from "react";
import styles from "./CheckListGrid.module.css";

type Item = {
  text: string;
  subtext?: string; // 괄호 설명 등 추가 라인
};

type CheckListGridProps = {
  items: Item[];
};

export default function CheckListGrid({ items }: CheckListGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((it, i) => (
          <article key={i} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="none"
                  stroke="#c9ab8a"
                  strokeWidth="2"
                />
                <path
                  d="M7 12.5l3.2 3.2L17 9.9"
                  fill="none"
                  stroke="#c9ab8a"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className={styles.texts}>
              <div className={styles.text}>{it.text}</div>
              {it.subtext && <div className={styles.subtext}>{it.subtext}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
