import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import IntroSection from "./IntroSection";
import ResearchIntroSection from "./ResearchIntroSection";
import FoundationPurpose from "./FoundationPurpose";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";
import PageTitle from "@/app/components/section/PageTitle";

const HERO_LINES = [
  "세계 최초 생체나이 측정시스템을 개발한",
  "대한생체나이의학연구소를 소개합니다.",
] as const;

const GOALS = [
  {
    title: "웰에이징 선도",
    description:
      "노화를 과학적으로 진단하고 예방함으로써 누구나 건강하게 오래 살 수 있는 웰에이징 사회를 구현합니다.",
  },
  {
    title: "의료·산업 발전 기여",
    description:
      "임상 연구와 기술개발을 통해 노화방지의학의 발전과 의료산업의 혁신에 기여합니다.",
  },
  {
    title: "지속적인 연구 네트워크",
    description:
      "국내외 연구기관과의 교류 및 산학협력을 통해 미래 헬스케어 기술과 서비스를 공동으로 모색합니다.",
  },
] as const;

const PURPOSES = [
  "과학적이고 임상적으로 접근 가능한 노화 측정 시스템 개발",
  "노화 및 건강증진 기술 개발과 관련 산업 발전에의 기여",
  "국제 학술 교류를 통한 선진 의료기술의 수용과 확산",
  "산학협동을 통한 연구 및 제품 개발",
] as const;

export default function ResearchOverviewPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="연구소 소개" />
      <ResearchIntroSection />

      <CommonIntroSection
        heading="설립 목표"
        title="웰에이징을 목표로 <br> 사회에 공헌하겠습니다."
        paragraphs={[
          "100세 시대! 모든 사람들이 질병 없이 건강하게 오래 살 수 있도록 노화의 과학적 접근 및 임상 연구를 바탕으로 의학 발전과 의료산업 발전에 기여하고자 합니다.",
          "노화방지의학의 발전은 개인의 삶의 질 향상과 국가의료비용 절감을 통한 복지혜택 확대로 개인뿐만 아니라 국가발전에도 기여합니다.",
        ]}
        imageSrc="/resources/images/sub/sub_0301_img_02.jpg"
        imageAlt="대한생체나이의학연구소 연구원들"
        backgroundColor="#fff"
      />

      <FoundationPurpose />
    </main>
  );
}
