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
      <Banner title="상품소개" />
      <ProductSubNav />
      {children}
      <Footer />
    </>
  );
}
