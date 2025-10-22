import React from "react";
import Image from "next/image";
import styles from "./ResearchIntroSection.module.css";

export default function ResearchIntroSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>대한생체나이의학연구소 소개</h1>
      <div className={styles.imageWrapper}>
        <Image
          src="/resources/images/sub/sub_0301_img_01.jpg"
          alt="대한생체나이의학연구소 소개 이미지"
          width={950}
          height={620}
          priority
        />
      </div>
      <p className={styles.paragraph}>
        세계 최초 생체나이 측정시스템을 개발하여 노화를 진단·예방함으로써
        건강하게 오래 살 수 있는 웰에이징 분야를 선도하고 있습니다.
      </p>
    </section>
  );
}
