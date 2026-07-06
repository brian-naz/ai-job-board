"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function applyForJob(jobId: string, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role === "employer") {
    throw new Error("Employers cannot apply for jobs.");
  }

  const coverLetter = formData.get("coverLetter") as string;

  const { data: existing } = await supabase
    .from("applications")
    .select("id")
    .eq("job_id", jobId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existing) {
    throw new Error("You have already applied for this job.");
  }

  const { error } = await supabase.from("applications").insert({
    user_id: user.id,
    job_id: jobId,
    cover_letter: coverLetter,
  });

  if (error) {
    throw error;
  }

  revalidatePath(`/jobs/${jobId}`);

  redirect(`/jobs/${jobId}`);
}
