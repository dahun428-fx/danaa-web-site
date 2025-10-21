import Link from "next/link";

export const dynamic = "force-dynamic";

export default function SupportContactPage() {
  return (
    <main className="mx-auto w-full max-w-screen-md px-6 py-20 flex flex-col gap-10 md:px-4 md:py-16">
      <section className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-gray-900">도입 · 제휴 문의</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          제품 도입 또는 파트너십 제안을 검토해 드립니다. 아래 양식에 내용을
          남기시면 담당자가 확인 후 연락드리며, 보다 빠른 상담을 원하시면 전화나
          이메일로 직접 문의해 주세요.
        </p>
      </section>

      <section className="grid gap-5 p-8 rounded-3xl border border-gray-100 bg-white shadow-lg md:p-6">
        <div className="grid gap-4">
          <span className="text-base font-semibold text-gray-900">문의 유형</span>
          <span className="flex gap-3">
            <label className="inline-flex items-center gap-2 text-base text-gray-700">
              <input type="radio" name="type" defaultChecked className="form-radio text-emerald-600" /> 도입 문의
            </label>
            <label className="inline-flex items-center gap-2 text-base text-gray-700">
              <input type="radio" name="type" className="form-radio text-emerald-600" /> 제휴 문의
            </label>
          </span>
        </div>
        <div className="grid gap-2">
          <label htmlFor="name" className="text-base font-semibold text-gray-900">
            기관/개인명
          </label>
          <input id="name" name="name" placeholder="예) 바이오에이지 병원 / 홍길동" className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-base font-semibold text-gray-900">
            연락처
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="예) 010-0000-0000"
            inputMode="tel"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-base font-semibold text-gray-900">
            이메일
          </label>
          <input
            id="email"
            name="email"
            placeholder="예) contact@danaa.co.kr"
            type="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-base font-semibold text-gray-900">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="필요하신 제품 정보, 협업 아이디어, 운영 환경 등을 알려주세요."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base min-h-[160px] resize-y focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
          />
        </div>
        <div className="text-sm text-gray-600 leading-relaxed">
          수집된 개인정보는 문의 응대 외 목적에 사용되지 않으며, 최대 1년 후
          자동 삭제됩니다.
        </div>
        <div className="flex items-start gap-2 text-base text-gray-700 leading-relaxed">
          <input id="consent" type="checkbox" defaultChecked className="form-checkbox text-emerald-600 mt-1" />
          <label htmlFor="consent" className="font-semibold text-gray-900">
            개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button type="button" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base border-none cursor-pointer transition-all duration-200 ease-in-out bg-emerald-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5">
            문의 접수 (준비 중)
          </button>
          <Link
            href="mailto:contact@danaa.co.kr"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base border-none cursor-pointer transition-all duration-200 ease-in-out bg-gray-100 text-gray-900 hover:bg-gray-200"
          >
            이메일로 문의하기
          </Link>
        </div>
      </section>

      <section className="rounded-2xl p-6 border border-emerald-300 border-dashed bg-emerald-50/60 text-base leading-relaxed text-gray-700">
        <strong className="block text-gray-900 mb-1">빠른 상담이 필요하신가요?</strong>
        <div>
          대표전화{" "}
          <Link href="tel:025508967" aria-label="대표전화 02-550-8967" className="text-gray-900 font-semibold">
            02-550-8967
          </Link>
          {" · "}
          이메일{" "}
          <Link href="mailto:contact@danaa.co.kr" className="text-gray-900 font-semibold">contact@danaa.co.kr</Link>
        </div>
        <div>평일 09:00~18:00 (점심 12:00~13:00) 동안 신속히 답변드립니다.</div>
      </section>
    </main>
  );
}
