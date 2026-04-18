/**
 * Historical LLM pricing per 1M tokens (input).
 * Sources: Epoch AI, Artificial Analysis, a16z "LLMflation,"
 * company pricing pages via archive.org.
 * See: docs/superpowers/specs/2026-04-18-zahin-brief-facts.md §1.1
 */

export interface PricePoint {
  date: string; // YYYY-MM
  model: string;
  inputPerM: number; // USD per 1M input tokens
  outputPerM: number; // USD per 1M output tokens
  tier: "frontier" | "mid" | "commodity";
}

export const costCurve: PricePoint[] = [
  { date: "2023-03", model: "GPT-4", inputPerM: 30, outputPerM: 60, tier: "frontier" },
  { date: "2023-06", model: "GPT-3.5 Turbo", inputPerM: 1.5, outputPerM: 2, tier: "mid" },
  { date: "2024-05", model: "GPT-4o", inputPerM: 5, outputPerM: 15, tier: "frontier" },
  { date: "2024-07", model: "GPT-4o Mini", inputPerM: 0.15, outputPerM: 0.6, tier: "commodity" },
  { date: "2024-08", model: "Gemini 1.5 Flash", inputPerM: 0.075, outputPerM: 0.3, tier: "commodity" },
  { date: "2024-10", model: "Claude 3.5 Sonnet", inputPerM: 3, outputPerM: 15, tier: "frontier" },
  { date: "2024-10", model: "Gemini 1.5 Pro", inputPerM: 1.25, outputPerM: 5, tier: "mid" },
  { date: "2024-11", model: "Gemini 1.5 Flash-8B", inputPerM: 0.0375, outputPerM: 0.15, tier: "commodity" },
  { date: "2025-03", model: "Gemini 2.5 Pro", inputPerM: 1.25, outputPerM: 10, tier: "frontier" },
  { date: "2025-09", model: "GPT-5", inputPerM: 1.25, outputPerM: 10, tier: "frontier" },
  { date: "2026-01", model: "DeepSeek V3", inputPerM: 0.27, outputPerM: 1.1, tier: "commodity" },
];
