import Link from "next/link";
import styles from "./page.module.css";
import { email_info } from "@/app/config/constant";

export const dynamic = "force-dynamic";

export default function SupportContactPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.intro}>
        <h1>도입 · 제휴 문의</h1>
        <p>
          제품 도입 또는 파트너십 제안을 검토해 드립니다. 아래 양식에 내용을
          남기시면 담당자가 확인 후 연락드리며, 보다 빠른 상담을 원하시면 전화나
          이메일로 직접 문의해 주세요.
        </p>
      </section>

      <section className={styles.form}>
        <div className={styles.row}>
          <span className={styles.fieldLabel}>문의 유형</span>
          <span>
            <label className={styles.optionLabel}>
              <input type="radio" name="type" defaultChecked /> 도입 문의
            </label>
            <label className={styles.optionLabel}>
              <input type="radio" name="type" /> 제휴 문의
            </label>
          </span>
        </div>
        <div className={styles.row}>
          <label htmlFor="name" className={styles.fieldLabel}>
            기관/개인명
          </label>
          <input
            id="name"
            name="name"
            placeholder="예) 다나아데이터 병원 / 홍길동"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="phone" className={styles.fieldLabel}>
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="예) 010-0000-0000"
            inputMode="tel"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email" className={styles.fieldLabel}>
            이메일
          </label>
          <input
            id="email"
            name="email"
            placeholder={`예) ${email_info}`}
            type="email"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.fieldLabel}>
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="필요하신 제품 정보, 협업 아이디어, 운영 환경 등을 알려주세요."
          />
        </div>
        <div className={styles.note}>
          수집된 개인정보는 문의 응대 외 목적에 사용되지 않으며, 최대 1년 후
          자동 삭제됩니다.
        </div>
        <div className={styles.consent}>
          <input id="consent" type="checkbox" defaultChecked />
          <label htmlFor="consent" className={styles.consentLabel}>
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            문의 접수 (준비 중)
          </button>
          <Link
            href={`mailto:${email_info}`}
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            이메일로 문의하기
          </Link>
        </div>
      </section>

      <section className={styles.contactInfo}>
        <strong>빠른 상담이 필요하신가요?</strong>
        <div>
          대표전화{" "}
          <Link href="tel:025508967" aria-label="대표전화 02-550-8967">
            02-550-8967
          </Link>
          {" · "}
          이메일 <Link href={`mailto:${email_info}`}>{email_info}</Link>
        </div>
        <div>평일 09:00~18:00 (점심 12:00~13:00) 동안 신속히 답변드립니다.</div>
      </section>
    </main>
  );
}
