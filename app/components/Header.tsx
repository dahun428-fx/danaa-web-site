"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      { label: "자료실", href: "/product/resources" },
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
      className="sticky top-0 z-[100] border-b border-slate-900/10 bg-white/90 backdrop-blur-[14px] backdrop-saturate-[1.8]"
      onMouseEnter={handleMegaMenuEnter}
      onMouseLeave={handleMegaMenuLeave}
    >
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[1.1rem] font-semibold text-brand-navy"
          onClick={handleNavigate}
        >
          <Image
            src="/resources/images/logo_on.png"
            alt="DANAA BIO-AGE"
            width={152}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={clsx(
                    "inline-flex items-center gap-1 text-[0.95rem] font-medium text-brand-navy transition-colors duration-300 ease-out hover:text-brand-blue",
                    isActive(item) && "font-semibold text-brand-blue"
                  )}
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
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-xl border border-slate-900/10 bg-transparent p-0 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={handleToggle}
        >
          <span className="block h-0.5 w-5 rounded-full bg-brand-navy transition-transform duration-300" />
          <span className="block h-0.5 w-5 rounded-full bg-brand-navy transition-transform duration-300" />
          <span className="block h-0.5 w-5 rounded-full bg-brand-navy transition-transform duration-300" />
        </button>
      </div>
      {isMegaMenuOpen && (
        <div className="absolute left-0 top-full hidden w-full border-t border-slate-900/10 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.1)] md:block">
          <div className="mx-auto grid w-full max-w-[1100px] gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-5">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <Link
                  href={item.href}
                  className={clsx(
                    "border-b border-slate-900/10 pb-2 text-lg font-semibold text-brand-navy transition-colors hover:text-brand-blue",
                    isActive(item) && "text-brand-blue"
                  )}
                  onClick={handleNavigate}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="flex flex-col gap-2 pt-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="text-sm text-brand-slate transition-colors hover:text-brand-blue"
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
        className={clsx(
          "hidden border-t border-slate-900/10 bg-white/95 md:hidden",
          open && "block"
        )}
      >
        <ul className="flex flex-col gap-5 px-6 pb-8 pt-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={clsx(
                  "inline-flex items-center gap-1 text-base font-medium text-brand-navy transition-colors duration-300 ease-out hover:text-brand-blue",
                  isActive(item) && "font-semibold text-brand-blue"
                )}
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
