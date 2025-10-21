"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PRODUCT_LINKS = [
  { label: "생체나이측정", href: "/product/bio-age" },
  { label: "기업건강분석", href: "/product/bizcare" },
  { label: "유전자분석", href: "/product/genopac" },
  { label: "자료실", href: "/product/resources" },
] as const;

export function ProductSubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[72px] z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm md:top-[64px]"
      aria-label="상품소개 하위 메뉴"
    >
      <div className="mx-auto w-full max-w-screen-xl flex gap-6 px-6 py-3 overflow-x-auto scrollbar-hide">
        {PRODUCT_LINKS.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative inline-flex items-center gap-1 px-0 py-2 text-base font-medium text-gray-600 whitespace-nowrap transition-colors duration-200 hover:text-sky-500 ${
                active ? "text-sky-500 font-semibold" : ""
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default ProductSubNav;
