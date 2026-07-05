import { getJobs } from "@/lib/jobs";
import JobCard from "@/components/jobs/job-card";
import SearchFilters from "@/components/jobs/search-filters";

interface JobsPageProps {
  searchParams: Promise<{
    search?: string;
    remote?: string;
    sort?: string;
  }>;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;

  const jobs = await getJobs({
    search: params.search,
    remote: params.remote,
    sort: params.sort,
  });

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Available Jobs</h1>

      <SearchFilters />

      <p className="mb-6 text-muted-foreground">Showing {jobs.length} jobs</p>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
