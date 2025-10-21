import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CompanySubNav } from "./SubNav";

export default function CompanyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <CompanySubNav />
      {children}
      <Footer />
    </>
  );
}
