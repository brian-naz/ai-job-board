import { supabase } from "./supabase";

export async function newJob(job: any) {
  const { error } = await supabase.from("jobs").insert(job);

  if (error) {
    throw error;
  }
}
