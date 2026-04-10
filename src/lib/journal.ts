export interface ArticleBlock {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "blockquote" | "callout";
  content: string;
  items?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Author {
  name: string;
  url?: string;
  role?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  dateModified?: string;
  category: string;
  readingTime: string;
  author: Author;
  tags: string[];
  blocks: ArticleBlock[];
  faqs: FAQ[];
  relatedSlugs: string[];
}

export const authors: Record<string, Author> = {
  rizwan: {
    name: "Rizwan Qaiser",
    url: "https://zahin.ai/join",
    role: "Co-Founder, Zahin",
  },
  abdullah: {
    name: "Abdullah Abid",
    url: "https://zahin.ai/join",
    role: "Co-Founder, Zahin",
  },
};

export const articles: Article[] = [
  {
    slug: "why-sovereign-ai",
    title: "Why Pakistan Needs Sovereign AI — And Why Now",
    excerpt:
      "Every country without its own AI becomes a data colony. Pakistan has 240 million people, 64% under 30, and zero foundation models.",
    description:
      "Pakistan has 240 million people and zero sovereign AI models. This position paper explains why sovereign AI is a national security imperative — and how Zahin plans to change that.",
    date: "2026-04-10",
    category: "Position Paper",
    readingTime: "8 min read",
    author: authors.rizwan,
    tags: ["sovereign-ai", "pakistan", "ai-policy", "national-security", "foundation-models"],
    relatedSlugs: ["choosing-base-model-pakistani-languages"],
    faqs: [
      {
        question: "What is sovereign AI?",
        answer:
          "Sovereign AI refers to artificial intelligence models and infrastructure that are owned, operated, and governed by a nation or its institutions — rather than depending on foreign corporations. It ensures a country retains control over its AI capabilities, data, and decision-making systems.",
      },
      {
        question: "Why does Pakistan need its own AI models?",
        answer:
          "Pakistan has 240 million people — the world's 6th largest population — yet relies entirely on foreign AI systems for critical services like healthcare, legal processing, and education. Without sovereign models, Pakistan faces shutoff risk from geopolitical shifts and has no AI that understands its languages, culture, or legal framework.",
      },
      {
        question: "How much does Pakistan invest in AI compared to other countries?",
        answer:
          "Pakistan's government AI investment is estimated at under $10 million annually, compared to $3 billion by the UAE, $1.3 billion by Saudi Arabia, and over $50 billion by the United States. Even Bangladesh has committed $150 million to its national AI strategy.",
      },
      {
        question: "What is Zahin doing about Pakistan's AI gap?",
        answer:
          "Zahin is a non-profit sovereign AI lab building open-weight foundation models fine-tuned for Pakistan's languages (Urdu, Punjabi, Pashto, Sindhi, Balochi). Phase 1 fine-tunes the best available open-weight models, progressing toward a fully indigenous model called Zahin-1.",
      },
    ],
    blocks: [
      {
        type: "p",
        content:
          "Pakistan stands at a critical juncture. With 240 million people — the world's 6th largest population — and 64% of its citizens under 30, the country has an extraordinary demographic advantage. Yet it has zero sovereign AI models. No foundation model understands Urdu grammar. No language model can process Punjabi legal documents. No AI system has been trained on Pakistan's cultural context.",
      },
      {
        type: "callout",
        content:
          "Sovereign AI is artificial intelligence that is owned, operated, and governed by a nation or its institutions — ensuring control over data, capabilities, and strategic decision-making.",
      },
      {
        type: "p",
        content:
          "This isn't just a technology gap. It's a sovereignty crisis. Every country that depends entirely on foreign AI for critical infrastructure — healthcare diagnostics, legal document processing, financial systems, education — has handed a strategic lever to entities outside its borders.",
      },
      { type: "h2", content: "The Investment Gap" },
      {
        type: "p",
        content:
          "The numbers tell a stark story. While the UAE has committed over $3 billion to AI development and Saudi Arabia has allocated $1.3 billion through its SDAIA initiative, Pakistan's total government AI spending remains under $10 million annually. Even among South Asian peers, the gap is widening: India's INR 10,371 crore ($1.25 billion) IndiaAI Mission dwarfs anything Pakistan has attempted.",
      },
      {
        type: "ul",
        content: "National AI investment comparison:",
        items: [
          "United States — $50B+ annually (federal + CHIPS Act allocations)",
          "China — $15B+ annually (national AI development plan)",
          "United Arab Emirates — $3B+ (Technology Innovation Institute, Falcon models)",
          "Saudi Arabia — $1.3B (SDAIA, national data & AI authority)",
          "India — $1.25B (IndiaAI Mission, 2024–2029)",
          "Bangladesh — $150M (national AI strategy commitment)",
          "Pakistan — <$10M (no unified national AI strategy)",
        ],
      },
      { type: "h2", content: "The Dependency Problem" },
      {
        type: "p",
        content:
          "Every AI model that currently serves Pakistan — from chatbots answering medical questions in Karachi's hospitals to systems processing legal documents in Lahore's courts — is owned, operated, and controlled by foreign corporations. OpenAI, Google, Meta, and Anthropic build models primarily for English-speaking markets. Pakistani languages are an afterthought, if they're considered at all.",
      },
      {
        type: "p",
        content:
          "This creates three compounding risks. First, the accuracy problem: foreign models hallucinate when processing Urdu, produce grammatically broken Punjabi, and cannot parse Sindhi or Balochi at all. Second, the data problem: every query sent to a foreign API transmits Pakistani data to servers governed by foreign laws. Third, the control problem: access can be revoked, throttled, or priced out at any time.",
      },
      { type: "h2", content: "The Shutoff Risk" },
      {
        type: "p",
        content:
          "What happens when geopolitical tensions shift? This is not hypothetical. In 2022, Russia lost access to major cloud platforms within weeks of the Ukraine invasion. Chinese companies have been cut off from advanced AI chips and software. Iran and North Korea operate under comprehensive technology sanctions.",
      },
      {
        type: "p",
        content:
          "Pakistan, as a nuclear state with complex geopolitical relationships, faces non-trivial shutoff risk. If access to GPT-5 or Gemini were restricted tomorrow, Pakistani hospitals, banks, courts, and schools would lose AI capabilities overnight — with no domestic alternative to fall back on.",
      },
      {
        type: "blockquote",
        content:
          "A nation that cannot run its own AI is a nation that has outsourced its cognitive infrastructure. In the 21st century, that is a form of dependency as dangerous as energy dependence.",
      },
      { type: "h2", content: "The Language Crisis" },
      {
        type: "p",
        content:
          "Pakistan's linguistic diversity is both its richest asset and its most neglected one. Over 75 languages are spoken across the country, with five major languages — Urdu, Punjabi, Pashto, Sindhi, and Balochi — serving over 200 million speakers combined. Yet AI coverage for these languages ranges from minimal to nonexistent.",
      },
      {
        type: "ul",
        content: "Pakistani language AI coverage (2026):",
        items: [
          "Urdu — 230M+ speakers globally, partial NLP support, poor generative quality",
          "Punjabi (Shahmukhi) — 113M+ speakers, near-zero AI coverage",
          "Pashto — 60M+ speakers, minimal AI research",
          "Sindhi — 30M+ speakers, zero AI coverage",
          "Balochi — 8M+ speakers, zero AI coverage",
        ],
      },
      {
        type: "p",
        content:
          "When a doctor in Quetta needs AI assistance, they must think in Balochi, translate to English in their head, query a foreign model, then translate the response back. This isn't just inefficient — it's a barrier that excludes millions from the AI revolution entirely.",
      },
      { type: "h2", content: "The Opportunity" },
      {
        type: "p",
        content:
          "Despite these challenges, Pakistan has extraordinary raw material for an AI ecosystem. The country graduates over 36,500 computer science students from HEC-accredited universities every year. Its diaspora occupies senior technical positions at Google, Meta, OpenAI, DeepMind, and Microsoft Research. Pakistani developers consistently rank among the top freelancers on global platforms.",
      },
      {
        type: "p",
        content:
          "What's missing is not talent — it's infrastructure, investment, and institutional will. That's what Zahin exists to provide. Starting with open-weight models fine-tuned for Pakistani languages, we aim to build the foundation that Pakistan's AI ecosystem needs to stand on its own.",
      },
      { type: "h2", content: "Zahin's Three-Phase Roadmap" },
      {
        type: "ol",
        content: "",
        items: [
          "Phase 1 — Fine-Tune ($50K): Adapt the best open-weight models for Urdu, Punjabi, Pashto, Sindhi, and Balochi. Build evaluation benchmarks. Open-source everything.",
          "Phase 2 — Deploy ($500K, 6–12 months): Build inference infrastructure on Pakistani soil. Partner with universities and government agencies for real-world deployment.",
          "Phase 3 — Zahin-1 ($25M, 18–24 months): Train Pakistan's first indigenous foundation model from scratch — built on Pakistani data, for Pakistani needs, governed by Pakistani institutions.",
        ],
      },
      {
        type: "p",
        content:
          "The window is closing. Every month without sovereign AI capability widens the gap between Pakistan and its peers. But the window is still open — and 240 million people are waiting on the other side.",
      },
    ],
  },
  {
    slug: "choosing-base-model-pakistani-languages",
    title: "Choosing the Right Base Model for Pakistani Languages: LLaMA vs Gemma vs Qwen and Beyond",
    excerpt:
      "Before writing a single line of training code, we surveyed every major open-weight model for Pakistani language fine-tuning. Here's what the research says — and what surprised us.",
    description:
      "A research survey of open-weight LLMs for Pakistani language fine-tuning. Covers LLaMA 3.1, Gemma 4, Qwen3, Falcon-H1, Jais 2, Mistral, BLOOM, and Aya — with tokenizer analysis, licensing comparison, cost estimates, and published fine-tuning results from Qalb, Alif, and UrduLLaMA.",
    date: "2026-04-10",
    dateModified: "2026-04-10",
    category: "Research",
    readingTime: "22 min read",
    author: authors.rizwan,
    tags: [
      "model-comparison", "llama", "gemma", "qwen", "falcon", "jais",
      "fine-tuning", "urdu", "tokenizer", "open-weight-models", "pakistani-languages",
    ],
    relatedSlugs: ["why-sovereign-ai"],
    faqs: [
      {
        question: "Which open-source model is best for Urdu language AI?",
        answer:
          "As of early 2026, LLaMA 3.1 8B has the strongest track record for Urdu — it's the only model with published fine-tuning results. The Qalb project scored 90.34 by fine-tuning it with continued pre-training on 1.84 billion Urdu tokens. Qwen is a promising alternative: Qwen2.5-7B scored 72.0 on Urdu zero-shot (Qwen3 not yet benchmarked), with Apache 2.0 licensing and documented South Asian language support.",
      },
      {
        question: "How much does it cost to fine-tune an LLM for Pakistani languages?",
        answer:
          "Fine-tuning a 7B-8B parameter model using QLoRA costs as little as $50-$500 for supervised fine-tuning alone. A full Qalb-scale project (continued pre-training on ~2B tokens plus supervised fine-tuning) costs $15,000-$25,000 in compute, feasible on 4-8 A100 GPUs. A $50K budget can cover Urdu fine-tuning with budget remaining for Pashto and Sindhi adaptation.",
      },
      {
        question: "What is tokenizer fertility and why does it matter for Urdu?",
        answer:
          "Tokenizer fertility measures how many tokens a model needs to represent one word. English averages ~1.0 token per word, while Urdu on models like LLaMA 2 (32K vocabulary) can require 3-5 tokens per word. This means Urdu text costs 3-5x more to process, uses context window faster, and degrades generation quality. Models with larger vocabularies (Gemma 256K, Qwen 152K, LLaMA 3 128K) significantly reduce this gap.",
      },
      {
        question: "Is Gemma or LLaMA better for Pakistani languages?",
        answer:
          "As of April 2026, only LLaMA 3.1 8B has published fine-tuning results for Urdu (Qalb, Alif, UrduLLaMA). Gemma 4 has a larger tokenizer (256K vs 128K) and Apache 2.0 licensing but no published Urdu benchmarks. Qwen2.5 showed a stronger Urdu zero-shot baseline than LLaMA but hasn't been fine-tuned at scale. The honest answer is: we don't know yet which is best after fine-tuning — only LLaMA has been tested.",
      },
      {
        question: "Can AI models handle Nastaliq script and Urdu diacritics?",
        answer:
          "This remains a challenge. Most LLM training data contains Naskh-rendered Urdu, not authentic Nastaliq. Urdu diacritical marks (zabar, zer, pesh) are almost always omitted in digitized text, meaning models learn to generate undiacritized output. Sindhi's 52-letter extended Arabic alphabet and Shahmukhi-specific characters also cause tokenizer failures in most models. These issues require targeted data collection and tokenizer evaluation before committing to a base model.",
      },
      {
        question: "Are there any AI models specifically built for Pakistani languages?",
        answer:
          "Yes, several have emerged in 2025-2026. Qalb 1.0 (Auburn University) is the current state-of-the-art Urdu LLM, scoring 90.34 across 7 tasks. Alif 1.0 (Meta-funded LARGE initiative) was the first purpose-built Urdu instruction-tuned model. UrduLLaMA 1.0 focuses on machine translation. Qaari 0.1 handles Urdu OCR. However, no dedicated models exist yet for Pashto, Punjabi Shahmukhi, Sindhi, or Balochi.",
      },
      {
        question: "Can Pakistani languages AI run on cheap hardware?",
        answer:
          "Yes. A 4B parameter model with 4-bit quantization runs on an 8GB GPU (RTX 3060, ~$300). A 7-8B model runs on a 24GB GPU (RTX 4090, ~$1,600). Models under 2B parameters can run on CPUs or even smartphones. For Pakistan, where university labs and government offices rarely have datacenter GPUs, the 4B-8B range with quantization is the practical sweet spot. Qalb's 4-bit quantized version retains 95% of full-precision performance.",
      },
    ],
    blocks: [
      {
        type: "p",
        content:
          "Before we write a single line of training code, we need to answer a foundational question: which open-weight model should Zahin fine-tune for Pakistani languages? To answer it, we surveyed every major open-weight model against a specific set of requirements: Arabic-script tokenization quality, multilingual pre-training coverage, licensing terms, fine-tuning feasibility on constrained hardware, and — most importantly — published results on Urdu and related languages from other research teams.",
      },
      {
        type: "callout",
        content:
          "This article compares LLaMA 3.1/4, Gemma 3/4, Qwen3, Falcon-H1, Jais 2, Mistral Saba, BLOOM, and Aya for fine-tuning on five Pakistani languages: Urdu (230M+ speakers), Punjabi Shahmukhi (113M+), Pashto (60M+), Sindhi (30M+), and Balochi (8M+).",
      },
      {
        type: "p",
        content:
          "This article is a literature review, not original research. We have not fine-tuned or benchmarked any model ourselves — that's the next step. What follows draws on published benchmarks, academic papers (Qalb, Alif, UrduLLaMA), model documentation, and publicly available evaluations. Where we estimate numbers (particularly tokenizer fertility for Urdu), we say so explicitly.",
      },

      { type: "h2", content: "The Infrastructure Reality: Why Size Matters for Pakistan" },
      {
        type: "p",
        content:
          "Before comparing models on benchmarks, we need to be honest about a constraint that most AI research papers ignore: Pakistan is not training models on NVIDIA H100 clusters. The country has no national AI compute infrastructure. Universities run on aging hardware. Startups operate on thin margins. Electricity is expensive and unreliable. Any model we choose must be trainable on affordable cloud GPUs and deployable on hardware that Pakistan can actually access and afford.",
      },
      {
        type: "callout",
        content:
          "A 70B parameter model that scores 95% on benchmarks but requires $50,000 in cloud compute to fine-tune and a $10,000/month GPU server to deploy is useless for Pakistan. A 4B model that scores 80% but runs on a $300 consumer GPU is transformative.",
      },
      {
        type: "p",
        content:
          "This constraint reshapes the entire model selection calculus. The global AI discourse is obsessed with scaling — bigger models, more parameters, more compute. For Pakistan, the question is the opposite: what is the smallest model that can deliver usable results for our languages, and how cheaply can we train and deploy it?",
      },
      {
        type: "ul",
        content: "Pakistan's compute reality:",
        items: [
          "No national GPU cluster or sovereign compute facility",
          "University labs typically have 1-2 consumer GPUs (RTX 3090/4090, 24GB VRAM) at best",
          "Cloud compute must be rented from foreign providers (AWS, GCP, Vast.ai) at $0.67-$3.39/hour per A100",
          "Electricity costs $0.12-0.20/kWh with frequent load-shedding in many areas",
          "Deployment infrastructure is limited — models must run on CPUs, low-end GPUs, or edge devices to reach users outside Islamabad/Lahore/Karachi",
          "Internet bandwidth is constrained — API-based models with high latency are impractical for rural deployment",
        ],
      },
      {
        type: "p",
        content:
          "This means three things for model selection. First, smaller models (4B-8B parameters) are strongly preferred over 70B+ models — the quality difference doesn't justify the 10x cost difference for most practical applications. Second, quantization is not optional — 4-bit inference must work well, because that's how models will actually be deployed. Third, inference efficiency (tokens per second per dollar) matters as much as benchmark scores, because ongoing serving costs will dwarf the one-time training cost.",
      },

      { type: "h2", content: "Why the Base Model Matters More Than You Think" },
      {
        type: "p",
        content:
          "For high-resource languages like English or Chinese, most modern LLMs perform well enough that the choice of base model is a minor consideration. For low-resource languages like Sindhi or Balochi, it can be the difference between a usable model and one that produces garbage. Three factors dominate: tokenizer quality, pre-training coverage, and licensing.",
      },
      {
        type: "p",
        content:
          "Tokenizer quality determines cost and context efficiency. A model that needs 5 tokens to represent one Urdu word will cost 5x more to run, consume its context window 5x faster, and produce lower-quality output because the model's attention is spread across fragmented subwords instead of coherent linguistic units.",
      },

      { type: "h2", content: "The Tokenizer Problem: Why Most Models Fail on Pakistani Languages" },
      {
        type: "p",
        content:
          "Every LLM starts by breaking text into tokens — subword units that the model processes internally. English-optimized tokenizers produce roughly 1 token per word. For Urdu on a model like LLaMA 2 (32K vocabulary), the same text can require 3-5 tokens per word. This isn't just an efficiency problem — it's a quality problem. When a single Urdu word is split into 4 meaningless fragments, the model loses the semantic connection between those fragments.",
      },
      {
        type: "ul",
        content: "Tokenizer vocabulary sizes across models:",
        items: [
          "Gemma 3/4 — 256,000 tokens (largest vocabulary, best script coverage)",
          "BLOOM — 250,000 tokens (explicitly multilingual, includes Urdu)",
          "Qwen 2.5/3 — 151,646 tokens (byte-level BPE, strong CJK + emerging South Asian)",
          "LLaMA 3/3.1/4 — 128,256 tokens (major upgrade from LLaMA 2's 32K, but still Latin-biased)",
          "Mistral (original) — ~32,000 tokens (English-focused, poor non-Latin coverage)",
        ],
      },
      {
        type: "p",
        content:
          "Vocabulary size alone doesn't tell the full story. What matters is how many of those tokens represent Arabic-script subwords. Gemma's 256K vocabulary has better coverage of Arabic-script characters, but LLaMA 3's 128K vocabulary — while smaller — has been the foundation for every successful Urdu fine-tuning project to date.",
      },
      {
        type: "h3",
        content: "The Nastaliq and Diacritics Challenge",
      },
      {
        type: "p",
        content:
          "Pakistani languages add complications that even Arabic-aware tokenizers struggle with. Urdu uses Nastaliq script — written diagonally, right-to-left and top-to-bottom — which differs significantly from the Naskh style used by Arabic. Most digitized Urdu text is rendered in Naskh, meaning models are trained on a visual representation that doesn't match how Urdu is actually written and read.",
      },
      {
        type: "p",
        content:
          "Then there are diacritics. Urdu's short vowels (zabar, zer, pesh) are represented by marks above or below consonants — but in virtually all digital text, these marks are omitted. Readers infer them from context. This means models learn to generate undiacritized text, and the same written string can represent multiple words with different meanings. Sindhi compounds this problem further with the largest Arabic-script alphabet of any language at 52 letters, many with unique dot patterns that most tokenizers simply don't recognize.",
      },

      { type: "h2", content: "The Contenders: Model-by-Model Analysis" },
      { type: "h3", content: "LLaMA 3.1 / 4 (Meta)" },
      {
        type: "p",
        content:
          "LLaMA 3.1 8B is, as of early 2026, the most battle-tested base model for Urdu. Three independent research projects have fine-tuned it successfully: Qalb achieved a 90.34 weighted average score across 7 Urdu NLP tasks (a 44.64-point improvement over the base model), Alif 1.0 scored 87.1 and was the first purpose-built Urdu instruction-tuned model, and UrduLLaMA 1.0 demonstrated significant machine translation improvements with just 128M tokens of continued pre-training.",
      },
      {
        type: "p",
        content:
          "The trade-off is licensing. Meta's Llama Community License caps free use at 700 million monthly active users and includes a competitor clause prohibiting use to build products that compete with Meta's own AI offerings. For a non-profit research lab like Zahin, these restrictions are manageable. For commercial deployment at scale, they could become binding.",
      },
      {
        type: "ul",
        content: "",
        items: [
          "Proven results: Qalb (90.34), Alif (87.1), UrduLLaMA — all built on LLaMA 3.1 8B",
          "Fine-tuning cost: Alif was trained for under $100 using LoRA; Qalb-scale projects cost $15K-$25K",
          "Deployment: 8B model runs quantized (4-bit) on a single RTX 3090/4090 (24GB) — realistic for Pakistani institutions. Qalb's 4-bit version retains 95% of full-precision performance at 86.02",
          "Weakness: 128K tokenizer vocabulary is Latin-biased; Urdu token fertility ~3-5x English on LLaMA 2, improved but not eliminated on LLaMA 3",
          "License: Llama Community License — commercial use permitted up to 700M MAU with competitor restrictions",
          "Latest: LLaMA 4 (April 2025) brings MoE architecture and 10M token context, but MoE models are harder to deploy on constrained hardware",
        ],
      },
      { type: "h3", content: "Gemma 3 / 4 (Google DeepMind)" },
      {
        type: "p",
        content:
          "Gemma has two structural advantages: the largest tokenizer vocabulary of any open model (256K tokens) and, as of Gemma 4 (April 2026), a fully permissive Apache 2.0 license with no commercial restrictions whatsoever. Its 128K context window and multimodal capabilities (vision + text in Gemma 3 4B+) add practical value.",
      },
      {
        type: "p",
        content:
          "The gap is in proven results. While the Navarasa 2.0 community project fine-tuned Gemma 7B on 15 Indian languages including Urdu, and Hindi-specific results have been strong (81.44 GLEU on grammatical error correction), there's no published benchmark equivalent to Qalb or Alif for Gemma-based Urdu fine-tuning. Gemma's RTL text generation behavior is also undocumented — a meaningful unknown for right-to-left languages.",
      },
      {
        type: "ul",
        content: "",
        items: [
          "Tokenizer: 256K vocabulary — best Arabic-script coverage on paper",
          "License: Apache 2.0 (Gemma 4) — unrestricted commercial use, no approval needed",
          "Fine-tuning: QLoRA on Gemma 27B fits in <22GB VRAM with Unsloth optimization",
          "Deployment: Gemma 4B and 2B variants are specifically designed for edge/mobile. The 2.3B E2B model can run on phones — potentially huge for reaching rural Pakistan where the only compute is a smartphone",
          "Proven for Urdu: Limited — Navarasa 2.0 includes Urdu but no published benchmarks",
          "Risk: RTL generation behavior undocumented; diacritics and Nastaliq handling untested",
        ],
      },
      { type: "h3", content: "Qwen3 (Alibaba)" },
      {
        type: "p",
        content:
          "Qwen3 is the surprise of this comparison. Released April 2025 with Apache 2.0 licensing, it appears to offer the broadest South Asian language coverage of any model we reviewed. The Qwen3 Embedding model's documentation explicitly lists Urdu, Punjabi, Sindhi, Bengali, and Gujarati among its supported languages. A caveat: this is the Embedding model's language list, not necessarily the generative LLM's training data — though the 119-language pre-training scope of Qwen3 suggests substantial overlap.",
      },
      {
        type: "p",
        content:
          "The quantitative signal is promising but indirect. In the Qalb benchmark evaluation, Qwen2.5-7B-Instruct (the previous generation, not Qwen3) scored 72.0 on Urdu reasoning tasks zero-shot — compared to LLaMA 3.1 8B Instruct's 45.7. That's a 26.3-point advantage before any fine-tuning. Qwen3 may perform better or differently, but this hasn't been benchmarked on Urdu yet. And crucially, no one has fine-tuned any Qwen model for Urdu at the scale of Qalb or Alif — so we don't know whether Qwen's stronger baseline translates to a stronger fine-tuned result.",
      },
      {
        type: "ul",
        content: "",
        items: [
          "Language coverage: Qwen3 Embedding docs confirm Urdu, Punjabi, Sindhi — broadest South Asian support if this extends to the generative models",
          "Zero-shot Urdu: Qwen2.5-7B scored 72.0 (vs LLaMA 3.1's 45.7). Qwen3 not yet benchmarked on Urdu",
          "License: Apache 2.0 — fully permissive",
          "Sizes: 0.6B to 235B (MoE), dense models up to 32B. The 0.6B, 1.7B, and 4B variants are practical for deployment on consumer hardware and even mobile devices",
          "Deployment advantage: Qwen3-4B can run quantized on 8GB VRAM — that's an RTX 3060 or even a laptop GPU. The 0.6B model runs on CPUs. For a country where most compute is consumer-grade, this range matters enormously",
          "Gap: No published Urdu fine-tuning project at Qalb/Alif scale yet",
          "Ecosystem: Supported by Axolotl, LLaMA-Factory, Unsloth, HuggingFace PEFT",
        ],
      },
      {
        type: "p",
        content:
          "A sovereignty note: Qwen3 is built by Alibaba, a company subject to Chinese national security laws. Apache 2.0 means the weights are freely downloadable and irrevocable — once you have them, no one can take them back. But future model updates, bug fixes, and community ecosystem support could be affected by geopolitical shifts between China and Pakistan. This is the same category of risk we flag for Meta (LLaMA) and Google (Gemma). For a sovereign AI initiative, no foreign model is truly free of geopolitical dependency — which is why Zahin's long-term goal is an indigenous model.",
      },
      { type: "h3", content: "Falcon-H1 (TII, UAE)" },
      {
        type: "p",
        content:
          "Falcon-H1 is notable for listing Urdu as one of its 18 natively trained languages — meaning Urdu was part of the pre-training data, not an afterthought. The Falcon-H1 Arabic variant adds 300B tokens of Arabic-specific training. Built by the Technology Innovation Institute in Abu Dhabi, Falcon represents a sovereign AI initiative with goals parallel to Zahin's.",
      },
      {
        type: "p",
        content:
          "The catch is the license. TII's Falcon License requires a 10% royalty on revenue exceeding $1 million and a separate license for cloud/API hosting. This effectively rules out Falcon for commercial deployment at scale, though it's viable for research and small-scale use.",
      },
      {
        type: "ul",
        content: "",
        items: [
          "Urdu: Native training language (one of 18) — not a fine-tuned afterthought",
          "Architecture: Hybrid Mamba-Transformer — significantly more efficient at inference than pure transformers, with linear (not quadratic) scaling on long sequences. This is a major advantage for deployment on constrained hardware",
          "Performance: Falcon-H1-34B rivals Qwen3-32B and LLaMA 3.3-70B at half the size on English benchmarks. The 0.5B model reportedly matches 2024-era 7B models on English tasks — though performance on Urdu is unvalidated",
          "Deployment: The Mamba architecture's linear attention means Falcon-H1 models run faster and use less memory at inference than equivalently-sized transformers. The 3B and 7B models are practical on consumer GPUs",
          "License: TII Falcon License — 10% royalty above $1M revenue, separate cloud hosting license required",
          "Relevance: High for Urdu/Arabic; Pashto, Sindhi, Balochi not in the 18 native languages",
        ],
      },
      { type: "h3", content: "Jais 2 (Inception / G42, UAE)" },
      {
        type: "p",
        content:
          "Jais 2 has the deepest Arabic pre-training of any open model: 600 billion Arabic tokens plus 1.6 trillion English and code tokens. Its tokenizer was custom-built to weight Arabic and English equally. For cross-script transfer to Urdu — which shares the Arabic script family — Jais offers a stronger starting foundation than any model built primarily on English data.",
      },
      {
        type: "p",
        content:
          "However, Urdu and Arabic share a script but not a language family. Urdu is Indo-Aryan; Arabic is Semitic. The transfer from Arabic pre-training to Urdu capability is real but limited — grammar, morphology, and vocabulary are fundamentally different. Jais is best suited as a complement (for Islamic scholarly and Arabic-cultural context) rather than a primary base for broader Pakistani language work.",
      },
      {
        type: "ul",
        content: "",
        items: [
          "Arabic pre-training: 600B tokens — largest of any open model",
          "License: Apache 2.0",
          "Sizes: 8B and 70B",
          "Cross-transfer: Strong for Urdu script handling, limited for Urdu grammar/semantics",
          "Best for: Arabic-Islamic cultural context; Urdu legal/religious text that uses heavy Arabic loanwords",
        ],
      },
      { type: "h3", content: "The Rest: Mistral, BLOOM, Aya" },
      {
        type: "p",
        content:
          "Mistral Saba (24B) explicitly supports Urdu and outperforms LLaMA 3.1 70B on Arabic benchmarks — but its Research License restricts commercial fine-tuning. Mistral Large 3 (675B MoE) is strong but impractical to self-host. BLOOM was historically significant — the first major open model to include Urdu in pre-training — but it's been dormant since 2022 and is outperformed by every 2024+ model. Aya Expanse is an excellent multilingual model, but its 23-language support list excludes Urdu, Pashto, and Sindhi entirely. Cohere's Tiny Aya Fire (3.35B) does include Urdu and Punjabi, but its CC-BY-NC license blocks commercial use.",
      },

      { type: "h2", content: "The Evidence: What Actually Works for Urdu" },
      {
        type: "p",
        content:
          "Theory is useful, but results matter more. Three research projects have published comprehensive results for Urdu LLM fine-tuning, all using LLaMA 3.1 8B as their base. The consistency of this choice is itself informative.",
      },
      {
        type: "h3",
        content: "Qalb 1.0 — Current State of the Art (January 2026)",
      },
      {
        type: "p",
        content:
          "Built by researchers at Auburn University and German institutions (BHT Berlin, BTU Cottbus), Qalb used continued pre-training on 1.84 billion Urdu tokens plus 140 million English tokens (to prevent catastrophic forgetting), followed by supervised fine-tuning on the Alif Urdu-instruct dataset with LoRA at rank 128. The result: a 90.34 weighted average score across 7 Urdu NLP tasks — a 44.64-point improvement over the base LLaMA 3.1. The 4-bit quantized version retains 95% of performance at 86.02.",
      },
      {
        type: "h3",
        content: "Alif 1.0 — The Pioneer (October 2025)",
      },
      {
        type: "p",
        content:
          "Funded through Meta's LARGE initiative, Alif was the first purpose-built Urdu instruction-tuned model. It used 200K Urdu Wikipedia articles for continued pre-training and 105K examples for LoRA fine-tuning — at a total training cost of under $100. Despite its small budget, it achieved 87.1 on the same benchmark and outperformed Qwen2.5-7B and Aya-Expanse-8B on Urdu tasks.",
      },
      {
        type: "h3",
        content: "UrduLLaMA 1.0 — Minimal Viable Approach (February 2025)",
      },
      {
        type: "p",
        content:
          "UrduLLaMA demonstrated that even 128 million tokens of continued pre-training — roughly 600-800MB of clean Urdu text — produces meaningful gains. Combined with LoRA fine-tuning on 41K Urdu instructions and 50K translation pairs, it achieved significant machine translation improvements with minimal compute investment.",
      },

      { type: "h2", content: "The Tokenizer Fertility Gap: Real Numbers" },
      {
        type: "p",
        content:
          "We surveyed published tokenizer fertility research to estimate the efficiency gap. Direct Urdu fertility benchmarks are scarce — most numbers below are proxied from Arabic, Hindi, or Ukrainian studies on the same tokenizers. We flag estimates explicitly.",
      },
      {
        type: "ul",
        content: "Approximate token fertility (tokens per word) by model and script:",
        items: [
          "English (all models) — ~1.0 token/word (baseline)",
          "Arabic on optimized SentencePiece — 1.2 tokens/word (AraToken research)",
          "Arabic on default Qwen tokenizer — 1.35 tokens/word",
          "Urdu on LLaMA 3.1 (128K vocab) — ~1.5-2.5 tokens/word (estimated from Arabic proxy)",
          "Urdu on LLaMA 2 (32K vocab) — ~3-5 tokens/word (severe fragmentation)",
          "Non-Latin scripts on Qwen — 2.89 tokens/word (Ukrainian proxy benchmark)",
          "Indic scripts on LLaMA 4 — up to 10.5 tokens/word for worst-case scripts (Oriya)",
        ],
      },
      {
        type: "p",
        content:
          "The practical impact: a 100-word Urdu message sent to LLaMA 2 might consume 400-800 tokens. The same message on LLaMA 3.1 or Gemma might consume 150-250 tokens. At scale, this is a 2-4x cost difference — and quality suffers proportionally because longer token sequences degrade attention quality.",
      },

      { type: "h2", content: "Licensing: The Hidden Constraint" },
      {
        type: "p",
        content:
          "For a sovereign AI initiative, licensing isn't just a legal detail — it determines whether the model you build can actually be deployed, modified, and governed by Pakistani institutions without foreign approval.",
      },
      {
        type: "ul",
        content: "License comparison for key models:",
        items: [
          "Apache 2.0 (Gemma 4, Qwen3, Jais 2, Mistral Large 3, Mixtral) — Fully permissive. Fine-tune, redistribute, commercialize without restriction. Irrevocable once downloaded. Does not guarantee future updates or community support from the upstream company.",
          "Llama Community License (LLaMA 3.1/4) — Permits commercial use up to 700M MAU. Competitor clause prohibits building Meta-competing products. Fine-tuned weights must use 'Llama' prefix.",
          "TII Falcon License (Falcon-H1) — 10% royalty on revenue exceeding $1M. Separate license for cloud/API hosting. Not OSI-approved.",
          "Research License (Mistral Saba) — Non-commercial only. Commercial fine-tuning requires separate agreement.",
          "CC-BY-NC (Tiny Aya Fire) — Non-commercial only.",
          "RAIL (BLOOM) — Permits commercial use with usage restrictions. Practically irrelevant due to model age.",
        ],
      },
      {
        type: "blockquote",
        content:
          "A sovereign AI model built on a base that requires foreign corporate approval for deployment is not truly sovereign. Licensing is as much a sovereignty question as the model architecture itself.",
      },

      { type: "h2", content: "Cost and Deployment: What's Actually Feasible for Pakistan" },
      {
        type: "p",
        content:
          "Pakistan has talented engineers and growing technical institutions, but compute infrastructure remains scarce. GDP per capita is $1,500. Most university AI labs operate with one or two consumer GPUs. There is no national AI compute facility. Any strategy that assumes Western-scale infrastructure will fail before it starts. We need to be practical about what's affordable — both for one-time training and for ongoing deployment.",
      },
      {
        type: "h3",
        content: "Training Costs (One-Time)",
      },
      {
        type: "ul",
        content: "Compute cost estimates by approach (cloud GPU at $0.67-$2.50/hour per A100):",
        items: [
          "4B QLoRA, SFT only — $20-$200, single consumer GPU (RTX 4090), 5-20 hours. A university lab can do this.",
          "7B/8B QLoRA, SFT only (Alif-scale) — $50-$500, single A100, 10-50 hours. Alif proved SOTA Urdu for under $100.",
          "7B/8B CPT + SFT (Qalb-scale, ~2B tokens) — $15,000-$25,000, 4-8x A100, 100-300 hours. Current SOTA.",
          "70B LoRA — $700-$1,500, 4x H100. Technically feasible but deployment becomes the bottleneck.",
          "70B full fine-tune — $10,000-$50,000, 8x H100. Not justified unless deployment infrastructure exists to serve it.",
        ],
      },
      {
        type: "h3",
        content: "Deployment Costs (Ongoing — This Is What Actually Matters)",
      },
      {
        type: "p",
        content:
          "Training costs recur — you retrain as new data arrives, base models improve, and requirements change — but deployment costs run continuously and at higher volume. A model that costs $25K to train but $10,000/month to serve is unaffordable for Pakistan. The deployment cost depends almost entirely on model size and quantization quality.",
      },
      {
        type: "ul",
        content: "Deployment hardware requirements (4-bit quantized inference):",
        items: [
          "0.6B-2B models — Run on CPU or any GPU. Laptops and low-end desktops can serve these, though throughput will be limited (likely 5-15 tokens/second on CPU). Practical for offline/edge use cases where latency is acceptable.",
          "4B models — Require ~3-4GB VRAM quantized (RTX 3060 8GB or equivalent). A desktop with a mid-range GPU can serve this.",
          "7B-8B models — Require 6-8GB VRAM quantized, 16-24GB for comfortable headroom (RTX 4090, or ~$200/month cloud instance). Feasible for university or institutional deployment.",
          "13B models — Run on 24-40GB VRAM (A100 40GB). Requires cloud or institutional hardware. $300-500/month.",
          "70B models — Run on 48-80GB VRAM (requires A100 80GB or multi-GPU). $1,000-3,000/month cloud. Not practical for Pakistani institutions.",
        ],
      },
      {
        type: "callout",
        content:
          "For Pakistan, the sweet spot appears to be 4B-8B parameter models with 4-bit quantization — though this is a hypothesis we haven't validated yet. If the quality holds after quantization, these models could run on hardware that Pakistani universities and government offices can afford. Smaller models (0.6B-2B) could enable offline deployment on phones and edge devices — relevant for the roughly 63% of Pakistan's population living in rural areas (Pakistan Bureau of Statistics, 2023 census).",
      },
      {
        type: "p",
        content:
          "On a $50K budget, the highest-return approach is Qalb-scale continued pre-training plus supervised fine-tuning on a 7-8B model ($15-25K in compute), leaving $25-35K for data collection, annotation, and evaluation. With spot pricing on Vast.ai, compute costs drop 40-60%. For multi-language coverage, fine-tune Urdu first, then adapt for Pashto and Sindhi via transfer learning at $5-10K per language.",
      },
      {
        type: "p",
        content:
          "We also want to explore a parallel track: fine-tuning 4B models (Qwen3-4B, Gemma 4B) that sacrifice some benchmark points for dramatically cheaper deployment. No one has published Urdu fine-tuning results at 4B scale yet, so this is an open question. But if a 4B model can cover 80% of use cases on consumer hardware, it may be more impactful than an 8B model that requires a dedicated GPU.",
      },

      { type: "h2", content: "The Critical Gaps: What No Model Handles Well" },
      {
        type: "p",
        content:
          "No matter which base model you choose, several challenges remain unsolved.",
      },
      {
        type: "ol",
        content: "",
        items: [
          "Pashto, Sindhi, and Balochi have zero dedicated fine-tuned LLMs as of April 2026. All work is greenfield.",
          "Evaluation infrastructure lags model development by 2-3 years. UrduBench (January 2026) is the first systematic Urdu reasoning benchmark. Nothing comparable exists for any other Pakistani language.",
          "Diacritization is unsolved. Models generate undiacritized Urdu because that's what the training data looks like. Downstream tasks like text-to-speech fail without diacritics.",
          "RTL generation behavior is undocumented for most models. LLMs generate text left-to-right internally regardless of target script — the rendering is an application-layer concern, but code-mixed text (Urdu + English) causes directionality errors.",
          "Synthetic data augmentation backfires for Pakistani languages. A 2025 ACL paper found that LLaMA 3-based generative augmentation had negative impact on NER tasks for Shahmukhi, Sindhi, Urdu, and Pashto. Simpler augmentation techniques outperform LLM-generated data.",
        ],
      },

      { type: "h2", content: "Our Recommendation" },
      {
        type: "p",
        content:
          "After this analysis, our recommendation is shaped by Pakistan's reality: limited compute, tight budgets, and deployment targets that range from university servers to village smartphones. The best model on paper is irrelevant if nobody in Pakistan can run it.",
      },
      {
        type: "h3",
        content: "Tier 1: Deploy Now (4B-8B, consumer hardware)",
      },
      {
        type: "ul",
        content: "For Urdu (proven, immediate deployment):",
        items: [
          "Primary: LLaMA 3.1 8B — three independent projects prove it works. Qalb's 4-bit quantized version scores 86.02 and runs on a single RTX 4090.",
          "Budget alternative: Qwen3-4B — stronger zero-shot Urdu than LLaMA base, runs on 8GB VRAM. If fine-tuned to Qalb's level, this could be the practical deployment model for Pakistani institutions.",
          "Edge/mobile: Gemma 4 E2B (2.3B) or Qwen3-1.7B — run on phones and CPUs. Essential for offline deployment in rural Pakistan.",
        ],
      },
      {
        type: "ul",
        content: "For Punjabi Shahmukhi (no dedicated model exists):",
        items: [
          "Primary: Qwen3-4B or 8B — only model with explicitly confirmed Punjabi support, Apache 2.0 licensing, and sizes that fit consumer hardware.",
          "Alternative: Falcon-H1-3B or 7B — native Urdu support with efficient Mamba architecture, but royalty clause limits commercial use.",
        ],
      },
      {
        type: "h3",
        content: "Tier 2: Research Phase (requires cloud compute for training, consumer hardware for deployment)",
      },
      {
        type: "ul",
        content: "For Pashto and Sindhi (greenfield):",
        items: [
          "Primary: Qwen3-4B or 8B — Sindhi explicitly confirmed; Pashto likely covered in 119-language scope. Apache 2.0.",
          "Approach: Continued pre-training on assembled Pashto/Sindhi data, followed by SFT. Budget $5-10K compute per language. Deploy quantized on consumer GPUs.",
        ],
      },
      {
        type: "ul",
        content: "For Balochi (extreme low-resource):",
        items: [
          "Base: Qwen3-4B — smallest practical size for continued pre-training that still produces usable output.",
          "Data: The 2.6M-word Balochi dataset and awesome-balochi-nlp repository are the starting point.",
          "Timeline: 2-3 year research horizon. Start with BERT-scale models (cheaper, faster iteration) before attempting generative models.",
        ],
      },
      {
        type: "ul",
        content: "For Arabic-Islamic cultural context:",
        items: [
          "Primary: Jais 2 — 600B Arabic pre-training tokens; strongest Arabic-script foundation.",
          "Use case: Religious text, legal documents using Arabic terminology, scholarly work where cultural alignment matters.",
        ],
      },
      {
        type: "p",
        content:
          "For Zahin, the next step is hands-on evaluation: running Qwen3, Gemma 4, and LLaMA 3.1 head-to-head on our target languages before committing to a base. The licensing landscape favors Apache 2.0 models (Qwen3, Gemma 4, Jais 2) for a truly sovereign initiative. We'll publish our first benchmarking results in a follow-up article.",
      },

      { type: "h2", content: "Summary Comparison Table" },
      {
        type: "p",
        content:
          "The following table summarizes the key attributes of each model for Pakistani language fine-tuning. Models are ranked by overall suitability for the five target languages.",
      },
      {
        type: "ul",
        content: "Proven for Urdu (published fine-tuning results exist):",
        items: [
          "LLaMA 3.1 8B (Llama Community) — Only model with published Urdu fine-tuning results: Qalb (90.34), Alif (87.1), UrduLLaMA. 8B runs quantized on consumer GPUs. Restrictive license is the main drawback.",
        ],
      },
      {
        type: "ul",
        content: "Promising but unproven for Urdu (strong signals, no published fine-tuning results):",
        items: [
          "Qwen3 (Apache 2.0) — Broadest documented South Asian language coverage. Qwen2.5 scored 72.0 on Urdu zero-shot (best baseline). Apache 2.0. Sizes from 0.6B to 32B fit any hardware. Unproven at fine-tuning scale. Alibaba origin carries geopolitical risk.",
          "Falcon-H1 (TII License) — Urdu natively trained. Mamba architecture is more efficient at inference than equivalently-sized transformers. Royalty clause limits commercial use.",
          "Gemma 4 (Apache 2.0) — Best tokenizer vocabulary (256K), small variants designed for edge/mobile. No published Urdu fine-tuning results.",
          "Jais 2 (Apache 2.0) — Deepest Arabic foundation (600B tokens). Best for Arabic-Urdu cross-transfer. The 8B variant is deployable on consumer hardware.",
        ],
      },
      {
        type: "ul",
        content: "Not recommended for Pakistani language work:",
        items: [
          "Mistral Saba (Research License) — Strong Urdu/Arabic at 24B, but research license blocks commercial fine-tuning and 24B is heavy for Pakistani deployment.",
          "Aya / Tiny Aya Fire (Mixed) — Aya Expanse excludes Urdu entirely. Tiny Aya Fire (3.35B) includes Urdu/Punjabi but CC-BY-NC blocks commercial use.",
          "BLOOM (RAIL) — Dormant since 2022. Outperformed by every 2024+ model. 176B is impractical for Pakistan.",
        ],
      },

      { type: "h2", content: "Limitations of This Analysis" },
      {
        type: "p",
        content:
          "We want to be transparent about what this article is and isn't. This is a literature review — we have not fine-tuned, benchmarked, or deployed any of these models ourselves. Every data point comes from published papers, model documentation, or publicly available evaluations. Tokenizer fertility numbers for Urdu are estimated from Arabic and other script proxies, not measured directly. The Qwen3 language coverage claims are based on its Embedding model documentation, which may not perfectly reflect the generative model's training data. Hardware cost estimates are based on published cloud pricing and may not reflect Pakistani market conditions.",
      },
      {
        type: "p",
        content:
          "We also acknowledge that the researchers who have actually built Urdu LLMs — the Qalb team at Auburn University, the Alif team through Meta's LARGE initiative, the UrduLLaMA team, and Urdu NLP researchers at Pakistani institutions including NUST, LUMS, ITU, and COMSATS — have done the hard empirical work that this article synthesizes. Zahin's contribution here is the synthesis and the Pakistan-specific deployment lens, not the underlying research.",
      },
      { type: "h2", content: "What We'll Test Next" },
      {
        type: "p",
        content:
          "This research survey is Step 1. Step 2 is hands-on benchmarking. Our planned evaluation will:",
      },
      {
        type: "ol",
        content: "",
        items: [
          "Run tokenizer fertility tests on all candidate models using a standardized Urdu, Punjabi, and Sindhi corpus — replacing the proxy estimates in this article with real numbers.",
          "Fine-tune Qwen3-4B, Qwen3-8B, LLaMA 3.1 8B, and Gemma 4 7B on identical Urdu datasets using the same QLoRA configuration — producing an apples-to-apples comparison that doesn't currently exist.",
          "Evaluate 4-bit quantized inference quality across all candidates — testing whether smaller models maintain usable quality after quantization for Pakistani language tasks specifically.",
          "Measure actual inference speed and memory usage on consumer hardware (RTX 3060, RTX 4090) and CPU-only environments — producing deployment-realistic benchmarks for Pakistani infrastructure.",
          "Publish all results, code, and evaluation data openly so other Pakistani researchers can reproduce and extend the work.",
        ],
      },
      {
        type: "p",
        content:
          "We'll publish the results in a follow-up article. The landscape is evolving fast — the model that wins our benchmarks today may not be the best choice in six months. But the methodology and evaluation framework will remain useful regardless. Follow this journal for updates.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
