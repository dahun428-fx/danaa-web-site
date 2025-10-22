import Image from "next/image";
import styles from "./page.module.css";
import PageTitle from "@/app/components/section/PageTitle";
import Tabs, { Tab } from "@/app/components/tab/Tabs";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";
import BioAgeHighlights from "./BioAgeHighlights";
import MobilityFeatureCard from "@/app/components/card/MobilityFeatureCard";
import CommonTableSection from "@/app/components/section/CommonTableSection";
import StepProcess from "./StepProcess";
import StepsBanner from "./StepsBanner";
import BioAgeDefinition from "./BioAgeDefinition";
import BioAgeResult from "./BioAgeResult";
import BioAgeCheckList from "./BioAgeCheckList";
import PentagonProcess from "./PentagonProcess";
import BioAgeComparison from "./BioAgeComparison";
import CommonStepsBanner from "@/app/components/card/CommonStepsBanner";
import TextBlock from "@/app/components/text/TextBlock";

const HERO_COPY = [
  "세계 최초 40만 여 명의 임상 데이터를 기반으로 개발된 바이오에이지 생체나이 측정 시스템은 설문이 아닌 실제 건강검진 데이터를 분석하여 개인의 건강상태와 노화 정도를 정밀하게 진단합니다.",
  "객관화된 생체나이와 노화요인 분석 결과를 제공해 의료기관, 기업, 지자체 등 다양한 환경에서 예방 중심의 헬스케어 프로그램을 운영할 수 있도록 돕습니다.",
];

const DEVELOPMENT_HIGHLIGHTS = [
  "개인의 노화 정도를 생물학적 나이로 측정, 산출이 가능",
  "노화방지 치료 효과를 객관적으로 판단",
  "식이요법과 운동 등과 같은 식생활 양식의 변화, 부족한 호르몬의 보충을 위한 다양한 항산화제 처방 가능",
  "동일한 환자에 대해 정기적으로 Bio-Age®의 반복 측정을 통한 개인의 노화속도까지도 파악",
];

const BACKGROUND_TEXT =
  "현대적인 노화방지 의학이 본격화된 이후, 과학적 근거가 있는 노화 측정 도구에 대한 연구가 지속되었습니다. 대한생체나이의학연구소는 축적된 임상 데이터를 기반으로 생체 표지자를 종합한 생물학적 나이를 산출할 수 있는 프로토콜을 개발해 노화방지 진료의 새로운 장을 열었습니다.";

const SYSTEM_HIGHLIGHTS = [
  {
    number: "01",
    title: "7종의 기능나이 분석",
    description:
      "건강검진 데이터를 토대로 종합 생체나이와 신체·대사·혈관·심폐·면역·콩팥·관절 기능나이를 과학적으로 산출합니다.",
  },
  {
    number: "02",
    title: "개인 건강상태 기반 분석",
    description:
      "개인별 노화 요인을 진단해 건강증진, 질병 예방, 생활습관 개선을 위한 맞춤형 프로그램을 제안합니다.",
  },
  {
    number: "03",
    title: "개선 정도 및 노화속도 추적",
    description:
      "연속 데이터를 활용해 생체나이 개선도와 3년간의 노화 속도 변화를 추적하며 관리 효율을 높입니다.",
  },
];

const SCIENCE_GALLERY = [
  {
    image: "/resources/images/sub/sub_0201_img_0201.jpg",
    title: "보건신기술(HT) 인증",
    description:
      "생체나이 측정 기술은 보건복지부 보건신기술 인증을 통해 신뢰성을 확보했습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0202.jpg",
    title: "Affymetrix Genchip 호환",
    description:
      "미국 Affymetrix Genchip compatible 인증을 국내에서 유일하게 획득했습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0203.jpg",
    title: "세계일류상품 선정",
    description:
      "산업자원부 세계 일류상품으로 선정되어 기술 경쟁력을 인정받았습니다.",
  },
  {
    image: "/resources/images/sub/sub_0201_img_0204.jpg",
    title: "다수의 학술 검증",
    description:
      "개발 소프트웨어와 분석 기술은 100편 이상의 SCI 논문에서 인용되었습니다.",
  },
];

