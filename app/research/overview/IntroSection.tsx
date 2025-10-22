import React from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./IntroSection.module.css";

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      {/* 타이틀 영역 */}
      <div className={styles.header}>
        <span className={styles.line} />
        <h1 className={styles.heading}>설립 목표</h1>
      </div>

      {/* 본문 영역 */}
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src="/resources/images/sub/sub_0301_img_02.jpg"
            alt="대한생체나이의학연구소 연구원들"
            width={700}
            height={460}
            priority
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            웰에이징을 목표로
            <br />
            사회에 공헌하겠습니다.
          </h2>
          <hr className={styles.divider} />
          <p className={styles.paragraph}>
            100세 시대! 모든 사람들이 질병 없이 건강하게 오래 살 수 있도록
            <br />
            노화의 과학적 접근 및 임상 연구를 바탕으로 의학 발전과 의료산업
            발전에 기여하고자 합니다.
          </p>
          <p className={styles.paragraph}>
            노화방지의학의 발전은 개인의 삶의 질 향상과 국가의료비용 절감을 통한
            복지혜택 확대로 개인뿐만 아니라 국가발전에도 기여합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
