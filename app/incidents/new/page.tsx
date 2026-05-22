import { getMessages, t, DEFAULT_LOCALE } from "../../../lib/i18n";
import IncidentForm from "../../../components/IncidentForm";

export default async function NewIncidentPage() {
  const messages = await getMessages(DEFAULT_LOCALE);
  const form = (messages as Record<string, unknown>)?.incidents as Record<string, unknown>;
  const labels = (form?.form ?? {}) as Record<string, string>;

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
        {t(messages, "incidents.title")}
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "0.95rem" }}>
        {t(messages, "incidents.subtitle")}
      </p>
      <IncidentForm labels={labels} />
    </main>
  );
}
