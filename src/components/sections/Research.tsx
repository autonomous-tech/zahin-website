import SectionWrapper from "@/components/ui/SectionWrapper";
import StarPattern from "@/components/geometry/StarPattern";

const commitments = [
  { title: "Open-Weight Models", description: "Every model Zahin builds will be released with open weights. Sovereign AI means the people own it." },
  { title: "Published Research", description: "All research papers, benchmarks, and findings published openly. We contribute to global AI knowledge." },
  { title: "Open Datasets", description: "The Pakistani language datasets we curate will be open for researchers worldwide." },
  { title: "Reproducible Science", description: "Training recipes, evaluation methodology, and infrastructure documented publicly." },
];

export default function Research() {
  return (
    <SectionWrapper id="research" dark>
      <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">Research & Open Source</p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">Open by default</h2>
      <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
        Zahin is built on the principle that sovereign AI must be transparent AI.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {commitments.map((item) => (
          <div key={item.title} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pakistan-green/30 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <StarPattern size={24} points={8} color="var(--color-pakistan-green)" animateOnScroll={false} />
              <h3 className="font-display font-semibold text-white/90">{item.title}</h3>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 max-w-md">
        <span className="font-mono text-sm text-pakistan-green">$</span>
        <code className="font-mono text-sm text-white/70">github.com/zahin-ai</code>
        <span className="text-xs text-white/30 ml-auto">Coming soon</span>
      </div>
    </SectionWrapper>
  );
}
