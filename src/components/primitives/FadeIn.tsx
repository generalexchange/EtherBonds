"use client";

import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

export const easeInstitutional: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={
        reduceMotion
          ? undefined
          : inView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: easeInstitutional,
      }}
    >
      {children}
    </motion.div>
  );
}
