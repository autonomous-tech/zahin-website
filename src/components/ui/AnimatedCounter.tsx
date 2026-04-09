"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/geometry/animation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      ref.current.textContent = `${prefix}${end.toLocaleString()}${suffix}`;
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        setHasAnimated(true);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            if (ref.current) {
              ref.current.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
            }
          },
        });
      },
    });

    return () => { trigger.kill(); };
  }, [end, suffix, prefix, duration, hasAnimated]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
