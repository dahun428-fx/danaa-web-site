import React from "react";
import styles from "./ConditionCardGrid.module.css";

export default function ConditionCardGrid({
  children,
  columns = 2,
}: React.PropsWithChildren<{ columns?: 1 | 2 | 3 }>) {
  return (
    <div className={styles.grid} data-cols={columns} role="list">
      {children}
    </div>
  );
}
