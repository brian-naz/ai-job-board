import StatCard from "@/components/dashboard/stat-card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getJobs } from "@/lib/jobs";
import { requireEmployer } from "@/lib/auth";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import JobCard from "@/components/dashboard/job-card";

export default async function DashboardPage() {
  await requireEmployer();
  const jobs = await getJobs();

  return (
    <Container>
      <div className="py-12">
        <DashboardHeader />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StatCard title="Jobs Posted" value={jobs.length} />
          <StatCard title="Applications" value={27} />
          <StatCard title="Views" value={842} />
        </div>
        <div className="mt-12 space-y-6">
          {jobs.length === 0 ? (
            <div className="rounded-xl border border-dashed p-12 text-center">
              <h2 className="text-xl font-semibold">No jobs posted yet</h2>

              <p className="mt-2 text-muted-foreground">
                Click "New Job" to create your first posting.
              </p>
            </div>
          ) : (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </Container>
  );
}
