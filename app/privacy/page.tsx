import Header from "../components/Header";
import Footer from "../components/Footer";

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
      "요청은 고객센터(contact@danaa.co.kr)로 접수해 주십시오.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-screen-lg px-6 py-24 flex flex-col gap-12 md:px-4 md:py-20 text-gray-900">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">개인정보 처리방침</h1>
          <p className="text-base leading-relaxed text-gray-700">
            DANAA는 이용자의 개인정보를 소중하게 생각하며 관련 법령을 준수합니다.
            아래 방침을 통해 수집하는 정보와 이용 목적, 보유 기간 등을 안내드립니다.
          </p>
        </section>
        {SECTIONS.map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-base leading-relaxed text-gray-700">
              {section.contents.map((content) => (
                <li key={content}>{content}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">문의처</h2>
          <p className="text-base leading-relaxed text-gray-700">
            개인정보 보호와 관련된 문의는 <strong className="text-gray-900">contact@danaa.co.kr</strong> 또는
            고객센터(02-550-8967)로 연락 주시면 성실히 답변드리겠습니다.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
