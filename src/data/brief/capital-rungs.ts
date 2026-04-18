/**
 * Capital path — 4 rungs of funding with milestones.
 * Grounded in Pakistani cost basis + existing project precedents.
 * See: docs/superpowers/specs/2026-04-18-zahin-brief-facts.md §4
 */

export interface CapitalRung {
  id: string;
  amount: string;
  amountUsd: number;
  timeline: string;
  deliverable: string;
  team: string;
  assumptionStack: string[];
}

export const capitalRungs: CapitalRung[] = [
  {
    id: "seed",
    amount: "$50K",
    amountUsd: 50000,
    timeline: "6 months · Prototype",
    deliverable: "First Gemma 4 / Qwen3 fine-tune in Urdu. Public demo. Credibility.",
    team: "1-2 engineers (PK) + Rizwan volunteered time",
    assumptionStack: [
      "1 mid engineer × $4K/mo × 6 = $24K",
      "Compute (fine-tune runs, iterations): $10-15K",
      "Data curation + annotation: $5-10K",
      "Infra, hosting, ops: $3-5K",
      "Rizwan's time excluded",
    ],
  },
  {
    id: "year-1",
    amount: "$250K",
    amountUsd: 250000,
    timeline: "Year 1 · First full model",
    deliverable:
      "5-language model (Urdu + Sindhi + Punjabi + Pashto + Balochi). First vertical prototype.",
    team: "3 engineers + 1 linguist + Rizwan + Abdullah",
    assumptionStack: [
      "3 engineers × $4K/mo avg × 12 = $144K",
      "1 linguist × $3K/mo × 12 = $36K",
      "Compute (Qalb-scale CPT + SFT): $20-30K",
      "Data + evaluation infra: $20-30K",
      "Ops, infra, travel: $10-15K",
      "Excludes Rizwan / Abdullah salaries",
    ],
  },
  {
    id: "year-2",
    amount: "$1M",
    amountUsd: 1000000,
    timeline: "Year 2 · Production",
    deliverable: "2 shipped verticals (tutor + one more). First paid enterprise/gov pilot.",
    team: "Team of 8 — engineers, linguists, research, ops",
    assumptionStack: [
      "8 team × $4-6K/mo avg × 12 = $480-580K",
      "Compute (iterations, production): $80-120K",
      "Data + eval + ops: $100K",
      "Sales + BD for pilots: $100-150K",
      "Includes CEO + research lead comp",
    ],
  },
  {
    id: "scale",
    amount: "$5M",
    amountUsd: 5000000,
    timeline: "Year 3-4 · Scale",
    deliverable:
      "Zahin-1 (continued pretraining on open base). Regional expansion. Dedicated compute.",
    team: "15-20 person org, dedicated compute, research program",
    assumptionStack: [
      "Zahin-1 continued pretraining run: $500K-1M",
      "Team scale (15-20): $1.5-2M/year",
      "Dedicated compute cluster (own or committed): $500K-1M",
      "Regional expansion (MENA, diaspora): $500K",
      "Not from-scratch foundation — that's Year 8+",
    ],
  },
];
