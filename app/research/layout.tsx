import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ResearchSubNav } from "./SubNav";

export default function ResearchLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <ResearchSubNav />
      {children}
      <Footer />
    </>
  );
}
