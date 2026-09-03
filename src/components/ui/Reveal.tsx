"use client";

import type { AriaRole, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "editorial" | "visual";
  role?: AriaRole;
  "aria-label"?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "editorial",
  role,
  "aria-label": ariaLabel,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const isVisual = variant === "visual";

  return (
    <motion.div
      className={className}
      role={role}
      aria-label={ariaLabel}
      initial={shouldReduceMotion ? false : { opacity: 0, y: isVisual ? 20 : 16, scale: isVisual ? 0.985 : 1 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: isVisual ? 0.68 : 0.54, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
