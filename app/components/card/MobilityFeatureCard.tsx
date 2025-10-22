import React from "react";
import Image from "next/image";
import styles from "./MobilityFeatureCard.module.css";

type MobilityFeatureCardProps = {
  /** 상단 이미지 */
  imageSrc?: string;
  imageAlt?: string;

  /** 카드 중앙 타이틀 (예: 가동성 운동) */
  title: string;

  /** 하단 설명 (줄바꿈 가능) */
  description: string | string[];
};

export default function MobilityFeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: MobilityFeatureCardProps) {
  const lines = Array.isArray(description)
    ? description
    : String(description).split("\n");

  return (
    <article className={styles.card}>
      {/* 이미지 */}
      {imageSrc && (
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            width={400}
            height={520}
            className={styles.image}
            priority
          />
        </div>
      )}

      {/* 타이틀 */}
      <div className={styles.titleWrap}>
        <span className={styles.rule} />
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.rule} />
      </div>

      {/* 설명 */}
      <div className={styles.desc}>
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </article>
  );
}
