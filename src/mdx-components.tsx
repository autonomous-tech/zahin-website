import type { MDXComponents } from "mdx/types";

/**
 * Typography styling for MDX content across the Zahin site.
 * Uses the Sovereign Warmth type system — Fraunces for display, DM Sans for body.
 */
const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1] tracking-tight text-deep-ink mt-4 mb-6"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="font-display font-semibold text-2xl sm:text-3xl leading-tight tracking-tight text-deep-ink mt-14 mb-4"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-display font-semibold text-xl leading-snug text-deep-ink mt-8 mb-3"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-body text-[1.05rem] leading-[1.7] text-deep-ink/85 mb-5"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="font-body text-[1.02rem] leading-[1.7] text-deep-ink/85 mb-5 pl-6 space-y-2 list-disc marker:text-pakistan-green"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="font-body text-[1.02rem] leading-[1.7] text-deep-ink/85 mb-5 pl-6 space-y-2 list-decimal marker:text-pakistan-green marker:font-mono"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="font-display italic text-xl text-deep-navy leading-snug my-8 pl-6 border-l-2 border-pakistan-green"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-deep-ink" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  a: (props) => (
    <a
      className="text-pakistan-green underline underline-offset-2 decoration-pakistan-green/40 hover:decoration-pakistan-green transition-colors"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-[0.9em] bg-deep-ink/5 text-deep-navy px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-0 h-px bg-deep-ink/15 my-12" />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
