"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

type NavItem = { label: string; href: string; match?: string };

const NAV_ITEMS: NavItem[] = [
  { label: "회사소개", href: "/company/intro", match: "/company" },
  { label: "상품소개", href: "/product/bio-age", match: "/product" },
  { label: "연구개발", href: "/research/overview", match: "/research" },
  { label: "고객센터", href: "/support/notices", match: "/support" },
  { label: "PR센터", href: "/pr/news", match: "/pr" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = NAV_ITEMS;

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavigate = () => setOpen(false);

  const isActive = (item: NavItem) => {
    const target = item.match ?? item.href;
    return pathname.startsWith(target);
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={handleNavigate}>
          <Image
            src="/resources/images/logo_on.png"
            alt="DANAA BIO-AGE"
            width={152}
            height={32}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    isActive(item) ? styles.active : ""
                  }`}
                  onClick={handleNavigate}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={styles.mobileToggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={handleToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`${styles.link} ${
                  isActive(item) ? styles.active : ""
                }`}
                onClick={handleNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
