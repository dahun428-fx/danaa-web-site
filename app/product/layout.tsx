import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductSubNav } from "./SubNav";

export default function ProductLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <ProductSubNav />
      {children}
      <Footer />
    </>
  );
}
