import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./CommonIntroSection.module.css";

interface CommonIntroSectionProps {
  heading: string;
  title?: string; // HTML 포함 가능
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function CommonIntroSection({
  heading,
  title,
  paragraphs,
  imageSrc,
  imageAlt = "",
  reverse = false,
  backgroundColor = "#f9f5ef",
  children,
}: CommonIntroSectionProps) {
  const hasMedia = !!imageSrc;

  return (
    <section className={styles.introSection} style={{ backgroundColor }}>
      {/* 상단 타이틀 */}
      <div className={styles.header}>
        <span className={styles.line} />
        <h1 className={styles.heading}>{heading}</h1>
      </div>

      {/* 본문 콘텐츠 */}
      <div
        className={clsx(
          styles.content,
          reverse && styles.reverse,
          !hasMedia && styles.contentNarrow
        )}
      >
        {hasMedia && (
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc!}
              alt={imageAlt}
              width={700}
              height={460}
              priority
            />
          </div>
        )}
        {(title || children) && (
          <div className={styles.textWrapper}>
            {/* HTML이 들어올 수 있는 제목 */}
            {title && (
              <h2
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {(title || paragraphs) && <hr className={styles.divider} />}

            {children
              ? children
              : paragraphs?.map((t, i) => (
                  <p key={i} className={styles.paragraph}>
                    {t}
                  </p>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
