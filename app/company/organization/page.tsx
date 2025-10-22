import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import PageTitle from "@/app/components/section/PageTitle";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";

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
    description:
      "생체나이 분석과 헬스케어 연구를 통해 기술 경쟁력을 강화합니다.",
    teams: ["생체나이 의학연구소"],
  },
];

export default function CompanyOrganizationPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="조직/인력" />
      <CommonIntroSection
        heading="조직 구성"
        imageSrc="/resources/images/sub/sub_0104_img_01.jpg"
        backgroundColor="#fff"
      />
    </main>
  );
}
