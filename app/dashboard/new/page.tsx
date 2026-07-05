import Container from "@/components/ui/container";
import JobForm from "../job-form";

export default function NewJobPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold">Create Job</h1>
        <JobForm />
      </div>
    </Container>
  );
}
