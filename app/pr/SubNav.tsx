"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const LINKS = [
  { label: "보도자료", href: "/pr/news" },
  { label: "건강매거진", href: "/pr/magazine" },
  { label: "CI 매뉴얼", href: "/pr/ci" },
] as const;

export function PrSubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-label="PR센터 하위 메뉴">
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

export default PrSubNav;
