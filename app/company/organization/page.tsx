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
    <main className="mx-auto w-full max-w-screen-xl px-6 py-20 flex flex-col gap-14 md:px-4 md:py-16">
      <section className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-gray-900">조직/인력</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          대표이사를 중심으로 전략, 개발, 마케팅, 영업, 경영, 연구 조직이 긴밀하게
          협업하여 생체나이 기반 헬스케어 서비스를 제공합니다.
        </p>
      </section>
      <section className="grid gap-8">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/resources/images/sub/sub_0104_img_01.jpg"
            alt="바이오에이지 조직도"
            width={960}
            height={600}
            priority
          />
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-gray-900">주요 조직 구성</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
          {ORGANIZATION.map((unit) => (
            <li key={unit.name} className="flex flex-col gap-3 border border-gray-100 rounded-3xl p-7 bg-white shadow-lg">
              <div className="text-xl font-semibold text-blue-600">
                {unit.name}
                {unit.description ? (
                  <span className="block text-base text-gray-600 mt-1">
                    {unit.description}
                  </span>
                ) : null}
              </div>
              {unit.teams ? (
                <ul className="list-disc pl-5 flex flex-col gap-1 text-base text-gray-700 leading-relaxed">
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
