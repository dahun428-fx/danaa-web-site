import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CompanySubNav } from "./SubNav";
import Banner from "../components/Banner";

export default function CompanyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <Banner
        title="회사소개"
        description="국내 유일의 생체나이 개발기업, 다나아데이터를 만나보세요!"
        backgroundImage="/resources/images/sub/sub_top_img_01.jpg"
      />
      <CompanySubNav />
      {children}
      <Footer />
    </>
  );
}
