import React from "react";
import Image from "next/image";
import styles from "./CenteredImageWithText.module.css";

interface CenteredImageWithTextProps {
  src: string;
  alt: string;
  text: string;
  width?: number;
  height?: number;
}

export default function CenteredImageWithText({
  src,
  alt,
  text,
  width = 150,
  height = 150,
}: CenteredImageWithTextProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageBox}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
      <p className={styles.caption}>{text}</p>
    </div>
  );
}
