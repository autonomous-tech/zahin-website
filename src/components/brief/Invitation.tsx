/**
 * Brief §05 — Invitation card.
 *
 * Soft close. Roles are open. Terms are friendship-grade.
 * Swapped per funder in future versions.
 */

import Link from "next/link";

export default function BriefInvitation() {
  return (
    <section className="brief-visual not-prose my-10">
      <div className="bg-deep-navy text-parchment rounded-xl p-8 sm:p-10 relative overflow-hidden">
        {/* Subtle geometric accent */}
        <svg
          className="absolute top-6 right-6 opacity-25"
          width="64"
          height="64"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#C4956A"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <polygon points="50,5 61,39 95,39 68,61 78,95 50,75 22,95 32,61 5,39 39,39" />
          <polygon
            points="50,5 61,39 95,39 68,61 78,95 50,75 22,95 32,61 5,39 39,39"
            transform="rotate(22.5 50 50)"
            opacity="0.6"
          />
        </svg>

        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta mb-3">
          Find your place
        </p>
        <h3 className="font-display font-semibold text-3xl sm:text-4xl leading-tight mb-4 max-w-xl">
          Zahin needs to exist. Every seat is open.
        </h3>
        <p className="text-parchment/80 max-w-2xl mb-8 leading-relaxed">
          The CEO seat is open — you could be it. Or make intros to other
          patrons. Or be the first $5K. Whatever shape serves you serves us.
          Terms are friendship-grade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="border border-parchment/15 rounded-lg p-4">
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-terracotta/90 mb-2">
              If you see yourself leading
            </div>
            <div className="font-display font-semibold text-xl mb-1">
              CEO / operator
            </div>
            <div className="text-[0.82rem] text-parchment/70 leading-snug">
              Run the commercial side. Shape the role. Friendship-grade equity or
              nonprofit compensation — whatever fits.
            </div>
          </div>
          <div className="border border-parchment/15 rounded-lg p-4">
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-terracotta/90 mb-2">
              If you know who we should meet
            </div>
            <div className="font-display font-semibold text-xl mb-1">
              Open doors
            </div>
            <div className="text-[0.82rem] text-parchment/70 leading-snug">
              Ten warm intros to patrons or funders in your network. The $50K rung
              is the first goal.
            </div>
          </div>
          <div className="border border-parchment/15 rounded-lg p-4">
            <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-terracotta/90 mb-2">
              If this is your fight
            </div>
            <div className="font-display font-semibold text-xl mb-1">
              First patron
            </div>
            <div className="text-[0.82rem] text-parchment/70 leading-snug">
              $5K and up. Your name on the ledger that said this thing should
              exist.
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-parchment/15">
          <a
            href="mailto:hello@zahin.ai?subject=Zahin%20Brief%20%E2%80%94%20I%20read%20it"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-pakistan-green text-parchment rounded-md font-medium text-[0.9rem] hover:bg-pakistan-green/90 transition-colors"
          >
            hello@zahin.ai
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-[0.8rem] text-parchment/60 font-mono">
            or{" "}
            <Link
              href="/join"
              className="underline underline-offset-2 decoration-parchment/40 hover:decoration-parchment"
            >
              zahin.ai/join
            </Link>
          </span>
          <span className="ml-auto text-[0.7rem] text-parchment/50 font-mono tracking-[0.12em] uppercase">
            Rizwan · Abdullah
          </span>
        </div>
      </div>
    </section>
  );
}
