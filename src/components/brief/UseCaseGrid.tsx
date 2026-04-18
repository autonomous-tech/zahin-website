/**
 * Brief §02 — Use-case grid.
 *
 * 10 practical use cases a Zahin-class fine-tune can deliver within 18 months.
 * Each tile: icon + title + one-liner + (optional) precedent note.
 * Data in src/data/brief/use-cases.ts.
 */

import type { ReactElement } from "react";
import { useCases, type UseCase } from "@/data/brief/use-cases";

// Minimal semantic icons per use case. Stroked SVGs in Pakistan Green.
const icons: Record<string, ReactElement> = {
  "urdu-tutor": (
    <>
      <path d="M4 6h14v12H4z" />
      <path d="M4 6l7 4 7-4" />
      <path d="M11 10v8" />
    </>
  ),
  "agri-advisor": (
    <>
      <path d="M11 20V8" />
      <path d="M11 14c-3-3-7-3-7-7 4 0 7 2 7 7" />
      <path d="M11 12c3-2.5 7-2 7-5-4 0-7 1.5-7 5" />
    </>
  ),
  "legal-qa": (
    <>
      <path d="M11 4v16" />
      <path d="M4 8h14" />
      <path d="M4 8l3 6a3 3 0 01-6 0z" />
      <path d="M18 8l3 6a3 3 0 01-6 0z" />
    </>
  ),
  "banking-bot": (
    <>
      <path d="M3 10l8-5 8 5" />
      <path d="M4 10v8h14v-8" />
      <path d="M7 14v2M11 14v2M15 14v2" />
    </>
  ),
  "health-triage": (
    <>
      <path d="M11 3v16" />
      <path d="M3 11h16" />
      <circle cx="11" cy="11" r="8" />
    </>
  ),
  "gov-service": (
    <>
      <path d="M3 20h16" />
      <path d="M5 20V9" />
      <path d="M17 20V9" />
      <path d="M9 20v-6h4v6" />
      <path d="M3 9l8-5 8 5" />
    </>
  ),
  "telco-cs": (
    <>
      <path d="M5 4a1 1 0 011-1h2l2 5-2 1a9 9 0 005 5l1-2 5 2v2a1 1 0 01-1 1 14 14 0 01-14-14" />
    </>
  ),
  "madrasah-research": (
    <>
      <path d="M4 5h14v14H4z" />
      <path d="M11 5v14" />
      <path d="M7 9h3M7 13h3M14 9h2M14 13h2" />
    </>
  ),
  translation: (
    <>
      <path d="M3 5h7v3H3z" />
      <path d="M12 11h7v3h-7z" />
      <path d="M6 8v4l4 3" />
      <path d="M16 14v-4l-4-3" />
    </>
  ),
  "document-understanding": (
    <>
      <path d="M5 3h10l3 3v14H5z" />
      <path d="M15 3v3h3" />
      <path d="M8 11h6M8 14h6M8 17h4" />
    </>
  ),
};

function Tile({ uc }: { uc: UseCase }) {
  return (
    <article className="bg-parchment border border-deep-ink/10 rounded-lg p-4 flex flex-col gap-2 hover:border-pakistan-green/60 transition-colors">
      <div className="flex items-center justify-between">
        <svg
          viewBox="0 0 22 22"
          className="w-6 h-6 text-pakistan-green"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[uc.id]}
        </svg>
        <span className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-deep-ink/40">
          {uc.languages.slice(0, 2).join(" · ")}
          {uc.languages.length > 2 ? " +" : ""}
        </span>
      </div>
      <h3 className="font-display font-semibold text-[1rem] text-deep-ink leading-snug">
        {uc.title}
      </h3>
      <p className="text-[0.82rem] text-deep-ink/75 leading-snug">{uc.oneLiner}</p>
      {uc.precedent && (
        <p className="mt-auto pt-1 text-[0.68rem] font-mono text-terracotta/90 leading-snug">
          ▸ {uc.precedent}
        </p>
      )}
    </article>
  );
}

export default function BriefUseCaseGrid() {
  return (
    <section className="brief-visual not-prose my-10">
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta">
          The menu · what you can ship
        </p>
        <p className="font-mono text-[0.6rem] text-deep-ink/50 hidden sm:block">
          ≤18 months · ~$200–250K to first model
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {useCases.map((uc) => (
          <Tile key={uc.id} uc={uc} />
        ))}
      </div>
    </section>
  );
}
