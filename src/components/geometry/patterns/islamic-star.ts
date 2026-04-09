import { generateStarPoints, pointsToSvgString, type Point } from "@/lib/geometry/math";

export interface StarConfig {
  points: 8 | 12;
  outerRadius: number;
  innerRadius: number;
  center: Point;
  fillOpacity?: number;
  strokeOpacity?: number;
  color?: string;
}

export function createStarSvgAttrs(config: StarConfig) {
  const {
    points: numPoints,
    outerRadius,
    innerRadius,
    center,
    fillOpacity = 0,
    strokeOpacity = 0.15,
    color = "currentColor",
  } = config;

  const starPoints = generateStarPoints(numPoints, outerRadius, innerRadius, center);
  const pointsStr = pointsToSvgString(starPoints);

  return {
    points: pointsStr,
    fill: color,
    fillOpacity,
    stroke: color,
    strokeOpacity,
    strokeWidth: 1,
  };
}

export function createInterlockingStars(
  center: Point,
  size: number,
  numPoints: 8 | 12 = 8
): StarConfig[] {
  const outerRadius = size / 2;
  const innerRadius = outerRadius * (numPoints === 8 ? 0.38 : 0.42);

  return [
    {
      points: numPoints,
      outerRadius,
      innerRadius,
      center,
      strokeOpacity: 0.12,
      fillOpacity: 0,
      color: "var(--color-pakistan-green)",
    },
    {
      points: numPoints,
      outerRadius: outerRadius * 0.7,
      innerRadius: innerRadius * 0.7,
      center,
      strokeOpacity: 0.08,
      fillOpacity: 0.02,
      color: "var(--color-terracotta)",
    },
  ];
}
