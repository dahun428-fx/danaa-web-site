import React from "react";
import styles from "./BioAgeDefinition.module.css";

interface BioAgeDefinitionSimpleProps {
  title?: string; // 기본값: '생체나이란?'
  children?: React.ReactNode; // 이미지 등을 직접 넣을 수 있게
  description: string; // 하단 설명 텍스트
}

export default function BioAgeDefinition({
  title = "생체나이란?",
  children,
  description,
}: BioAgeDefinitionSimpleProps) {
  return (
    <section className={styles.section}>
      <div className={styles.badge}>{title}</div>
      <div className={styles.imageArea}>{children}</div>
      <p className={styles.caption}>{description}</p>
    </section>
  );
}
