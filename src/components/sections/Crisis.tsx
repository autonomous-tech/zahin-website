"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TessellationCanvas from "@/components/geometry/TessellationCanvas";

const comparisonData = [
  { country: "United States", investment: "$67B+", models: "GPT, Claude, Gemini, Llama" },
  { country: "China", investment: "$15B+", models: "DeepSeek, Qwen, Yi" },
  { country: "UAE", investment: "$10B+", models: "Falcon" },
  { country: "Saudi Arabia", investment: "$6B+", models: "ALLaM" },
  { country: "India", investment: "$2B+", models: "Krutrim, Bhashini" },
  { country: "Pakistan", investment: "~$1B*", models: "None" },
];

const languages = [
  { name: "Urdu", speakers: "230M+", coverage: "Minimal" },
  { name: "Punjabi", speakers: "150M+", coverage: "Almost none" },
  { name: "Sindhi", speakers: "30M+", coverage: "None" },
  { name: "Pashto", speakers: "60M+", coverage: "Minimal" },
  { name: "Balochi", speakers: "8M+", coverage: "None" },
];

export default function Crisis() {
  return (
    <SectionWrapper id="crisis" dark>
      <div className="relative">
        <Image src="/images/crisis-data-streams.webp" alt="" fill className="object-cover opacity-10 rounded-xl" />
        <TessellationCanvas opacity={0.03} cellSize={100} numPoints={12} className="text-white" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">The Crisis</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            If they shut it off, where do we go?
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
            Every model that understands Pakistan&apos;s economy, educates our children, diagnoses our patients,
            and processes our legal system is owned by someone else. Foreign models control our narrative, our
            cultural identity, and our future.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 text-white/90">National AI Investment</h3>
              <div className="space-y-3">
                {comparisonData.map((item) => (
                  <div key={item.country} className={`flex items-center justify-between p-3 rounded-lg ${
                    item.country === "Pakistan" ? "bg-red-500/10 border border-red-500/20" : "bg-white/5"
                  }`}>
                    <span className="text-sm font-medium text-white/80">{item.country}</span>
                    <span className={`text-sm font-mono font-bold ${
                      item.country === "Pakistan" ? "text-red-400" : "text-pakistan-green"
                    }`}>{item.investment}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 text-white/90">Pakistani Languages in AI Models</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <span className="text-sm font-medium text-white/80">{lang.name}</span>
                      <span className="ml-2 text-xs text-white/40">{lang.speakers} speakers</span>
                    </div>
                    <span className="text-xs font-mono text-red-400/80">{lang.coverage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/30 italic">* Pakistan&apos;s $1B figure represents total national technology investment, not AI-specific funding. AI-specific allocation remains minimal.</p>

          <div className="mt-16 text-center">
            <div className="text-6xl md:text-7xl font-display font-bold text-pakistan-green">
              <AnimatedCounter end={240} suffix="M" />
            </div>
            <p className="mt-2 text-white/50 text-sm uppercase tracking-widest">
              people with zero sovereign AI representation
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
