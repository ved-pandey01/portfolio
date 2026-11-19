"use client";

import { MotionConfig } from "framer-motion";

// Honour the visitor's reduced-motion setting for every Framer Motion animation.
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
