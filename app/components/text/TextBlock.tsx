import React from "react";
import styles from "./TextBlock.module.css";

interface TextBlockProps {
  text: string;
  align?: "left" | "center" | "right";
  maxWidth?: string; // 기본값: 960px
  size?: "sm" | "md" | "lg"; // 폰트 크기 옵션
}

export default function TextBlock({
  text,
  align = "center",
  maxWidth = "960px",
  size = "md",
}: TextBlockProps) {
  return (
    <section
      className={`${styles.textBlock} ${styles[size]}`}
      style={{ textAlign: align, maxWidth }}
    >
      <p className={styles.text}>{text}</p>
    </section>
  );
}
