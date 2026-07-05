import { supabase } from "./supabase";

export async function createJob(job: any) {
  const { error } = await supabase.from("jobs").insert(job);

  if (error) {
    throw error;
  }
}
