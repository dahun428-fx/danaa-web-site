import { readFile } from "fs/promises";
import path from "path";

const BODY_PATH = path.join(process.cwd(), "generated", "body.html");

async function loadBodyHtml(): Promise<string> {
  try {
    return await readFile(BODY_PATH, "utf-8");
  } catch (error) {
    console.warn(`Failed to read body HTML from ${BODY_PATH}:`, error);
    return "<p>콘텐츠를 불러오지 못했습니다.</p>";
  }
}

export default async function Home() {
  const bodyHtml = await loadBodyHtml();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
      suppressHydrationWarning
    />
  );
}
