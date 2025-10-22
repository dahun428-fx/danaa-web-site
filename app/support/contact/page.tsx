import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SupportContactPage() {
  const fieldClass =
    "w-full rounded-xl border border-brand-navy/15 px-4 py-3 text-base text-brand-navy/80 transition focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100";

  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-col gap-10 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          도입 · 제휴 문의
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          제품 도입 또는 파트너십 제안을 검토해 드립니다. 아래 양식에 내용을
          남기시면 담당자가 확인 후 연락드리며, 보다 빠른 상담을 원하시면 전화나
          이메일로 직접 문의해 주세요.
        </p>
      </section>

      <section className="grid gap-5 rounded-[24px] border border-brand-navy/10 bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
        <div className="grid gap-4">
          <span className="text-[0.95rem] font-semibold text-brand-navy">
            문의 유형
          </span>
          <span className="flex flex-wrap gap-3">
            <label className="inline-flex items-center gap-2 text-[0.95rem] text-brand-navy/75">
              <input type="radio" name="type" defaultChecked /> 도입 문의
            </label>
            <label className="inline-flex items-center gap-2 text-[0.95rem] text-brand-navy/75">
              <input type="radio" name="type" /> 제휴 문의
            </label>
          </span>
        </div>
        <div className="grid gap-4">
          <label htmlFor="name" className="text-[0.95rem] font-semibold text-brand-navy">
            기관/개인명
          </label>
          <input
            id="name"
            name="name"
            placeholder="예) 다나아데이터 병원 / 홍길동"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-4">
          <label htmlFor="phone" className="text-[0.95rem] font-semibold text-brand-navy">
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="예) 010-0000-0000"
            inputMode="tel"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-4">
          <label htmlFor="email" className="text-[0.95rem] font-semibold text-brand-navy">
            이메일
          </label>
          <input
            id="email"
            name="email"
            placeholder="예) contact@danaa.co.kr"
            type="email"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-4">
          <label htmlFor="message" className="text-[0.95rem] font-semibold text-brand-navy">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="필요하신 제품 정보, 협업 아이디어, 운영 환경 등을 알려주세요."
            className={`${fieldClass} min-h-[160px] resize-y`}
          />
        </div>
        <div className="text-sm text-brand-navy/60">
          수집된 개인정보는 문의 응대 외 목적에 사용되지 않으며, 최대 1년 후
          자동 삭제됩니다.
        </div>
        <div className="flex items-start gap-2 text-[0.95rem] text-brand-navy/70">
          <input id="consent" type="checkbox" defaultChecked />
          <label htmlFor="consent" className="font-semibold text-brand-navy">
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_12px_24px_rgba(16,185,129,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(16,185,129,0.22)]"
          >
            문의 접수 (준비 중)
          </button>
          <Link
            href="mailto:contact@danaa.co.kr"
            className="inline-flex items-center justify-center rounded-full bg-brand-navy/10 px-6 py-3 text-[0.95rem] font-semibold text-brand-navy transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)]"
          >
            이메일로 문의하기
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-50/60 p-6 text-[0.95rem] leading-relaxed text-brand-navy/75">
        <strong className="block font-semibold text-brand-navy">
          빠른 상담이 필요하신가요?
        </strong>
        <div className="mt-2">
          대표전화{" "}
          <Link
            href="tel:025508967"
            aria-label="대표전화 02-550-8967"
            className="font-semibold text-brand-navy"
          >
            02-550-8967
          </Link>
          {" · "}
          이메일{" "}
          <Link
            href="mailto:contact@danaa.co.kr"
            className="font-semibold text-brand-navy"
          >
            contact@danaa.co.kr
          </Link>
        </div>
        <div className="mt-1">
          평일 09:00~18:00 (점심 12:00~13:00) 동안 신속히 답변드립니다.
        </div>
      </section>
    </main>
  );
}
