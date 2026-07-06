import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeleteJobButton from "@/components/dashboard/delete-job-button";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded-xl border p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{job.title}</h2>

        <p className="text-muted-foreground">{job.company}</p>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <span>📍 {job.location}</span>
          <span>💰 {job.salary}</span>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="outline">View Applicants</Button>

        <Link href={`/dashboard/edit/${job.id}`}>
          <Button variant="outline">Edit</Button>
        </Link>

        <DeleteJobButton id={job.id} />
      </div>
    </div>
  );
}
