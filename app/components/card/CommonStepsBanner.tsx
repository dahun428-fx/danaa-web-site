import React from "react";
import styles from "./CommonStepsBanner.module.css";

export type StepItem = {
  no: string; // "01"
  title: string | React.ReactNode; // "건강(종합)검진 실시"
  image: string; // 배경 이미지 경로
  alt?: string; // 시각장애인용 대체텍스트
  href?: string; // (선택) 링크
};

type CommonStepsBannerProps = {
  steps: StepItem[];
  /** 그리드 열 수 (기본 3) */
  columns?: 1 | 2 | 3 | 4;
  /** 카드 높이 (css 단위 포함, 기본 260px) */
  cardHeight?: string;
  /** 오버레이 불투명도(0~1, 기본 0.45) */
  overlayOpacity?: number;
  /** 카드 클릭 핸들러 (href보다 우선) */
  onCardClick?: (step: StepItem, index: number) => void;
  /** 섹션의 최대 폭 (기본 1200px) */
  maxWidth?: string;
};

export default function CommonStepsBanner({
  steps,
  columns = 3,
  cardHeight = "260px",
  overlayOpacity = 0.45,
  onCardClick,
  maxWidth = "1200px",
}: CommonStepsBannerProps) {
  return (
    <section className={styles.section} style={{ ["--mw" as any]: maxWidth }}>
      <div className={styles.grid} data-cols={columns}>
        {steps.map((s, i) => {
          const content = (
            <>
              <span className="sr-only">{s.alt || s.title}</span>
              <div
                className={styles.overlay}
                style={{ ["--op" as any]: overlayOpacity }}
              />
              <div className={styles.center}>
                <strong className={styles.no}>{s.no}</strong>
                <span className={styles.title}>{s.title}</span>
              </div>
            </>
          );

          const style = {
            backgroundImage: `url(${s.image})`,
            ["--h" as any]: cardHeight,
          };

          if (onCardClick || s.href) {
            return (
              <a
                key={`${s.no}-${s.title}`}
                className={styles.card}
                style={style}
                href={onCardClick ? undefined : s.href}
                onClick={
                  onCardClick
                    ? (e) => {
                        e.preventDefault();
                        onCardClick(s, i);
                      }
                    : undefined
                }
                aria-label={`${s.no} ${s.title}`}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={`${s.no}-${s.title}`}
              className={styles.card}
              style={style}
              aria-label={`${s.no} ${s.title}`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
