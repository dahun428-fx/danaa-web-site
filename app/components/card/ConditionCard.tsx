import React from "react";
import Image from "next/image";
import styles from "./ConditionCard.module.css";

type ConditionCardProps = {
  /** 상단 아이콘 */
  iconSrc: string;
  iconAlt: string;
  iconWidth?: number; // 기본 64
  iconHeight?: number; // 기본 64
  /** 카드 제목 */
  title: string;
  /** 점 목록(문장 단위) */
  items: string[];
};

export default function ConditionCard({
  iconSrc,
  iconAlt,
  iconWidth = 64,
  iconHeight = 64,
  title,
  items,
}: ConditionCardProps) {
  return (
    <article className={styles.card}>
      {/* 아이콘 + 타이틀 영역 */}
      <div className={styles.header}>
        <div className={styles.icon}>
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconWidth}
            height={iconHeight}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>

      {/* 본문 리스트 */}
      <ul className={styles.list}>
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </article>
  );
}
