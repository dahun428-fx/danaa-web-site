"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface TransitionProviderProps {
  children: React.ReactNode;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const segmentKey = `/${pathname.split("/")[1] ?? ""}`; // 큰 섹션 이동시에만 전환
  const prefersReduced = useReducedMotion();

  // 빠른 사라짐(opacity만), 느린 등장(opacity 중심 + 미세 scale)
  const variants = useMemo(
    () => ({
      initial: prefersReduced ? {} : { opacity: 0, scale: 0.995 },
      animate: { opacity: 1, scale: 1 },
      exit: prefersReduced ? {} : { opacity: 0, scale: 0.998 },
    }),
    [prefersReduced]
  );

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={segmentKey}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            // ✨ 느린 등장
            opacity: { duration: 0.32, ease: [0.22, 1, 0.36, 1] }, // easeOut-quart 느낌
            scale: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
            // ⚡ 빠른 사라짐
            // AnimatePresence의 exit에는 위 duration이 그대로 적용되므로,
            // exit를 더 빠르게 하려면 별도 key 프레임 없이 아래 글로벌 짧은 duration도 같이 둠
            // (Framer는 속성별 설정을 우선 사용)
            duration: 0.1, // exit에서 전체 기본값(짧게)
          }}
          style={{
            width: "100%",
            height: "100%",
            willChange: "opacity, transform",
            transform: "translateZ(0)",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default TransitionProvider;
