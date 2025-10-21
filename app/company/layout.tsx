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
      <Banner title="회사소개" />
      <CompanySubNav />
      {children}
      <Footer />
    </>
  );
}
