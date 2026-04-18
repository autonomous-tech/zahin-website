/**
 * 10 practical use cases for Zahin-class fine-tuned models.
 * Each maps to real need + existing precedent.
 * See: docs/superpowers/specs/2026-04-18-zahin-brief-facts.md §2
 */

export interface UseCase {
  id: string;
  title: string;
  oneLiner: string;
  languages: string[];
  precedent?: string;
}

export const useCases: UseCase[] = [
  {
    id: "urdu-tutor",
    title: "Urdu AI Tutor",
    oneLiner: "Tutoring in Urdu for 230M+ speakers — reading, math, civics, language.",
    languages: ["Urdu"],
    precedent: "Qalb 90.34 proves reading/reasoning works; Alif 87.1 instruction-tuned.",
  },
  {
    id: "agri-advisor",
    title: "Agri Advisor",
    oneLiner: "Voice + text advice for farmers in Sindhi and Punjabi.",
    languages: ["Sindhi", "Punjabi"],
    precedent: "AI4Bharat Kisan e-Mitra powers farmer chatbots across India.",
  },
  {
    id: "legal-qa",
    title: "Legal Q&A",
    oneLiner: "Pakistani legal reasoning in Urdu + English — contracts, land, inheritance.",
    languages: ["Urdu", "English"],
  },
  {
    id: "banking-bot",
    title: "Banking Bot",
    oneLiner: "Low-literacy banking via voice + Urdu — JazzCash, Easypaisa adjacent.",
    languages: ["Urdu"],
    precedent: "Gates-funded voice banking for rural Nigeria.",
  },
  {
    id: "health-triage",
    title: "Health Triage",
    oneLiner: "Primary-care symptom triage in Urdu — before it deploys, safeguards must exist.",
    languages: ["Urdu"],
  },
  {
    id: "gov-service",
    title: "Government Service Chat",
    oneLiner: "BISP, NADRA, utility chatbots in Urdu + provincial languages.",
    languages: ["Urdu", "Punjabi", "Sindhi"],
  },
  {
    id: "telco-cs",
    title: "Telco Customer Service",
    oneLiner: "Jazz, Zong, Ufone deflection — Urdu-native AI beats call centers.",
    languages: ["Urdu"],
  },
  {
    id: "madrasah-research",
    title: "Madrasah Research Aid",
    oneLiner: "Islamic scholarly research — Arabic texts, Urdu commentary, cross-reference.",
    languages: ["Urdu", "Arabic"],
    precedent: "Jais 2 has 600B Arabic tokens — strongest cross-transfer base.",
  },
  {
    id: "translation",
    title: "Translation (5 PK languages)",
    oneLiner: "Urdu ↔ Sindhi ↔ Punjabi ↔ Pashto ↔ Balochi ↔ English.",
    languages: ["Urdu", "Sindhi", "Punjabi", "Pashto", "Balochi"],
    precedent: "UrduLLaMA 1.0 proved MT quality at 128M tokens pretraining.",
  },
  {
    id: "document-understanding",
    title: "Document Understanding",
    oneLiner: "OCR + layout + Q&A for Urdu documents — courts, schools, records.",
    languages: ["Urdu"],
    precedent: "Qaari 0.1 ships Urdu OCR; layout + QA is greenfield.",
  },
];
