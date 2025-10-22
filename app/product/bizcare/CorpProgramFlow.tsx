import React from "react";
import styles from "./CorpProgramFlow.module.css";

function Pentagon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 220" aria-hidden="true">
      <path
        d="M120 8 L228 88 L188 208 L52 208 L12 88 Z"
        fill="none"
        stroke="#E7DBCF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CorpProgramFlow() {
  return (
    <section className={styles.section}>
      {/* Top: 3 pentagon steps */}
      <div className={styles.top}>
        <div className={styles.step}>
          <Pentagon className={styles.pentagon} />
          <div className={styles.pCenter}>
            <span className={styles.stepNo}>Step 1</span>
            <span className={styles.sep}>|</span>
            <h3 className={styles.pTitle}>
              건강분석
              <br />
              (검진병원)
            </h3>
          </div>
        </div>

        <div className={styles.step}>
          <Pentagon className={styles.pentagon} />
          <div className={styles.pCenter}>
            <span className={styles.stepNo}>Step 2</span>
            <span className={styles.sep}>|</span>
            <h3 className={styles.pTitle}>
              관리기준
              <br />
              제시
            </h3>
          </div>
        </div>

        <div className={styles.step}>
          <Pentagon className={styles.pentagon} />
          <div className={styles.pCenter}>
            <span className={styles.stepNo}>Step 3</span>
            <span className={styles.sep}>|</span>
            <h3 className={styles.pTitle}>
              관리프로그램
              <br />
              (1년)
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom: cards + arrows */}
      <div className={styles.bottom}>
        {/* left stack */}
        <div className={styles.leftStack}>
          <div className={styles.card}>
            <h4 className={styles.cardHead}>검진센터</h4>
            <hr className={styles.cardRule} />
            <p className={styles.cardBody}>건강검진</p>
          </div>

          <div className={styles.plus} aria-hidden="true">
            +
          </div>

          <div className={styles.card}>
            <h4 className={styles.cardHead}>생체나이분석리포트</h4>
            <hr className={styles.cardRule} />
            <p className={styles.cardBody}>바이오에이지 분석/평가</p>
          </div>
        </div>

        {/* arrow to middle */}
        <div className={styles.arrowRight} aria-hidden="true" />

        {/* middle */}
        <div className={styles.cardWide}>
          <h4 className={styles.cardHead}>대응비즈케어</h4>
          <hr className={styles.cardRule} />
          <ul className={styles.list}>
            <li>기업 건강분석(인사복지담당자)</li>
            <li>· 기업/부서별/성별/연령별 생체나이 분석</li>
            <li>· 기업 노화요인(대사증후군) 분석</li>
          </ul>
        </div>

        {/* arrow to right */}
        <div className={styles.arrowRight} aria-hidden="true" />

        {/* right */}
        <div className={styles.cardWide}>
          <h4 className={styles.cardHead}>기업맞춤 건강증진프로그램</h4>
          <hr className={styles.cardRule} />
          <ul className={styles.list}>
            <li>건강관리 포상 프로그램</li>
            <li>기업방문 관리서비스(전 직원)</li>
            <li>노화요인(대사증후군) 관리서비스</li>
            <li>기업 건강연수프로그램</li>
            <li>건강관련 제품 이벤트/프로모션</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
