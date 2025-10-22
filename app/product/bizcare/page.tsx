import styles from "./page.module.css";
import PageTitle from "@/app/components/section/PageTitle";
import Tabs, { Tab } from "@/app/components/tab/Tabs";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";
import CorpWellnessReasons from "./CorpWellnessReasons";
import CommonTableSection from "@/app/components/section/CommonTableSection";
import TextBlock from "@/app/components/text/TextBlock";
import HighlightBanner from "@/app/components/text/HighlightBanner";
import CorpProgramFlow from "./CorpProgramFlow";
import MobilityFeatureCard from "@/app/components/card/MobilityFeatureCard";

const BUSINESS_NEEDS = [
  {
    title: "예방 중심의 건강경영 요구",
    description:
      "질병 발견 위주의 건강검진만으로는 임직원 건강을 차별화해 관리하기 어렵습니다. 예방과 생활습관 개선을 중시하는 새로운 건강경영 전략이 필요합니다.",
  },
  {
    title: "참여를 이끌 실질적 프로그램",
    description:
      "복지 차원의 지원만으로는 임직원 참여율이 낮습니다. 데이터 기반으로 성과를 확인하고 동기부여할 수 있는 프로그램이 요구됩니다.",
  },
  {
    title: "투자 대비 효과 측정",
    description:
      "기업은 건강관리 투자에 대한 객관적 성과와 통합 리포트를 원합니다. 누적 데이터를 분석해 개선 결과를 확인할 수 있는 솔루션이 필요합니다.",
  },
] as const;

const ADVANTAGES = [
  "생체나이 기반의 실질적인 건강증진 서비스 제공",
  "건강상태를 수치화한 새로운 관리지표(생체나이, 노화속도) 제시",
  "부서·성별·연령별 건강통계와 노화 요인 분석으로 조직 현황 파악",
  "건강등수·개선도 공개로 임직원 참여와 동기부여 강화",
  "기업 맞춤 건강증진 프로그램과 연계 가능한 토탈 솔루션",
] as const;

const PROCESS = [
  {
    title: "건강분석",
    summary: "검진센터",
    description:
      "건강검진과 생체나이 결과를 결합해 기업·임직원 상태를 진단합니다.",
  },
  {
    title: "관리기준 제시",
    summary: "데이터 분석",
    description:
      "기업 건강증진 리포트를 통해 부서별 노화요인과 우선 관리 항목을 제안합니다.",
  },
  {
    title: "맞춤 프로그램 운영",
    summary: "Wellness 실행",
    description:
      "생체나이 개선 목표를 기반으로 영양·운동·스트레스 관리 프로그램을 제공합니다.",
  },
] as const;

const REPORT_BUNDLES = [
  {
    audience: "인사/검진 담당자용",
    title: "기업건강분석 리포트",
    points: [
      "기업 아이덴티티에 맞춘 커스터마이징 표지와 구성",
      "전체 요약 대시보드로 건강 수준을 직관적으로 확인",
      "기업 생체나이 추세와 부서별·성별/연령별 비교 분석",
      "핵심 노화 요인과 위험 요인에 대한 개선 전략 제시",
    ],
  },
  {
    audience: "임직원용",
    title: "전사 게재형 리포트",
    points: [
      "전사 공지용 요약 리포트로 기업 건강 상태 공유",
      "개인별 생체나이 결과와 건강등수를 안내하여 동기 부여",
      "맞춤 케어 프로그램과 연동할 수 있는 실행 가이드 제공",
    ],
  },
] as const;

const VALUE_TAGS = [
  "데이터 기반 건강경영",
  "참여 중심 프로그램",
  "성과 측정 & 피드백",
  "기업 맞춤 리포트",
  "지속 가능한 웰니스",
] as const;

