import Image from "next/image";

type OrgUnit = {
  name: string;
  description?: string;
  teams?: string[];
};

const ORGANIZATION: OrgUnit[] = [
  {
    name: "전략기획팀",
    description: "중장기 전략 수립과 신사업 기획을 담당합니다.",
  },
  {
    name: "개발사업부",
    description: "솔루션 개발과 안정적인 시스템 운영을 책임집니다.",
    teams: ["Bio-age 개발팀", "시스템관리팀"],
  },
  {
    name: "마케팅본부",
    description: "브랜드 가치 확산과 고객 커뮤니케이션을 총괄합니다.",
    teams: ["홍보팀", "영업지원팀", "고객상담팀", "학술지원팀"],
  },
  {
    name: "영업본부",
    description: "국내외 파트너와의 협력 및 영업 전략을 수행합니다.",
    teams: ["서울·경기권", "경상권", "충청·전라권", "해외영업팀"],
  },
  {
    name: "경영본부",
    description: "기업 운영 전반의 경영 관리와 지원 업무를 담당합니다.",
    teams: ["총무팀", "경리팀", "전산팀"],
  },
  {
    name: "연구소",
    description: "생체나이 분석과 헬스케어 연구를 통해 기술 경쟁력을 강화합니다.",
    teams: ["생체나이 의학연구소"],
  },
];

export default function CompanyOrganizationPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-col gap-14 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          조직/인력
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          대표이사를 중심으로 전략, 개발, 마케팅, 영업, 경영, 연구 조직이 긴밀하게
          협업하여 생체나이 기반 헬스케어 서비스를 제공합니다.
        </p>
      </section>
      <section>
        <div className="overflow-hidden rounded-[28px] shadow-[0_28px_56px_rgba(15,23,42,0.12)]">
          <Image
            src="/resources/images/sub/sub_0104_img_01.jpg"
            alt="다나아데이터 조직도"
            width={960}
            height={600}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-[1.4rem] font-semibold text-brand-navy">
          주요 조직 구성
        </h2>
        <ul className="grid gap-7 md:grid-cols-2">
          {ORGANIZATION.map((unit) => (
            <li
              key={unit.name}
              className="flex flex-col gap-3 rounded-[24px] border border-brand-navy/10 bg-white px-7 py-7 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="text-[1.15rem] font-semibold text-brand-blue">
                {unit.name}
                {unit.description ? (
                  <span className="mt-1 block text-[0.9rem] font-normal text-brand-navy/60">
                    {unit.description}
                  </span>
                ) : null}
              </div>
              {unit.teams ? (
                <ul className="flex list-disc flex-col gap-2 pl-5 text-[0.98rem] leading-relaxed text-brand-navy/75">
                  {unit.teams.map((team) => (
                    <li key={team}>{team}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
