import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SupportSubNav } from "./SubNav";

export default function SupportLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <SupportSubNav />
      {children}
      <Footer />
    </>
  );
}
