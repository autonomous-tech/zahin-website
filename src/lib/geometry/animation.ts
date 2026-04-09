"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function createScrollFadeIn(
  element: Element,
  options: { delay?: number; y?: number; duration?: number } = {}
) {
  const { delay = 0, y = 40, duration = 0.8 } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function createStarAssembly(
  starElements: Element[],
  trigger: Element,
  staggerDelay: number = 0.05
) {
  return gsap.fromTo(
    starElements,
    { scale: 0, opacity: 0, rotation: -90 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: staggerDelay,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}

export function createBreathingAnimation(
  element: Element,
  options: { scaleRange?: number; duration?: number } = {}
) {
  const { scaleRange = 0.02, duration = 4 } = options;

  return gsap.to(element, {
    scale: 1 + scaleRange,
    duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

export { gsap, ScrollTrigger };