const GENOME_HIGHLIGHTS = [
  "미국 Affymetrix Genchip compatible 인증(국내 유일)",
  "전 산업자원부 세계 일류상품 인증(유전체 정보 분석 분야 유일)",
  "100편 이상의 SCI 논문에 인용된 분석 알고리즘과 소프트웨어",
  "유전체 분석 기술 및 진단 마커 관련 특허 2건 보유",
];

const MEASUREMENT_FLOW = [
  {
    title: "건강검진",
    description:
      "종합검진과 직장검진 등 실제 건강검진 데이터를 기반으로 생체나이와 7가지 기능나이를 측정합니다.",
    image: "/resources/images/sub/sub_0201_img_0301.jpg",
  },
  {
    title: "건강상태 객관적 분석/평가",
    description:
      "생체나이 측정시스템을 통해 분석 리포트를 발행하고 건강상태를 객관화합니다.",
    image: "/resources/images/sub/sub_0201_img_0302.jpg",
  },
];

const HEALTH_CHECK_STEPS = [
  {
    step: "01",
    title: "건강(종합)검진 실시",
    description: "정기적인 종합검진으로 개인별 기초 데이터를 확보합니다.",
    image: "/resources/images/sub/sub_0201_img_0303.jpg",
  },
  {
    step: "02",
    title: "생체나이 측정 신청",
    description:
      "검진센터 또는 기업 프로그램을 통해 생체나이 분석을 의뢰합니다.",
    image: "/resources/images/sub/sub_0201_img_0304.jpg",
  },
  {
    step: "03",
    title: "분석 리포트 수령",
    description:
      "개선 가이드가 담긴 결과 리포트를 통해 생활습관을 지속적으로 관리합니다.",
    image: "/resources/images/sub/sub_0201_img_0305.jpg",
  },
];

const FUNCTION_AGES = [
  {
    title: "신체나이",
    description:
      "체력과 체형(비만) 상태를 종합해 기본적인 신체 노화를 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040201.jpg",
  },
  {
    title: "대사나이",
    description:
      "고혈압·당뇨·비만 등 대사증후군과 관련된 장기 상태를 종합한 나이입니다.",
    image: "/resources/images/sub/sub_0201_img_040202.jpg",
  },
  {
    title: "혈관나이",
    description:
      "혈압과 콜레스테롤 등 혈관 노화에 영향을 주는 요소를 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040203.jpg",
  },
  {
    title: "심폐나이",
    description: "호흡과 순환 기능 상태를 종합해 생명 유지 능력을 평가합니다.",
    image: "/resources/images/sub/sub_0201_img_040204.jpg",
  },
  {
    title: "면역나이",
    description:
      "외부 병원체에 대한 방어 능력을 평가해 면역력 저하를 조기에 확인합니다.",
    image: "/resources/images/sub/sub_0201_img_040205.jpg",
  },
  {
    title: "콩팥나이",
    description: "노폐물 처리와 체내 항상성 유지 기능을 종합적으로 판단합니다.",
    image: "/resources/images/sub/sub_0201_img_040206.jpg",
  },
  {
    title: "관절나이",
    description:
      "체중·근육·염증 상태를 통해 관절 기능의 노화 정도를 확인합니다.",
    image: "/resources/images/sub/sub_0201_img_040207.jpg",
  },
];

const PREMIUM_REPORT = [
  {
    title: "생체나이",
    description: "현재 노화 상태와 생체나이를 직관적으로 파악할 수 있습니다.",
    image: "/resources/images/sub/sub_0201_img_040301.jpg",
  },
  {
    title: "주요 노화 요인",
    description: "개인별 노화 요인과 건강관리 우선순위를 제시합니다.",
    image: "/resources/images/sub/sub_0201_img_040302.jpg",
  },
  {
    title: "스트레스 관리 가이드",
    description: "스트레스 유형과 관리 솔루션을 제공합니다.",
    image: "/resources/images/sub/sub_0201_img_040303.jpg",
  },
  {
    title: "영양·운동 가이드",
    description: "영양·운동 중심의 맞춤형 실천 전략을 안내합니다.",
    image: "/resources/images/sub/sub_0201_img_040304.jpg",
  },
];

