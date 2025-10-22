"use client";

import React, { useId, useState, useRef, useMemo } from "react";
import styles from "./Tabs.module.css";
type TabProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

type TabsProps = {
  children: React.ReactElement<TabProps>[];
  initialId?: string;
};

export default function Tabs({ children, initialId }: TabsProps) {
  const tabElements = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];
  const baseId = useId();
  const [active, setActive] = useState<string>(
    initialId ?? tabElements[0].props.id
  );
  const listRef = useRef<HTMLDivElement>(null);

  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        tabElements.findIndex((t) => t.props.id === active)
      ),
    [tabElements, active]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    let next = activeIndex;
    if (e.key === "ArrowRight") next = (activeIndex + 1) % tabElements.length;
    if (e.key === "ArrowLeft")
      next = (activeIndex - 1 + tabElements.length) % tabElements.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabElements.length - 1;
    const id = tabElements[next].props.id;
    setActive(id);
    const btn = listRef.current?.querySelector<HTMLButtonElement>(
      `button[data-id="${id}"]`
    );
    btn?.focus();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.tablist}
        role="tablist"
        aria-label="탭 선택"
        onKeyDown={onKeyDown}
        ref={listRef}
      >
        {tabElements.map((tab) => {
          const selected = tab.props.id === active;
          return (
            <button
              key={tab.props.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.props.id}`}
              id={`${baseId}-tab-${tab.props.id}`}
              data-id={tab.props.id}
              className={styles.tab}
              data-active={selected}
              onClick={() => setActive(tab.props.id)}
              tabIndex={selected ? 0 : -1}
            >
              {tab.props.label}
            </button>
          );
        })}
      </div>

      {tabElements.map((tab) => (
        <div
          key={tab.props.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.props.id}`}
          aria-labelledby={`${baseId}-tab-${tab.props.id}`}
          hidden={tab.props.id !== active}
          className={styles.panel}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  );
}
