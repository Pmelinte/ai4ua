import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface IncidentRow {
  id: string;
  created_at: string;
  company: string;
  incident_type: string;
  incident_category: string;
  title: string;
  description: string;
  date_of_incident: string;
  evidence_links: string | null;
  contact_email: string | null;
  status: "pending" | "reviewed" | "rejected";
}
