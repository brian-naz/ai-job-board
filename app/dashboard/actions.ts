"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createJob(formData: FormData) {
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const location = formData.get("location") as string;
  const salary = formData.get("salary") as string;
  const description = formData.get("description") as string;
  const requirements = formData.get("requirements") as string;

  const { error } = await supabase.from("jobs").insert({
    title,
    company,
    location,
    salary,
    description,
    requirements,
    employment_type: "Full Time",
    remote: false,
  });

  if (error) {
    throw error;
  }

  revalidatePath("/dashboard");
  revalidatePath("/jobs");

  redirect("/dashboard");
}
