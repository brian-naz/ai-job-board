import { supabase } from "./supabase";

interface GetJobsOptions {
  search?: string;
  remote?: string;
  sort?: string;
}

export async function getJobs(options: GetJobsOptions = {}) {
  let query = supabase.from("jobs").select("*");

  if (options.search) {
    query = query.or(
      `title.ilike.%${options.search}%,company.ilike.%${options.search}%`,
    );
  }

  if (options.remote === "true") {
    query = query.eq("remote", true);
  }

  if (options.remote === "false") {
    query = query.eq("remote", false);
  }

  if (options.sort === "salary") {
    query = query.order("salary", { ascending: false });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  const { data, error } = await query;

  if (error) throw error;

  return data ?? [];
}
