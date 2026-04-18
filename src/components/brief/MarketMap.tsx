/**
 * Brief §03 — Market landscape.
 *
 * 2×2 impact × revenue quadrant with 6 segments plotted.
 * Data in src/data/brief/markets.ts.
 * Impact axis: mission value to Pakistan. Revenue axis: paying-customer size.
 */

import { markets, type Market } from "@/data/brief/markets";

const W = 720;
const H = 440;
const PAD_L = 76;
const PAD_R = 60;
const PAD_T = 40;
const PAD_B = 56;

function plotX(revenue: number): number {
  // revenue: 1..5 → fraction of chart width
  const t = (revenue - 1) / 4;
  return PAD_L + t * (W - PAD_L - PAD_R);
}
function plotY(impact: number): number {
  // impact: 1..5 → flipped
  const t = (impact - 1) / 4;
  return H - PAD_B - t * (H - PAD_T - PAD_B);
}

// Manual label offsets per segment to prevent overlaps.
const labelOffset: Record<string, [number, number]> = {
  government: [10, -4],
  enterprise: [10, 4],
  "dev-finance": [-12, -10],
  consumer: [-12, 10],
  diaspora: [10, 4],
  "own-products": [10, -12],
};

function labelAnchor(id: string): "start" | "end" {
  const o = labelOffset[id] ?? [10, 0];
  return o[0] < 0 ? "end" : "start";
}

function color(m: Market): string {
  if (m.id === "own-products") return "#C4956A";
  if (m.revenue >= 4) return "#0D2847";
  if (m.impact >= 4) return "#01796F";
  return "#01796F";
}

export default function BriefMarketMap() {
  return (
    <section className="brief-visual not-prose my-10">
      <div className="bg-parchment border border-deep-ink/10 rounded-xl p-6 sm:p-8">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta">
            The landscape · six segments
          </p>
          <p className="font-mono text-[0.6rem] text-deep-ink/50 hidden sm:block">
            Impact × revenue potential
          </p>
        </div>
        <h3 className="font-display font-semibold text-xl text-deep-ink mb-5">
          Where mission and money sit
        </h3>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label="Scatter plot of six market segments plotted by impact and revenue: Government, Enterprise, Dev finance, Consumer, Diaspora, and Own products"
        >
          {/* Quadrant background tints */}
          <rect
            x={PAD_L}
            y={PAD_T}
            width={(W - PAD_L - PAD_R) / 2}
            height={(H - PAD_T - PAD_B) / 2}
            fill="#01796F"
            fillOpacity="0.04"
          />
          <rect
            x={PAD_L + (W - PAD_L - PAD_R) / 2}
            y={PAD_T}
            width={(W - PAD_L - PAD_R) / 2}
            height={(H - PAD_T - PAD_B) / 2}
            fill="#01796F"
            fillOpacity="0.10"
          />
          <rect
            x={PAD_L}
            y={PAD_T + (H - PAD_T - PAD_B) / 2}
            width={(W - PAD_L - PAD_R) / 2}
            height={(H - PAD_T - PAD_B) / 2}
            fill="#1A1A2E"
            fillOpacity="0.025"
          />
          <rect
            x={PAD_L + (W - PAD_L - PAD_R) / 2}
            y={PAD_T + (H - PAD_T - PAD_B) / 2}
            width={(W - PAD_L - PAD_R) / 2}
            height={(H - PAD_T - PAD_B) / 2}
            fill="#C4956A"
            fillOpacity="0.05"
          />

          {/* Axis lines */}
          <line
            x1={PAD_L}
            x2={W - PAD_R}
            y1={H - PAD_B}
            y2={H - PAD_B}
            stroke="#1A1A2E"
            strokeOpacity="0.25"
          />
          <line
            x1={PAD_L}
            x2={PAD_L}
            y1={PAD_T}
            y2={H - PAD_B}
            stroke="#1A1A2E"
            strokeOpacity="0.25"
          />

          {/* Axis labels */}
          <text
            x={PAD_L - 12}
            y={PAD_T + 4}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.6"
          >
            HIGH IMPACT
          </text>
          <text
            x={PAD_L - 12}
            y={H - PAD_B + 4}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.6"
          >
            LOW IMPACT
          </text>
          <text
            x={PAD_L}
            y={H - PAD_B + 28}
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.6"
          >
            LOW REVENUE
          </text>
          <text
            x={W - PAD_R}
            y={H - PAD_B + 28}
            textAnchor="end"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.6"
          >
            HIGH REVENUE →
          </text>

          {/* Segments */}
          {markets.map((m) => {
            const cx = plotX(m.revenue);
            const cy = plotY(m.impact);
            const c = color(m);
            const off = labelOffset[m.id] ?? [10, 0];
            return (
              <g key={m.id}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={m.id === "own-products" ? 11 : 8}
                  fill={c}
                  fillOpacity={m.id === "own-products" ? 0.9 : 0.75}
                  stroke="#FAF7F2"
                  strokeWidth="2"
                />
                <text
                  x={cx + off[0]}
                  y={cy + off[1]}
                  textAnchor={labelAnchor(m.id)}
                  fontFamily="DM Sans, sans-serif"
                  fontSize="13"
                  fontWeight={m.id === "own-products" ? 600 : 500}
                  fill="#1A1A2E"
                >
                  {m.name}
                </text>
                <text
                  x={cx + off[0]}
                  y={cy + off[1] + 14}
                  textAnchor={labelAnchor(m.id)}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  fill="#1A1A2E"
                  fillOpacity="0.55"
                >
                  {m.scale} · {m.timeToMarket.split(",")[0]}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-5 pt-4 border-t border-deep-ink/10 flex items-center justify-between text-[0.72rem] font-mono text-deep-ink/60">
          <span>
            <span className="inline-block w-2 h-2 rounded-full bg-terracotta mr-1.5 align-middle" />
            Own products = packaged models as cloud APIs
          </span>
          <span className="hidden sm:block opacity-70">
            Dev finance is near-term; own products is long-runway
          </span>
        </div>
      </div>
    </section>
  );
}
