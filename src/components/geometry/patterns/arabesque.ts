import { generateArabesquePath } from "@/lib/geometry/math";

export interface ArabesqueConfig {
  width: number;
  height?: number;
  waves: number;
  amplitude: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
}

export function generateArabesqueDividerPath(config: ArabesqueConfig): string {
  const { width, height = 0, waves, amplitude } = config;

  const segmentWidth = width / waves;
  const paths: string[] = [];
  const y = height / 2 || 0;

  for (let i = 0; i < waves; i++) {
    const startX = i * segmentWidth;
    const endX = (i + 1) * segmentWidth;
    const flip = i % 2 === 0 ? 1 : -1;

    paths.push(
      generateArabesquePath(
        { x: startX, y },
        { x: endX, y },
        amplitude * flip
      )
    );
  }

  return paths.join(" ");
}

export function generateBorderPath(
  width: number,
  height: number,
  segmentLength: number = 60,
  amplitude: number = 8
): { top: string; bottom: string } {
  const waves = Math.ceil(width / segmentLength);

  const top = generateArabesqueDividerPath({ width, height: 0, waves, amplitude });
  const bottom = generateArabesqueDividerPath({ width, height, waves, amplitude });

  return { top, bottom };
}
