import React from "react";
import styles from "./PageTitle.module.css";

interface PageTitleProps {
  title: string;
  subtitle?: string; // 선택적으로 부제목도 추가 가능
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <section className={styles.intro}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}
