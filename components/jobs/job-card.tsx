import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/types/job";
import { Button } from "../ui/button";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{job.title}</h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Badge>{job.remote ? "Remote" : "On-site"}</Badge>

          <Badge variant="secondary">{job.employment_type}</Badge>

          <Badge variant="outline">{job.salary}</Badge>
        </div>

        <section className="mt-12">
          <h4 className="mb-4 text-1xl font-semibold">Job Description</h4>

          <p className="leading-8">{job.description}</p>

          <h2 className="mb-4 text-1xl font-semibold">Requirements</h2>

          <ul className="space-y-2">
            {job.requirements.split(",").map((item: string) => (
              <li key={item}>- {item.trim()}</li>
            ))}
          </ul>
        </section>

        <Link
          href={`/jobs/${job.id}`}
          className="text-blue-600 hover:underline hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
        >
          View Job →
        </Link>
        <Button className="mt-12" size="lg">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}