const DISEASE_REPORT = [
  {
    title: "질환 발병 가능성 비교",
    description:
      "동일 연령대와 비교해 주요 만성질환의 발병 위험도를 제시합니다.",
    image: "/resources/images/sub/sub_0201_img_040401.jpg",
  },
  {
    title: "질병 예측 결과",
    description:
      "제2형 당뇨, 고혈압, 뇌혈관질환, 관상동맥질환의 발병 가능성을 예측합니다.",
    image: "/resources/images/sub/sub_0201_img_040402.jpg",
  },
  {
    title: "맞춤형 관리",
    description: "위험 요인에 따른 운동·식이 개선 방안을 제공합니다.",
    image: "/resources/images/sub/sub_0201_img_040403.jpg",
  },
];

const USE_CASES = [
  "일반 종합 정기 검진",
  "직장 종합 정기 검진",
  "정기 건강체크 및 비만·체형 검사",
  "노화방지·비만·웰빙 특수 클리닉",
  "노인·여성·남성 갱년기 종합검진",
  "기업 및 기관 맞춤 프로그램",
];

const ADOPTION_PROCESS = [
  "생체나이 측정시스템 사용 계약",
  "기존 검사결과와 연동되는 프로그램 환경 구축",
  "기관 내부 운영 방식에 맞춘 최적화로 사용 효율성 극대화",
];

const DIFFERENTIATION = {
  traditional: {
    title: "기존 건강검진",
    bullets: [
      "질병 발견이 주 목적이라 결과가 질병 유무에만 치중",
      "일회성 검진으로 끝나 후속 관리가 어렵습니다.",
      "차별화된 피드백이 부족해 고객 충성도가 낮습니다.",
    ],
    result: "재검진이나 장기 고객 확보가 어려움",
  },
  bioAge: {
    title: "바이오에이지 생체나이 측정시스템",
    bullets: [
      "노화도와 노화 요인을 정밀 분석해 맞춤 관리 지침을 제공합니다.",
      "지속적인 피드백으로 질병 예방과 개선 효과를 확보합니다.",
    ],
    highlights: ["기존 검진과의 차별성", "재검진율 증가", "추가 관리고객 확보"],
    result:
      "위험군 고객의 예방관리를 통해 신규 고객과 매출 확대를 기대할 수 있습니다.",
    note: "고객 만족도 제고를 통해 경쟁력 있는 검진센터로 도약할 수 있습니다.",
  },
} as const;

