"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const PRODUCT_LINKS = [
  { label: "생체나이측정", href: "/product/bio-age" },
  { label: "기업건강분석", href: "/product/bizcare" },
  { label: "유전자분석", href: "/product/genopac" },
  { label: "자료실", href: "/product/resources" },
] as const;

export function ProductSubNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.subnav} aria-label="상품소개 하위 메뉴">
      <div className={styles.subnavInner}>
        {PRODUCT_LINKS.map((link) => {
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

export default ProductSubNav;
