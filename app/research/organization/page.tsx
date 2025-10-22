import Image from "next/image";
import styles from "./page.module.css";
import PageTitle from "@/app/components/section/PageTitle";
import CommonIntroSection from "@/app/components/section/CommonIntroSection";

export default function ResearchOrganizationPage() {
  return (
    <main className={styles.wrapper}>
      <PageTitle title="연구소 조직" />
      <CommonIntroSection
        heading="조직 구성"
        imageSrc="/resources/images/sub/sub_0303_img_01.jpg"
        backgroundColor="#fff"
      />
      <CommonIntroSection
        heading="인력 구성"
        imageSrc="/resources/images/sub/sub_0303_img_02.jpg"
        backgroundColor="#fff"
      />
    </main>
  );
}
