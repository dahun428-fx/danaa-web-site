import Link from "next/link";
import styles from "./page.module.css";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";
import PageTitle from "@/app/components/section/PageTitle";
import CommonTableSection from "@/app/components/section/CommonTableSection";

const LITERATURE_LINKS = [
  { name: "보건연구정보센터", url: "http://www.richis.org" },
  { name: "한국교육학술정보원", url: "http://www.riss4u.net" },
  {
    name: "의학논문검색서비스",
    url: "http://www.mdhouse.com/medical/journal.htm",
  },
  { name: "Koreamed", url: "http://koreamed.org" },
  {
    name: "PubMed",
    url: "http://www.ncbi.nlm.nih.gov/sites/entrez",
  },
  { name: "Medscape", url: "http://www.medscape.com/" },
] as const;

const ORGANIZATION_LINKS = [
  { name: "대한병원협회", url: "http://www.kha.or.kr" },
  { name: "대한의학회", url: "http://www.kams.or.kr" },
  { name: "서울시의사회", url: "http://www.sma.or.kr" },
  { name: "대한임상노인의학회", url: "http://www.koreangeriatrics.or.kr" },
  { name: "대한노인병학회", url: "http://www.geriatrics.or.kr" },
  { name: "대한노인정신의학회", url: "http://www.kagp.or.kr" },
  { name: "한국노년학회", url: "http://www.tkgs.or.kr" },
  { name: "대한임상노화방지학회", url: "http://www.ka3m.or.kr/" },
  { name: "세계노화방지학회", url: "http://wosaam.org" },
  { name: "미국노화방지학회", url: "http://www.worldhealth.net" },
  { name: "한국보건산업진흥원", url: "http://www.khidi.or.kr" },
  { name: "한국보건사회연구원", url: "http://www.kihasa.re.kr" },
] as const;

function LinkTable({
  title,
  links,
}: {
  title: string;
  links: readonly { name: string; url: string }[];
}) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">사이트명</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {links.map((item) => (
              <tr key={item.url}>
                <th scope="row">{item.name}</th>
                <td>
                  <Link
                    href={item.url}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.url}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ResearchLinksPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="관련 사이트" />
      <CommonIntroSection
        heading="문헌 검색"
        backgroundColor="#ffffff"
        subChildren={<LinkTable title="" links={LITERATURE_LINKS} />}
      />
      <CommonIntroSection
        heading="학회 / 단체"
        backgroundColor="#ffffff"
        subChildren={<LinkTable title="" links={ORGANIZATION_LINKS} />}
      />
    </main>
  );
}
