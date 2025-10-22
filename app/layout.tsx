import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "다나아데이터",
  description:
    "생체나이 측정과 맞춤형 헬스케어 솔루션을 제공하는 다나아데이터 공식 사이트",
  icons: {
    icon: "/resources/images/logo/Logo.png",
  },
  openGraph: {
    title: "다나아데이터",
    description:
      "생체나이 측정과 맞춤형 헬스케어 솔루션으로 건강한 삶을 제안합니다.",
    url: "https://www.danaa.co.kr",
    siteName: "DANAA DATA",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
