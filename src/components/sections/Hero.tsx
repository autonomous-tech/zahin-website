"use client";

import Image from "next/image";
import TessellationCanvas from "@/components/geometry/TessellationCanvas";
import ParticleGeometry from "@/components/geometry/ParticleGeometry";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-pakistan-tech.png"
        alt=""
        fill
        className="object-cover opacity-15"
        priority
      />

      {/* Geometric grid overlay — boxes pattern */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-pakistan-green) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-pakistan-green) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.04,
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Diagonal geometric lines */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(45deg, var(--color-pakistan-green) 1px, transparent 1px),
            linear-gradient(-45deg, var(--color-pakistan-green) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          opacity: 0.025,
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 10%, transparent 60%)',
        }}
      />

      {/* Corner geometric accents */}
      <svg className="absolute top-20 left-8 w-32 h-32 opacity-[0.07] text-pakistan-green z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="0.3" />
        <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.3" />
      </svg>
      <svg className="absolute bottom-32 right-8 w-40 h-40 opacity-[0.06] text-terracotta z-[1]" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="5" y="5" width="90" height="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      <TessellationCanvas opacity={0.05} cellSize={140} numPoints={8} />
      <ParticleGeometry particleCount={120} color="#01796F" targetPattern="star-8" speed={0.015} />

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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  );
}
