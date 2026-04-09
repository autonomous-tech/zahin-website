"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TessellationCanvas from "@/components/geometry/TessellationCanvas";

const stats = [
  { value: 240, suffix: "M", label: "Population", detail: "6th largest in the world" },
  { value: 75, suffix: "%", label: "Under 35", detail: "Youngest demographic in the region" },
  { value: 25000, suffix: "+", label: "CS Graduates / Year", detail: "From LUMS, NUST, FAST, GIKI & more" },
];

const diaspora = ["Google", "Meta", "OpenAI", "DeepMind", "Microsoft", "Amazon"];

export default function WhyPakistan() {
  return (
    <SectionWrapper id="why-pakistan">
      <div className="relative">
        <TessellationCanvas opacity={0.03} cellSize={160} numPoints={8} />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Why Pakistan</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            The talent is here. The infrastructure isn&apos;t.
          </h2>
          <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
            Pakistan&apos;s AI talent works at the world&apos;s leading companies — for other countries. Zahin brings that talent home with world-class infrastructure and a mission worth staying for.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-display font-bold text-pakistan-green">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="mt-2 text-lg font-display font-semibold text-deep-ink">{stat.label}</p>
                <p className="mt-1 text-sm text-deep-ink/50">{stat.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 rounded-xl bg-white border border-deep-ink/10">
            <p className="text-sm uppercase tracking-[0.2em] text-deep-ink/40 mb-4">Pakistani AI talent currently at</p>
            <div className="flex flex-wrap gap-4">
              {diaspora.map((company) => (
                <span key={company} className="px-4 py-2 rounded-full bg-deep-ink/5 text-sm font-medium text-deep-ink/70">{company}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-deep-ink/50 italic">Fraction of Silicon Valley cost. Same caliber minds. That&apos;s what Zahin fixes.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
