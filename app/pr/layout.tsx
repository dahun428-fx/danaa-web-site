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
      <Banner title="PR센터" />
      <PrSubNav />
      {children}
      <Footer />
    </>
  );
}
