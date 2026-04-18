/**
 * 6 market segments for Zahin. Impact and revenue axes are ordinal (1-5).
 * See: docs/superpowers/specs/2026-04-18-zahin-brief-facts.md §3
 */

export interface Market {
  id: string;
  name: string;
  impact: number; // 1-5
  revenue: number; // 1-5
  buyer: string;
  paysFor: string;
  scale: string;
  timeToMarket: string;
  notes?: string;
}

export const markets: Market[] = [
  {
    id: "government",
    name: "Government",
    impact: 5,
    revenue: 5,
    buyer: "Federal + provincial ministries",
    paysFor: "Sovereign AI capability, custom deployments",
    scale: "$$$$",
    timeToMarket: "3-5+ years federal, earlier provincial (KP, Punjab)",
    notes: "Long-horizon. No national AI strategy yet. Provincial wins likely first.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    impact: 3,
    revenue: 4,
    buyer: "Banks, telcos, fintechs",
    paysFor: "Urdu-native AI, efficiency, sovereignty",
    scale: "$$$",
    timeToMarket: "Year 2-3 for first paid pilot",
    notes: "Sarvam (India) precedent — $41M VC-backed, different model.",
  },
  {
    id: "dev-finance",
    name: "Dev finance",
    impact: 5,
    revenue: 3,
    buyer: "Gates, World Bank, UK FCDO + Canada IDRC, Open Philanthropy",
    paysFor: "Impact-grade multilingual AI, regulatory frameworks",
    scale: "$$$",
    timeToMarket: "Near-term (grants) — AI4D at CAD$100K-$1M/project",
    notes: "Strongest near-term funding segment. AI4D program = cleanest fit.",
  },
  {
    id: "consumer",
    name: "Consumer",
    impact: 3,
    revenue: 2,
    buyer: "WhatsApp users across Pakistan",
    paysFor: "Free or subsidized access; mission-driven",
    scale: "$",
    timeToMarket: "Year 2+ (after first model ships)",
    notes: "52M active WhatsApp users. Architect for free tier + utility templates.",
  },
  {
    id: "diaspora",
    name: "Diaspora & religious",
    impact: 3,
    revenue: 3,
    buyer: "Pakistani diaspora (~9M), madrasahs, mosques",
    paysFor: "Identity, religious tools, philanthropic support",
    scale: "$$",
    timeToMarket: "Year 1-2",
  },
  {
    id: "own-products",
    name: "Own products",
    impact: 5,
    revenue: 5,
    buyer: "Enterprises, startups (via AWS Bedrock, Vertex marketplaces)",
    paysFor: "Purpose-built vertical models as cloud APIs (usage-based pricing)",
    scale: "$$$$",
    timeToMarket: "Year 3-5 (after credible models exist)",
    notes: "Packaged models, not SaaS. Long runway but high ceiling.",
  },
];
