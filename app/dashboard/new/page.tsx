import Container from "@/components/ui/container";
import JobForm from "@/components/dashboard/job-form";
import { requireEmployer } from "@/lib/auth";
import { createJob } from "../actions";

export default async function NewJobPage() {
  await requireEmployer();
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold">Create Job</h1>
        <JobForm action={createJob} />
      </div>
    </Container>
  );
}
