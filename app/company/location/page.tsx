import Link from "next/link";

export default function CompanyLocationPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-14 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          오시는 길
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          DANAA 본사는 서울특별시 강남구 봉은사로114길 12에 위치해 있으며,
          지하철 9호선 선정릉역과 봉은사역에서 도보로 이동할 수 있습니다.
        </p>
      </section>

      <section className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]">
          <h2 className="text-[1.2rem] font-semibold text-brand-blue">주소</h2>
          <ul className="flex list-none flex-col gap-2 text-[0.98rem] leading-relaxed text-brand-navy/75">
            <li>서울특별시 강남구 봉은사로114길 12 (삼성동)</li>
            <li>
              <Link
                className="inline-flex items-center gap-1 font-medium text-brand-blue hover:underline"
                href="https://map.kakao.com/?q=%EB%B0%94%EC%9D%B4%EC%98%A4%EC%97%90%EC%9D%B4%EC%A7%80"
                target="_blank"
                rel="noreferrer"
              >
                카카오맵에서 보기
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]">
          <h2 className="text-[1.2rem] font-semibold text-brand-blue">연락처</h2>
          <ul className="flex list-none flex-col gap-2 text-[0.98rem] leading-relaxed text-brand-navy/75">
            <li>대표전화: 02-550-8967</li>
            <li>팩스: 02-550-8852</li>
            <li>이메일: contact@danaa.co.kr</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_22px_44px_rgba(15,23,42,0.08)]">
          <h2 className="text-[1.2rem] font-semibold text-brand-blue">
            대중교통 안내
          </h2>
          <ul className="flex list-none flex-col gap-2 text-[0.98rem] leading-relaxed text-brand-navy/75">
            <li>지하철 9호선 선정릉역 2번 출구 도보 8분</li>
            <li>지하철 9호선 봉은사역 4번 출구 도보 10분</li>
            <li>인근 버스정류장: 봉은사로114길, 한국무역협회</li>
          </ul>
        </div>
      </section>

      <section className="overflow-hidden rounded-[28px] shadow-[0_28px_56px_rgba(15,23,42,0.12)]">
        <iframe
          title="DANAA 본사 위치"
          src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C114%EA%B8%B8%2012&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          className="h-[320px] w-full border-0 sm:h-[420px]"
          allowFullScreen
        />
      </section>
    </main>
  );
}
