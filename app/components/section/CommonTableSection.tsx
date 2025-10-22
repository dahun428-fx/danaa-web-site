import React from "react";
import styles from "./CommonTableSection.module.css";

type CommonTableSectionProps = {
  heading?: string;
  items?: string[];
  subChildren?: React.ReactNode;
  isCheckIcon?: boolean;
};

export default function CommonTableSection({
  heading,
  items,
  subChildren,
  isCheckIcon = false,
}: CommonTableSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {heading && <h1 className={styles.title}>{heading}</h1>}

        <table className={styles.table}>
          <tbody>
            {items?.map((text, index) => (
              <tr key={index}>
                <td className={styles.number}>{index + 1}</td>
                <td className={styles.text}>{text}</td>
                {isCheckIcon && (
                  <td className={styles.iconCell}>
                    <CheckIcon className={styles.checkIcon} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {subChildren && <>{subChildren}</>}
      </div>
    </section>
  );
}

/** 체크 아이콘 (SVG) */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="4 10 8 14 16 6" />
    </svg>
  );
}
