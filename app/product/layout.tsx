import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductSubNav } from "./SubNav";
import Banner from "../components/Banner";

export default function ProductLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <Banner
        title="상품소개"
        description="개인부터 기업의 건강상태까지 풍부한 데이터를 바탕으로
설계된 평생 건강관리 시스템"
        backgroundImage="/resources/images/sub/sub_top_img_02.jpg"
      />
      <ProductSubNav />
      {children}
      <Footer />
    </>
  );
}
