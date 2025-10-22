import React from "react";
import Image from "next/image";
import styles from "./FeatureSplitList.module.css";

type Item = {
  step: string;
  title: string;
  description: string;
  image: { src: string; alt: string; width?: number; height?: number };
  imageFirst?: boolean; // true면 이미지 '왼쪽'
};

type FeatureSplitListProps = { items: Item[] };

export default function FeatureSplitList({ items }: FeatureSplitListProps) {
  return (
    <section className={styles.section}>
      {items.map((it, idx) => {
        // true면 이미지가 왼쪽, false면 오른쪽 (지정 안 하면 1,3,5…는 왼쪽)
        const imageLeft = it.imageFirst ?? idx % 2 === 0;

        return (
          <article
            key={`${it.step}-${it.title}`}
            className={styles.block}
            data-image-left={imageLeft}
          >
            <div className={styles.media}>
              <Image
                src={it.image.src}
                alt={it.image.alt}
                width={it.image.width ?? 720}
                height={it.image.height ?? 480}
                className={styles.img}
                priority={idx === 0}
                // 🔑 반응형 사이즈 힌트: 980px 이하는 100vw, 그 이상은 50vw
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>

            <div className={styles.copy}>
              <div className={styles.badge}>{it.step}</div>
              <h3 className={styles.title}>
                <span className={styles.rule} aria-hidden="true" />
                {it.title}
                <span className={styles.rule} aria-hidden="true" />
              </h3>
              <p className={styles.desc}>{it.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
