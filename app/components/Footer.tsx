import Image from "next/image";

const POLICY_LINKS = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-14 px-6" id="contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <Image
              src="/resources/images/logo_on.png"
              alt="DANAA BIO-AGE"
              width={160}
              height={38}
            />
            <p className="text-sm leading-relaxed">
              서울특별시 봉은사로 114길 12
              <br />
              TEL 02-550-8967 · FAX 02-550-8852
            </p>
            <small className="text-xs opacity-70">
              © {new Date().getFullYear()} BIO-AGE Co.,Ltd.
            </small>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-sm uppercase tracking-widest text-gray-400">
              문의
            </strong>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              <li>
                <a href="mailto:contact@danaa.co.kr" className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300">contact@danaa.co.kr</a>
              </li>
              <li>
                <a href="tel:025508967" className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300">02-550-8967</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <strong className="text-sm uppercase tracking-widest text-gray-400">
              정책
            </strong>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {POLICY_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300">{item.label}</a>
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

