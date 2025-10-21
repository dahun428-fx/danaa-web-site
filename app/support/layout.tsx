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
      <Banner title="고객센터" />
      <SupportSubNav />
      {children}
      <Footer />
    </>
  );
}
