/**
 * Brief §04 — Structure diagram.
 *
 * Donors → Zahin (NFP) → Models → Markets → Impact.
 * Simple flow; no boxes-within-boxes.
 */

export default function BriefStructure() {
  return (
    <section className="brief-visual not-prose my-10">
      <div className="bg-parchment border border-deep-ink/10 rounded-xl p-6 sm:p-8">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta mb-1">
          The structure · how capital becomes impact
        </p>
        <h3 className="font-display font-semibold text-xl text-deep-ink mb-6">
          A non-profit lab, by design
        </h3>

        <svg
          viewBox="0 0 760 200"
          className="w-full h-auto"
          role="img"
          aria-label="Flow diagram: donors fund Zahin non-profit lab, which produces open-weight models, which serve Pakistani markets and users"
        >
          <defs>
            <marker
              id="arrow-green"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#01796F" />
            </marker>
          </defs>

          {/* Donors */}
          <g>
            <rect
              x="20"
              y="70"
              width="130"
              height="60"
              rx="8"
              fill="none"
              stroke="#C4956A"
              strokeWidth="1.5"
            />
            <text
              x="85"
              y="96"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="14"
              fontWeight="600"
              fill="#1A1A2E"
            >
              Donors
            </text>
            <text
              x="85"
              y="114"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#1A1A2E"
              fillOpacity="0.6"
            >
              AI4D · Gates · patrons
            </text>
          </g>

          {/* Arrow 1 */}
          <line
            x1="155"
            y1="100"
            x2="195"
            y2="100"
            stroke="#01796F"
            strokeWidth="1.5"
            markerEnd="url(#arrow-green)"
          />

          {/* Zahin (NFP) — emphasized */}
          <g>
            <rect
              x="200"
              y="50"
              width="160"
              height="100"
              rx="10"
              fill="#01796F"
              fillOpacity="0.09"
              stroke="#01796F"
              strokeWidth="2"
            />
            <text
              x="280"
              y="90"
              textAnchor="middle"
              fontFamily="Fraunces, serif"
              fontSize="22"
              fontWeight="700"
              fill="#01796F"
            >
              Zahin
            </text>
            <text
              x="280"
              y="108"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              letterSpacing="0.15em"
              fill="#01796F"
              fillOpacity="0.85"
            >
              NFP LAB
            </text>
            <text
              x="280"
              y="128"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="11"
              fill="#1A1A2E"
              fillOpacity="0.7"
            >
              Rizwan · Abdullah · team
            </text>
          </g>

          {/* Arrow 2 */}
          <line
            x1="365"
            y1="100"
            x2="405"
            y2="100"
            stroke="#01796F"
            strokeWidth="1.5"
            markerEnd="url(#arrow-green)"
          />

          {/* Models */}
          <g>
            <rect
              x="410"
              y="70"
              width="130"
              height="60"
              rx="8"
              fill="none"
              stroke="#1A1A2E"
              strokeWidth="1.5"
            />
            <text
              x="475"
              y="96"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="14"
              fontWeight="600"
              fill="#1A1A2E"
            >
              Models
            </text>
            <text
              x="475"
              y="114"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#1A1A2E"
              fillOpacity="0.6"
            >
              open-weight · PK langs
            </text>
          </g>

          {/* Arrow 3 */}
          <line
            x1="545"
            y1="100"
            x2="585"
            y2="100"
            stroke="#01796F"
            strokeWidth="1.5"
            markerEnd="url(#arrow-green)"
          />

          {/* Markets */}
          <g>
            <rect
              x="590"
              y="70"
              width="150"
              height="60"
              rx="8"
              fill="none"
              stroke="#1A1A2E"
              strokeWidth="1.5"
            />
            <text
              x="665"
              y="96"
              textAnchor="middle"
              fontFamily="DM Sans, sans-serif"
              fontSize="14"
              fontWeight="600"
              fill="#1A1A2E"
            >
              Markets
            </text>
            <text
              x="665"
              y="114"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill="#1A1A2E"
              fillOpacity="0.6"
            >
              gov · enterprise · 240M users
            </text>
          </g>

          {/* Downstream labels */}
          <text
            x="85"
            y="60"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8.5"
            letterSpacing="0.15em"
            fill="#C4956A"
          >
            CATALYTIC CAPITAL
          </text>
          <text
            x="280"
            y="36"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8.5"
            letterSpacing="0.15em"
            fill="#01796F"
          >
            SOVEREIGN IP · NO EQUITY
          </text>
          <text
            x="475"
            y="60"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8.5"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.65"
          >
            PUBLISHED · OPEN
          </text>
          <text
            x="665"
            y="60"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="8.5"
            letterSpacing="0.15em"
            fill="#1A1A2E"
            fillOpacity="0.65"
          >
            REAL IMPACT · SOME REVENUE
          </text>

          {/* Closing line */}
          <text
            x="380"
            y="180"
            textAnchor="middle"
            fontFamily="Fraunces, serif"
            fontStyle="italic"
            fontSize="13"
            fill="#0D2847"
          >
            Earned revenue later · sustains the flywheel
          </text>
        </svg>
      </div>
    </section>
  );
}
