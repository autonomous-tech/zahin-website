"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TessellationCanvas from "@/components/geometry/TessellationCanvas";

const stats = [
  { value: 240, suffix: "M", label: "Population", detail: "6th largest in the world" },
  { value: 64, suffix: "%", label: "Under 30", detail: "One of the youngest populations globally" },
  { value: 36500, suffix: "+", label: "CS Graduates / Year", detail: "From HEC-accredited universities alone" },
];

const diaspora = [
  { name: "Google", logo: <svg viewBox="0 0 24 24" className="h-6 w-auto"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
  { name: "Meta", logo: <svg viewBox="0 0 36 16" className="h-5 w-auto"><path d="M3.8 1.2C2.4 1.2 1.2 2.6.5 4.8c-.5 1.5-.5 3 0 4.4C1.2 11.4 2.4 12.8 3.8 12.8c1 0 1.8-.6 2.8-2l1.8-2.8c.6-1 1.2-1.6 1.8-1.6s1.2.6 1.8 1.6l1.8 2.8c1 1.4 1.8 2 2.8 2 1.4 0 2.6-1.4 3.3-3.6.5-1.5.5-3 0-4.4C19.2 2.6 18 1.2 16.6 1.2c-1 0-1.8.6-2.8 2l-1.8 2.8c-.6 1-1.2 1.6-1.8 1.6S9 7 8.4 6L6.6 3.2c-1-1.4-1.8-2-2.8-2z" fill="#0081FB"/><text x="23" y="11.5" fontSize="8" fontWeight="700" fill="#1A1A2E" fontFamily="system-ui">meta</text></svg> },
  { name: "OpenAI", logo: <svg viewBox="0 0 24 24" className="h-6 w-auto"><path d="M22.2 8.4a5.9 5.9 0 0 0-.5-4.9A6 6 0 0 0 15.2.6a5.9 5.9 0 0 0-4.5 1 6 6 0 0 0-2.2 4A6 6 0 0 0 4.6 7a5.9 5.9 0 0 0-2.7 3 6 6 0 0 0 .7 6.3 5.9 5.9 0 0 0 .5 4.9 6 6 0 0 0 6.5 2.9 5.9 5.9 0 0 0 4.5-1 6 6 0 0 0 2.2-4 6 6 0 0 0 3.9-1.4 5.9 5.9 0 0 0 2.7-3 6 6 0 0 0-.7-6.3zm-9 13a4.5 4.5 0 0 1-2.9-1l.2-.1 4.7-2.7a.8.8 0 0 0 .4-.7V11l2 1.1v5.3a4.5 4.5 0 0 1-4.4 4zm-9.6-4.1a4.5 4.5 0 0 1-.5-3l.1.1 4.8 2.7a.8.8 0 0 0 .8 0l5.7-3.3v2.3l-4.8 2.7a4.5 4.5 0 0 1-6.1-1.5zm-1.3-10a4.5 4.5 0 0 1 2.4-2l0 .2v5.5a.8.8 0 0 0 .4.7l5.7 3.3-2 1.2-4.7-2.8a4.5 4.5 0 0 1-1.8-6.1zm16.5 3.8-5.7-3.3 2-1.1 4.8 2.7a4.5 4.5 0 0 1-.7 7.9v-5.5a.8.8 0 0 0-.4-.7zm2-3a4.5 4.5 0 0 0-.2-.1l-4.7-2.7a.8.8 0 0 0-.8 0l-5.7 3.3V7l4.8-2.8a4.5 4.5 0 0 1 6.6 4.6zm-12.4 4-2-1.2V5.7a4.5 4.5 0 0 1 7.3-3.5l-.2.1-4.7 2.7a.8.8 0 0 0-.4.7v6zm1.1-2.3 2.5-1.5 2.5 1.5v2.9l-2.5 1.5-2.5-1.5z" fill="#1A1A2E"/></svg> },
  { name: "DeepMind", logo: <span className="font-mono text-lg font-bold tracking-tight text-deep-ink/80">DeepMind</span> },
  { name: "Microsoft", logo: <svg viewBox="0 0 21 21" className="h-5 w-auto"><rect x="1" y="1" width="9" height="9" fill="#F25022"/><rect x="11" y="1" width="9" height="9" fill="#7FBA00"/><rect x="1" y="11" width="9" height="9" fill="#00A4EF"/><rect x="11" y="11" width="9" height="9" fill="#FFB900"/></svg> },
  { name: "Amazon", logo: <svg viewBox="0 0 100 30" className="h-5 w-auto"><path d="M62.4 21.8c-5.8 4.3-14.2 6.6-21.4 6.6-10.1 0-19.2-3.7-26.1-10 0 0-.5-.5 0-.6.6-.3 1.6.2 1.6.2 7.4 4.3 16.5 6.9 25.9 6.9 6.4 0 13.3-1.3 19.7-4 1-.4 1.8.7.3 1z" fill="#FF9900"/><path d="M65.3 18.5c-.7-.9-4.8-.4-6.6-.2-.6.1-.7-.4-.2-.8 3.2-2.3 8.5-1.6 9.1-.8.6.8-.2 6.2-3.2 8.8-.5.4-.9.2-.7-.3.7-1.7 2.2-5.7 1.6-6.7z" fill="#FF9900"/><text x="2" y="18" fontSize="14" fontWeight="700" fill="#1A1A2E" fontFamily="system-ui">amazon</text></svg> },
];

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
            <p className="text-sm uppercase tracking-[0.2em] text-deep-ink/40 mb-4">Pakistani talent working at</p>
            <div className="flex flex-wrap items-center gap-8 mt-2">
              {diaspora.map((company) => (
                <div key={company.name} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity" title={company.name}>
                  {company.logo}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-deep-ink/50 italic">Thousands of Pakistani engineers and researchers power the world&apos;s leading AI labs. Zahin&apos;s mission: give them a reason to build for home.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
