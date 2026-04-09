export interface Point {
  x: number;
  y: number;
}

export interface TessellationCell {
  cx: number;
  cy: number;
  rotation: number;
}

export function rotatePoint(
  point: Point,
  angle: number,
  center: Point = { x: 0, y: 0 }
): Point {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  return {
    x: center.x + dx * cos - dy * sin,
    y: center.y + dx * sin + dy * cos,
  };
}

export function generateStarPoints(
  points: number,
  outerRadius: number,
  innerRadius: number,
  center: Point
): Point[] {
  const result: Point[] = [];
  const step = Math.PI / points;
  const startAngle = -Math.PI / 2;

  for (let i = 0; i < points * 2; i++) {
    const angle = startAngle + i * step;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    result.push({
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    });
  }

  return result;
}

export function generateTessellationGrid(
  width: number,
  height: number,
  cellSize: number
): TessellationCell[] {
  if (width <= 0 || height <= 0 || cellSize <= 0) return [];

  const cells: TessellationCell[] = [];
  const cols = Math.ceil(width / cellSize) + 1;
  const rows = Math.ceil(height / cellSize) + 1;

  for (let row = 0; row < rows; row++) {
    const offsetX = row % 2 === 0 ? 0 : cellSize / 2;
    for (let col = 0; col < cols; col++) {
      cells.push({
        cx: col * cellSize + offsetX,
        cy: row * cellSize,
        rotation: row % 2 === 0 ? 0 : 30,
      });
    }
  }

  return cells;
}

export function pointsToSvgString(points: Point[]): string {
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}

export function generateArabesquePath(
  start: Point,
  end: Point,
  amplitude: number = 30
): string {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len;
  const ny = dx / len;

  const cp1 = {
    x: midX + nx * amplitude,
    y: midY + ny * amplitude,
  };
  const cp2 = {
    x: midX - nx * amplitude,
    y: midY - ny * amplitude,
  };

  return [
    `M ${start.x} ${start.y}`,
    `Q ${cp1.x} ${cp1.y} ${midX} ${midY}`,
    `Q ${cp2.x} ${cp2.y} ${end.x} ${end.y}`,
  ].join(" ");
}
