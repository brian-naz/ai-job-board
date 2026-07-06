import Link from "next/link";
import Container from "./container";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 👇 Add this here
  let role = null;

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    role = profile?.role;
  }

  return (
    <nav className="border-b bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AI Job Board
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/jobs">Jobs</Link>

            {user ? (
              <>
                {/* Only employers see Dashboard */}
                {role === "employer" && (
                  <Link href="/dashboard">Dashboard</Link>
                )}

                <LogoutButton />
              </>
            ) : (
              <Link href="/auth/login">Login</Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
