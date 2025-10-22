"use client";

import clsx from "clsx";
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
      className="sticky top-[64px] z-[90] border-b border-slate-900/10 bg-white/90 backdrop-blur-[14px] backdrop-saturate-[1.8] md:top-[65px]"
      aria-label="회사소개 하위 메뉴"
    >
      <div className="mx-auto flex w-full max-w-[1100px] justify-center gap-6 overflow-x-auto px-6 py-3 no-scrollbar">
        {COMPANY_LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-[0.95rem] font-medium text-brand-navy/65 transition-colors hover:text-brand-blue",
                active && "font-semibold text-brand-blue after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:rounded-full after:bg-brand-blue"
              )}
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
