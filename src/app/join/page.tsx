import TessellationCanvas from "@/components/geometry/TessellationCanvas";
import Button from "@/components/ui/Button";
import StarPattern from "@/components/geometry/StarPattern";

const roles = [
  { title: "AI Research Scientist", type: "Full-time · Karachi", description: "Lead fine-tuning and evaluation of Pakistani language models." },
  { title: "ML Engineer", type: "Full-time · Karachi", description: "Build training infrastructure and deployment pipelines." },
  { title: "Computational Linguist", type: "Full-time or Part-time · Remote", description: "Build and curate datasets for Urdu, Sindhi, Punjabi, Pashto, and Balochi." },
  { title: "Research Fellow", type: "Fellowship · 6-12 months", description: "For graduate students and early-career researchers. Stipend provided." },
  { title: "Diaspora Contributor", type: "Remote · Flexible", description: "Pakistani AI professionals abroad who want to contribute part-time." },
];

export default function JoinPage() {
  return (
    <main id="main-content" className="pt-28 pb-24">
      <section className="relative px-6 pb-16">
        <TessellationCanvas opacity={0.03} cellSize={140} numPoints={12} />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <StarPattern size={28} color="var(--color-pakistan-green)" animateOnScroll={false} />
            <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green">Join Zahin</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Build something that matters for your country
          </h1>
          <p className="mt-6 text-lg text-deep-ink/60 max-w-2xl leading-relaxed">
            Zahin is looking for researchers, engineers, linguists, and builders who believe Pakistan deserves sovereign AI.
          </p>
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xs uppercase tracking-[0.3em] text-deep-ink/40 mb-6">Open Positions</h2>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.title} className="p-6 rounded-xl bg-white border border-deep-ink/10 hover:border-pakistan-green/30 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{role.title}</h3>
                    <p className="text-sm text-pakistan-green">{role.type}</p>
                  </div>
                  <Button href={`mailto:careers@zahin.ai?subject=Application: ${role.title}`} variant="secondary">Apply</Button>
                </div>
                <p className="mt-3 text-sm text-deep-ink/60 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-xl bg-pakistan-green/5 border border-pakistan-green/20">
            <h3 className="font-display text-xl font-bold">Pakistani abroad? Build for Pakistan from anywhere.</h3>
            <p className="mt-3 text-deep-ink/60 leading-relaxed">
              If you&apos;re a Pakistani AI professional working at Google, Meta, OpenAI, or anywhere else — we need your expertise.
            </p>
            <div className="mt-6"><Button href="mailto:diaspora@zahin.ai?subject=Diaspora Contributor — Interest" variant="primary">Get Involved</Button></div>
          </div>
        </div>
      </section>
    </main>
  );
}
