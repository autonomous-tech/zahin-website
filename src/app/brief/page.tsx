import type { Metadata } from "next";
import Link from "next/link";
import BriefContent from "./content.mdx";
import "./print.css";

export const metadata: Metadata = {
  title: "Zahin — Commercial Brief",
  description:
    "The shape of the commercial opportunity for Zahin — sovereign AI for Pakistan. A market brief for patrons, operators, and funders.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BriefPage() {
  return (
    <div className="min-h-screen bg-parchment text-deep-ink">
      <div className="brief-actions no-print sticky top-0 z-30 bg-parchment/90 backdrop-blur-sm border-b border-deep-ink/10">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between text-xs font-mono">
          <Link
            href="/"
            className="flex items-center gap-2 text-deep-ink/60 hover:text-pakistan-green transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Zahin
          </Link>
          <div className="flex items-center gap-4 text-deep-ink/50">
            <span className="hidden sm:inline tracking-wider uppercase">
              Cmd/Ctrl+P · Save as PDF
            </span>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-3xl mx-auto px-6 py-16 prose-brief">
        <BriefContent />
      </main>
    </div>
  );
}
