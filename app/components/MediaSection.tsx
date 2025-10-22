export function MediaSection() {
  return (
    <section
      className='bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.12)_100%)] pb-24 pt-16'
      id="media"
    >
      <div className="container">
        <div className="grid gap-8 rounded-[32px] bg-[#0b1f3d] px-6 py-12 text-white shadow-[0_40px_60px_rgba(11,31,61,0.5)] lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:px-12">
          <header className="flex flex-col gap-3">
            <p className="text-[0.9rem] uppercase tracking-[0.18em] text-white/70">
              MEDIA
            </p>
            <h2 className="text-[2.1rem] font-bold leading-tight sm:text-[2.4rem]">
              SBS 모닝와이드 7538회
            </h2>
            <span className="text-base leading-relaxed text-white/75">
              생체나이 분석을 통해 건강한 체중관리와 삶의 변화를 이끈 실제 사례를
              영상으로 만나보세요.
            </span>
          </header>
          <div className="relative w-full overflow-hidden rounded-[24px] pt-[56.25%] shadow-[0_25px_40px_rgba(11,31,61,0.45)] lg:rounded-[24px]">
            <iframe
              src="https://www.youtube.com/embed/iK3DdfEbiaE"
              title="SBS 모닝와이드 다나아데이터 소개"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
