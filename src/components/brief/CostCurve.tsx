/**
 * Brief §01 — Cost of intelligence curve, 2023 → 2026.
 *
 * Plots $/1M input tokens on a log Y axis against time on the X axis.
 * Data from src/data/brief/cost-curve.ts.
 * Highlights the commodity-tier collapse (GPT-4 → Gemini Flash-8B = ~800x).
 */

import { costCurve, type PricePoint } from "@/data/brief/cost-curve";

// Convert YYYY-MM to a decimal year for plotting.
function toDecimalYear(date: string): number {
  const [y, m] = date.split("-").map(Number);
  return y + (m - 1) / 12;
}

// Log-scale Y maps dollars to a 0..1 fraction of the chart height (flipped).
const Y_MIN_LOG = Math.log10(0.03);
const Y_MAX_LOG = Math.log10(40);
function yFor(price: number): number {
  const clamped = Math.max(0.03, Math.min(40, price));
  const t = (Math.log10(clamped) - Y_MIN_LOG) / (Y_MAX_LOG - Y_MIN_LOG);
  return 1 - t;
}

const X_MIN = 2023.0;
const X_MAX = 2026.25;
function xFor(date: string): number {
  const d = toDecimalYear(date);
  return (d - X_MIN) / (X_MAX - X_MIN);
}

const W = 760;
const H = 340;
const PAD_L = 58;
const PAD_R = 20;
const PAD_T = 24;
const PAD_B = 40;

function plotX(date: string): number {
  return PAD_L + xFor(date) * (W - PAD_L - PAD_R);
}
function plotY(price: number): number {
  return PAD_T + yFor(price) * (H - PAD_T - PAD_B);
}

function tierColor(tier: PricePoint["tier"]): string {
  if (tier === "frontier") return "#0D2847";
  if (tier === "mid") return "#C4956A";
  return "#01796F";
}

export default function BriefCostCurve() {
  const points = [...costCurve].sort(
    (a, b) => toDecimalYear(a.date) - toDecimalYear(b.date),
  );

  // Build commodity-tier path (lowest available price per month, traced)
  const commodityTrace = points
    .filter((p) => p.tier !== "frontier")
    .sort((a, b) => toDecimalYear(a.date) - toDecimalYear(b.date));

  const pathD = commodityTrace
    .map((p, i) => `${i === 0 ? "M" : "L"} ${plotX(p.date)} ${plotY(p.inputPerM)}`)
    .join(" ");

  const yTicks = [30, 10, 3, 1, 0.3, 0.1, 0.03];
  const xTicks = [2023, 2024, 2025, 2026];

  return (
    <section className="brief-visual not-prose my-10">
      <div className="bg-parchment border border-deep-ink/10 rounded-xl p-6 sm:p-8">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta">
            The fulcrum · cost of intelligence
          </p>
          <p className="font-mono text-[0.6rem] text-deep-ink/50 hidden sm:block">
            USD per 1M input tokens · log scale
          </p>
        </div>
        <h3 className="font-display font-semibold text-xl text-deep-ink mb-5">
          GPT-4 to commodity · 800× in three years
        </h3>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label="Line chart of LLM token pricing from 2023 to 2026 on a log scale, showing commodity-tier cost falling from $30 per million tokens to under 4 cents per million"
        >
          {/* Y gridlines */}
          {yTicks.map((v) => (
            <g key={`y-${v}`}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={plotY(v)}
                y2={plotY(v)}
                stroke="#1A1A2E"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              <text
                x={PAD_L - 10}
                y={plotY(v) + 3}
                textAnchor="end"
                fontFamily="JetBrains Mono, monospace"
                fontSize="10"
                fill="#1A1A2E"
                fillOpacity="0.55"
              >
                ${v < 1 ? v.toFixed(v < 0.1 ? 3 : 2) : v}
              </text>
            </g>
          ))}

          {/* X axis */}
          <line
            x1={PAD_L}
            x2={W - PAD_R}
            y1={H - PAD_B}
            y2={H - PAD_B}
            stroke="#1A1A2E"
            strokeOpacity="0.2"
          />
          {xTicks.map((y) => {
            const x = plotX(`${y}-01`);
            return (
              <g key={`x-${y}`}>
                <line
                  x1={x}
                  x2={x}
                  y1={H - PAD_B}
                  y2={H - PAD_B + 4}
                  stroke="#1A1A2E"
                  strokeOpacity="0.3"
                />
                <text
                  x={x}
                  y={H - PAD_B + 18}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  fill="#1A1A2E"
                  fillOpacity="0.55"
                >
                  {y}
                </text>
              </g>
            );
          })}

          {/* Commodity-tier path */}
          <path
            d={pathD}
            fill="none"
            stroke="#01796F"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* All data points */}
          {points.map((p) => {
            const cx = plotX(p.date);
            const cy = plotY(p.inputPerM);
            const c = tierColor(p.tier);
            return (
              <g key={`${p.date}-${p.model}`}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={p.tier === "commodity" ? 4 : 3.2}
                  fill={c}
                  stroke="#FAF7F2"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}

          {/* Annotations for key models */}
          {[
            { model: "GPT-4", date: "2023-03", offset: [8, -4], price: 30 },
            {
              model: "GPT-4o Mini",
              date: "2024-07",
              offset: [8, -6],
              price: 0.15,
            },
            {
              model: "Gemini Flash-8B",
              date: "2024-11",
              offset: [8, 14],
              price: 0.0375,
            },
            {
              model: "DeepSeek V3",
              date: "2026-01",
              offset: [-100, -6],
              price: 0.27,
            },
          ].map((a) => (
            <g key={`ann-${a.model}`}>
              <text
                x={plotX(a.date) + a.offset[0]}
                y={plotY(a.price) + a.offset[1]}
                fontFamily="JetBrains Mono, monospace"
                fontSize="9.5"
                fill="#1A1A2E"
                fillOpacity="0.8"
              >
                {a.model}
              </text>
            </g>
          ))}

          {/* Callout: 800x */}
          <g>
            <line
              x1={plotX("2023-03")}
              x2={plotX("2024-11")}
              y1={plotY(30) - 10}
              y2={plotY(30) - 10}
              stroke="#C4956A"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
            <text
              x={plotX("2023-11")}
              y={plotY(30) - 14}
              fontFamily="Fraunces, serif"
              fontSize="11"
              fontStyle="italic"
              fill="#C4956A"
            >
              ~800× drop in commodity tier
            </text>
          </g>
        </svg>

        <div className="mt-5 pt-4 border-t border-deep-ink/10 flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] font-mono text-deep-ink/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pakistan-green" />
            <span>Commodity</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            <span>Mid tier</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-deep-navy" />
            <span>Frontier</span>
          </div>
          <div className="ml-auto opacity-70 hidden sm:block">
            Source: Epoch AI · Artificial Analysis · company pricing archives
          </div>
        </div>
      </div>
    </section>
  );
}
