import Image from "next/image";
import styles from "./page.module.css";
import PageTitle from "@/app/components/section/PageTitle";
import Tabs, { Tab } from "@/app/components/tab/Tabs";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";
import TextBlock from "@/app/components/text/TextBlock";
import HighlightBanner from "@/app/components/text/HighlightBanner";
import PentagonHighlights from "./PentagonHighlights";
import CommonTableSection from "@/app/components/section/CommonTableSection";
import ConditionCardGrid from "@/app/components/card/ConditionCardGrid";
import ConditionCard from "@/app/components/card/ConditionCard";
import FeatureSplitList from "./FeatureSplitList";
import CommonStepsBanner from "@/app/components/card/CommonStepsBanner";
import CenteredImageWithText from "@/app/components/card/CenteredImageWithText";

const SERVICE_ELEMENTS = [
  {
    title: "잠재 질병 위험도",
    description:
      "유전적 요인으로 발생 가능성이 높은 질병을 사전에 파악해 선제적으로 관리합니다.",
  },
  {
    title: "식이 타입 · 영양소",
    description:
      "체질에 맞는 식이 유형과 필요 영양성분을 분석해 맞춤형 영양 전략을 제시합니다.",
  },
  {
    title: "맞춤 운동 전략",
    description:
      "체질과 유전자 특성에 기반한 운동 반응성을 분석해 최적의 운동 가이드를 제안합니다.",
  },
] as const;

const ANALYSIS_PACKAGES = [
  {
    title: "암 질환",
    items: [
      "위암, 대장암, 폐암, 간암, 갑상선암, 췌장암, 방광암, 식도암, 신장암",
      "남성 특화: 전립선암, 고환암",
      "여성 특화: 유방암, 자궁내막암, 난소암",
    ],
  },
  {
    title: "일반 질환",
    items: [
      "파킨슨병, 알츠하이머병, 뇌졸중, 뇌동맥류, 고혈압, 편두통, 제2형 당뇨, 골다공증, 고관절염, 비만, 만성폐쇄성질환, 심근경색증, 심박세동, 천식, 우울증",
    ],
  },
] as const;

const CUSTOM_OPTIONS = [
  {
    title: "수검자 직접 선택",
    description:
      "가족력, 성별, 관심 질환 등에 따라 필요한 검사 항목을 자유롭게 선택할 수 있습니다.",
  },
  {
    title: "다양한 검사 타입",
    description:
      "풍부한 검사 라인업으로 개인 맞춤형 케어플랜을 구성하고 체계적인 관리가 가능합니다.",
  },
] as const;

const RELIABILITY_POINTS = [
  "질병관리청 신고를 완료한 공인 검사기관에서 진행해 검사 정확도를 보증합니다.",
  "한국인·동아시아인을 대상으로 한 연구 데이터를 기반으로 분석합니다.",
  "유전체 및 바이오인포매틱스 전문 인력이 데이터 해석과 상담을 지원합니다.",
] as const;

const PROCESS_STEPS = [
  "유전자 검사 상담 및 동의서 작성",
  "혈액 채취",
  "DNA 추출 및 유전정보 분석",
  "유전자 분석 리포트 제작",
  "의료진 상담 및 맞춤 건강관리",
] as const;

const TEST_STRENGTHS = [
  {
    title: "한국인 맞춤 유전자 분석",
    description:
      "한국인에게 특이적으로 작용하는 유전 변이를 집중 분석해 위험도를 보다 정확하게 도출합니다.",
  },
  {
    title: "정확한 검사 체계",
    description:
      "질병관리청 유전자검사기관으로 등록된 기관에서 수행하며 다년간 최고 등급을 획득한 검사 품질을 제공합니다.",
  },
  {
    title: "검증된 기술력과 경험",
    description:
      "차세대 염기서열 분석 기반 암 유전자 패널 검사 수행 경험을 바탕으로 정확한 분석과 상담을 보장합니다.",
  },
] as const;

const SERVICE_TAGS = [
  "고위험 질환 조기 대응",
  "맞춤 영양·운동 전략",
  "한국인 대상 데이터",
  "전문 의료진 상담",
  "사후 관리 연계",
] as const;

const ITEMS = [
  { no: "01", title: "잠재적 질병\n발생 위험도" },
  { no: "02", title: "식이타입,\n필요 영양성분" },
  { no: "03", title: "효과적인\n운동 방법" },
];

