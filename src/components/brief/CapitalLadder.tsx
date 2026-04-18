/**
 * Brief §04 — Capital ladder.
 *
 * Four rungs — $50K / $250K / $1M / $5M — with timeline, deliverable,
 * team, and a tooltip-style assumption stack.
 * Data in src/data/brief/capital-rungs.ts.
 */

import { capitalRungs, type CapitalRung } from "@/data/brief/capital-rungs";

function Rung({ rung, index }: { rung: CapitalRung; index: number }) {
  const tint =
    index === 0
      ? "bg-terracotta/10 border-terracotta/40"
      : index === 3
      ? "bg-pakistan-green/10 border-pakistan-green/50"
      : "bg-parchment border-deep-ink/15";

  const amountColor =
    index === 0
      ? "text-terracotta"
      : index === 3
      ? "text-pakistan-green"
      : "text-deep-ink";

  return (
    <article
      className={`rounded-lg border p-4 flex flex-col gap-2 ${tint}`}
    >
      <div>
        <div className={`font-display font-semibold text-2xl ${amountColor}`}>
          {rung.amount}
        </div>
        <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-deep-ink/55 mt-0.5">
          {rung.timeline}
        </div>
      </div>
      <p className="text-[0.82rem] text-deep-ink/85 leading-snug">
        {rung.deliverable}
      </p>
      <div className="pt-2 border-t border-deep-ink/10">
        <div className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-deep-ink/45 mb-1">
          Team
        </div>
        <div className="text-[0.72rem] text-deep-ink/75">{rung.team}</div>
      </div>
      <details className="group mt-1">
        <summary className="cursor-pointer font-mono text-[0.62rem] tracking-[0.12em] uppercase text-pakistan-green/80 hover:text-pakistan-green no-print">
          Assumption stack
        </summary>
        <ul className="mt-2 space-y-1 text-[0.7rem] text-deep-ink/70 font-mono leading-snug">
          {rung.assumptionStack.map((a) => (
            <li key={a} className="pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-terracotta">
              {a}
            </li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export default function BriefCapitalLadder() {
  return (
    <section className="brief-visual not-prose my-10">
      <div className="mb-5 flex items-baseline justify-between">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta">
          The path · falsifiable rungs
        </p>
        <p className="font-mono text-[0.6rem] text-deep-ink/50 hidden sm:block">
          Each rung unlocks the next
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {capitalRungs.map((r, i) => (
          <Rung key={r.id} rung={r} index={i} />
        ))}
      </div>
      <p className="mt-4 text-[0.78rem] text-deep-ink/60 italic font-display leading-snug">
        Pakistani engineering + open-source base models + no frontier training.
        The lean is the thesis.
      </p>
    </section>
  );
}
