import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "바이오에이지 | DANAA",
  description:
    "생체나이 측정과 맞춤형 헬스케어 솔루션을 제공하는 DANAA 바이오에이지 공식 사이트",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "바이오에이지 | DANAA",
    description:
      "생체나이 측정과 맞춤형 헬스케어 솔루션으로 건강한 삶을 제안합니다.",
    url: "https://www.danaa.co.kr",
    siteName: "DANAA BIO-AGE",
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