export default function ProductGenopacPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="유전자분석" />
      <Tabs>
        <Tab id="overview" label="개요">
          <CommonIntroSection
            heading="GenoPAC 유전자 분석 서비스"
            imageSrc="/resources/images/sub/sub_0203_img_01.jpg"
            subChildren={
              <TextBlock text="기존 건강검진이 질병의 발견과 치료에 그 목적이 있었다면 유전자 분석 서비스는 현재의 질병 뿐만 아니라 미래에 발병할 수 있는 질병을 예측하여 집중 관리할 수 있는 최첨단 맞춤 의학 시스템 입니다." />
            }
          />
          <CommonIntroSection
            heading="GenoPAC 유전자 분석 서비스 개요"
            imageSrc="/resources/images/sub/sub_0203_img_02.jpg"
            title="최첨단 맞춤의학 시스템"
            children={
              <TextBlock text="모든 사람의 유전정보는 99.9%가 같으며, 단 0.1%만이 개인의 고유 유전정보입니다. 이 0.1%에 해당하는 유전자 부위를 SNP (Single Nucleotide Polymorphism)라고 하는데, 이 차이로 인해 피부색, 생김새, 질환에 대한 저항력, 약물 반응성, 식이타입 등이 달라지게 됩니다. GenoPAC은 사람마다 가지고 있는 고유의 유전정보를 분석하여 선천적 질병 위험도를 파악하고, 이를 통해 건강을 관리하는 헬스케어 서비스 입니다." />
            }
          />
          <CommonIntroSection
            heading="GenoPAC의 제공 서비스"
            children={<PentagonHighlights items={ITEMS} />}
            subChildren={
              <HighlightBanner
                text={
                  <>
                    본 유전자 검사는 질환의 유전적 요인에 따른 위험도를 예측하는
                    것으로 질병의 유무를 진단하는 자료로 사용될 수 없습니다.
                    <br />
                    질환의 발병 여부는 유전적 요인과 더불어 가족력, 성별,
                    생활습관 등의 환경요인의 영향을 함께 받기 때문에 정확한
                    진단을 위해서는 별도의 검사가 필요합니다.
                    <br />
                    따라서 본 유전자 분석 리포트는 전문 의료진의 상담을 통해
                    올바른 지침에 따라 건강관리를 하는데 보조자료로 사용하시기
                    바랍니다.
                  </>
                }
              />
            }
          />
        </Tab>
        <Tab id="features" label="특장점">
          <CommonIntroSection
            subHeading="GenoPAC 유전자 분석 서비스의"
            heading="차별화된 컨텐츠"
            subChildren={
              <CommonTableSection
                items={[
                  "한국인의 유병률을 고려하여 핵심 질환 항목 선정",
                  "암 이외에 주요 사망 요인으로 꼽히는 뇌혈관질환, 대사성질환, 폐질환 등 일반질환 항목을 추가로 구성",
                  "건강관리 시 유용하게 활용할 수 있는 식이타입, 영양요구량 등의 항목 마련",
                ]}
              />
            }
          />
          <CommonIntroSection
            isLine={false}
            subChildren={
              <ConditionCardGrid columns={2}>
                <ConditionCard
                  iconSrc="/resources/images/sub/sub_0203_icon_0201.png"
                  iconAlt="암 아이콘"
                  title="암 질환"
                  items={[
                    "공통: 위암, 대장암, 폐암, 간암, 갑상선암, 췌장암, 방광암, 식도암, 신장암",
                    "남성암: 전립선암, 고환암",
                    "여성암: 유방암, 자궁내막암, 난소암",
                  ]}
                />
                <ConditionCard
                  iconSrc="/resources/images/sub/sub_0203_icon_0202.png"
                  iconAlt="일반 질환 아이콘"
                  title="일반 질환"
                  items={[
                    "파킨슨병, 알츠하이머병, 뇌졸중, 뇌동맥류",
                    "고혈압, 편두통, 제2형당뇨, 골다공증",
                    "고관절염, 비만, 만성폐쇄성질환, 심근경색증",
                    "심박세동, 천식, 우울증",
                  ]}
                />
              </ConditionCardGrid>
            }
          />
          <CommonIntroSection
            heading="선택형 맞춤 관리"
            subChildren={
              <>
                <FeatureSplitList
                  items={[
                    {
                      step: "01",
                      title: "수검자 직접 선택",
                      description:
                        "수검자의 관심도, 가족력, 질병 보유 여부, 성별 등에 따라 원하는 항목을 선택할 수 있습니다.",
                      image: {
                        src: "/resources/images/sub/sub_0203_img_0201.jpg",
                        alt: "체크리스트 작성",
                      },
                      imageFirst: false, // 이미지 오른쪽
                    },
                    {
                      step: "02",
                      title: "다양한 검사 종류",
                      description:
                        "수검자의 선택의 폭이 넓어 본인이 원하는 검사를 통해 맞춤 관리가 가능합니다.",
                      image: {
                        src: "/resources/images/sub/sub_0203_img_0202.jpg",
                        alt: "혈당 측정 기기와 약",
                      },
                      imageFirst: true, // 이미지 왼쪽
                    },
                  ]}
                />
              </>
            }
          />
          <CommonIntroSection
            heading="높은 분석 신뢰도"
            subChildren={
              <>
                <CommonStepsBanner
                  steps={[
                    {
                      no: "01",
                      title: "모든 검사 항목은 질병관리본부에 신고 완료합니다.",
                      image: "/resources/images/sub/sub_0203_img_0203.jpg",
                      alt: "건강검진 장면",
                    },
                    {
                      no: "02",
                      title:
                        "동아시아, 한국인 대상 연구를 기본 활용하여 분석합니다.",
                      image: "/resources/images/sub/sub_0203_img_0204.jpg",
                      alt: "채혈 장면",
                    },
                    {
                      no: "03",
                      title:
                        "고도의 유전체/bioinformatics 분석 기술력을 기반으로 한 결과를 산출합니다.",
                      image: "/resources/images/sub/sub_0203_img_0205.jpg",
                      alt: "분석 리포트",
                    },
                  ]}
                />
              </>
            }
          />
        </Tab>
        <Tab id="process" label="프로세스">
          <CommonIntroSection
            heading="GenoPAC의 서비스 프로세스"
            subChildren={
              <>
                <CommonStepsBanner
                  steps={[
                    {
                      no: "01",
                      title: (
                        <p>
                          유전자 검사 상담 및 <br /> 동의서 작성
                        </p>
                      ),
                      image: "/resources/images/sub/sub_0203_img_0203.jpg",
                      alt: "건강검진 장면",
                    },
                    {
                      no: "02",
                      title: "혈액 채취",
                      image: "/resources/images/sub/sub_0203_img_0204.jpg",
                      alt: "채혈 장면",
                    },
                    {
                      no: "03",
                      title: "DNA 추출 및 유전정보 분석",
                      image: "/resources/images/sub/sub_0203_img_0205.jpg",
                      alt: "분석 리포트",
                    },
                    {
                      no: "04",
                      title: (
                        <p>
                          유전자분석 <br />
                          리포트 제작
                        </p>
                      ),
                      image: "/resources/images/sub/sub_0203_img_0205.jpg",
                      alt: "분석 리포트",
                    },
                    {
                      no: "05",
                      title: (
                        <p>
                          의료진 상담 후<br /> 건강관리
                        </p>
                      ),
                      image: "/resources/images/sub/sub_0203_img_0205.jpg",
                      alt: "분석 리포트",
                    },
                  ]}
                />
              </>
            }
          />
          <CommonIntroSection
            isLine={false}
            backgroundColor="#fff"
            subChildren={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <CenteredImageWithText
                  src="/resources/images/sub/sub_0203_img_0306.jpg"
                  alt="GenoPAC 유전자 분석 리포트 예시"
                  text="유전자 검사 상담 및 동의서 작성"
                />
                <CenteredImageWithText
                  width={350}
                  height={205}
                  src="/resources/images/sub/sub_0203_img_0307.jpg"
                  alt="GenoPAC 유전자 분석 리포트 제작"
                  text="유전자분석 리포트 제작"
                />
              </div>
            }
          />
        </Tab>
        <Tab id="report" label="상품설명">
          <CommonIntroSection
            heading="GenoPAC 유전자검사의 강점"
            subChildren={
              <ConditionCardGrid columns={3}>
                <ConditionCard
                  iconSrc="/resources/images/sub/sub_0203_icon_0401.png"
                  iconAlt="한국인 맞춤 유전자 분석"
                  title="한국인 맞춤 유전자 분석"
                  items={[
                    "암과 질병에 연관된 유전자의 발현 여부는 인종에 따라 특이적으로 작용하기에 한국인(또는 동남아시아인)에게 특이적인 맞춤형 유전자를 찾아 발생 가능한 암과 질환에 대한 위험도를 보다 정확하게 보고합니다.",
                  ]}
                />
                <ConditionCard
                  iconSrc="/resources/images/sub/sub_0203_icon_0402.png"
                  iconAlt="정확한 검사"
                  title="정확한 검사"
                  items={[
                    "질병관리본부 유전자검사기관으로 등록된 검사기관에서 검사를 진행하여 매년 실시되는 평가에서 다년간 최고급 등급을 받고 있어 정확도를 보장하는 검사입니다.",
                  ]}
                />
                <ConditionCard
                  iconWidth={40}
                  iconHeight={40}
                  iconSrc="/resources/images/sub/sub_0203_icon_0403.png"
                  iconAlt="탄탄한 기술력과 풍부한 경험"
                  title="탄탄한 기술력과 풍부한 경험"
                  items={[
                    "본 검사기관은 복지보건부가 지정한 차세대염기서열 분석법 기반 암 유전자 패널 검사 실시기관으로써 축적된 기술력과 경험이 풍부하여 정확도 높은 유전자 선정, 정확한 분석, 유전 상담에 이르기까지 높은 신뢰도를 보장합니다.",
                  ]}
                />
              </ConditionCardGrid>
            }
          />
        </Tab>
      </Tabs>
    </main>
  );
}
