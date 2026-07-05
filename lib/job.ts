import { supabase } from "./supabase";

export async function getJob(id: string) {
  const { data } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}
