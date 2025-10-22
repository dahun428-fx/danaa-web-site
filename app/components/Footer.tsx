import Image from "next/image";

const POLICY_LINKS = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy py-14 text-white/85 sm:py-16" id="contact">
      <div className="container">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Image
              src="/resources/images/logo_on.png"
              alt="DANAA BIO-AGE"
              width={160}
              height={38}
              className="h-auto w-40"
            />
            <p className="text-[0.95rem] leading-relaxed">
              서울특별시 강남구 봉은사로 644(삼성동)
              <br />
              TEL 02-550-8967 · FAX 02-550-8852
            </p>
            <small className="text-sm text-white/70">
              © {new Date().getFullYear()}
              DaNaA Data Co., Ltd. All rights reserved.
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-[0.95rem] uppercase tracking-[0.2em] text-white/70">
              문의
            </strong>
            <ul className="flex list-none flex-col gap-2 p-0">
              <li>
                <a
                  href="mailto:contact@danaa.co.kr"
                  className="text-[0.95rem] text-white/90 transition-colors hover:text-brand-cyan"
                >
                  jh1016@danai.co.kr
                </a>
              </li>
              <li>
                <a
                  href="tel:025508967"
                  className="text-[0.95rem] text-white/90 transition-colors hover:text-brand-cyan"
                >
                  02-550-8967
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-[0.95rem] uppercase tracking-[0.2em] text-white/70">
              정책
            </strong>
            <ul className="flex list-none flex-col gap-2 p-0">
              {POLICY_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[0.95rem] text-white/90 transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
