import Link from "next/link";
import StarPattern from "@/components/geometry/StarPattern";

export const metadata = {
  title: "Journal — Zahin",
  description: "Research updates, position papers, and thinking on sovereign AI for Pakistan.",
};

interface JournalEntry { slug: string; title: string; excerpt: string; date: string; category: string; readingTime: string; }

const entries: JournalEntry[] = [
  {
    slug: "why-sovereign-ai",
    title: "Why Pakistan Needs Sovereign AI — And Why Now",
    excerpt: "Every country without its own AI becomes a data colony. Pakistan has 240 million people, 75% under 35, and zero foundation models.",
    date: "2026-04-10", category: "Position Paper", readingTime: "8 min read",
  },
  {
    slug: "fine-tuning-gemma-pakistani-languages",
    title: "Fine-Tuning Gemma for Pakistani Languages: Our Approach",
    excerpt: "A technical overview of how we're adapting Google's Gemma model for Urdu, Sindhi, Punjabi, Pashto, and Balochi.",
    date: "2026-04-10", category: "Research", readingTime: "12 min read",
  },
];

export default function JournalIndex() {
  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-2">
          <StarPattern size={28} color="var(--color-pakistan-green)" animateOnScroll={false} />
          <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green">Journal</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Research, ideas & updates</h1>
        <p className="mt-4 text-lg text-deep-ink/60 max-w-2xl">Progress reports, position papers, and thinking on sovereign AI for Pakistan.</p>
        <div className="mt-12 space-y-8">
          {entries.map((entry) => (
            <Link key={entry.slug} href={`/journal/${entry.slug}`} className="block group">
              <article className="p-6 rounded-xl bg-white border border-deep-ink/10 hover:border-pakistan-green/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3 text-xs text-deep-ink/40">
                  <span className="font-mono">{entry.date}</span><span>·</span>
                  <span className="text-pakistan-green">{entry.category}</span><span>·</span>
                  <span>{entry.readingTime}</span>
                </div>
                <h2 className="text-xl font-display font-semibold group-hover:text-pakistan-green transition-colors">{entry.title}</h2>
                <p className="mt-2 text-sm text-deep-ink/60 leading-relaxed">{entry.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
