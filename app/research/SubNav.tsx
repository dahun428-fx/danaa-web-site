"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "연구소 소개", href: "/research/overview" },
  { label: "연구소 연혁", href: "/research/history" },
  { label: "연구소 조직", href: "/research/organization" },
  { label: "관련사이트", href: "/research/links" },
] as const;

export function ResearchSubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[72px] z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm md:top-[64px]"
      aria-label="연구개발 하위 메뉴"
    >
      <div className="mx-auto w-full max-w-screen-xl flex gap-6 px-6 py-3 overflow-x-auto scrollbar-hide">
        {LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-flex items-center gap-1 px-0 py-2 text-base font-medium text-gray-600 whitespace-nowrap transition-colors duration-200 hover:text-blue-700 ${
                active ? "text-blue-700 font-semibold" : ""
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default ResearchSubNav;
