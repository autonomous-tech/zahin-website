import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Paper — Zahin",
  description: "Building Pakistan's Intellect: A White Paper on Sovereign AI for Pakistan.",
};

export default function WhitepaperPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-6 py-3 bg-deep-ink text-white/80 text-sm flex-shrink-0">
        <Link href="/" className="flex items-center gap-2 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Zahin
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-white/40">Use Ctrl/Cmd+P to save as PDF</span>
          <a
            href="/zahin-whitepaper-2026.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-pakistan-green/20 text-pakistan-green hover:bg-pakistan-green/30 transition-colors text-xs font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6h8M4 6l2.5-2.5M4 6l2.5 2.5M12 10v3H4v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Open in New Tab
          </a>
        </div>
      </div>
      <iframe
        src="/zahin-whitepaper-2026.html"
        className="flex-1 w-full border-0"
        title="Zahin White Paper — Building Pakistan's Intellect"
      />
    </div>
  );
}
