import { notFound } from "next/navigation";
import StarPattern from "@/components/geometry/StarPattern";

interface Article { title: string; date: string; category: string; readingTime: string; paragraphs: { type: "p" | "h2" | "ul"; content: string; items?: string[] }[]; }

const articles: Record<string, Article> = {
  "why-sovereign-ai": {
    title: "Why Pakistan Needs Sovereign AI — And Why Now",
    date: "2026-04-10", category: "Position Paper", readingTime: "8 min read",
    paragraphs: [
      { type: "p", content: "Pakistan stands at a critical juncture. With 240 million people — the world's 6th largest population — and 75% of its citizens under 35, the country has an extraordinary demographic advantage. Yet it has zero sovereign AI models." },
      { type: "p", content: "This isn't just a technology gap. It's a sovereignty crisis." },
      { type: "h2", content: "The Dependency Problem" },
      { type: "p", content: "Every AI model that currently serves Pakistan — from chatbots answering medical questions to systems processing legal documents — is owned, operated, and controlled by foreign entities." },
      { type: "h2", content: "The Shutoff Risk" },
      { type: "p", content: "What happens when geopolitical tensions shift? What happens when foreign governments decide to restrict AI access? Pakistan would be left with nothing." },
      { type: "h2", content: "The Opportunity" },
      { type: "p", content: "Pakistan has everything it needs except infrastructure and investment. 25,000+ CS graduates every year. A diaspora at Google, Meta, OpenAI. That's Zahin." },
    ],
  },
  "fine-tuning-gemma-pakistani-languages": {
    title: "Fine-Tuning Gemma for Pakistani Languages: Our Approach",
    date: "2026-04-10", category: "Research", readingTime: "12 min read",
    paragraphs: [
      { type: "p", content: "Our first step toward sovereign AI for Pakistan is practical: take Google's Gemma open model and fine-tune it for Pakistani languages." },
      { type: "h2", content: "Why Gemma?" },
      { type: "p", content: "Gemma represents the state of the art in open-weight models with permissive licensing for fine-tuning and redistribution." },
      { type: "h2", content: "The Language Challenge" },
      { type: "ul", content: "", items: ["Urdu — 230M+ speakers, some NLP resources", "Punjabi — 150M+ speakers, almost no AI coverage", "Pashto — 60M+ speakers, minimal coverage", "Sindhi — 30M+ speakers, zero AI coverage", "Balochi — 8M+ speakers, zero AI coverage"] },
      { type: "h2", content: "Our Approach" },
      { type: "p", content: "We're building a three-stage pipeline: data collection, fine-tuning, and evaluation. More details coming as our research progresses." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

interface PageProps { params: Promise<{ slug: string }>; }

export default async function JournalArticle({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      <article className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4 text-xs text-deep-ink/40">
          <StarPattern size={20} color="var(--color-pakistan-green)" animateOnScroll={false} />
          <span className="font-mono">{article.date}</span><span>·</span>
          <span className="text-pakistan-green">{article.category}</span><span>·</span>
          <span>{article.readingTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">{article.title}</h1>
        <div className="mt-10 space-y-4">
          {article.paragraphs.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="text-2xl font-display font-semibold text-deep-ink mt-10 mb-4">{block.content}</h2>;
            if (block.type === "ul") return (
              <ul key={i} className="list-disc pl-6 space-y-1 text-deep-ink/80">
                {block.items?.map((item, j) => <li key={j} className="leading-relaxed">{item}</li>)}
              </ul>
            );
            return <p key={i} className="text-deep-ink/80 leading-relaxed text-lg">{block.content}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
