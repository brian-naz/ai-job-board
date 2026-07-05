import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            AI Job Board
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/jobs">Jobs</Link>

            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
