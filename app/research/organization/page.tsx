import Image from "next/image";

export default function ResearchOrganizationPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-12 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          연구소 조직
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          대한생체나이의학연구소는 연구개발 자문위원회와 전문 연구팀이 협력하여
          생체나이 분석 기술과 신규 헬스케어 솔루션을 고도화하고 있습니다.
        </p>
      </section>

      <section className="grid gap-6">
        <h2 className="text-[1.6rem] font-semibold text-brand-navy">조직 구성</h2>
        <div className="overflow-hidden rounded-[28px] shadow-[0_28px_56px_rgba(15,23,42,0.14)]">
          <Image
            src="/resources/images/sub/sub_0303_img_01.jpg"
            alt="연구소 조직 구성도"
            width={960}
            height={620}
            className="h-auto w-full"
            priority
          />
        </div>
        <div className="sr-only">
          연구개발 자문위원회를 중심으로 연구소 상담실, Bio-Age® 사업장과 신규
          사업장, 노화측정실, 일상연구구 등으로 세분화된 조직이 운영됩니다.
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-[1.6rem] font-semibold text-brand-navy">인력 구성</h2>
        <div className="overflow-hidden rounded-[28px] shadow-[0_28px_56px_rgba(15,23,42,0.14)]">
          <Image
            src="/resources/images/sub/sub_0303_img_02.jpg"
            alt="연구소 인력 구성도"
            width={960}
            height={620}
            className="h-auto w-full"
          />
        </div>
        <div className="sr-only">
          연구개발 고문단과 자문위원회를 중심으로 부소장, 연구개발 팀, 노화측정
          및 일상연구팀 등 전문 인력이 배치되어 융합 연구와 현장 지원을 수행합니다.
        </div>
      </section>
    </main>
  );
}
