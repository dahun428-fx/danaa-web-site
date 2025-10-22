import React from "react";
import styles from "./HighlightBanner.module.css";

interface HighlightBannerProps {
  text: string | React.ReactNode;
  align?: "left" | "center" | "right";
  bgColor?: string; // 배경색 (기본: #a38979)
  textColor?: string; // 글자색 (기본: #fff)
  maxWidth?: string; // 최대 폭 (기본: 1200px)
}

export default function HighlightBanner({
  text,
  align = "center",
  bgColor = "#a38979",
  textColor = "#fff",
  maxWidth = "1200px",
}: HighlightBannerProps) {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        textAlign: align,
        maxWidth,
      }}
    >
      <p className={styles.text}>{text}</p>
    </section>
  );
}
