"use client";

import { useEffect, useRef, useState } from "react";
import { generateTessellationPattern } from "./patterns/tessellation";
import { createStarSvgAttrs } from "./patterns/islamic-star";
import { createBreathingAnimation } from "@/lib/geometry/animation";

interface TessellationCanvasProps {
  className?: string;
  cellSize?: number;
  numPoints?: 8 | 12;
  opacity?: number;
  animate?: boolean;
}

export default function TessellationCanvas({
  className = "",
  cellSize = 120,
  numPoints = 8,
  opacity = 1,
  animate = true,
}: TessellationCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current?.parentElement) {
        const { width, height } = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!animate || !svgRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const anim = createBreathingAnimation(svgRef.current, { scaleRange: 0.015, duration: 6 });
    return () => { anim.kill(); };
  }, [animate, dimensions]);

  if (dimensions.width === 0) {
    return <svg ref={svgRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />;
  }

  const pattern = generateTessellationPattern(dimensions.width, dimensions.height, cellSize, numPoints);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
      aria-hidden="true"
    >
      {pattern.stars.map((starGroup, i) =>
        starGroup.configs.map((config, j) => {
          const attrs = createStarSvgAttrs(config);
          return (
            <polygon
              key={`${i}-${j}`}
              {...attrs}
              transform={`rotate(${starGroup.cell.rotation} ${starGroup.cell.cx} ${starGroup.cell.cy})`}
            />
          );
        })
      )}
    </svg>
  );
}
