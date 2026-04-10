import Link from "next/link";
import Script from "next/script";
import StarPattern from "@/components/geometry/StarPattern";
import { articles } from "@/lib/journal";

export const metadata = {
  title: "Journal — Zahin",
  description:
    "Research updates, position papers, and thinking on sovereign AI for Pakistan. Follow Zahin's progress building foundation models for Pakistani languages.",
  alternates: { canonical: "https://zahin.ai/journal" },
  openGraph: {
    title: "Journal — Zahin",
    description:
      "Research updates, position papers, and thinking on sovereign AI for Pakistan.",
    type: "website" as const,
    url: "https://zahin.ai/journal",
    siteName: "Zahin",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Journal — Zahin",
    description:
      "Research updates, position papers, and thinking on sovereign AI for Pakistan.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Zahin Journal",
  description:
    "Research updates, position papers, and thinking on sovereign AI for Pakistan.",
  url: "https://zahin.ai/journal",
  publisher: {
    "@type": "Organization",
    name: "Zahin",
    url: "https://zahin.ai",
  },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    url: `https://zahin.ai/journal/${a.slug}`,
    author: { "@type": "Person", name: a.author.name },
  })),
};

// blogJsonLd is built from hardcoded article data — not user input — safe to serialize.
export default function JournalIndex() {
  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-deep-ink/40">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-pakistan-green transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-deep-ink/60" aria-current="page">Journal</li>
          </ol>
        </nav>

        <div className="flex items-center gap-3 mb-2">
          <StarPattern size={28} color="var(--color-pakistan-green)" animateOnScroll={false} />
          <p className="text-sm uppercase tracking-[0.3em] text-pakistan-green">Journal</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold">Research, ideas & updates</h1>
        <p className="mt-4 text-lg text-deep-ink/60 max-w-2xl">
          Progress reports, position papers, and thinking on sovereign AI for Pakistan.
        </p>

        <div className="mt-12 space-y-8">
          {articles.map((entry) => (
            <Link key={entry.slug} href={`/journal/${entry.slug}`} className="block group">
              <article className="p-6 rounded-xl bg-white border border-deep-ink/10 hover:border-pakistan-green/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3 text-xs text-deep-ink/40">
                  <time dateTime={entry.date} className="font-mono">{entry.date}</time>
                  <span>·</span>
                  <span className="text-pakistan-green">{entry.category}</span>
                  <span>·</span>
                  <span>{entry.readingTime}</span>
                </div>
                <h2 className="text-xl font-display font-semibold group-hover:text-pakistan-green transition-colors">
                  {entry.title}
                </h2>
                <p className="mt-2 text-sm text-deep-ink/60 leading-relaxed">{entry.excerpt}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-deep-ink/40">
                  <span>{entry.author.name}</span>
                  {entry.tags.length > 0 && (
                    <>
                      <span>·</span>
                      <div className="flex gap-1.5">
                        {entry.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-pakistan-green/50 font-mono">{tag}</span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
