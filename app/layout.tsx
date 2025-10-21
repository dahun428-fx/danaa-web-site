import { readFile } from "fs/promises";
import type { ReactNode } from "react";
import path from "path";
import "./globals.css";

const HEAD_PATH = path.join(process.cwd(), "generated", "head.html");

async function loadHeadHtml(): Promise<string> {
  try {
    return await readFile(HEAD_PATH, "utf-8");
  } catch (error) {
    console.warn(`Failed to read head HTML from ${HEAD_PATH}:`, error);
    return "";
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const headHtml = await loadHeadHtml();

  return (
    <html lang="ko" suppressHydrationWarning>
      <head dangerouslySetInnerHTML={{ __html: headHtml }} />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
