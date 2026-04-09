"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-pakistan-tech.png"
        alt=""
        fill
        className="object-cover opacity-10"
        priority
      />

      {/* Full geometric cube grid */}
      <svg
        className="absolute inset-0 w-full h-full z-[1]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Base grid cell — nested squares with diagonals */}
          <pattern id="cube-cell" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="90" height="90" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.4" opacity="0.12" />
            <rect x="15" y="15" width="70" height="70" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.08" />
            <rect x="28" y="28" width="44" height="44" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.06" />
            <line x1="5" y1="5" x2="95" y2="95" stroke="var(--color-pakistan-green)" strokeWidth="0.2" opacity="0.05" />
            <line x1="95" y1="5" x2="5" y2="95" stroke="var(--color-pakistan-green)" strokeWidth="0.2" opacity="0.05" />
          </pattern>

          {/* Radial fade mask */}
          <radialGradient id="hero-fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="url(#cube-cell)" mask="url(#hero-mask)" />
      </svg>

      {/* Scattered accent cubes at different sizes */}
      <svg className="absolute top-[10%] left-[5%] w-28 h-28 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="5" y="5" width="90" height="90" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.8" opacity="0.1" />
        <rect x="18" y="18" width="64" height="64" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.6" opacity="0.08" />
        <rect x="31" y="31" width="38" height="38" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.5" opacity="0.06" />
        <line x1="5" y1="5" x2="95" y2="95" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.06" />
        <line x1="95" y1="5" x2="5" y2="95" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.06" />
      </svg>

      <svg className="absolute top-[15%] right-[8%] w-20 h-20 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--color-terracotta)" strokeWidth="0.7" opacity="0.08" />
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="var(--color-terracotta)" strokeWidth="0.5" opacity="0.06" />
        <line x1="10" y1="10" x2="90" y2="90" stroke="var(--color-terracotta)" strokeWidth="0.3" opacity="0.05" />
        <line x1="90" y1="10" x2="10" y2="90" stroke="var(--color-terracotta)" strokeWidth="0.3" opacity="0.05" />
      </svg>

      <svg className="absolute bottom-[25%] left-[12%] w-16 h-16 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.8" opacity="0.09" />
        <rect x="30" y="30" width="40" height="40" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.5" opacity="0.06" />
      </svg>

      <svg className="absolute bottom-[20%] right-[6%] w-36 h-36 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="2" y="2" width="96" height="96" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.5" opacity="0.08" />
        <rect x="12" y="12" width="76" height="76" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.4" opacity="0.06" />
        <rect x="22" y="22" width="56" height="56" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.05" />
        <rect x="32" y="32" width="36" height="36" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.04" />
        <line x1="2" y1="2" x2="98" y2="98" stroke="var(--color-pakistan-green)" strokeWidth="0.2" opacity="0.04" />
        <line x1="98" y1="2" x2="2" y2="98" stroke="var(--color-pakistan-green)" strokeWidth="0.2" opacity="0.04" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="0.3" opacity="0.04" />
      </svg>

      <svg className="absolute top-[45%] right-[25%] w-12 h-12 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--color-terracotta)" strokeWidth="0.8" opacity="0.07" />
        <rect x="30" y="30" width="40" height="40" fill="none" stroke="var(--color-terracotta)" strokeWidth="0.6" opacity="0.05" />
      </svg>

      <svg className="absolute top-[60%] left-[30%] w-10 h-10 z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--color-pakistan-green)" strokeWidth="1" opacity="0.08" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-pakistan-green/80 font-body tracking-[0.2em]">ذہین</p>
        <h1 className="mt-2 text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-deep-ink">zahin</h1>
        <p className="mt-4 text-sm md:text-base uppercase tracking-[0.25em] text-pakistan-green">Building Pakistan&apos;s Intellect</p>
        <p className="mt-8 text-lg md:text-xl text-deep-ink/70 max-w-2xl mx-auto leading-relaxed">
          Pakistan has 240 million people and zero sovereign AI. No foundation models in our languages.
          No models that understand our culture, our law, our medicine, our commerce. We&apos;re changing that.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#fund" variant="primary">Fund the Future</Button>
          <Button href="#vision" variant="secondary">Our Vision</Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent z-[2]" />
    </section>
  );
}
