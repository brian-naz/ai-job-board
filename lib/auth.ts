import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function requireEmployer() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    redirect("/auth");
  }

  // Logged in but not an employer
  if (profile.role !== "employer") {
    redirect("/jobs");
  }

  return user;
}
