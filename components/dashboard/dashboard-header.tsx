import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">Employer Dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your jobs and applications.
        </p>
      </div>

      <Button>
        <Link href="/dashboard/new">+ New Job</Link>
      </Button>
    </div>
  );
}
