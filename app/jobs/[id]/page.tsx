import { getJob } from "@/lib/job";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;

  const job = await getJob(id);

  if (!job) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">{job.title}</h1>

        <p className="text-2xl text-muted-foreground">{job.company}</p>
      </div>
    </main>
  );
}
