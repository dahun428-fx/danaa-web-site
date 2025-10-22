import Image from "next/image";
import styles from "./Footer.module.css";
import { email_info } from "../config/constant";

const POLICY_LINKS = [
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "이용약관", href: "/terms" },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Image
              src="/resources/images/logo/danaaLogo.png"
              alt="DANAA Logo"
              width={160}
              height={38}
            />
            <p>
              서울특별시 강남구 봉은사로 644(삼성동)
              <br />
              TEL 02-550-8967 · FAX 02-550-8852
            </p>
            <small>
              © {new Date().getFullYear()}
              DaNaA Data Co., Ltd. All rights reserved.
            </small>
          </div>
          <div className={styles.links}>
            <strong>문의</strong>
            <ul>
              <li>
                <a href={`mailto:${email_info}`}>{email_info}</a>
              </li>
              <li>
                <a href="tel:025508967">02-550-8967</a>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <strong>정책</strong>
            <ul>
              {POLICY_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
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
