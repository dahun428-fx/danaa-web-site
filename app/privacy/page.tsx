import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../policy.module.css";
import { email_info } from "../config/constant";

const SECTIONS = [
  {
    title: "수집하는 개인정보 항목",
    contents: [
      "필수 항목: 이름, 연락처, 이메일, 상담 내용",
      "서비스 이용 과정에서 생성되는 접속 로그, 쿠키, 이용 기록",
    ],
  },
  {
    title: "개인정보 이용 목적",
    contents: [
      "서비스 상담 및 고객 문의 응대",
      "맞춤형 서비스 제공을 위한 분석 및 통계",
      "법령 또는 이용약관 위반에 대한 조치",
    ],
  },
  {
    title: "보유 및 이용 기간",
    contents: [
      "수집 목적이 달성된 후 즉시 파기합니다.",
      "관계 법령에 따라 보존이 필요한 경우에는 해당 기간 동안 보관합니다.",
    ],
  },
  {
    title: "이용자 권리",
    contents: [
      "개인정보 열람, 정정, 삭제를 요청할 수 있습니다.",
      "동의를 철회하거나 처리 정지를 요구할 수 있습니다.",
      `요청은 고객센터(${email_info})로 접수해 주십시오.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <section className={styles.intro}>
          <h1>개인정보 처리방침</h1>
          <p>
            다나아데이터는 이용자의 개인정보를 소중하게 생각하며 관련 법령을
            준수합니다. 아래 방침을 통해 수집하는 정보와 이용 목적, 보유 기간
            등을 안내드립니다.
          </p>
        </section>
        {SECTIONS.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2>{section.title}</h2>
            <ul>
              {section.contents.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className={styles.section}>
          <h2>문의처</h2>
          <p>
            개인정보 보호와 관련된 문의는 <strong>{email_info}</strong> 또는
            고객센터(02-550-8967)로 연락 주시면 성실히 답변드리겠습니다.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
