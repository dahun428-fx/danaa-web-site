export function MediaSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100/50 to-gray-200/50" id="media">
      <div className="container mx-auto">
        <div className="bg-blue-950 rounded-3xl p-14 text-white grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-2xl md:p-10 sm:p-6">
          <header className="flex flex-col gap-3">
            <p className="tracking-wider text-sm opacity-70">
              MEDIA
            </p>
            <h2 className="text-5xl font-bold leading-tight">
              SBS 모닝와이드 7538회
            </h2>
            <span className="text-base leading-relaxed text-white/75">
              생체나이 분석을 통해 건강한 체중관리와 삶의 변화를 이끈 실제 사례를
              영상으로 만나보세요.
            </span>
          </header>
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/iK3DdfEbiaE"
              title="SBS 모닝와이드 바이오에이지 소개"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
