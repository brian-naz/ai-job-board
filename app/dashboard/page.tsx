import StatCard from "@/components/dashboard/stat-card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getJobs } from "@/lib/jobs";
import Link from "next/link";

export default async function DashboardPage() {
  const jobs = await getJobs();

  return (
    <Container>
      <div className="py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Employer Dashboard</h1>
        </div>
        <Button>
          <Link href="/dashboard/new">+ New Job</Link>
        </Button>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard title="Jobs Posted" value={jobs.length} />
          <StatCard title="Applications" value={27} />
          <StatCard title="Views" value={842} />
        </div>
        <div className="mt-12 space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="rounded-lg border p-6">
              <h2 className="text-xl font-bold">{job.title}</h2>

              <p className="text-muted-foreground">{job.company}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
