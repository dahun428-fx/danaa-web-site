import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danaa.co.kr"),
  title: {
    default: "다나아데이터 | 생체나이 측정과 헬스케어 솔루션",
    template: "%s | 다나아데이터",
  },
  description:
    "생체나이 측정과 맞춤형 헬스케어 솔루션을 제공하는 다나아데이터 공식 사이트",
  keywords: [
    "다나아데이터",
    "DANAA",
    "바이오에이지",
    "생체나이",
    "건강검진",
    "헬스케어",
    "노화측정",
    "맞춤형 건강관리",
  ],
  authors: [{ name: "다나아데이터", url: "https://www.danaa.co.kr" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "다나아데이터 | 생체나이 측정과 헬스케어 솔루션",
    description:
      "생체나이 측정과 맞춤형 헬스케어 솔루션으로 건강한 삶을 제안합니다.",
    url: "https://www.danaa.co.kr",
    siteName: "DANAA DATA",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/resources/images/sub/sub_top_img_01.jpg",
        width: 1200,
        height: 630,
        alt: "다나아데이터 생체나이 측정 시스템",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "다나아데이터 | 생체나이 측정과 헬스케어 솔루션",
    description:
      "생체나이 측정과 맞춤형 헬스케어 솔루션을 제공하는 다나아데이터 공식 사이트",
    images: ["/resources/images/sub/sub_top_img_01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/resources/images/logo/Logo.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
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
