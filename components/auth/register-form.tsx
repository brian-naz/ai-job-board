"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  async function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const fullName = form.get("fullName") as string;

    const email = form.get("email") as string;

    const password = form.get("password") as string;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created!");

    setLoading(false);
  }

  return (
    <form onSubmit={register} className="space-y-4">
      <input name="fullName" placeholder="Full Name" />

      <input name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Password" />

      <button>{loading ? "Creating..." : "Create Account"}</button>
    </form>
  );
}
