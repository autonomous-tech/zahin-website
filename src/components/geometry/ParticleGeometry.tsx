"use client";

import { useEffect, useRef } from "react";
import { generateStarPoints, type Point } from "@/lib/geometry/math";

interface ParticleGeometryProps {
  className?: string;
  particleCount?: number;
  color?: string;
  targetPattern?: "star-8" | "star-12" | "scatter";
  speed?: number;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticleGeometry({
  className = "",
  particleCount = 150,
  color = "#01796F",
  targetPattern = "star-8",
  speed = 0.02,
}: ParticleGeometryProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<Point>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles(width, height);
    };

    const initParticles = (w: number, h: number) => {
      const center = { x: w / 2, y: h / 2 };
      const radius = Math.min(w, h) * 0.35;
      const innerRadius = radius * 0.38;
      const numPoints = targetPattern === "star-12" ? 12 : 8;

      let targets: Point[];
      if (targetPattern === "scatter") {
        targets = Array.from({ length: particleCount }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
        }));
      } else {
        const starPts = generateStarPoints(numPoints, radius, innerRadius, center);
        targets = Array.from({ length: particleCount }, (_, i) => {
          const idx = i % starPts.length;
          const next = (idx + 1) % starPts.length;
          const t = Math.random();
          return {
            x: starPts[idx].x + t * (starPts[next].x - starPts[idx].x),
            y: starPts[idx].y + t * (starPts[next].y - starPts[idx].y),
          };
        });
      }

      particlesRef.current = targets.map((target) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        targetX: target.x,
        targetY: target.y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const animate = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * speed;
        p.vy += dy * speed;
        p.vx *= 0.92;
        p.vy *= 0.92;

        const mx = p.x - mouseRef.current.x;
        const my = p.y - mouseRef.current.y;
        const mDist = Math.sqrt(mx * mx + my * my);
        if (mDist < 80) {
          const force = (80 - mDist) / 80;
          p.vx += (mx / mDist) * force * 2;
          p.vy += (my / mDist) * force * 2;
        }

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.5;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 3600) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    canvas.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, color, targetPattern, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}
