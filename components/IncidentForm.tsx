"use client";

import { useState } from "react";
import { submitIncident } from "../app/actions/incidents";

const COMPANIES = ["Anthropic", "OpenAI", "Perplexity", "Alphabet", "X"];

const INCIDENT_TYPES = [
  { code: "ACC_SUSPEND", label: "Account Suspension" },
  { code: "ACC_BLOCK", label: "Account Block" },
  { code: "ACC_LOCK", label: "Account Lockout" },
  { code: "ACC_DELETE", label: "Account Deletion" },
  { code: "ACC_ACCESS", label: "Data Access Denial" },
  { code: "DAT_BREACH", label: "Data Breach" },
  { code: "DAT_GDPR", label: "GDPR Violation" },
  { code: "DAT_AI_TRAIN", label: "AI Training Without Consent" },
  { code: "DAT_SHARE", label: "Unauthorized Data Sharing" },
  { code: "DAT_RETAIN", label: "Excessive Data Retention" },
  { code: "FIN_UNAUTH", label: "Unauthorized Charge" },
  { code: "FIN_REFUND", label: "Refund Refusal" },
  { code: "FIN_BILLING", label: "Billing Error" },
  { code: "FIN_SUBSCRIP", label: "Subscription Issue" },
  { code: "FIN_FREEZE", label: "Account Freeze with Funds" },
  { code: "SUP_NORESPONSE", label: "No Support Response" },
  { code: "SUP_BOT", label: "Bot Loop / No Human" },
  { code: "SUP_MISINFO", label: "Support Misinformation" },
  { code: "SUP_DELAY", label: "Excessive Support Delay" },
  { code: "SUP_LANG", label: "Language Barrier in Support" },
  { code: "CON_MODERATION", label: "Arbitrary Content Moderation" },
  { code: "CON_REMOVAL", label: "Content Removal Without Notice" },
  { code: "CON_TOS_CHANGE", label: "ToS Change Without Notice" },
  { code: "CON_FEATURE", label: "Missing Promised Feature" },
  { code: "CON_DOWNTIME", label: "Unannounced Downtime" },
  { code: "CON_DEGRADE", label: "Service Degradation" },
  { code: "CON_REGION", label: "Regional Service Restriction" },
  { code: "AI_BIAS", label: "AI Bias" },
  { code: "AI_HALLUC", label: "AI Hallucination Causing Harm" },
  { code: "AI_IDENTITY", label: "Undisclosed AI Identity" },
  { code: "AI_PRIVACY", label: "AI Privacy Violation" },
  { code: "AI_DECISION", label: "Automated Decision Without Appeal" },
  { code: "AI_EXPLAINAB", label: "No AI Explainability" },
  { code: "AI_CONSENT", label: "AI Training Consent Missing" },
  { code: "AI_SAFETY", label: "AI Safety Failure" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.6rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: 6,
  fontSize: "0.9rem",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontWeight: 600,
  fontSize: "0.85rem",
  marginBottom: "0.35rem",
  color: "#374151",
};

export default function IncidentForm({
  labels,
}: {
  labels: Record<string, string>;
}) {
  const [form, setForm] = useState({
    company: "",
    incidentType: "",
    title: "",
    description: "",
    date: "",
    evidence: "",
    contactEmail: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const result = await submitIncident(form);
    if (result.success) {
      setStatus("success");
      setForm({ company: "", incidentType: "", title: "", description: "", date: "", evidence: "", contactEmail: "" });
    } else {
      setStatus("error");
      setErrorMsg(result.error || labels.error);
    }
  };

  if (status === "success") {
    return (
      <div style={{ background: "#d1fae5", border: "1px solid #6ee7b7", borderRadius: 8, padding: "1.5rem", textAlign: "center", color: "#065f46", fontWeight: 600 }}>
        {labels.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <label style={labelStyle}>{labels.company}</label>
        <select name="company" value={form.company} onChange={handleChange} required style={inputStyle}>
          <option value="">{labels.companyPlaceholder}</option>
          {COMPANIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div>
        <label style={labelStyle}>{labels.incidentType}</label>
        <select name="incidentType" value={form.incidentType} onChange={handleChange} required style={inputStyle}>
          <option value="">{labels.incidentTypePlaceholder}</option>
          {INCIDENT_TYPES.map((i) => <option key={i.code} value={i.code}>{i.code} — {i.label}</option>)}
        </select>
      </div>

      <div>
        <label style={labelStyle}>{labels.title}</label>
        <input name="title" value={form.title} onChange={handleChange} required placeholder={labels.titlePlaceholder} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>{labels.description}</label>
        <textarea name="description" value={form.description} onChange={handleChange} required placeholder={labels.descriptionPlaceholder} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <div>
        <label style={labelStyle}>{labels.date}</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>{labels.evidence}</label>
        <input name="evidence" value={form.evidence} onChange={handleChange} placeholder={labels.evidencePlaceholder} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>{labels.email}</label>
        <input type="email" name="contactEmail" value={form.contactEmail} onChange={handleChange} placeholder={labels.emailPlaceholder} style={inputStyle} />
      </div>

      {status === "error" && (
        <div style={{ color: "#dc2626", fontSize: "0.85rem", background: "#fee2e2", padding: "0.75rem", borderRadius: 6 }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: "#1d4ed8",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: status === "loading" ? "not-allowed" : "pointer",
          opacity: status === "loading" ? 0.7 : 1,
        }}
      >
        {status === "loading" ? labels.submitting : labels.submit}
      </button>
    </form>
  );
}
