"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StarPattern from "@/components/geometry/StarPattern";
import GeometricBorder from "@/components/geometry/GeometricBorder";

const phases = [
  {
    number: "01", title: "Fine-Tune", subtitle: "Now", active: true,
    description: "Fine-tune Google's Gemma and other open models for Urdu, Sindhi, Punjabi, Pashto, and Balochi. Build the largest curated dataset of Pakistani language and culture. Ship working models that prove capability.",
    deliverables: ["Gemma fine-tuned for 5 Pakistani languages", "Curated Pakistani language dataset", "Open-weight model release", "Benchmark against existing multilingual models"],
  },
  {
    number: "02", title: "Deploy", subtitle: "6-12 months", active: false,
    description: "Deploy fine-tuned models in real-world Pakistani applications. Healthcare diagnostics in Urdu. Agricultural advisory in Sindhi. Legal document processing in all five languages.",
    deliverables: ["Healthcare NLP pilot (Urdu)", "Agricultural advisory system (Sindhi, Punjabi)", "Legal document processing", "Educational content generation"],
  },
  {
    number: "03", title: "Zahin-1", subtitle: "18-24 months", active: false,
    description: "Build Pakistan's own foundation model from scratch. Trained on Pakistani data, optimized for Pakistani languages, designed for Pakistani needs. Open-weight. Sovereign. Ours.",
    deliverables: ["Zahin-1 foundation model", "Pakistani-first training data pipeline", "Sovereign compute infrastructure", "Open research publications"],
  },
];

export default function Vision() {
  return (
    <SectionWrapper id="vision">
      <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Our Vision</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">From fine-tuning to foundation</h2>
      <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
        We&apos;re not waiting for permission or perfection. We start with what exists, prove it works, and build toward Pakistan&apos;s own foundation model.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase) => (
          <GeometricBorder key={phase.number} color={phase.active ? "var(--color-pakistan-green)" : "var(--color-terracotta)"}>
            <div className={`p-8 rounded-xl h-full ${phase.active ? "bg-pakistan-green/5 border-2 border-pakistan-green/20" : "bg-white border border-deep-ink/10"}`}>
              <div className="flex items-center gap-3 mb-4">
                <StarPattern size={32} points={phase.active ? 12 : 8} color={phase.active ? "var(--color-pakistan-green)" : "var(--color-terracotta)"} animateOnScroll={false} />
                <div>
                  <span className="text-xs font-mono text-deep-ink/40">Phase {phase.number}</span>
                  {phase.active && <span className="ml-2 text-xs font-mono text-pakistan-green bg-pakistan-green/10 px-2 py-0.5 rounded-full">Active</span>}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold">{phase.title}</h3>
              <p className="text-sm text-pakistan-green font-medium mt-1">{phase.subtitle}</p>
              <p className="mt-4 text-sm text-deep-ink/60 leading-relaxed">{phase.description}</p>
              <ul className="mt-6 space-y-2">
                {phase.deliverables.map((d) => (
                  <li key={d} className="text-sm text-deep-ink/70 flex items-start gap-2">
                    <span className="text-pakistan-green mt-1 text-xs">&#9670;</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </GeometricBorder>
        ))}
      </div>
    </SectionWrapper>
  );
}
