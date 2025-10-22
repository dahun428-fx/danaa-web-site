import Image from "next/image";

const SERVICES = [
  {
    name: "힐리언스 선마을",
    href: "https://www.healience.co.kr/",
    image: "/resources/images/sec03_ico01_off.png",
  },
  {
    name: "코어 운동센터",
    href: "https://healiencecorecenter.com/",
    image: "/resources/images/sec03_ico02_off.png",
  },
  {
    name: "시셀",
    href: "https://sisselkorea.com/main/index",
    image: "/resources/images/sec03_ico03_off.png",
  },
  {
    name: "엠디웰",
    href: "http://www.shopmdwell.com",
    image: "/resources/images/sec03_ico04_off.png",
  },
];

export function ServiceLinksSection() {
  return (
    <section id="partners">
      <div className="container">
        <div className="rounded-[32px] bg-white px-6 py-12 shadow-[0_40px_80px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14">
          <header className="mb-10 flex flex-col items-start gap-3">
            <p className="text-[0.85rem] uppercase tracking-[0.2em] text-brand-navy/65">
              건강한 삶을 위한 파트너십
            </p>
            <h2 className="text-[1.9rem] font-bold text-brand-navy sm:text-[2.2rem]">
              건강관리 연계 서비스
            </h2>
            <span className="max-w-xl text-base leading-relaxed text-brand-navy/60">
              DANAA의 생체나이 분석과 연계된 다양한 헬스케어 서비스를
              소개합니다.
            </span>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service) => (
              <a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-4 rounded-[24px] border border-brand-navy/10 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(37,99,235,0.18)]"
              >
                <div className="grid h-24 w-24 place-items-center rounded-[26px] bg-[radial-gradient(circle,rgba(37,99,235,0.08)_0%,rgba(37,99,235,0)_70%)]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={72}
                    height={72}
                    className="h-auto w-[70px]"
                  />
                </div>
                <h3 className="text-[1.05rem] font-semibold text-brand-navy">
                  {service.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceLinksSection;
