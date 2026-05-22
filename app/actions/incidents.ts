"use server";

import { supabase } from "../../lib/supabase";
import type { IncidentFormData } from "../../types/ai4ua";

export async function submitIncident(
  data: IncidentFormData
): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from("incidents").insert([
    {
      company: data.company,
      incident_type: data.incidentType,
      incident_category: data.incidentType.split("_")[0],
      title: data.title,
      description: data.description,
      date_of_incident: data.date,
      evidence_links: data.evidence || null,
      contact_email: data.contactEmail || null,
      status: "pending",
    },
  ]);

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
