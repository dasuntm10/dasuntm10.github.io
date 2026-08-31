export const contact = {
  email: 'dasuntm10@gmail.com',
  github: 'https://github.com/dasuntm10',
  linkedin: 'https://www.linkedin.com/in/dasun-theekshana/',
  // TODO: swap for a real Cal.com/Calendly link before launch (see PLAN.md Phase 3).
  bookingHref:
    'mailto:dasuntm10@gmail.com?subject=Book%20a%2015-minute%20call&body=Hi%20Dasun%2C%0A%0AI%27d%20like%20to%20book%20a%2015-minute%20call%20to%20discuss%3A',
};

export const proofStats = [
  {
    stat: '97%',
    caption: 'extraction accuracy across 20+ US insurance document types, in production',
  },
  {
    stat: '20h → 30min',
    caption: 'broker review time cut by a document pipeline I architected',
  },
  {
    stat: '5 of top 10',
    caption: 'US employee-benefits brokerages use the platform my GenAI products run on',
  },
  {
    stat: '40+',
    caption: 'US organizations served by an AI benefits chatbot I delivered',
  },
];

export const services = [
  {
    title: 'Document extraction pipelines',
    description:
      "Invoices, purchase orders, and forms turned into validated data in your accounting stack - per-field confidence scores, a human-review queue for the uncertain 15%, and exports to Sheets, webhooks, or your ERP.",
    icon: 'document',
  },
  {
    title: 'Grounded support & knowledge assistants',
    description:
      "Customer-facing or internal (Slack / Teams) assistants that answer from <em>your</em> docs with citations, refuse when the answer isn't there, and respect who's allowed to see what. Every retrieval choice backed by an ablation table.",
    icon: 'chat',
  },
  {
    title: 'Voice & WhatsApp booking agents',
    description:
      'Missed calls and after-hours inquiries answered, qualified, and booked straight into your calendar and CRM - for clinics, agencies, and appointment-heavy businesses. Human handoff built in, never bolted on.',
    icon: 'phone',
  },
  {
    title: 'Custom AI solutions',
    description:
      "Something that doesn't fit a package? I design and build bespoke GenAI systems catered to your needs - multi-agent workflows, fine-tuned models, analytics and reporting agents, or deep integrations across the tools you already run - scoped through the same audit-first process.",
    icon: 'custom',
  },
];

export const caseStudies = [
  {
    eyebrow: 'DOCUMENT INTELLIGENCE · IN PRODUCTION AT ALTRIUM / PLANYEAR',
    title: 'Benefits document pipeline, 97% accuracy',
    description:
      'An AI document-processing pipeline extracting structured benefits data from 20+ US insurance document types at 97% accuracy - cutting broker review from 20+ hours to under 30 minutes. Shipped alongside a multi-agent support system and an RFP responder that took turnaround from 2+ days to 3 hours.',
    note: 'Proprietary system - happy to walk through the architecture on a call.',
    href: null,
    consoleLines: ['20+ document types → structured data', '97% accuracy · review 20h → 30min'],
    stack: 'Claude · Gemini on Vertex AI · Bedrock · RAG · function calling',
  },
  {
    eyebrow: 'DOCUMENT EXTRACTION · FLAGSHIP BUILD',
    title: 'Agentic financial-statement extractor',
    description:
      "A 9-agent pipeline that reads Australian annual reports - digital or scanned - locates the P&L and its linked notes, reconciles the arithmetic, computes credit-risk ratios, and writes an analyst-facing report. Runs fully offline for compliance-bound environments.",
    linkLabel: 'Read the case study →',
    href: 'https://github.com/dasuntm10/agentic-finance-data-extractor',
    consoleLines: ['ingest → locate → parse → resolve notes', '→ reconcile → ratios → score → report'],
    stack: 'LangGraph · Docling · PaddleOCR · local LLM · zero network calls at runtime',
  },
  {
    eyebrow: 'SUPPORT RAG · FLAGSHIP BUILD',
    title: 'Grounded support agent',
    description:
      "An agentic assistant that reasons across documents, a live Postgres database, and the web - and refuses to answer when it can't ground the claim. Every citation is validated in code against what was actually retrieved; hybrid search is justified by a measured ablation, not a hunch.",
    linkLabel: 'Ask about this build →',
    href: `mailto:dasuntm10@gmail.com?subject=${encodeURIComponent('Grounded support agent - case study')}`,
    consoleLines: ['db > docs > web precedence', 'citation guard · trace panel · CI recall gate'],
    stack: 'TypeScript · pgvector + BM25 · Claude · WhatsApp-portable',
  },
  {
    eyebrow: 'INTERNAL KB · IN BUILD',
    title: 'Permission-aware knowledge assistant',
    description:
      "A Slack / Teams assistant answering from Notion, Confluence, and Drive - where retrieval is filtered by the asker's access rights in the database, before the model sees anything. Proven by an adversarial permission-leak eval, not a promise.",
    linkLabel: 'Ask about this build →',
    href: `mailto:dasuntm10@gmail.com?subject=${encodeURIComponent('Permission-aware knowledge assistant - design')}`,
    consoleLines: ['source ACLs → canonical groups', 'SQL-filtered retrieval · zero-leak gate'],
    stack: 'TypeScript · pgvector · Slack Bolt · Teams',
  },
];

export const processSteps = [
  {
    label: '01 · FREE',
    title: 'Audit',
    description:
      'A 15-minute call and a short video showing exactly where automation pays off in your workflow - and where it doesn’t.',
  },
  {
    label: '02 · 2 WEEKS',
    title: 'Pilot',
    description: "One small, real win with an agreed metric. If the pilot misses the metric, you don't pay the balance.",
  },
  {
    label: '03 · FIXED SCOPE',
    title: 'Build',
    description:
      'The full system, delivered in milestones with acceptance criteria - contract, deposit, and eval gates on every phase.',
  },
  {
    label: '04 · MONTHLY',
    title: 'Retain',
    description: 'Monitoring, re-indexing, model updates, and a monthly report with the numbers that matter to your business.',
  },
];
