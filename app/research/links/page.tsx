import Link from "next/link";

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
    <section className="flex flex-col gap-5">
      <h2 className="text-[1.6rem] font-semibold text-brand-navy">{title}</h2>
      <div className="overflow-hidden rounded-[20px] border border-brand-navy/10 bg-white shadow-[0_20px_36px_rgba(15,23,42,0.08)]">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-brand-navy/10 bg-brand-navy/5 px-5 py-4 text-left text-[0.98rem] font-semibold text-brand-navy">
                사이트명
              </th>
              <th className="border-b border-brand-navy/10 bg-brand-navy/5 px-5 py-4 text-left text-[0.98rem] font-semibold text-brand-navy">
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((item) => (
              <tr key={item.url}>
                <th
                  scope="row"
                  className="border-b border-brand-navy/10 px-5 py-4 text-left text-[0.98rem] font-semibold text-brand-navy"
                >
                  {item.name}
                </th>
                <td className="border-b border-brand-navy/10 px-5 py-4 text-[0.98rem] text-brand-navy/75">
                  <Link
                    href={item.url}
                    className="font-medium text-brand-blue hover:underline"
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
    <main className="mx-auto flex w-full max-w-[960px] flex-col gap-12 px-6 pb-24 pt-20">
      <section className="flex flex-col gap-3">
        <h1 className="text-[clamp(2rem,3vw,2.6rem)] font-bold text-brand-navy">
          관련 사이트
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-brand-navy/70">
          노화 및 웰에이징 연구와 관련된 국내외 문헌 검색 서비스와 학회/단체
          정보를 모았습니다. 추가로 공유하고 싶은 자료가 있으면 언제든지 제안해
          주세요.
        </p>
      </section>

      <LinkTable title="문헌 검색" links={LITERATURE_LINKS} />
      <LinkTable title="학회 / 단체" links={ORGANIZATION_LINKS} />
    </main>
  );
}
