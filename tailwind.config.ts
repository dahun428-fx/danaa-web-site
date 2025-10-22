import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0f172a",
        "brand-blue": "#2563eb",
        "brand-cyan": "#38bdf8",
        "brand-slate": "#475569",
      },
      boxShadow: {
        "xl-soft": "0 35px 70px rgba(15, 23, 42, 0.15)",
        "lg-soft": "0 24px 48px rgba(15, 23, 42, 0.12)",
        "md-soft": "0 18px 36px rgba(15, 23, 42, 0.12)",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "\"Noto Sans KR\"",
          "\"Segoe UI\"",
          "\"Apple SD Gothic Neo\"",
          "\"Malgun Gothic\"",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
