import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/types/job";

interface ApplyCardProps {
  job: Job;
}

export default function ApplyCard({ job }: ApplyCardProps) {
  return (
    <Card className="sticky top-24">
      <CardContent className="space-y-4 p-6">
        <h3 className="text-xl font-semibold">{job.title}</h3>

        <p>{job.company}</p>

        <p>{job.salary}</p>

        <Button className="w-full">Apply Now</Button>
      </CardContent>
    </Card>
  );
}
