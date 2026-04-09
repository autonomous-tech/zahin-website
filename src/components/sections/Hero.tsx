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

      {/* Geometric tessellation grid — the brainstorm pattern */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          backgroundImage: 'repeating-conic-gradient(from 0deg at 50% 50%, #01796f 0deg 60deg, transparent 60deg 120deg)',
          backgroundSize: '60px 52px',
          opacity: 0.06,
        }}
      />

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