export default function ProductBizcarePage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="기업건강분석" />
      <Tabs>
        <Tab id="overview" label="개요">
          <CommonIntroSection
            heading={
              <p>
                기업맞춤 건강증진 프로그램 <br />
                <span className={styles.highlight}>바이오에이지 BIZCARE</span>
              </p>
            }
            imageSrc="/resources/images/sub/sub_0202_img_01.jpg"
            subChildren={
              <TextBlock
                text={`바이오에이지는 생체나이 결과를 분석하여 기업의 노화도 및 임직원의 성별, 연령별 건강상태를 측정하고,
              부서별 등수 및 기업의 노화요인을 분석하여 기업의 건강상태에 기반한 건강증진 프로그램을 제공합니다.`}
                align="center"
                maxWidth="800px"
              />
            }
          />
          <CommonIntroSection
            heading="기업맞춤 건강증진 프로그램의 필요"
            subChildren={<CorpWellnessReasons />}
          />
        </Tab>
        <Tab id="special" label="특장점">
          <CommonTableSection
            isCheckIcon={true}
            items={[
              "건강검진 결과와 연계한 실질적인 건강증진 서비스 - 건강검진 데이터를 바탕으로 한 생체나이 측정서비스 제공",
              "건강상태의 새로운 관리지표 제시 - 건강상태를 객관적으로 나타내는 생체나이 변화를 통한 건강관리",
              "임직원(부서) 건강관리현황 통계 제공 - 기업 생체나이(누적비교), 부서별 생체나이 등수, 성별/연령별 생체나이 분석, 기업 노화요인 분석",
              "건강등수에 따른 건강관리 동기부여 - 임직원 개인의 건강등수 관리 (예 : 인사고과 반영 가능).",
              "기업맞춤 건강증진 프로그램 제공 - 기업생체나이 및 노화요인(대사증후군)을 통한 건강증진 프로그램 제공",
            ]}
            subChildren={
              <HighlightBanner
                text={
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    매년 꼬박꼬박 검진을 받고 질병은 없다는데 몸은 항상 피로하고
                    아프고 잔병치레가 많을 때 걱정되고 답답하기만 하죠.
                    <br />
                    질병이 없더라도 당신의 몸은 이미 노화가 진행되고 있기
                    때문입니다.
                  </div>
                }
              />
            }
          />
        </Tab>
        <Tab id="process" label="프로세스">
          <CommonIntroSection
            heading="적용프로세스"
            subChildren={
              <>
                <TextBlock
                  size="sm"
                  text="생체나이 건강검진 결과를 바탕으로 기업 건강상태를 분석합니다. 바이오에이지의 생체나이 측정 시스템은 실질적인 동기부여와 참여를 통해 문제요인을 개선하는 기업 맞춤 건강증진 프로그램입니다. 이를 통해 1년 후 기업의 건강상태와 개선사항을 파악할 수 있습니다."
                />
                <CorpProgramFlow />
              </>
            }
          />
        </Tab>
        <Tab id="analysis" label="분석리포트">
          <TextBlock
            size="sm"
            text="임직원의 생체나이 결과를 분석하여 기업건강 승진리포트를 제공합니다.
기업건강 승진리포트는 인사/복지 담당자를 위한 기업건강 분석리포트와 기업 내 개인(임직원)이 기업건강을 확인할 수 있는 게재형 리포트로 나뉩니다."
          />
          <CommonIntroSection
            heading="인사(검진) 담당자용"
            subChildren={
              <>
                <TextBlock text="기업건강분석 리포트" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <MobilityFeatureCard
                    title="기업 IDENTITY 맞춤형 표지"
                    imageSrc="/resources/images/sub/sub_020204_img_0101.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="전체 요약 SUMMARY"
                    imageSrc="/resources/images/sub/sub_020204_img_0102.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="기업 생체나이"
                    imageSrc="/resources/images/sub/sub_020204_img_0103.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="부서별 생체나이"
                    imageSrc="/resources/images/sub/sub_020204_img_0104.jpg"
                    description={[]}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <MobilityFeatureCard
                    title="성별/연령별 생체나이"
                    imageSrc="/resources/images/sub/sub_020204_img_0105.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="기업 노화요인 분석"
                    imageSrc="/resources/images/sub/sub_020204_img_0106.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="부서별 집중관리 대상"
                    imageSrc="/resources/images/sub/sub_020204_img_0107.jpg"
                    description={[]}
                  />
                  <MobilityFeatureCard
                    title="기능 나이별 1등 부서"
                    imageSrc="/resources/images/sub/sub_020204_img_0108.jpg"
                    description={[]}
                  />
                </div>
              </>
            }
          />
          <CommonIntroSection
            heading="임직원 (개인별)"
            subChildren={
              <>
                <TextBlock text="전사 게재형 리포트" />
                <MobilityFeatureCard
                  title="전사 게재형 리포트"
                  imageSrc="/resources/images/sub/sub_020204_img_0201.jpg"
                  description={[]}
                />
              </>
            }
          />
        </Tab>
      </Tabs>
    </main>
  );
}
