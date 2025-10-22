import React from "react";
import styles from "./SevenBioAges.module.css";

export type BioAgeItem = {
  no: string; // "01" ~ "07"
  title: string; // 예: "신체나이"
  desc: string; // 설명
  image: string; // 배경 이미지 경로
  alt?: string;
};

type SevenBioAgesProps = {
  items: BioAgeItem[];
  /** 마지막 카드가 단독으로 남을 때 가운데 정렬 (스크린샷처럼) */
  centerLast?: boolean;
};

export default function SevenBioAges({
  items,
  centerLast = true,
}: SevenBioAgesProps) {
  const shouldCenterLast = centerLast && items.length % 3 === 1;

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((it, idx) => (
          <article
            key={it.no + it.title}
            className={`${styles.card} ${
              shouldCenterLast && idx === items.length - 1
                ? styles.centerLast
                : ""
            }`}
            style={{ backgroundImage: `url(${it.image})` }}
            aria-label={it.alt || it.title}
            role="img"
          >
            <div className={styles.overlay} />
            <div className={styles.center}>
              <div className={styles.no}>{it.no}</div>
              <h3 className={styles.title}>{it.title}</h3>
              <p className={styles.desc}>{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
