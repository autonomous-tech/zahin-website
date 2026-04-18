/**
 * Brief §01 — Price grid for cost of intelligence, 2023 → 2026.
 *
 * Instead of a multi-tier line chart (noisy), a scannable matrix:
 *   rows = tier (Frontier, Mid, Commodity)
 *   cols = year (2023, 2024, 2025, 2026)
 * Each cell shows a representative model + $/1M input tokens.
 * Empty cells where the tier didn't yet exist that year.
 */

import { costCurve, type PricePoint } from "@/data/brief/cost-curve";

type Tier = "frontier" | "mid" | "commodity";
type Year = 2023 | 2024 | 2025 | 2026;

const TIERS: { key: Tier; label: string; color: string }[] = [
  { key: "frontier", label: "Frontier", color: "#0D2847" },
  { key: "mid", label: "Mid tier", color: "#C4956A" },
  { key: "commodity", label: "Commodity", color: "#01796F" },
];

const YEARS: Year[] = [2023, 2024, 2025, 2026];

// For each (tier, year), pick the cheapest model available by end of that year.
// Models don't disappear — a 2024 release is still available in 2025/2026.
function pickCell(tier: Tier, year: Year): PricePoint | null {
  const matches = costCurve.filter(
    (p) => p.tier === tier && Number(p.date.slice(0, 4)) <= year,
  );
  if (matches.length === 0) return null;
  return matches.reduce((a, b) => (a.inputPerM <= b.inputPerM ? a : b));
}

function fmt(v: number): string {
  if (v >= 1) return `$${v.toFixed(2)}`;
  if (v >= 0.1) return `$${v.toFixed(2)}`;
  if (v >= 0.01) return `$${v.toFixed(3)}`;
  return `$${v.toFixed(4)}`;
}

export default function BriefCostCurve() {
  // Bookends for the big-number callout: GPT-4 launch → cheapest commodity available.
  const frontierStart = costCurve.find((p) => p.model === "GPT-4");
  const cheapestCommodity = costCurve
    .filter((p) => p.tier === "commodity")
    .reduce((a, b) => (a.inputPerM <= b.inputPerM ? a : b));
  const collapseFactor =
    frontierStart && cheapestCommodity
      ? Math.round(frontierStart.inputPerM / cheapestCommodity.inputPerM)
      : 800;

  return (
    <section className="brief-visual not-prose my-10">
      <div className="bg-parchment border border-deep-ink/10 rounded-xl p-6 sm:p-8">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta">
            The fulcrum · cost of intelligence
          </p>
          <p className="font-mono text-[0.6rem] text-deep-ink/50 hidden sm:block">
            USD per 1M input tokens
          </p>
        </div>
        <h3 className="font-display font-semibold text-xl text-deep-ink mb-6">
          The commodity tier didn&rsquo;t exist three years ago.
        </h3>

        {/* Price matrix */}
        <div
          role="table"
          aria-label="Price of LLM inference per 1M input tokens by tier and year"
          className="w-full"
        >
          {/* Header row */}
          <div
            role="row"
            className="grid grid-cols-[110px_repeat(4,1fr)] border-b border-deep-ink/15 pb-2 mb-2"
          >
            <div
              role="columnheader"
              className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-deep-ink/50"
            >
              Tier
            </div>
            {YEARS.map((y) => (
              <div
                role="columnheader"
                key={y}
                className="font-mono text-[0.7rem] tracking-[0.15em] text-deep-ink/70 text-right pr-2"
              >
                {y}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {TIERS.map((t) => (
            <div
              role="row"
              key={t.key}
              className="grid grid-cols-[110px_repeat(4,1fr)] py-3 border-b border-deep-ink/8 items-center"
            >
              <div role="rowheader" className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: t.color }}
                />
                <span className="font-mono text-[0.72rem] tracking-[0.1em] text-deep-ink/80">
                  {t.label}
                </span>
              </div>
              {YEARS.map((y) => {
                const cell = pickCell(t.key, y);
                if (!cell)
                  return (
                    <div
                      role="cell"
                      key={y}
                      className="text-right pr-2 font-mono text-deep-ink/25 text-sm"
                    >
                      —
                    </div>
                  );
                return (
                  <div role="cell" key={y} className="text-right pr-2">
                    <div
                      className="font-display font-semibold text-lg sm:text-xl leading-none"
                      style={{ color: t.color }}
                    >
                      {fmt(cell.inputPerM)}
                    </div>
                    <div className="font-mono text-[0.6rem] text-deep-ink/55 mt-1 truncate">
                      {cell.model}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* The big-number payoff */}
        <div className="mt-7 pt-6 border-t border-deep-ink/15">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
            <div className="text-center sm:text-right">
              <div className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-deep-ink/55">
                {frontierStart
                  ? frontierStart.date.replace("-", "·")
                  : "2023·03"}
              </div>
              <div className="font-display font-semibold text-3xl text-deep-ink">
                {frontierStart ? fmt(frontierStart.inputPerM) : "$30.00"}
              </div>
              <div className="font-mono text-[0.65rem] text-deep-ink/55 mt-0.5">
                {frontierStart?.model ?? "GPT-4"} · frontier at launch
              </div>
            </div>

            <div className="text-center flex flex-col items-center gap-1">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                stroke="#C4956A"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <path d="M6 18h24M22 10l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="font-display font-semibold italic text-terracotta text-lg">
                {collapseFactor}× cheaper
              </div>
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-deep-ink/50">
                vs. GPT-4 launch
              </div>
            </div>

            <div className="text-center sm:text-left">
              <div className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-deep-ink/55">
                Today
              </div>
              <div className="font-display font-semibold text-3xl text-pakistan-green">
                {cheapestCommodity ? fmt(cheapestCommodity.inputPerM) : "$0.0375"}
              </div>
              <div className="font-mono text-[0.65rem] text-deep-ink/55 mt-0.5">
                {cheapestCommodity?.model ?? "Flash-8B"} · cheapest commodity
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between text-[0.68rem] font-mono text-deep-ink/55">
          <span>Input tokens; output tokens track similarly.</span>
          <span className="hidden sm:block opacity-80">
            Source: Epoch AI · Artificial Analysis · pricing archives
          </span>
        </div>
      </div>
    </section>
  );
}
