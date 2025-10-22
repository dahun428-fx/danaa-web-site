"use client";

import clsx from "clsx";
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
      className="sticky top-[64px] z-[90] border-b border-slate-900/10 bg-white/90 backdrop-blur-[14px] backdrop-saturate-[1.8] md:top-[65px]"
      aria-label="상품소개 하위 메뉴"
    >
      <div className="mx-auto flex w-full max-w-[1100px] justify-center gap-6 overflow-x-auto px-6 py-3 no-scrollbar">
        {PRODUCT_LINKS.map((link) => {
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

export default ProductSubNav;
