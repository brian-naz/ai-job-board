"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;

    const password = form.get("password") as string;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Login Data:", data);
    console.log("Login Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/jobs");
    router.refresh();

    setLoading(false);
  }

  return (
    <form onSubmit={login} className="space-y-4">
      <input name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Password" />

      <button>{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
}
