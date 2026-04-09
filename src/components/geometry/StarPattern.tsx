"use client";

import { useEffect, useRef, useState } from "react";
import { generateStarPoints, pointsToSvgString } from "@/lib/geometry/math";
import { createStarAssembly } from "@/lib/geometry/animation";

interface StarPatternProps {
  points?: 8 | 12;
  size?: number;
  color?: string;
  className?: string;
  animateOnScroll?: boolean;
}

export default function StarPattern({
  points = 8,
  size = 100,
  color = "var(--color-pakistan-green)",
  className = "",
  animateOnScroll = true,
}: StarPatternProps) {
  const containerRef = useRef<SVGSVGElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!animateOnScroll || !containerRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const stars = containerRef.current.querySelectorAll("polygon");
    const anim = createStarAssembly(Array.from(stars), containerRef.current, 0.1);
    return () => { anim.kill(); };
  }, [animateOnScroll, mounted]);

  if (!mounted) {
    return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true" />;
  }

  const center = { x: size / 2, y: size / 2 };
  const outerRadius = size * 0.45;
  const innerRadius = outerRadius * (points === 8 ? 0.38 : 0.42);
  const outerStar = pointsToSvgString(generateStarPoints(points, outerRadius, innerRadius, center));
  const innerStar = pointsToSvgString(generateStarPoints(points, outerRadius * 0.6, innerRadius * 0.6, center));

  return (
    <svg ref={containerRef} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <polygon points={outerStar} fill="none" stroke={color} strokeWidth={1} opacity={0.2} />
      <polygon points={innerStar} fill={color} fillOpacity={0.05} stroke={color} strokeWidth={0.5} opacity={0.15} />
    </svg>
  );
}
