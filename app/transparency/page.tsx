import { getMessages, t, DEFAULT_LOCALE } from "../../lib/i18n";

const CATEGORIES = ["ACC", "DAT", "FIN", "SUP", "CON", "AI"] as const;
type CategoryCode = (typeof CATEGORIES)[number];

// 7 incident codes per category → 42 total
const INCIDENT_CODES: Record<CategoryCode, string[]> = {
  ACC: ["ACC-01", "ACC-02", "ACC-03", "ACC-04", "ACC-05", "ACC-06", "ACC-07"],
  DAT: ["DAT-01", "DAT-02", "DAT-03", "DAT-04", "DAT-05", "DAT-06", "DAT-07"],
  FIN: ["FIN-01", "FIN-02", "FIN-03", "FIN-04", "FIN-05", "FIN-06", "FIN-07"],
  SUP: ["SUP-01", "SUP-02", "SUP-03", "SUP-04", "SUP-05", "SUP-06", "SUP-07"],
  CON: ["CON-01", "CON-02", "CON-03", "CON-04", "CON-05", "CON-06", "CON-07"],
  AI: ["AI-01", "AI-02", "AI-03", "AI-04", "AI-05", "AI-06", "AI-07"],
};

const L1_METRICS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7"];

const MODEL_KEYS = ["western", "asian", "opensource"] as const;

const CATEGORY_COLORS: Record<CategoryCode, string> = {
  ACC: "#3b82f6",
  DAT: "#8b5cf6",
  FIN: "#10b981",
  SUP: "#f59e0b",
  CON: "#ef4444",
  AI: "#06b6d4",
};

const MODEL_COLORS: Record<(typeof MODEL_KEYS)[number], string> = {
  western: "#10a37f",
  asian: "#1a6ed8",
  opensource: "#7c3aed",
};

export default async function TransparencyPage() {
  const messages = await getMessages(DEFAULT_LOCALE);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      {/* Hero */}
      <div
        style={{
          display: "inline-block",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "#2563eb",
          background: "#eff6ff",
          padding: "0.25rem 0.6rem",
          borderRadius: 99,
          marginBottom: "0.75rem",
        }}
      >
        {t(messages, "transparency.hero.badge")}
      </div>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        {t(messages, "transparency.hero.title")}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2.5rem" }}>
        {t(messages, "transparency.hero.subtitle")}
      </p>

      {/* Level 1 Metrics */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
          {t(messages, "transparency.metricsL1.title")}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "1rem" }}>
          {t(messages, "transparency.metricsL1.subtitle")}
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {L1_METRICS.map((m) => (
            <div
              key={m}
              style={{
                border: "1px solid #e5e7eb",
                borderTop: "4px solid #2563eb",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                background: "#f9fafb",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "monospace",
                  color: "#9ca3af",
                  marginBottom: 2,
                }}
              >
                {m}
              </div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: 4 }}>
                {t(messages, `transparency.metricsL1.metrics.${m}.name`)}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.4 }}>
                {t(messages, `transparency.metricsL1.metrics.${m}.desc`)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Level 2 Metrics */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
          {t(messages, "transparency.metricsL2.title")}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.5rem" }}>
          {t(messages, "transparency.metricsL2.subtitle")}
        </p>
        <p
          style={{
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: "0.75rem 1rem",
            fontSize: "0.8rem",
            color: "#6b7280",
            margin: 0,
          }}
        >
          {t(messages, "transparency.metricsL2.note")}
        </p>
      </section>

      {/* Categories */}
      {CATEGORIES.map((cat) => (
        <section key={cat} style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                background: CATEGORY_COLORS[cat],
                color: "#fff",
                borderRadius: 6,
                padding: "0.25rem 0.75rem",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: 1,
              }}
            >
              {cat}
            </span>
            <h2 style={{ fontSize: "1.125rem", fontWeight: 600, margin: 0 }}>
              {t(messages, `transparency.categories.${cat}.name`)}
            </h2>
          </div>
          <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "1rem" }}>
            {t(messages, `transparency.categories.${cat}.desc`)}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "0.5rem",
            }}
          >
            {INCIDENT_CODES[cat].map((code) => (
              <div
                key={code}
                style={{
                  border: "1px solid #e5e7eb",
                  borderTop: `4px solid ${CATEGORY_COLORS[cat]}`,
                  borderRadius: 6,
                  padding: "0.6rem 0.85rem",
                  background: "#fff",
                  fontSize: "0.85rem",
                }}
              >
                <span
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  {code}
                </span>
                <div style={{ fontWeight: 500, marginTop: 2 }}>
                  {t(messages, `transparency.incidentTypes.${code}`)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Models */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
          AI Models
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {MODEL_KEYS.map((m) => (
            <div
              key={m}
              style={{
                border: "1px solid #e5e7eb",
                borderTop: `4px solid ${MODEL_COLORS[m]}`,
                borderRadius: 8,
                padding: "0.85rem 1rem",
                background: "#fff",
              }}
            >
              <div style={{ fontWeight: 600, color: MODEL_COLORS[m], marginBottom: 2 }}>
                {t(messages, `transparency.models.${m}.name`)}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  color: "#9ca3af",
                  marginBottom: 6,
                }}
              >
                {t(messages, `transparency.models.${m}.model`)}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.4 }}>
                {t(messages, `transparency.models.${m}.desc`)}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: "1rem",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            padding: "0.75rem 1rem",
            fontSize: "0.8rem",
            color: "#6b7280",
          }}
        >
          {t(messages, "transparency.models.weightNote")}
        </p>
      </section>
    </main>
  );
}
