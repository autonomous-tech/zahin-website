import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import StarPattern from "@/components/geometry/StarPattern";
import { getArticleBySlug, getAllSlugs, articles } from "@/lib/journal";
import type { Article } from "@/lib/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found — Zahin" };

  return {
    title: `${article.title} — Zahin`,
    description: article.description,
    alternates: { canonical: `https://zahin.ai/journal/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.dateModified || article.date,
      authors: [article.author.name],
      tags: article.tags,
      url: `https://zahin.ai/journal/${article.slug}`,
      siteName: "Zahin",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function buildArticleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: article.author.url,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Zahin",
      url: "https://zahin.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zahin.ai/journal/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    inLanguage: "en",
    isAccessibleForFree: true,
  };
}

function buildBreadcrumbJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://zahin.ai" },
      { "@type": "ListItem", position: 2, name: "Journal", item: "https://zahin.ai/journal" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://zahin.ai/journal/${article.slug}` },
    ],
  };
}

function buildFaqJsonLd(article: Article) {
  if (article.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// All JSON-LD data is hardcoded article content — not user input — so serialization is safe.
function jsonLdScript(id: string, data: object) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function JournalArticle({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = article.relatedSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as Article[];

  const headings = article.blocks.filter((b) => b.type === "h2");
  const faqJsonLd = buildFaqJsonLd(article);

  return (
    <main id="main-content" className="pt-28 pb-24 px-6">
      {jsonLdScript("article-schema", buildArticleJsonLd(article))}
      {jsonLdScript("breadcrumb-schema", buildBreadcrumbJsonLd(article))}
      {faqJsonLd && jsonLdScript("faq-schema", faqJsonLd)}

      <article className="mx-auto max-w-3xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-deep-ink/40">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-pakistan-green transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/journal" className="hover:text-pakistan-green transition-colors">Journal</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-deep-ink/60 truncate max-w-[200px]" aria-current="page">{article.title}</li>
          </ol>
        </nav>

        {/* Article header */}
        <div className="flex items-center gap-3 mb-4 text-xs text-deep-ink/40">
          <StarPattern size={20} color="var(--color-pakistan-green)" animateOnScroll={false} />
          <span className="text-pakistan-green">{article.category}</span>
          <span>·</span>
          <time dateTime={article.date} className="font-mono">{article.date}</time>
          <span>·</span>
          <span>{article.readingTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
          {article.title}
        </h1>

        {/* Author byline */}
        <div className="mt-4 flex items-center gap-3 text-sm text-deep-ink/50">
          <div className="w-8 h-8 rounded-full bg-pakistan-green/10 flex items-center justify-center text-pakistan-green font-display font-bold text-xs">
            {article.author.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <span className="text-deep-ink/70 font-medium">{article.author.name}</span>
            {article.author.role && (
              <span className="text-deep-ink/40"> · {article.author.role}</span>
            )}
          </div>
        </div>

        {/* Table of contents */}
        {headings.length > 2 && (
          <nav aria-label="Table of contents" className="mt-8 p-5 rounded-xl bg-pakistan-green/5 border border-pakistan-green/10">
            <p className="text-xs uppercase tracking-[0.2em] text-pakistan-green font-medium mb-3">In this article</p>
            <ol className="space-y-1.5">
              {headings.map((h, i) => (
                <li key={i}>
                  <a
                    href={`#${h.content.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
                    className="text-sm text-deep-ink/60 hover:text-pakistan-green transition-colors"
                  >
                    {h.content}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Article body */}
        <div className="mt-10 space-y-4">
          {article.blocks.map((block, i) => {
            if (block.type === "h2") {
              const id = block.content.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return <h2 key={i} id={id} className="text-2xl font-display font-semibold text-deep-ink mt-10 mb-4 scroll-mt-24">{block.content}</h2>;
            }
            if (block.type === "h3") {
              return <h3 key={i} className="text-xl font-display font-semibold text-deep-ink mt-8 mb-3">{block.content}</h3>;
            }
            if (block.type === "ul") {
              return (
                <div key={i}>
                  {block.content && <p className="text-deep-ink/60 text-sm mb-2 font-medium">{block.content}</p>}
                  <ul className="list-disc pl-6 space-y-1.5 text-deep-ink/80">
                    {block.items?.map((item, j) => <li key={j} className="leading-relaxed">{item}</li>)}
                  </ul>
                </div>
              );
            }
            if (block.type === "ol") {
              return (
                <ol key={i} className="list-decimal pl-6 space-y-3 text-deep-ink/80">
                  {block.items?.map((item, j) => <li key={j} className="leading-relaxed">{item}</li>)}
                </ol>
              );
            }
            if (block.type === "blockquote") {
              return (
                <blockquote key={i} className="border-l-4 border-pakistan-green/40 pl-5 py-2 text-deep-ink/70 italic text-lg leading-relaxed my-6">
                  {block.content}
                </blockquote>
              );
            }
            if (block.type === "callout") {
              return (
                <div key={i} className="bg-pakistan-green/5 border border-pakistan-green/15 rounded-xl p-5 my-6">
                  <p className="text-deep-ink/80 leading-relaxed text-[15px]">{block.content}</p>
                </div>
              );
            }
            return <p key={i} className="text-deep-ink/80 leading-relaxed text-lg">{block.content}</p>;
          })}
        </div>

        {/* FAQ section */}
        {article.faqs.length > 0 && (
          <section className="mt-16 pt-10 border-t border-deep-ink/10">
            <h2 className="text-2xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {article.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-white border border-deep-ink/8">
                  <dt className="font-display font-semibold text-deep-ink">{faq.question}</dt>
                  <dd className="mt-2 text-deep-ink/70 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full bg-pakistan-green/8 text-pakistan-green/70 font-mono">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-deep-ink/10">
            <h2 className="text-xl font-display font-semibold mb-4">Related Reading</h2>
            <div className="space-y-4">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/journal/${rel.slug}`} className="block group">
                  <article className="p-5 rounded-xl bg-white border border-deep-ink/10 hover:border-pakistan-green/30 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 text-xs text-deep-ink/40 mb-2">
                      <span className="text-pakistan-green">{rel.category}</span>
                      <span>·</span>
                      <span>{rel.readingTime}</span>
                    </div>
                    <h3 className="font-display font-semibold group-hover:text-pakistan-green transition-colors">{rel.title}</h3>
                    <p className="mt-1 text-sm text-deep-ink/50">{rel.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to journal */}
        <div className="mt-12 pt-6 border-t border-deep-ink/10">
          <Link href="/journal" className="inline-flex items-center gap-2 text-sm text-pakistan-green hover:text-pakistan-green/80 transition-colors font-medium">
            <span aria-hidden="true">&larr;</span> Back to Journal
          </Link>
        </div>
      </article>
    </main>
  );
}
