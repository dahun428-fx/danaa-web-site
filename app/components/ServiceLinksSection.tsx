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
    <section className="py-16" id="partners">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl p-14 shadow-xl md:p-10 sm:p-6">
          <header className="flex flex-col items-start gap-3 mb-10">
            <p className="text-sm tracking-wider uppercase text-gray-900/65">
              건강한 삶을 위한 파트너십
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              건강관리 연계 서비스
            </h2>
            <span className="text-base text-gray-700 max-w-lg leading-relaxed">
              DANAA의 생체나이 분석과 연계된 다양한 헬스케어 서비스를
              소개합니다.
            </span>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-4 rounded-2xl p-8 border border-gray-200 transition-all duration-300 ease-in-out text-center hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="w-24 h-24 rounded-2xl grid place-items-center bg-gradient-to-br from-blue-600/10 to-transparent">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={72}
                    height={72}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
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