export default function ProductBioAgePage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="생체나이측정" />
      <Tabs>
        <Tab id="overview" label="개요">
          <CommonIntroSection
            heading="개인의 건강상태와 노화정도를 측정합니다."
            paragraphs={[]}
            imageSrc="/resources/images/sub/sub_0201_img_01.jpg"
            backgroundColor="#fff"
            isLine={false}
            subChildren={
              <p style={{ marginTop: "1rem", margin: "1rem" }}>
                세계 최초 실제 40만 여 명의 임상 데이터로 개발된 노화를 측정할
                수 있는 유일한 <br />
                시스템인 바이오에이지 생체나이 측정시스템은 설문이 아닌 실제
                검진데이터를 분석하여 <br />
                개인의 건강상태와 노화정도를 측정하는 시스템 입니다.
              </p>
            }
          />
          <CommonIntroSection
            heading="개발의의"
            title="노화방지 진료에 새로운 장을 열다."
            paragraphs={DEVELOPMENT_HIGHLIGHTS}
            backgroundColor="#fff"
            imageSrc="/resources/images/sub/sub_0201_img_02.jpg"
          />
          <CommonIntroSection
            heading="개발배경"
            topChildren={
              <TextBlock
                size="sm"
                text="의학의 발전과 더불어 이에 관한 많은 임상 자료가 축적되며, 일부
                선진국에서 노화 측정 시스템을 개발하여 임상에 적용하기
                시작하였습니다. 2003년 국내에서는 대한생체나이의학연구소와
                대한임상노화방지학회의 공동연구를 통해 외국시스템보다도 더욱
                발전된 노화 측정 시스템 (Bio-Age®)이 개발되어 노화방지 진료에
                새로운 장을 열게 되었습니다."
              />
            }
            subChildren={
              <CommonIntroSection
                isLine={false}
                imageSrc="/resources/images/sub/sub_0201_img_03.jpg"
                title="생체나이 측정 시스템 개발 배경"
                paragraphs={[
                  "현대적인 노화방지 의학이 시작된 1970년대 이래로 학자들은 노화방지 의학의 과학적인 개념과 프로토콜이 정확하게 적용될 수 있는 확실한 도구를 찾기 위해 수많은 연구를 계속해왔습니다. 각각의 생체 표지자 검사를 통한 개별적인 생물학 나이는 측정할 수 있었지만, 수많은 생체 표지자들을 종합한 진정한 생물학적 나이를 체계적으로 측정하는 것은 방대한 임상자료와 활용의 어려움으로 인해 힘든 일이었습니다. 이에, 대한생체나이의학연구소에서는 생체 표지자를 이용한 노화 측정 프로토콜 개발을 위한 연구를 시작하게 됩니다.",
                ]}
                children={<p></p>}
                backgroundColor="#fff"
                onlyParagraphs={true}
              />
            }
          />
        </Tab>
        <Tab id="strength" label="특장점">
          <BioAgeHighlights />
          <CommonIntroSection
            heading="과학/학술적 인증"
            subChildren={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MobilityFeatureCard
                  title="가동성 운동"
                  imageSrc="/resources/images/sub/sub_0201_img_0201_m.jpg"
                  description={[
                    "재발성 아프타성 구내염, 베체트 증후군,",
                    "외상성 궤양, 욕창성 궤양",
                  ]}
                />
                <MobilityFeatureCard
                  title="근력강화 운동"
                  imageSrc="/resources/images/sub/sub_0201_img_0202.jpg"
                  description={[
                    "천포창, 유천포창, 포진성 치은",
                    "구내염, 구순포진, 대상포진,",
                    "포진성 구협염, 수족구병",
                  ]}
                />
                <MobilityFeatureCard
                  title="심폐지구력 운동"
                  imageSrc="/resources/images/sub/sub_0201_img_0203.jpg"
                  description={["다형 홍반, 구강 칸디다증"]}
                />
                <MobilityFeatureCard
                  title="조절 및 협조 운동"
                  imageSrc="/resources/images/sub/sub_0201_img_0203.jpg"
                  description={["균열설, 설모증, 지도형설,", "방사선 점막염"]}
                />
              </div>
            }
          />
          <CommonTableSection
            isCheckIcon={true}
            heading="유전체 정보 분석 관련"
            items={GENOME_HIGHLIGHTS}
          />
        </Tab>
        <Tab id="method" label="측정방법">
          <StepProcess />
          <CommonIntroSection
            heading="생체나이 건강검진"
            topChildren={
              <TextBlock
                text="세계 최초 40만 여 명의 임상 데이터로 개발된 노화를 측정할 수
                있는 유일한 시스템인 바이오에이지 생체나이 측정시스템은 설문이
                아닌 실제 검진데이터를 분석하여 개인의 건강상태와 노화정도를
                측정하는 시스템 입니다."
              />
            }
            subChildren={
              <CommonStepsBanner
                steps={[
                  {
                    no: "01",
                    title: "건강(종합)검진 실시",
                    image: "/resources/images/sub/sub_0201_img_0303.jpg",
                    alt: "건강검진 장면",
                  },
                  {
                    no: "02",
                    title: "생체나이 측정 신청",
                    image: "/resources/images/sub/sub_0201_img_0304.jpg",
                    alt: "채혈 장면",
                  },
                  {
                    no: "03",
                    title: "분석 리포트 수령",
                    image: "/resources/images/sub/sub_0201_img_0305.jpg",
                    alt: "분석 리포트",
                  },
                ]}
              />
            }
          />
        </Tab>
        <Tab id="analysis" label="결과분석">
          <BioAgeDefinition
            title="생체나이란?"
            description="출생나이(주민등록상의 나이)가 아닌 현재 자신의 생리·기능적 건강상태 및 노화 정도를 나타내는 생물학적 나이입니다."
          >
            <Image
              src="/resources/images/sub/sub_0201_img_0401.jpg"
              alt="출생나이와 생체나이 비교 이미지"
              width={800}
              height={400}
            />
          </BioAgeDefinition>
          <CommonIntroSection
            heading="종합생체나이 제공"
            subChildren={
              <>
                <BioAgeResult />
              </>
            }
            backgroundColor="#fff"
          />
          <CommonIntroSection
            heading="생체나이 분석 리포트 (고급형)"
            topChildren={
              <p>
                개인의 전체적인 생리/기능적 노화 정도를 나타내는 생체나이를 통해
                개인의 건강상태를 종합적으로 판단하여 생체나이, 노화 관련 요인,
                생체나이 개선 스트레스 관리 가이드, 영양관리 가이드, 맞춤운동
                관리 프로그램 등이 담긴 결과지를 제공합니다.
              </p>
            }
            subChildren={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MobilityFeatureCard
                  title="생체나이"
                  imageSrc="/resources/images/sub/sub_0201_img_040301.jpg"
                  description={[]}
                />
                <MobilityFeatureCard
                  title="주요노화요인"
                  imageSrc="/resources/images/sub/sub_0201_img_040302.jpg"
                  description={[]}
                />
                <MobilityFeatureCard
                  title="노화개선 스트레스 관리가이드"
                  imageSrc="/resources/images/sub/sub_0201_img_040303.jpg"
                  description={[]}
                />
                <MobilityFeatureCard
                  title="노화개선 영양/운동 관리가이드"
                  imageSrc="/resources/images/sub/sub_0201_img_040304.jpg"
                  description={[]}
                />
              </div>
            }
          />
          <CommonIntroSection
            heading="생체나이 분석 리포트 (질환관리형)"
            topChildren={
              <TextBlock
                text="한국인 30만여 명의 임상데이터를 기반으로 한국인 주요 만성질환
                4가지 (제2형 당뇨, 고혈압, 뇌혈관질환, 관상동맥질환)의 발병
                가능성을 예측하고, 동일 연령대의 발병 가능성과 비교하여 현재
                수검자의 상태를 알려드립니다. 또한, 운동 및 식이를 통해 개선
                가이드를 제공합니다."
              />
            }
            subChildren={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MobilityFeatureCard
                  title="질환의 발병 가능성 비교"
                  imageSrc="/resources/images/sub/sub_0201_img_040401.jpg"
                  description={[]}
                />
                <MobilityFeatureCard
                  title="질병 예측 결과"
                  imageSrc="/resources/images/sub/sub_0201_img_040402.jpg"
                  description={[]}
                />
                <MobilityFeatureCard
                  title="맞춤형 관리"
                  imageSrc="/resources/images/sub/sub_0201_img_040403.jpg"
                  description={[]}
                />
              </div>
            }
          />
        </Tab>
        <Tab id="usecases" label="적용분야">
          <CommonIntroSection
            heading="검진상품"
            children={<BioAgeCheckList />}
          />
          <CommonIntroSection
            heading="적용프로세스"
            children={<PentagonProcess />}
          />
          <CommonIntroSection
            heading="도입효과"
            children={
              <TextBlock
                size="sm"
                text="질병의 유무만을 관리하고 일회성으로만 끝나던 기존 검진에서 벗어나 노화관리 및 질병예방이라는 컨셉으로 고객의 노화요인을 분석하고 관리 지침을 제공합니다. 기존 검진과의 차별성에 따른 신규 고객창출이 가능하며, 노화속도 추적관리를 위한 재검진 및 고객 만족도 증가 등의 매출향상 효과를 기대할 수 있습니다."
              />
            }
            subChildren={<BioAgeComparison />}
          />
        </Tab>
      </Tabs>
    </main>
  );
}
