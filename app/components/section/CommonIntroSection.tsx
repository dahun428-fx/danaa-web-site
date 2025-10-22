import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./CommonIntroSection.module.css";

interface CommonIntroSectionProps {
  heading?: string | React.ReactNode;
  subHeading?: string | React.ReactNode;
  title?: string; // HTML 포함 가능
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  backgroundColor?: string;
  topChildren?: React.ReactNode;
  children?: React.ReactNode;
  subChildren?: React.ReactNode;
  isLine?: boolean;
  onlyParagraphs?: boolean;
  backgroundImageSrc?: string;
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
  topChildren,
  subChildren,
  isLine = true,
  onlyParagraphs = false,
  subHeading,
  backgroundImageSrc,
}: CommonIntroSectionProps) {
  const hasMedia = !!imageSrc;

  const text = () => {
    if (onlyParagraphs) {
      return (
        <div className={styles.textWrapper}>
          {paragraphs?.map((t, i) => (
            <p key={i} className={styles.paragraph}>
              {t}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <>
          {title || children ? (
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
          ) : null}
        </>
      );
    }
  };

  return (
    <section
      className={styles.introSection}
      style={{
        backgroundColor,
        backgroundImage: backgroundImageSrc
          ? `url(${backgroundImageSrc})`
          : undefined,
      }}
    >
      {/* 상단 타이틀 */}
      {isLine && <span className={styles.line} />}

      {subHeading && (
        <div className={styles.subHeading}>
          <p>{subHeading}</p>
        </div>
      )}
      {heading && (
        <div className={styles.header}>
          <h1 className={styles.heading}>{heading}</h1>
        </div>
      )}
      {/* 상단 추가 콘텐츠 */}
      {topChildren && topChildren}

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

        {text()}
      </div>
      {subChildren && subChildren}
    </section>
  );
}
