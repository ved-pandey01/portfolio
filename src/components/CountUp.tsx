"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

// Renders the final value on the server (correct without JavaScript),
// then counts up from `from` the first time it scrolls into view.
export function CountUp({ from = 0, to, prefix = "", suffix = "" }: { from?: number; to: number; prefix?: string; suffix?: string }) {
  const wrap = useRef<HTMLSpanElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrap, { once: true });
  const reduce = useReducedMotion();
  const armed = useRef(false);

  useEffect(() => {
    if (reduce || armed.current || !num.current) return;
    armed.current = true;
    if (!inView) num.current.textContent = String(from);
  }, [reduce, inView, from]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(from, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (num.current) num.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, from, to]);

  return (
    <span ref={wrap} className="tabular-nums">
      <span className="sr-only">
        {prefix}
        {to}
        {suffix}
      </span>
      <span aria-hidden>
        {prefix}
        <span ref={num}>{to}</span>
        {suffix}
      </span>
    </span>
  );
}
