import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{job.title}</h2>

          {job.remote && <Badge>Remote</Badge>}
        </div>

        <p className="font-medium">{job.company}</p>

        <p>{job.location}</p>

        <p className="font-semibold">{job.salary}</p>

        <Link
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:underline hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
        >
          View Job →
        </Link>
      </CardContent>
    </Card>
  );
}
