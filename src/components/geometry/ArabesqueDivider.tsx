"use client";

import { useEffect, useRef, useState } from "react";
import { generateArabesqueDividerPath } from "./patterns/arabesque";
import { gsap, ScrollTrigger } from "@/lib/geometry/animation";

interface ArabesqueDividerProps {
  waves?: number;
  amplitude?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function ArabesqueDivider({
  waves = 8,
  amplitude = 20,
  color = "var(--color-pakistan-green)",
  strokeWidth = 1.5,
  className = "",
}: ArabesqueDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (svgRef.current?.parentElement) {
        setWidth(svgRef.current.parentElement.getBoundingClientRect().width);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!pathRef.current || width === 0) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const anim = gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: { trigger: svgRef.current, start: "top 90%", toggleActions: "play none none none" },
    });

    return () => { anim.kill(); };
  }, [width]);

  const height = amplitude * 2 + strokeWidth * 2;
  const d = width > 0 ? generateArabesqueDividerPath({ width, waves, amplitude }) : "";

  return (
    <svg ref={svgRef} className={`w-full ${className}`} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-hidden="true">
      <g transform={`translate(0, ${amplitude + strokeWidth})`}>
        <path ref={pathRef} d={d} fill="none" stroke={color} strokeWidth={strokeWidth} opacity={0.3} />
      </g>
    </svg>
  );
}
