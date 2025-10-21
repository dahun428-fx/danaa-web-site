"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const LINKS = [
  { label: "공지사항", href: "/support/notices" },
  { label: "자주묻는질문", href: "/support/faq" },
  { label: "도입·제휴문의", href: "/support/contact" },
] as const;

export function SupportSubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-label="고객센터 하위 메뉴">
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

export default SupportSubNav;
