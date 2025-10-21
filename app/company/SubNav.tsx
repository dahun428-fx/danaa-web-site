"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav
      className="sticky top-[72px] z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm md:top-[64px]"
      aria-label="회사소개 하위 메뉴"
    >
      <div className="mx-auto w-full max-w-screen-xl flex gap-6 px-6 py-3 overflow-x-auto scrollbar-hide">
        {COMPANY_LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-flex items-center gap-1 px-0 py-2 text-base font-medium text-gray-600 whitespace-nowrap transition-colors duration-200 hover:text-blue-600 ${
                active ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default CompanySubNav;
