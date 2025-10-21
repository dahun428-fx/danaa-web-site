import Image from "next/image";

const SERVICE_LINES = [
  {
    title: "생체나이 · 유전자 분석 서비스",
    icon: "/resources/images/sub/sub_0102_icon_0101.png",
    details: [
      "상품: 생체나이 분석, 유전자 분석 서비스 제공",
      "서비스: 생체나이·유전자 분석과 사후관리 서비스, 시스템 제공",
      "판매채널: 대학병원 및 건강검진센터",
    ],
  },
  {
    title: "기업 건강검진 대행 서비스",
    icon: "/resources/images/sub/sub_0102_icon_0102.png",
    details: [
      "상품: 기업 건강검진 대행 서비스",
      "서비스: 검진 예약, 상담, 결과 제공, 비용 정산, 통계 관리",
      "판매채널: 대기업 및 중소기업",
    ],
  },
  {
    title: "임상 통계 분석 서비스",
    icon: "/resources/images/sub/sub_0102_icon_0103.png",
    details: [
      "상품: 임상 통계 분석 서비스",
      "서비스: 초급·중급·고급 통계 분석 및 레포트 제공",
      "판매채널: 학회·학위 논문 연구, 시스템 개발 의뢰 연구소 및 국가 과제",
    ],
  },
] as const;

const COMPETENCIES = [
  {
    category: "생체나이 예측 기술",
    product: "바이오에이지 ‘스마트케어’",
    points: [
      "임상 데이터를 기반으로 한 생체나이 측정 시스템",
      "개인별 건강검진 데이터로 생체나이와 7가지 기능 나이 측정",
      "노화 방지와 건강 증진을 위한 체계적인 분석 결과 제공",
    ],
  },
  {
    category: "4대 만성질환 발병 예측 기술",
    product: "질환관리 리포트",
    points: [
      "한국인 30만 건 이상의 임상 데이터 기반",
      "제2형 당뇨, 고혈압, 관상동맥질환, 뇌혈관질환 발병 가능성 예측",
    ],
  },
  {
    category: "유전 기반 질병 예측 기술",
    product: "제노팩",
    points: [
      "암, 일반질환, 식이, 영양, 운동 관련 유전 정보 분석",
      "유전적으로 적합한 식습관 개선과 운동 가이드 제공",
    ],
  },
  {
    category: "기업건강검진 대행 IT 솔루션",
    product: "대웅 비즈케어",
    points: [
      "기업 건강검진 대행을 위한 통합 IT 서비스 제공",
      "검진 예약, 콜센터 운영, 의료 상담 지원",
      "상품·병원 선정부터 비용 정산, 데이터 관리까지 통합 지원",
    ],
  },
] as const;

export default function CompanyVisionPage() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-6 py-20 flex flex-col gap-16 md:px-4 md:py-16">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            사업영역 및 비즈니스 모델
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            DANAA는 생체나이 분석 기술을 중심으로 유전자, 통계, 기업 헬스케어
            영역을 아우르며 건강관리의 새로운 표준을 만들어가고 있습니다.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/resources/images/sub/sub_0102_img_01.jpg"
            alt="DANAA 사업 영역 개요"
            width={640}
            height={480}
            priority
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICE_LINES.map((service) => (
          <article
            key={service.title}
            className="grid grid-cols-[auto_1fr] gap-6 p-7 rounded-3xl bg-white border border-gray-100 shadow-lg"
          >
            <div className="w-18 h-18 rounded-2xl bg-blue-600/10 grid place-items-center">
              <Image
                src={service.icon}
                alt=""
                width={48}
                height={48}
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h2>
              <ul className="list-disc pl-5 flex flex-col gap-1 text-base text-gray-700 leading-relaxed">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            핵심역량
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            축적된 임상 데이터와 IT 기술 역량을 바탕으로, 고객의 건강 수준을
            정밀하게 분석하고 실행 가능한 솔루션을 제공합니다.
          </p>
        </div>
        <div className="w-full overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-lg">
          <table className="w-full border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th scope="col" className="p-6 text-left font-semibold text-gray-900 w-1/4">
                  구분
                </th>
                <th scope="col" className="p-6 text-left font-semibold text-gray-900">
                  대표 상품
                </th>
                <th scope="col" className="p-6 text-left font-semibold text-gray-900">
                  특징
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPETENCIES.map((item) => (
                <tr key={item.category}>
                  <th scope="row" className="p-6 text-left font-semibold text-gray-900 w-1/4">
                    {item.category}
                  </th>
                  <td className="p-6 text-gray-700 text-base leading-relaxed">
                    {item.product}
                  </td>
                  <td className="p-6 text-gray-700 text-base leading-relaxed">
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
