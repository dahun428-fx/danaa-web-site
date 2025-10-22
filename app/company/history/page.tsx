import clsx from "clsx";
import Image from "next/image";

type TimelineEvent = {
  month: string;
  description: string;
};

type TimelineYear = {
  year: string;
  events: TimelineEvent[];
};

type TimelineGroup = {
  image?: {
    src: string;
    alt: string;
    position: "left" | "right";
  };
  years: TimelineYear[];
};

const TIMELINE_GROUPS: TimelineGroup[] = [
  {
    image: {
      src: "/resources/images/sub/sub_0103_img_01.jpg",
      alt: "연구 장비를 활용한 다나아데이터의 헬스케어 혁신",
      position: "right",
    },
    years: [
      {
        year: "2016",
        events: [
          { month: "1월", description: "BioAge 국제 특허 출원" },
          { month: "3월", description: "생체나이 특허 1건 획득" },
        ],
      },
      {
        year: "2015",
        events: [
          { month: "2월", description: "스마트케어 플러스 출시" },
          { month: "2월", description: "질환관리 레포트 출시" },
          { month: "3월", description: "기업 건강검진 대행 서비스 출범" },
          { month: "8월", description: "당뇨관리 레포트 출시" },
        ],
      },
      {
        year: "2014",
        events: [
          { month: "1월", description: "연세의료원과 기술 제휴" },
          { month: "11월", description: "스마트케어 당뇨 출시" },
        ],
      },
    ],
  },
  {
    image: {
      src: "/resources/images/sub/sub_0103_img_02.jpg",
      alt: "데이터 분석을 수행 중인 연구진",
      position: "left",
    },
    years: [
      {
        year: "2013",
        events: [
          { month: "1월", description: "노갑용 대표 취임" },
          { month: "8월", description: "다나아데이터 통계분석 서비스 런칭" },
          {
            month: "8월",
            description: "생체나이 측정시스템 업그레이드(스마트케어 출시)",
          },
          { month: "9월", description: "국내 특허 등록" },
        ],
      },
      {
        year: "2011",
        events: [
          { month: "10월", description: "제4회 다나아데이터 세미나 개최" },
          {
            month: "12월",
            description: "파워에이징 프로그램 운영(힐리언스 선마을)",
          },
        ],
      },
      {
        year: "2010",
        events: [
          { month: "6월", description: "사옥 이전 (서울 강남구 삼성동)" },
          { month: "11월", description: "제3회 다나아데이터 세미나 개최" },
        ],
      },
      {
        year: "2009",
        events: [
          { month: "4월", description: "윤재춘·박경용 공동대표 취임" },
          { month: "9월", description: "제2회 다나아데이터 세미나 개최" },
          { month: "10월", description: "다나아데이터 플러스 출시" },
        ],
      },
    ],
  },
  {
    years: [
      {
        year: "2008",
        events: [
          { month: "5월", description: "체형나이 프로젝트 운영(힐리언스 선마을)" },
          { month: "10월", description: "제1회 다나아데이터 세미나 개최" },
        ],
      },
      {
        year: "2007",
        events: [
          {
            month: "2월",
            description:
              "Bio-Age® 보건신기술(HT) 인증 및 중국병원협회와 업무 제휴 협의",
          },
          {
            month: "7월",
            description: "중국의원협회와 Bio-Age® 공공 사업 계약",
          },
          { month: "11월", description: "대웅제약 자회사 편입" },
        ],
      },
      {
        year: "2006",
        events: [
          {
            month: "3월",
            description: "Bio-Age® 생체나이 측정시스템 업그레이드(3.0 버전)",
          },
          {
            month: "9월",
            description:
              "대한병원협회 준회원 가입 및 Bio-Age® 정책사업 추진 / 사명 변경(㈜다나아데이터)",
          },
        ],
      },
    ],
  },
  {
    image: {
      src: "/resources/images/sub/sub_0103_img_03.jpg",
      alt: "건강검진 데이터를 분석하는 의료진",
      position: "left",
    },
    years: [
      {
        year: "2005",
        events: [
          { month: "6월", description: "Bio-Age® 국제 특허 출원" },
          {
            month: "12월",
            description: "Bio-Age® 생체나이 측정시스템 업그레이드(2.0 버전)",
          },
        ],
      },
      {
        year: "2004",
        events: [
          { month: "6월", description: "연세의료원과 Bio-Age® 공동 연구 협약" },
        ],
      },
      {
        year: "2003",
        events: [
          { month: "2월", description: "Bio-Age® 생체나이 측정시스템 개발(1.0 버전)" },
          {
            month: "12월",
            description: "Bio-Age® 생체나이 측정시스템 상용화 및 국내 특허 출원",
          },
        ],
      },
      {
        year: "2002",
        events: [
          {
            month: "10월",
            description:
              "노화 방지 의료산업 진출을 위한 장·단기 전략 수립",
          },
          {
            month: "12월",
            description: "Bio-Age® 생체나이 측정시스템 상품화 계획 수립",
          },
        ],
      },
    ],
  },
];

export default function CompanyHistoryPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-16 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-4">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          연혁
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          DANAA는 2002년 창립 이후 생체나이 측정 기술과 헬스케어 서비스를
          고도화하며 국내외 의료 시장에서 신뢰받는 파트너로 성장해 왔습니다.
        </p>
      </section>

      {TIMELINE_GROUPS.map((group) => (
        <section
          key={group.years.map((y) => y.year).join("-")}
          className={clsx(
            "grid gap-8",
            group.image && "md:grid-cols-[minmax(0,1fr)_minmax(0,420px)]"
          )}
        >
          <div className="flex flex-col gap-8">
            {group.years.map((year) => (
              <article
                key={year.year}
                className="grid gap-4 md:grid-cols-[110px_minmax(0,1fr)] md:items-start"
              >
                <h2 className="text-[1.6rem] font-bold text-slate-800 md:text-left">
                  {year.year}
                </h2>
                <ul className="flex list-none flex-col gap-3 p-0">
                  {year.events.map((event) => (
                    <li
                      key={`${year.year}-${event.month}-${event.description}`}
                      className="flex gap-2 text-[0.98rem] leading-relaxed text-brand-navy/80"
                    >
                      <strong className="min-w-[2.5rem] font-semibold text-brand-blue">
                        {event.month}
                      </strong>
                      <span>{event.description}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {group.image ? (
            <div
              className={clsx(
                "overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(15,23,42,0.14)]",
                group.image.position === "left"
                  ? "md:order-first"
                  : "md:order-last"
              )}
            >
              <Image
                src={group.image.src}
                alt={group.image.alt}
                width={640}
                height={760}
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </section>
      ))}
    </main>
  );
}
