import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import PageTitle from "@/app/components/section/PageTitle";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";

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
    product: "다나아데이터 ‘스마트케어’",
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
    <main className={styles.wrapper}>
      <PageTitle title="비전" />
      <CommonIntroSection
        heading="사업영역 및 비즈니스 모델"
        imageSrc="/resources/images/sub/sub_0102_img_01.jpg"
        backgroundColor="#fff"
      />

      <CommonIntroSection
        heading="핵심역량"
        backgroundColor="#fff"
        children={
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">상품명</th>
                  <th scope="col">특징</th>
                </tr>
              </thead>
              <tbody>
                {COMPETENCIES.map((item) => (
                  <tr key={item.category}>
                    <th scope="row">{item.category}</th>
                    <td>{item.product}</td>
                    <td>
                      <ul>
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
        }
      />
    </main>
  );
}
