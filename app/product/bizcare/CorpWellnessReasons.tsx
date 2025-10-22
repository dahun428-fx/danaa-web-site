import React from "react";
import styles from "./CorpWellnessReasons.module.css";

type Reason = {
  no: string; // "01"
  leftTitle: string; // 오각형 안 제목(줄바꿈은 \n)
  title: string; // 오른쪽 굵은 제목
  body: string; // 오른쪽 본문
};

const REASONS: Reason[] = [
  {
    no: "01",
    leftTitle: "기업건강관리\n인식의 변화",
    title: "임직원 건강관리의 중요성 증대",
    body: "과거의 기업 건강관리는 건강검진을 의미하였습니다. 그러나 건강관리에 대한 인식이 질병관리에서 예방으로 변화하면서 질병의 유무만을 관리하는 건강검진으로는 차별화된 관리를 할 수 없음을 인식하게 되었습니다. 또한 임직원들의 건강관리가 업무능력 향상 및 인적자원 관리의 핵심요소로 인식되고 있습니다.",
  },
  {
    no: "02",
    leftTitle: "기업\n인사담당자들의\n고민",
    title: "임직원 참여를 유도할 수 있는 건강관리 프로그램의 필요",
    body: "건강검진을 통해 질병유무를 판단할 수 있음에 따라, 질병이 있는 사람들은 재검과 처방을 통한 치료를 할 수 있지만, 그외 인원은 실질적인 건강관리 혜택을 받을 수 없습니다. 복지차원에서 다양한 건강관리 비용을 지원하지만 현실적인 이유로 활용도가 낮은 편입니다.",
  },
  {
    no: "03",
    leftTitle: "실질적인\n건강관리\n프로그램의 필요",
    title: "토탈 헬스케어 서비스 제공",
    body: "임직원의 동기부여를 위한 실질적인 건강관리 프로그램의 필요성이 부각되면서 투자대비 효과를 판단할 수 있는 다양한 헬스케어 서비스가 생겨나고 있습니다.",
  },
];

export default function CorpWellnessReasons() {
  return (
    <section className={styles.section}>
      {REASONS.map((r) => (
        <div key={r.no} className={styles.row}>
          <div className={styles.left}>
            <Pentagon className={styles.pentagon} />
            <div className={styles.inside}>
              <span className={styles.no}>{r.no}</span>
              <span className={styles.sep}>|</span>
              <h3 className={styles.leftTitle}>
                {r.leftTitle.split("\n").map((ln, i) => (
                  <span key={i} className={styles.br}>
                    {ln}
                  </span>
                ))}
              </h3>
            </div>
          </div>

          <div className={styles.right}>
            <h4 className={styles.title}>{r.title}</h4>
            <p className={styles.body}>{r.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

/* 오각형 외곽선 SVG */
function Pentagon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 220" aria-hidden="true">
      <path
        d="M120 8 L228 88 L188 208 L52 208 L12 88 Z"
        fill="none"
        stroke="#E7DBCF"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
