import { getMessages, t, DEFAULT_LOCALE } from "../../lib/i18n";

const CATEGORIES = ["ACC", "DAT", "FIN", "SUP", "CON", "AI"] as const;

const INCIDENT_TYPES = [
  { code: "ACC_SUSPEND", category: "ACC" },
  { code: "ACC_BLOCK", category: "ACC" },
  { code: "ACC_LOCK", category: "ACC" },
  { code: "ACC_DELETE", category: "ACC" },
  { code: "ACC_ACCESS", category: "ACC" },
  { code: "DAT_BREACH", category: "DAT" },
  { code: "DAT_GDPR", category: "DAT" },
  { code: "DAT_AI_TRAIN", category: "DAT" },
  { code: "DAT_SHARE", category: "DAT" },
  { code: "DAT_RETAIN", category: "DAT" },
  { code: "FIN_UNAUTH", category: "FIN" },
  { code: "FIN_REFUND", category: "FIN" },
  { code: "FIN_BILLING", category: "FIN" },
  { code: "FIN_SUBSCRIP", category: "FIN" },
  { code: "FIN_FREEZE", category: "FIN" },
  { code: "SUP_NORESPONSE", category: "SUP" },
  { code: "SUP_BOT", category: "SUP" },
  { code: "SUP_MISINFO", category: "SUP" },
  { code: "SUP_DELAY", category: "SUP" },
  { code: "SUP_LANG", category: "SUP" },
  { code: "CON_MODERATION", category: "CON" },
  { code: "CON_REMOVAL", category: "CON" },
  { code: "CON_TOS_CHANGE", category: "CON" },
  { code: "CON_FEATURE", category: "CON" },
  { code: "CON_DOWNTIME", category: "CON" },
  { code: "CON_DEGRADE", category: "CON" },
  { code: "CON_REGION", category: "CON" },
  { code: "AI_BIAS", category: "AI" },
  { code: "AI_HALLUC", category: "AI" },
  { code: "AI_IDENTITY", category: "AI" },
  { code: "AI_PRIVACY", category: "AI" },
  { code: "AI_DECISION", category: "AI" },
  { code: "AI_EXPLAINAB", category: "AI" },
  { code: "AI_CONSENT", category: "AI" },
  { code: "AI_SAFETY", category: "AI" },
];

const LEVEL1_METRICS = [
  "tos_clarity",
  "prior_notification",
  "explicit_motivation",
  "appeal_process",
  "response_time",
  "restitution",
  "public_precedent",
];

const CATEGORY_COLORS: Record<string, string> = {
  ACC: "#3b82f6",
  DAT: "#8b5cf6",
  FIN: "#10b981",
  SUP: "#f59e0b",
  CON: "#ef4444",
  AI: "#06b6d4",
};

export default async function TransparencyPage() {
  const messages = await getMessages(DEFAULT_LOCALE);

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        {t(messages, "transparency.title")}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
        {t(messages, "transparency.subtitle")}
      </p>

      {/* Level 1 Metrics */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
          {t(messages, "transparency.level1Title")}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "1rem" }}>
          {t(messages, "transparency.level1Desc")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {LEVEL1_METRICS.map((metric) => (
            <div
              key={metric}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: "0.75rem 1rem",
                background: "#f9fafb",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
            >
              {t(messages, `transparency.metrics.${metric}`)}
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((cat) => (
        <section key={cat} style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
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
              {t(messages, `transparency.categories.${cat}`)}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.5rem" }}>
            {INCIDENT_TYPES.filter((i) => i.category === cat).map((incident) => (
              <div
                key={incident.code}
                style={{
                  border: `1px solid ${CATEGORY_COLORS[cat]}40`,
                  borderLeft: `4px solid ${CATEGORY_COLORS[cat]}`,
                  borderRadius: 6,
                  padding: "0.6rem 0.85rem",
                  background: "#fff",
                  fontSize: "0.85rem",
                }}
              >
                <span style={{ color: "#9ca3af", fontSize: "0.75rem", fontFamily: "monospace" }}>
                  {incident.code}
                </span>
                <div style={{ fontWeight: 500, marginTop: 2 }}>
                  {t(messages, `transparency.incidentTypes.${incident.code}`)}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
