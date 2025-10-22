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
      src: "/resources/images/sub/sub_0302_img_01.jpg",
      alt: "데이터 기반 헬스케어 연구를 수행하는 연구진",
      position: "right",
    },
    years: [
      {
        year: "2016",
        events: [
          {
            month: "3월",
            description:
              "생체 나이 연산 모델 생성 방법 및 시스템 관련 국내 특허 등록",
          },
          {
            month: "3월",
            description:
              "국제 SCI 저널 논문 게재 (European Journal of Applied Physiology)",
          },
          {
            month: "4월",
            description:
              "대한생체나이의학연구소에서 의학개발연구소로 명칭 및 조직 변경",
          },
          {
            month: "5월",
            description:
              "KoGES 데이터를 활용한 5대 질환 발병 예측 모형 개발 완료",
          },
        ],
      },
      {
        year: "2015",
        events: [
          {
            month: "3월",
            description: "생체나이를 이용한 잔여 수명 예측 방법 국내 특허 출원",
          },
          {
            month: "6월",
            description:
              "KoGES 데이터 분양 완료, 5~10년 내 발병 확률 예측 모형 개발 시작",
          },
          {
            month: "8월",
            description: "운동 민감도 예측용 바이오 마커 국내 특허 등록",
          },
        ],
      },
      {
        year: "2014",
        events: [
          {
            month: "5월",
            description:
              "유전체(SNP) 마커를 이용한 41종 암 및 주요 질환 발병 민감도 예측 시스템 개발",
          },
        ],
      },
    ],
  },
  {
    image: {
      src: "/resources/images/sub/sub_0302_img_02.jpg",
      alt: "연구성과를 공유하는 학술 모임",
      position: "left",
    },
    years: [
      {
        year: "2013",
        events: [
          {
            month: "8월",
            description:
              "생체나이 측정시스템 업그레이드(스마트케어 출시)와 통계분석 서비스 런칭",
          },
          {
            month: "9월",
            description:
              "변수 연관관계 자동 탐색 및 동적 결과 리포트 산출방법 국내 특허 등록",
          },
          {
            month: "11월",
            description: "생체나이 예측 장치 및 방법 국내 특허 등록",
          },
        ],
      },
      {
        year: "2011",
        events: [
          {
            month: "3월",
            description: "Bio-Age® Plus 생체나이 측정시스템 업그레이드(3.0 버전)",
          },
        ],
      },
      {
        year: "2010",
        events: [
          {
            month: "7월",
            description: "Bio-Age® Plus 생체나이 측정시스템 업그레이드(2.0 버전)",
          },
        ],
      },
      {
        year: "2009",
        events: [
          {
            month: "9월",
            description:
              "Bio-Age® Plus 생체나이 측정시스템 상품 개발(1.0 버전)",
          },
          { month: "10월", description: "다나아데이터 플러스 출시" },
        ],
      },
      {
        year: "2007",
        events: [
          {
            month: "11월",
            description: "Bio-Age® 상담 가이드 발간",
          },
        ],
      },
    ],
  },
  {
    years: [
      {
        year: "2006",
        events: [
          {
            month: "3월",
            description: "Bio-Age® 생체나이 측정시스템 업그레이드(3.0 버전)",
          },
        ],
      },
      {
        year: "2005",
        events: [
          {
            month: "6월",
            description:
              "연세의료원·충남대학교·가톨릭병원과 Bio-Age® 공동 연구 협약 및 국제 특허 출원",
          },
          {
            month: "12월",
            description: "Bio-Age® 생체나이 측정시스템 업그레이드(2.0 버전)",
          },
        ],
      },
      {
        year: "2003",
        events: [
          {
            month: "2월",
            description: "Bio-Age® 생체나이 측정시스템 개발(1.0 버전)",
          },
          {
            month: "12월",
            description: "Bio-Age® 국내 특허 출원 신청",
          },
        ],
      },
    ],
  },
];

export default function ResearchHistoryPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-14 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          연구소 연혁
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          다나아데이터 연구소는 2003년 생체나이 측정시스템 개발을 시작으로
          지속적인 기술 고도화와 학술 연구를 통해 과학적인 웰에이징 솔루션을
          구축해 왔습니다.
        </p>
      </section>

      {TIMELINE_GROUPS.map((group) => (
        <section
          key={group.years.map((year) => year.year).join("-")}
          className={clsx(
            "grid gap-8",
            group.image && "md:grid-cols-[minmax(0,1fr)_minmax(0,420px)]"
          )}
        >
          <div className="flex flex-col gap-7">
            {group.years.map((year) => (
              <article
                key={year.year}
                className="grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] md:items-start"
              >
                <h2 className="text-[1.6rem] font-bold text-brand-blue md:text-left">
                  {year.year}
                </h2>
                <ul className="flex list-none flex-col gap-3 p-0">
                  {year.events.map((event) => (
                    <li
                      key={`${year.year}-${event.month}-${event.description}`}
                      className="flex gap-3 text-[0.98rem] leading-relaxed text-brand-navy/80"
                    >
                      <strong className="min-w-[3rem] font-semibold text-brand-navy">
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
                "overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(15,23,42,0.15)]",
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
