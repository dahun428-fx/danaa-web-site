import React from "react";
import styles from "./FoundationPurpose.module.css";

const PURPOSE_LIST = [
  "과학적이며, 임상적으로 쉽게 접근할 수 있는 노화 측정시스템의 개발",
  "노화 및 건강증진을 위한 기술 개발 및 산업 발전에 기여",
  "국제 학술교류를 통해 선진 의료기술 수용",
  "산학협동을 통한 연구 및 제품 개발",
];

export default function FoundationPurpose() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>설립 목적</h1>
        <table className={styles.table}>
          <tbody>
            {PURPOSE_LIST.map((text, index) => (
              <tr key={index}>
                <td className={styles.number}>{index + 1}</td>
                <td className={styles.text}>{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
