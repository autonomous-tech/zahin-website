import { describe, it, expect } from "vitest";
import {
  generateStarPoints,
  rotatePoint,
  generateTessellationGrid,
} from "../math";

describe("rotatePoint", () => {
  it("rotates a point 90 degrees around origin", () => {
    const result = rotatePoint({ x: 1, y: 0 }, Math.PI / 2);
    expect(result.x).toBeCloseTo(0, 5);
    expect(result.y).toBeCloseTo(1, 5);
  });

  it("rotates a point around a custom center", () => {
    const result = rotatePoint({ x: 2, y: 0 }, Math.PI / 2, { x: 1, y: 0 });
    expect(result.x).toBeCloseTo(1, 5);
    expect(result.y).toBeCloseTo(1, 5);
  });
});

describe("generateStarPoints", () => {
  it("generates 16 points for an 8-point star", () => {
    const points = generateStarPoints(8, 100, 50, { x: 0, y: 0 });
    expect(points).toHaveLength(16);
  });

  it("generates 24 points for a 12-point star", () => {
    const points = generateStarPoints(12, 100, 50, { x: 0, y: 0 });
    expect(points).toHaveLength(24);
  });

  it("outer points are at outerRadius distance from center", () => {
    const center = { x: 100, y: 100 };
    const points = generateStarPoints(8, 80, 40, center);
    const firstPoint = points[0];
    const dist = Math.sqrt(
      (firstPoint.x - center.x) ** 2 + (firstPoint.y - center.y) ** 2
    );
    expect(dist).toBeCloseTo(80, 1);
  });
});

describe("generateTessellationGrid", () => {
  it("generates cells covering the given area", () => {
    const cells = generateTessellationGrid(800, 600, 100);
    expect(cells.length).toBeGreaterThan(0);
    cells.forEach((cell) => {
      expect(cell).toHaveProperty("cx");
      expect(cell).toHaveProperty("cy");
      expect(cell).toHaveProperty("rotation");
    });
  });

  it("returns empty array for zero dimensions", () => {
    const cells = generateTessellationGrid(0, 0, 100);
    expect(cells).toHaveLength(0);
  });
});
