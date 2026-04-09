"use client";

import { useEffect, useRef } from "react";
import { createScrollFadeIn } from "@/lib/geometry/animation";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  delay?: number;
}

export default function SectionWrapper({ id, children, className = "", dark = false, delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const anim = createScrollFadeIn(ref.current, { delay });
    return () => { anim.kill(); };
  }, [delay]);

  return (
    <section id={id} ref={ref} className={`px-6 py-24 md:py-32 ${dark ? "bg-deep-navy text-white" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
