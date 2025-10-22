import Image from "next/image";

const HERO_LINES = [
  "2002년 2월, 대한생체나이의학연구소 의료진을 중심으로 설립된",
  "생체나이 측정시스템 개발 회사입니다.",
];

export default function CompanyIntroPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-20">
      <section className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-navy/60">
            Company Introduction
          </p>
          <h1 className="flex flex-col gap-1 text-[2.2rem] font-bold leading-tight text-brand-navy sm:text-[2.6rem] md:text-[3.1rem]">
            {HERO_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <div className="overflow-hidden rounded-[28px] shadow-lg-soft md:hidden">
            <Image
              src="/resources/images/sub/sub01_img01_m.jpg"
              alt="생체나이 시스템 연구 이미지"
              width={720}
              height={480}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="text-[1.05rem] leading-relaxed text-brand-navy/75">
            <strong className="mb-3 block text-[1.1rem] font-semibold text-brand-navy">
              2013년에는 생명공학 벤처기업 ㈜이즈텍과의 합병으로 통계전문가를
              확보하고 유전체 사업 영역으로도 확장했습니다.
            </strong>
            통계 기반의 전문성을 토대로 바이오 데이터 분석 역량을 고도화하며
            헬스케어 산업 내 새로운 가능성을 열어가고 있습니다.
          </p>
        </div>
        <div className="hidden overflow-hidden rounded-[32px] shadow-xl-soft md:block">
          <Image
            src="/resources/images/sub/sub01_img01.jpg"
            alt="생체나이 시스템 연구 이미지"
            width={640}
            height={760}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col gap-6 text-[1rem] leading-8 text-brand-navy/80">
        <p className="leading-8">
          다나아데이터 생체나이는 신체기능 중심의 기존 측정 시스템과 달리,
          검진자의 실제 데이터를 국내 40만 건 이상의 임상 빅데이터와 비교·분석한
          세계 최초의 생체나이 측정 시스템입니다. 과학적이고 의학적인 자료를
          기반으로 누구나 이해하기 쉬운 그래프와 지표를 제공하여 건강상태와 노화
          정도를 직관적으로 확인할 수 있습니다.
        </p>
        <p>
          생체나이는 보건산업진흥원 보건신기술(HT) 인증과 생체나이 관련 2건의
          특허를 통해 학술적 검증을 마쳤으며, 국내 주요 대학병원과 종합병원,
          검진센터, 수탁기관을 중심으로 폭넓게 활용되고 있습니다. 더불어
          만성질환·당뇨 관리 레포트와 기업용 건강검진 서비스, 유전자 분석 서비스
          등으로 영역을 확장하며 헬스케어 생태계의 발전을 이끌고 있습니다.
        </p>
        <p>
          앞으로도 다나아데이터는 끊임없는 연구와 혁신으로 의료산업의 발전에
          기여하고, 대한민국의 새로운 국가 경쟁력이 될 수 있도록 최선을
          다하겠습니다.
        </p>
      </section>
      <section className="flex flex-col gap-2 text-base text-brand-navy/80">
        <span className="font-medium text-brand-navy">감사합니다.</span>
        <span className="text-brand-navy">
          ㈜다나아데이터 대표이사 <strong>이창재</strong>
        </span>
      </section>
    </main>
  );
}
