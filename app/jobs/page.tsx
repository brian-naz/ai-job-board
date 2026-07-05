import { getJobs } from "@/lib/jobs";
import JobCard from "@/components/jobs/job-card";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Available Jobs</h1>

      <div className="grid gap-6">
        {jobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
