"use client";

import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import LoginForm from "./login-form";
import RegisterForm from "./register-form";

export default function AuthCard() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-8">
        <div className="mb-8 flex gap-2">
          <Button
            variant={tab === "login" ? "default" : "outline"}
            onClick={() => setTab("login")}
          >
            Login
          </Button>

          <Button
            variant={tab === "register" ? "default" : "outline"}
            onClick={() => setTab("register")}
          >
            Register
          </Button>
        </div>

        {tab === "login" ? <LoginForm /> : <RegisterForm />}
      </CardContent>
    </Card>
  );
}
