"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const COMPANY_LINKS = [
  { label: "인사말", href: "/company/intro" },
  { label: "비전", href: "/company/vision" },
  { label: "연혁", href: "/company/history" },
  { label: "조직/인력", href: "/company/organization" },
  { label: "오시는 길", href: "/company/location" },
] as const;

export function CompanySubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-label="회사소개 하위 메뉴">
      <div className={styles.subnavInner}>
        {COMPANY_LINKS.map((link) => {
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

export default CompanySubNav;
