import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SupportSubNav } from "./SubNav";
import Banner from "../components/Banner";

export default function SupportLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <Banner
        title="고객센터"
        description="다나아데이터는 고객님의 의견을 소중히 생각합니다."
        backgroundImage="/resources/images/sub/sub_top_img_04.jpg"
      />
      <SupportSubNav />
      {children}
      <Footer />
    </>
  );
}
