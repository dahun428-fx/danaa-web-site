"use client";

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
      className="sticky top-0 z-50 bg-white/90 border-b border-gray-100 backdrop-blur-sm"
      onMouseEnter={handleMegaMenuEnter}
      onMouseLeave={handleMegaMenuLeave}
    >
      <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between px-4 py-4 gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900" onClick={handleNavigate}>
          <Image
            src="/resources/images/logo_on.png"
            alt="DANAA BIO-AGE"
            width={152}
            height={32}
            priority
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-base font-medium text-gray-900 transition-colors duration-300 hover:text-blue-600 ${
                    isActive(item) ? "text-blue-600 font-semibold" : ""
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
          className="md:hidden w-11 h-11 flex items-center justify-center flex-col gap-1.5 bg-transparent border border-gray-200 rounded-xl p-0 cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={handleToggle}
        >
          <span className="block w-5 h-0.5 bg-gray-900 rounded-full transition-transform duration-300 ease-in-out" />
          <span className="block w-5 h-0.5 bg-gray-900 rounded-full transition-transform duration-300 ease-in-out" />
          <span className="block w-5 h-0.5 bg-gray-900 rounded-full transition-transform duration-300 ease-in-out" />
        </button>
      </div>
      {isMegaMenuOpen && (
        <div className="absolute left-0 w-full bg-white border-t border-gray-100 shadow-lg py-6 z-40 opacity-100 visible transform translate-y-0 transition-all duration-300 ease-in-out">
          <div className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <Link
                  href={item.href}
                  className={`text-base font-semibold text-gray-900 pb-2 border-b border-gray-100 ${
                    isActive(item) ? "text-blue-600" : ""
                  }`}
                  onClick={handleNavigate}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="list-none m-0 p-0 flex flex-col gap-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          href={subItem.href}
                          className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
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
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center flex-col gap-1.5 bg-transparent border border-gray-200 rounded-xl p-0 cursor-pointer"
            aria-label="메뉴 닫기"
            onClick={handleToggle}
          >
            <span className="block w-5 h-0.5 bg-gray-900 rounded-full transform rotate-45 translate-y-1.5" />
            <span className="block w-5 h-0.5 bg-gray-900 rounded-full transform -rotate-45 -translate-y-1.5" />
          </button>
        </div>
        <ul className="list-none m-0 p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`text-lg font-medium text-gray-900 ${
                  isActive(item) ? "text-blue-600" : ""
                }`}
                onClick={handleNavigate}
              >
                {item.label}
              </Link>
              {item.subItems && (
                <ul className="list-none m-0 p-0 pl-4 mt-2 flex flex-col gap-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link
                        href={subItem.href}
                        className="text-base text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        onClick={handleNavigate}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
