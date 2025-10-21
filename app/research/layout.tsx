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
      <Banner title="연구개발" />
      <ResearchSubNav />
      {children}
      <Footer />
    </>
  );
}
