import React from "react";
import styles from "./CommonTableSection.module.css";

type CommonTableSectionProps = {
  /** 섹션 타이틀 (예: '설립 목적') */
  heading?: string;

  /** 테이블에 표시할 항목 리스트 */
  items?: string[];
  subChildren?: React.ReactNode;
};

export default function CommonTableSection({
  heading,
  items,
  subChildren,
}: CommonTableSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {heading && <h1 className={styles.title}>{heading}</h1>}
        <table className={styles.table}>
          <tbody>
            {items &&
              items?.length > 0 &&
              items.map((text, index) => (
                <tr key={index}>
                  <td className={styles.number}>{index + 1}</td>
                  <td className={styles.text}>{text}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>{subChildren}</div>
      </div>
    </section>
  );
}
