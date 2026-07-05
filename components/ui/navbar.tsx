import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          AI Job Board
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>

          <Link href="/jobs">Jobs</Link>

          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
