import CheckListGrid from "@/app/components/CheckList/CheckListGrid";

const ITEMS = [
  { text: "일반 종합 정기 검진" },
  { text: "직장 종합 정기 검진" },
  { text: "일반 외래 검진 - 정기적인 건강체크 검사 · 비만체형 검사" },
  { text: "특수 클리닉 (노화방지, 비만체형, 웰빙클리닉)" },
  {
    text: "특수 종합 검진",
    subtext: "(노인, 여성갱년기, 남성갱년기, 노화방지 종합검진)",
  },
];

export default function BioAgeCheckList() {
  return <CheckListGrid items={ITEMS} />;
}
