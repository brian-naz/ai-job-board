import { getJobs } from "@/lib/jobs";
import JobCard from "../jobs/job-card";

export default async function LatestJobs() {
  const jobs = await getJobs();

  return (
    <section className="pb-24">
      <h2 className="mb-8 text-4xl font-bold">Latest Jobs</h2>

      <div className="grid gap-6">
        {jobs.slice(0, 3).map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
