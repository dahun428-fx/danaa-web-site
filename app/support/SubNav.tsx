"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "공지사항", href: "/support/notices" },
  { label: "자주묻는질문", href: "/support/faq" },
  { label: "도입·제휴문의", href: "/support/contact" },
] as const;

export function SupportSubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[72px] z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm md:top-[64px]"
      aria-label="고객센터 하위 메뉴"
    >
      <div className="mx-auto w-full max-w-screen-xl flex gap-6 px-6 py-3 overflow-x-auto scrollbar-hide">
        {LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-flex items-center gap-1 px-0 py-2 text-base font-medium text-gray-600 whitespace-nowrap transition-colors duration-200 hover:text-emerald-600 ${
                active ? "text-emerald-600 font-semibold" : ""
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default SupportSubNav;
