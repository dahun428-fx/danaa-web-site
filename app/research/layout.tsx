import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResearchSubNav } from "./SubNav";
import Banner from "../components/Banner";

export default function ResearchLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <Banner
        title="연구개발"
        description="대한생체나이 의학연구소는 생체나이와 노화방지 분야를
이끌어 가고 있습니다."
        backgroundImage="/resources/images/sub/sub_top_img_03.jpg"
      />
      <ResearchSubNav />
      {children}
      <Footer />
    </>
  );
}
