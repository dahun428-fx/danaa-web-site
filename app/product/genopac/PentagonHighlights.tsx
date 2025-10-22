import React from "react";
import styles from "./PentagonHighlights.module.css";

type Item = {
  no: string; // "01", "02", ...
  title: string; // 줄바꿈은 \n
};

type Props = {
  items: Item[];
};

export default function PentagonHighlights({ items }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((it) => (
          <article key={it.no} className={styles.card}>
            <Pentagon className={styles.pentagon} />
            <div className={styles.center}>
              <span className={styles.no}>{it.no}</span>
              <span className={styles.sep}>|</span>
              <h3 className={styles.title}>
                {it.title.split("\n").map((l, i) => (
                  <span key={i} className={styles.line}>
                    {l}
                  </span>
                ))}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** 외곽선 오각형 SVG */
function Pentagon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 220" aria-hidden="true">
      <path
        d="M120 8 L228 88 L188 208 L52 208 L12 88 Z"
        fill="#fff"
        stroke="#E7DBCF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
