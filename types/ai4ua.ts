export type IncidentCategory = "ACC" | "DAT" | "FIN" | "SUP" | "CON" | "AI";

export interface IncidentType {
  code: string;
  category: IncidentCategory;
  labelKey: string;
  descKey: string;
}

export interface AIScore {
  model: "openai" | "deepseek" | "llama";
  score: number;
  reasoning: string;
}

export interface CompanyScore {
  companyId: string;
  companyName: string;
  composite: number;
  scores: AIScore[];
  totalIncidents: number;
  lastUpdated: string;
}

export interface IncidentFormData {
  company: string;
  incidentType: string;
  title: string;
  description: string;
  date: string;
  evidence?: string;
  contactEmail?: string;
}

export interface Metric {
  id: string;
  level: 1 | 2 | 3;
  labelKey: string;
  descKey: string;
  categories?: IncidentCategory[];
}

export type Locale = "en" | "ro";
