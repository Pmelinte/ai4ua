import { getMessages, t, DEFAULT_LOCALE } from "../../../lib/i18n";

const SIMULATED_SCORES: Record<string, {
  companyName: string;
  composite: number;
  scores: { model: string; score: number; reasoning: string }[];
  totalIncidents: number;
  lastUpdated: string;
}> = {
  anthropic: {
    companyName: "Anthropic",
    composite: 38,
    scores: [
      {
        model: "openai",
        score: 42,
        reasoning: "Account suspension without prior notification, opaque appeal process, no clear restitution policy.",
      },
      {
        model: "deepseek",
        score: 35,
        reasoning: "ToS clarity insufficient, automated decisions without human review, limited transparency on AI training data usage.",
      },
      {
        model: "llama",
        score: 38,
        reasoning: "Public precedent exists for arbitrary suspension. Response time to appeals exceeds 30 days in documented cases.",
      },
    ],
    totalIncidents: 1,
    lastUpdated: "2026-05-22",
  },
  openai: {
    companyName: "OpenAI",
    composite: 41,
    scores: [
      { model: "openai", score: 45, reasoning: "Some ToS clarity improvements in 2024, but appeal process remains limited." },
      { model: "deepseek", score: 38, reasoning: "GDPR compliance partial, AI training consent unclear for EU users." },
      { model: "llama", score: 40, reasoning: "Support response times documented as slow, bot-only first contact." },
    ],
    totalIncidents: 0,
    lastUpdated: "2026-05-22",
  },
  perplexity: {
    companyName: "Perplexity",
    composite: 55,
    scores: [
      { model: "openai", score: 58, reasoning: "Relatively clear ToS, fewer documented suspension incidents." },
      { model: "deepseek", score: 52, reasoning: "Data retention policies not fully transparent." },
      { model: "llama", score: 55, reasoning: "Limited public precedent, newer platform with fewer incidents." },
    ],
    totalIncidents: 0,
    lastUpdated: "2026-05-22",
  },
  alphabet: {
    companyName: "Alphabet (Google)",
    composite: 44,
    scores: [
      { model: "openai", score: 48, reasoning: "Large public precedent for account suspension without notice." },
      { model: "deepseek", score: 40, reasoning: "Multiple documented GDPR violations and fines." },
      { model: "llama", score: 44, reasoning: "Appeal process exists but documented as slow and bot-heavy." },
    ],
    totalIncidents: 0,
    lastUpdated: "2026-05-22",
  },
  x: {
    companyName: "X (Twitter)",
    composite: 29,
    scores: [
      { model: "openai", score: 31, reasoning: "Arbitrary content moderation, frequent ToS changes without notice." },
      { model: "deepseek", score: 26, reasoning: "Multiple documented cases of account suspension without explicit motivation." },
      { model: "llama", score: 30, reasoning: "No meaningful appeal process documented post-2022 acquisition." },
    ],
    totalIncidents: 0,
    lastUpdated: "2026-05-22",
  },
};

const MODEL_LABELS: Record<string, string> = {
  openai: "Western AI (ChatGPT)",
  deepseek: "Asian AI (DeepSeek)",
  llama: "Open Source (Llama)",
};

const MODEL_COLORS: Record<string, string> = {
  openai: "#10a37f",
  deepseek: "#1a6ed8",
  llama: "#7c3aed",
};

function ScoreBar({ score }: { score: number }) {
  const color = score >= 60 ? "#10b981" : score >= 40 ? "#f59e0b" : "#ef4444";
  return (
    <div style={{ background: "#f3f4f6", borderRadius: 99, height: 10, width: "100%", overflow: "hidden" }}>
      <div
        style={{
          width: `${score}%`,
          height: "100%",
          background: color,
          borderRadius: 99,
          transition: "width 0.6s ease",
        }}
      />
    </div>
  );
}

export default async function ScorePage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const messages = await getMessages(DEFAULT_LOCALE);
  const data = SIMULATED_SCORES[company.toLowerCase()];

  if (!data) {
    return (
      <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
        <h1>Company not found</h1>
        <p>Available: {Object.keys(SIMULATED_SCORES).join(", ")}</p>
      </main>
    );
  }

  const scoreColor = data.composite >= 60 ? "#10b981" : data.composite >= 40 ? "#f59e0b" : "#ef4444";

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
        {data.companyName}
      </h1>
      <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
        {t(messages, "score.title")}
      </p>

      {/* Simulated warning */}
      <div
        style={{
          background: "#fef3c7",
          border: "1px solid #fbbf24",
          borderRadius: 8,
          padding: "0.75rem 1rem",
          marginBottom: "2rem",
          fontSize: "0.8rem",
          color: "#92400e",
          fontWeight: 600,
        }}
      >
        {t(messages, "score.scoreNote")}
      </div>

      {/* Composite score */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            color: scoreColor,
            lineHeight: 1,
            minWidth: 90,
            textAlign: "center",
          }}
        >
          {data.composite}
          <span style={{ fontSize: "1rem", color: "#9ca3af", fontWeight: 400 }}>/100</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            {t(messages, "score.composite")}
          </div>
          <ScoreBar score={data.composite} />
          <div style={{ fontSize: "0.75rem", color: "#9ca3af", marginTop: "0.5rem" }}>
            {t(messages, "score.totalIncidents")}: {data.totalIncidents} &nbsp;|&nbsp;
            {t(messages, "score.lastUpdated")}: {data.lastUpdated}
          </div>
        </div>
      </div>

      {/* Per-model scores */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {data.scores.map((s) => (
          <div
            key={s.model}
            style={{
              border: "1px solid #e5e7eb",
              borderLeft: `4px solid ${MODEL_COLORS[s.model]}`,
              borderRadius: 8,
              padding: "1rem 1.25rem",
              background: "#fff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontWeight: 600, color: MODEL_COLORS[s.model] }}>
                {MODEL_LABELS[s.model]}
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.25rem", color: MODEL_COLORS[s.model] }}>
                {s.score}/100
              </span>
            </div>
            <ScoreBar score={s.score} />
            <p style={{ fontSize: "0.85rem", color: "#6b7280", marginTop: "0.75rem", marginBottom: 0 }}>
              <strong>{t(messages, "score.reasoning")}:</strong> {s.reasoning}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
