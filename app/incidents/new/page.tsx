import { getMessages, t, DEFAULT_LOCALE } from "../../../lib/i18n";
import IncidentForm from "../../../components/IncidentForm";

export default async function NewIncidentPage() {
  const messages = await getMessages(DEFAULT_LOCALE);
  const incident = (messages as Record<string, unknown>)?.incident as
    | Record<string, unknown>
    | undefined;
  const labels = ((incident?.form ?? {}) as Record<string, string>);

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem 1rem" }}>
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
          marginBottom: "0.5rem",
        }}
      >
        {t(messages, "incident.hero.badge")}
      </div>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
        {t(messages, "incident.hero.title")}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "0.95rem" }}>
        {t(messages, "incident.hero.subtitle")}
      </p>
      <IncidentForm labels={labels} />
    </main>
  );
}
