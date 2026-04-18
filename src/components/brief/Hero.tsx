/**
 * Brief §01 Hero — F-35 / JF-17 / Zahin triptych
 *
 * Sets the JF-17 doctrine in one glance:
 *   Frontier platforms → Regional networked systems → Sovereign AI.
 * The analogy lands before the reader has to parse a single paragraph.
 */

export default function BriefHero() {
  return (
    <section className="brief-hero brief-visual not-prose my-10">
      <div className="bg-parchment border border-deep-ink/10 rounded-xl p-8 sm:p-10">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-terracotta mb-6">
          The doctrine · one glance
        </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 items-center">
          {/* F-35 — Frontier */}
          <figure className="text-center">
            <div className="aspect-square flex items-center justify-center mb-3 text-deep-ink/70">
              <svg
                viewBox="0 0 120 120"
                className="w-full max-w-[120px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="F-35 Lightning II silhouette"
                role="img"
              >
                {/* angular stealth fuselage + wings */}
                <path d="M60 14 L68 48 L98 58 L108 72 L72 72 L68 92 L75 108 L60 100 L45 108 L52 92 L48 72 L12 72 L22 58 L52 48 Z" />
                {/* tail fins */}
                <path d="M55 98 L52 110 L60 106 L68 110 L65 98" />
                {/* canopy detail */}
                <line x1="55" y1="34" x2="60" y2="22" />
                <line x1="65" y1="34" x2="60" y2="22" />
              </svg>
            </div>
            <figcaption>
              <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-deep-ink/50 mb-1">
                Frontier
              </div>
              <div className="font-display font-semibold text-deep-ink">F-35</div>
              <div className="font-mono text-[0.65rem] text-deep-ink/55 mt-0.5">
                ~$82M · isolated
              </div>
            </figcaption>
          </figure>

          {/* JF-17 — Regional networked */}
          <figure className="text-center">
            <div className="aspect-square flex items-center justify-center mb-3 text-deep-ink/75 relative">
              <svg
                viewBox="0 0 120 120"
                className="w-full max-w-[120px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="JF-17 Thunder with networked AWACS links"
                role="img"
              >
                {/* networked system ring — dashed */}
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  strokeDasharray="3 3"
                  strokeWidth="0.8"
                  stroke="#C4956A"
                />
                {/* AWACS node (top) */}
                <circle cx="60" cy="10" r="3" fill="#C4956A" stroke="none" />
                {/* missile node (right) */}
                <circle cx="110" cy="60" r="3" fill="#C4956A" stroke="none" />
                {/* link to AWACS */}
                <line
                  x1="60"
                  y1="60"
                  x2="60"
                  y2="14"
                  strokeWidth="0.6"
                  stroke="#C4956A"
                  strokeDasharray="1 2"
                />
                <line
                  x1="60"
                  y1="60"
                  x2="106"
                  y2="60"
                  strokeWidth="0.6"
                  stroke="#C4956A"
                  strokeDasharray="1 2"
                />
                {/* cleaner jet silhouette */}
                <path d="M60 28 L66 52 L92 62 L68 64 L64 92 L70 104 L60 98 L50 104 L56 92 L52 64 L28 62 L54 52 Z" />
                <path d="M55 96 L60 100 L65 96" />
              </svg>
            </div>
            <figcaption>
              <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-deep-ink/50 mb-1">
                Regional · networked
              </div>
              <div className="font-display font-semibold text-deep-ink">JF-17</div>
              <div className="font-mono text-[0.65rem] text-deep-ink/55 mt-0.5">
                ~$25M · integrated
              </div>
            </figcaption>
          </figure>

          {/* Zahin — Sovereign AI */}
          <figure className="text-center">
            <div className="aspect-square flex items-center justify-center mb-3">
              <svg
                viewBox="0 0 120 120"
                className="w-full max-w-[120px]"
                fill="none"
                stroke="#01796F"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Zahin geometric mark — sovereign AI"
                role="img"
              >
                {/* 8-pointed khatam star */}
                <polygon points="60,10 72,44 108,44 78,66 90,102 60,82 30,102 42,66 12,44 48,44" />
                <polygon
                  points="60,10 72,44 108,44 78,66 90,102 60,82 30,102 42,66 12,44 48,44"
                  transform="rotate(22.5 60 60)"
                  opacity="0.55"
                />
                {/* center dot */}
                <circle cx="60" cy="60" r="5" fill="#01796F" stroke="none" />
                {/* emanating scripts — abstract */}
                <line
                  x1="18"
                  y1="18"
                  x2="28"
                  y2="28"
                  strokeWidth="0.9"
                  opacity="0.5"
                />
                <line
                  x1="102"
                  y1="18"
                  x2="92"
                  y2="28"
                  strokeWidth="0.9"
                  opacity="0.5"
                />
                <line
                  x1="18"
                  y1="102"
                  x2="28"
                  y2="92"
                  strokeWidth="0.9"
                  opacity="0.5"
                />
                <line
                  x1="102"
                  y1="102"
                  x2="92"
                  y2="92"
                  strokeWidth="0.9"
                  opacity="0.5"
                />
              </svg>
            </div>
            <figcaption>
              <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-pakistan-green mb-1">
                Sovereign AI
              </div>
              <div className="font-display font-semibold text-pakistan-green">
                Zahin
              </div>
              <div className="font-mono text-[0.65rem] text-deep-ink/55 mt-0.5">
                ~$5M · sovereign
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 pt-6 border-t border-deep-ink/10 text-center">
          <p className="font-display italic text-base sm:text-lg text-deep-navy leading-snug max-w-xl mx-auto">
            Cheaper components. Smarter integration. Dominant in the region that
            matters.
          </p>
        </div>
      </div>
    </section>
  );
}
