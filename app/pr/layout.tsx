import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PrSubNav } from "./SubNav";

export default function PrLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <PrSubNav />
      {children}
      <Footer />
    </>
  );
}
