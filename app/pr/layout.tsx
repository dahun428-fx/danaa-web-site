import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PrSubNav } from "./SubNav";
import Banner from "../components/Banner";

export default function PrLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <Banner
        title="PR센터"
        description="바이오에이지는 고객님의 의견을 소중히 생각합니다."
        backgroundImage="/resources/images/sub/sub_top_img_05.jpg"
      />
      <PrSubNav />
      {children}
      <Footer />
    </>
  );
}
