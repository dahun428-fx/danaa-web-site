import Image from "next/image";
import styles from "./ServiceLinksSection.module.css";

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
    <section className={styles.section} id="partners">
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.header}>
            <p>건강한 삶을 위한 파트너십</p>
            <h2>건강관리 연계 서비스</h2>
            <span>
              DANAA의 생체나이 분석과 연계된 다양한 헬스케어 서비스를
              소개합니다.
            </span>
          </header>
          <div className={styles.grid}>
            {SERVICES.map((service) => (
              <a
                key={service.name}
                href={service.href}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={72}
                    height={72}
                  />
                </div>
                <h3>{service.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceLinksSection;
