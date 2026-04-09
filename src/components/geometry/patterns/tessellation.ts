import { generateTessellationGrid, type TessellationCell } from "@/lib/geometry/math";
import { createInterlockingStars, type StarConfig } from "./islamic-star";

export interface TessellationPattern {
  cells: TessellationCell[];
  stars: { cell: TessellationCell; configs: StarConfig[] }[];
  width: number;
  height: number;
  cellSize: number;
}

export function generateTessellationPattern(
  width: number,
  height: number,
  cellSize: number = 120,
  numPoints: 8 | 12 = 8
): TessellationPattern {
  const cells = generateTessellationGrid(width, height, cellSize);
  const stars = cells.map((cell) => ({
    cell,
    configs: createInterlockingStars(
      { x: cell.cx, y: cell.cy },
      cellSize * 0.85,
      numPoints
    ),
  }));

  return { cells, stars, width, height, cellSize };
}
