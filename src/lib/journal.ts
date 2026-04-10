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
    relatedSlugs: ["fine-tuning-gemma-pakistani-languages"],
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
          "Zahin is a non-profit sovereign AI lab building open-weight foundation models fine-tuned for Pakistan's languages (Urdu, Punjabi, Pashto, Sindhi, Balochi). Phase 1 begins with fine-tuning Google's Gemma model, progressing toward a fully indigenous model called Zahin-1.",
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
          "Phase 1 — Fine-Tune ($50K): Adapt Google's Gemma model for Urdu, Punjabi, Pashto, Sindhi, and Balochi. Build evaluation benchmarks. Open-source everything.",
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
    slug: "fine-tuning-gemma-pakistani-languages",
    title: "Fine-Tuning Gemma for Pakistani Languages: Our Approach",
    excerpt:
      "A technical overview of how we're adapting Google's Gemma model for Urdu, Sindhi, Punjabi, Pashto, and Balochi — and why open-weight models are the right starting point.",
    description:
      "Zahin's technical approach to fine-tuning Google's Gemma open-weight model for five Pakistani languages: Urdu, Punjabi, Pashto, Sindhi, and Balochi. Covers data collection, training pipeline, and evaluation methodology.",
    date: "2026-04-10",
    dateModified: "2026-04-10",
    category: "Research",
    readingTime: "12 min read",
    author: authors.abdullah,
    tags: ["gemma", "fine-tuning", "nlp", "urdu", "punjabi", "pashto", "sindhi", "balochi", "open-weight-models"],
    relatedSlugs: ["why-sovereign-ai"],
    faqs: [
      {
        question: "What is Gemma and why did Zahin choose it?",
        answer:
          "Gemma is Google DeepMind's family of open-weight language models, available in 2B, 7B, and 27B parameter sizes. Zahin chose Gemma because it offers state-of-the-art performance with a permissive license that allows fine-tuning and redistribution — critical for an open-source sovereign AI initiative.",
      },
      {
        question: "Which Pakistani languages is Zahin fine-tuning Gemma for?",
        answer:
          "Zahin is fine-tuning Gemma for five Pakistani languages: Urdu (230M+ speakers), Punjabi written in Shahmukhi script (113M+ speakers), Pashto (60M+ speakers), Sindhi (30M+ speakers), and Balochi (8M+ speakers).",
      },
      {
        question: "How does Zahin collect training data for low-resource Pakistani languages?",
        answer:
          "Zahin uses a four-source pipeline: (1) digitized archives from university libraries and government publications, (2) web-crawled content filtered for quality from news sites and literary portals, (3) community-contributed corpora through partnerships with linguistic departments, and (4) synthetic data generated through controlled translation and paraphrasing from higher-resource languages.",
      },
      {
        question: "Will the fine-tuned models be open source?",
        answer:
          "Yes. All of Zahin's fine-tuned models, training data, evaluation benchmarks, and research papers will be released under open licenses. This is a core commitment — sovereign AI must be transparent and reproducible to earn public trust.",
      },
    ],
    blocks: [
      {
        type: "p",
        content:
          "Our first step toward sovereign AI for Pakistan is practical: take the best available open-weight model and fine-tune it for Pakistani languages. This is Phase 1 of Zahin's roadmap — a $50K initiative designed to prove that high-quality, multilingual AI for Pakistan is achievable today.",
      },
      {
        type: "callout",
        content:
          "Fine-tuning is the process of adapting a pre-trained AI model to perform well on specific languages, domains, or tasks by training it on additional targeted data — without rebuilding the model from scratch.",
      },
      { type: "h2", content: "Why Gemma?" },
      {
        type: "p",
        content:
          "Choosing the right base model was our first critical decision. We evaluated LLaMA 3 (Meta), Mistral, Qwen 2 (Alibaba), and Gemma 2 (Google DeepMind) across four criteria: multilingual tokenizer quality, licensing terms, fine-tuning ecosystem, and baseline performance on right-to-left scripts.",
      },
      {
        type: "p",
        content:
          "Gemma emerged as the strongest candidate. Its tokenizer has better coverage of Arabic-script characters (shared by Urdu, Punjabi Shahmukhi, Pashto, Sindhi, and Balochi) compared to LLaMA's primarily Latin-optimized vocabulary. The Gemma license permits fine-tuning, redistribution, and commercial use — essential for an open-source initiative. And Google's investment in multilingual pre-training gives Gemma a meaningful head start on non-English languages.",
      },
      {
        type: "ul",
        content: "Base model comparison for Pakistani languages:",
        items: [
          "Gemma 2 (7B/27B) — Best Arabic-script tokenization, permissive license, strong multilingual baseline ✓",
          "LLaMA 3 (8B/70B) — Good overall quality but Latin-biased tokenizer, restrictive commercial terms",
          "Mistral (7B) — Strong English performance but limited multilingual pre-training",
          "Qwen 2 (7B/72B) — Good CJK coverage but weak on South Asian scripts",
        ],
      },
      { type: "h2", content: "The Language Challenge" },
      {
        type: "p",
        content:
          "Pakistani languages present a unique set of NLP challenges that go well beyond simple translation. Each language has distinct characteristics that require specialized training approaches.",
      },
      {
        type: "h3",
        content: "Urdu (230M+ speakers)",
      },
      {
        type: "p",
        content:
          "Urdu is Pakistan's national language and the most resourced of our target languages — but 'most resourced' is relative. Urdu NLP datasets are roughly 1/500th the size of English equivalents. The Nastaliq script poses rendering and tokenization challenges, and Urdu's heavy use of Persian and Arabic loanwords creates vocabulary boundary issues that English-trained tokenizers handle poorly.",
      },
      {
        type: "h3",
        content: "Punjabi Shahmukhi (113M+ speakers)",
      },
      {
        type: "p",
        content:
          "Punjabi is the most spoken language in Pakistan, yet has almost zero AI coverage. A critical challenge is the script divide: Punjabi is written in Gurmukhi in India and Shahmukhi (Arabic-derived) in Pakistan. Most existing Punjabi NLP work targets Gurmukhi, making it largely useless for Pakistani Punjabi speakers.",
      },
      {
        type: "h3",
        content: "Pashto (60M+ speakers)",
      },
      {
        type: "p",
        content:
          "Pashto has some academic NLP research but minimal practical coverage. Its modified Arabic script with unique letters (ړ, ښ, ږ) and complex morphology — Pashto verbs can inflect for tense, aspect, mood, person, number, and gender — make it particularly challenging for models trained primarily on analytic languages like English.",
      },
      {
        type: "h3",
        content: "Sindhi (30M+ speakers)",
      },
      {
        type: "p",
        content:
          "Sindhi is effectively invisible to current AI systems. It has the largest Arabic-script alphabet of any language (52 letters) and extensive use of diacritical marks that most tokenizers strip or mishandle. Building even a basic Sindhi capability requires ground-up data collection.",
      },
      {
        type: "h3",
        content: "Balochi (8M+ speakers)",
      },
      {
        type: "p",
        content:
          "Balochi represents the extreme end of the low-resource challenge. With minimal written digital content, no standardized orthography across its dialects (Makrani, Sulaimani, Eastern), and virtually no existing NLP research, Balochi requires creative data acquisition strategies including oral-to-text transcription partnerships.",
      },
      { type: "h2", content: "Our Data Pipeline" },
      {
        type: "p",
        content:
          "Data quality is the single biggest determinant of fine-tuning success. For low-resource languages, collecting sufficient high-quality training data is harder than the actual model training. Our pipeline has four stages.",
      },
      {
        type: "ol",
        content: "",
        items: [
          "Archival Digitization — Partner with university libraries (QAU, Punjab University, Sindh University, UoB) to digitize Urdu, Punjabi, Sindhi, Pashto, and Balochi literary and academic texts. OCR quality verification with native-speaker annotators.",
          "Web Crawling & Filtering — Systematic crawling of Pakistani news sites (Jang, Dawn Urdu, Kawish, Mashriq), literary portals, and government publications. Aggressive quality filtering: deduplication, language ID verification, encoding normalization.",
          "Community Corpora — Partnerships with linguistics departments to crowdsource annotated datasets. University students contribute as annotators with standardized guidelines and quality review.",
          "Synthetic Augmentation — Controlled back-translation and paraphrasing to expand low-resource language datasets. Synthetic data is clearly labeled and used only to supplement (never replace) authentic text.",
        ],
      },
      { type: "h2", content: "Fine-Tuning Methodology" },
      {
        type: "p",
        content:
          "We use QLoRA (Quantized Low-Rank Adaptation) for parameter-efficient fine-tuning. This allows us to fine-tune Gemma 27B on a single A100 80GB GPU by quantizing the base model to 4-bit precision and training only low-rank adapter weights — reducing memory requirements by roughly 75% compared to full fine-tuning.",
      },
      {
        type: "p",
        content:
          "Training is structured in three stages: first, continued pre-training on monolingual corpora to adapt the model's language representation; second, instruction tuning on translated and culturally adapted instruction datasets; third, alignment using preference data collected from native speakers.",
      },
      { type: "h2", content: "Evaluation Framework" },
      {
        type: "p",
        content:
          "Existing LLM benchmarks (MMLU, HellaSwag, ARC) are English-centric and culturally biased. A model that scores well on American history questions tells us nothing about its ability to process Pakistani legal Urdu or agricultural Sindhi.",
      },
      {
        type: "p",
        content:
          "We're building Zahin-Bench, a Pakistani-languages evaluation suite covering: reading comprehension, grammatical correctness, cultural knowledge, domain-specific tasks (legal, medical, educational), and script-handling accuracy. All benchmarks will be open-sourced alongside the model weights.",
      },
      { type: "h2", content: "Open-Source Commitment" },
      {
        type: "p",
        content:
          "Every artifact from this work will be released openly: model weights, training data, evaluation benchmarks, training code, and research papers. Sovereign AI must be transparent and reproducible — a black-box national model would simply replace one form of dependency with another.",
      },
      {
        type: "p",
        content:
          "We publish all code on GitHub, all papers on arXiv, and all datasets on HuggingFace. Follow our progress in this journal, or contribute directly through our open research program.",
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
