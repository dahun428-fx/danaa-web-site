"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

type NavItem = {
  label: string;
  href: string;
  match?: string;
  subItems?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "회사소개",
    href: "/company/intro",
    match: "/company",
    subItems: [
      { label: "인사말", href: "/company/intro" },
      { label: "비전", href: "/company/vision" },
      { label: "연혁", href: "/company/history" },
      { label: "조직/인력", href: "/company/organization" },
      { label: "오시는 길", href: "/company/location" },
    ],
  },
  {
    label: "상품소개",
    href: "/product/bio-age",
    match: "/product",
    subItems: [
      { label: "생체나이측정", href: "/product/bio-age" },
      { label: "기업건강분석", href: "/product/bizcare" },
      { label: "유전자분석", href: "/product/genopac" },
      // { label: "자료실", href: "/product/resources" },
    ],
  },
  {
    label: "연구개발",
    href: "/research/overview",
    match: "/research",
    subItems: [
      { label: "연구소 소개", href: "/research/overview" },
      { label: "연구소 연혁", href: "/research/history" },
      { label: "연구소 조직", href: "/research/organization" },
      { label: "관련사이트", href: "/research/links" },
    ],
  },
  {
    label: "고객센터",
    href: "/support/notices",
    match: "/support",
    subItems: [
      { label: "공지사항", href: "/support/notices" },
      { label: "자주묻는질문", href: "/support/faq" },
      { label: "도입·제휴문의", href: "/support/contact" },
    ],
  },
  {
    label: "PR센터",
    href: "/pr/news",
    match: "/pr",
    subItems: [
      { label: "보도자료", href: "/pr/news" },
      { label: "건강매거진", href: "/pr/magazine" },
      { label: "CI 매뉴얼", href: "/pr/ci" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State for mega menu visibility
  const pathname = usePathname();

  const navItems = NAV_ITEMS;

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavigate = () => {
    setOpen(false);
    setIsMegaMenuOpen(false); // Close mega menu on navigation
  };

  const handleMegaMenuEnter = () => setIsMegaMenuOpen(true);
  const handleMegaMenuLeave = () => setIsMegaMenuOpen(false);

  const isActive = (item: NavItem) => {
    const target = item.match ?? item.href;
    return pathname.startsWith(target);
  };

  return (
    <header
      className={styles.wrapper}
      onMouseEnter={handleMegaMenuEnter}
      onMouseLeave={handleMegaMenuLeave}
    >
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
      {isMegaMenuOpen && (
        <div className={styles.megaMenu}>
          <div className={styles.megaMenuInner}>
            {navItems.map((item) => (
              <div key={item.label} className={styles.megaMenuItem}>
                <Link
                  href={item.href}
                  className={`${styles.megaMenuMainLink} ${
                    isActive(item) ? styles.active : ""
                  }`}
                  onClick={handleNavigate}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className={styles.megaMenuSubList}>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className={styles.megaMenuSubLink}
                          onClick={handleNavigate}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
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
