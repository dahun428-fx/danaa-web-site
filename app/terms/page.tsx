import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../policy.module.css";

const CLAUSES = [
  {
    title: "제1조 (목적)",
    description:
      "이 약관은 다나아데이터가 제공하는 생체나이 분석 및 헬스케어 관련 서비스 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (용어의 정의)",
    list: [
      "'서비스'란 다나아데이터가 제공하는 모든 온라인 및 오프라인 솔루션을 의미합니다.",
      "'이용자'란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.",
    ],
  },
  {
    title: "제3조 (약관의 효력과 개정)",
    list: [
      "본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.",
      "회사는 관련 법령을 위반하지 않는 범위에서 약관을 개정할 수 있으며, 개정 내용은 사전에 공지합니다.",
    ],
  },
  {
    title: "제4조 (서비스의 제공 및 변경)",
    list: [
      "회사는 연구 및 운영상 필요한 경우 서비스 내용을 변경하거나 중단할 수 있습니다.",
      "중요한 변경이 있을 경우 사전에 이용자에게 안내합니다.",
    ],
  },
  {
    title: "제5조 (이용자의 의무)",
    list: [
      "정확한 정보를 제공하고 제3자의 권리를 침해하지 않아야 합니다.",
      "서비스 이용 시 관련 법령과 본 약관을 준수해야 합니다.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <section className={styles.intro}>
          <h1>이용약관</h1>
          <p>
            다나아데이터 서비스를 이용해 주셔서 감사합니다. 아래 약관은 서비스
            이용과 관련한 기본 규칙과 이용자의 권리 및 의무를 설명합니다.
          </p>
        </section>
        {CLAUSES.map((clause) => (
          <section key={clause.title} className={styles.section}>
            <h2>{clause.title}</h2>
            {clause.description ? <p>{clause.description}</p> : null}
            {clause.list ? (
              <ul>
                {clause.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <section className={styles.section}>
          <h2>부칙</h2>
          <p>본 약관은 2025년 1월 1일부터 적용됩니다.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
