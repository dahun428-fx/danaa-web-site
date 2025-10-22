import Link from "next/link";
import styles from "./page.module.css";
import LocationInfo from "./LocationInfo";
import PageTitle from "@/app/components/section/PageTitle";

export default function CompanyLocationPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="오시는 길" />
      <section className={styles.mapWrap}>
        <iframe
          title="DANAA 본사 위치"
          src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%B4%89%EC%9D%80%EC%82%AC%EB%A1%9C114%EA%B8%B8%2012&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          className={styles.mapFrame}
          allowFullScreen
        />
      </section>
      <section>
        <LocationInfo />
      </section>
    </main>
  );
}
