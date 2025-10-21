"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../company/layout.module.css";

const LINKS = [
  { label: "연구소 소개", href: "/research/overview" },
  { label: "연구소 연혁", href: "/research/history" },
  { label: "연구소 조직", href: "/research/organization" },
  { label: "관련사이트", href: "/research/links" },
] as const;

export function ResearchSubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-label="연구개발 하위 메뉴">
      <div className={styles.subnavInner}>
        {LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default ResearchSubNav;
