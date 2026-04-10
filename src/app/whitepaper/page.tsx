import type { Metadata } from "next";
import StarPattern from "@/components/geometry/StarPattern";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "White Paper — Zahin",
  description: "Building Pakistan's Intellect: A White Paper on Sovereign AI for Pakistan. Download the full 20-page document.",
};

export default function WhitepaperPage() {
  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <StarPattern size={48} points={12} color="var(--color-pakistan-green)" className="mx-auto mb-6" animateOnScroll={false} />
        <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green mb-4">White Paper</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
          Building Pakistan&apos;s Intellect
        </h1>
        <p className="mt-4 text-lg text-deep-ink/60 leading-relaxed max-w-xl mx-auto">
          A 20-page white paper on sovereign AI for Pakistan — the crisis, the opportunity, the technical approach, and the financial roadmap.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/zahin-whitepaper-2026.html" variant="primary">
            View White Paper
          </Button>
          <Button href="mailto:founders@zahin.ai?subject=White Paper Inquiry" variant="secondary">
            Contact Us
          </Button>
        </div>
        <p className="mt-12 text-sm text-deep-ink/40">
          To save as PDF: open the white paper, then use your browser&apos;s Print function (Ctrl/Cmd+P) and select &quot;Save as PDF.&quot;
        </p>
      </div>
    </main>
  );
}
