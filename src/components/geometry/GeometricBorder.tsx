"use client";

import { useEffect, useRef, useState } from "react";
import { generateStarPoints, pointsToSvgString } from "@/lib/geometry/math";

interface GeometricBorderProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  starSize?: number;
}

export default function GeometricBorder({
  children,
  color = "var(--color-pakistan-green)",
  className = "",
  starSize = 20,
}: GeometricBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new ResizeObserver(([entry]) => {
      setDims({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const starsPerEdge = dims.width > 0 ? Math.floor(dims.width / (starSize * 3)) : 0;
  const starCenter = { x: starSize / 2, y: starSize / 2 };
  const starPts = pointsToSvgString(generateStarPoints(8, starSize / 2, starSize * 0.19, starCenter));

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {dims.width > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${dims.width} ${dims.height}`} aria-hidden="true">
          {Array.from({ length: starsPerEdge }).map((_, i) => (
            <polygon key={`top-${i}`} points={starPts} transform={`translate(${(i + 0.5) * (dims.width / starsPerEdge) - starSize / 2}, 0)`} fill="none" stroke={color} strokeWidth={0.5} opacity={0.15} />
          ))}
          {Array.from({ length: starsPerEdge }).map((_, i) => (
            <polygon key={`bottom-${i}`} points={starPts} transform={`translate(${(i + 0.5) * (dims.width / starsPerEdge) - starSize / 2}, ${dims.height - starSize})`} fill="none" stroke={color} strokeWidth={0.5} opacity={0.15} />
          ))}
        </svg>
      )}
      {children}
    </div>
  );
}
