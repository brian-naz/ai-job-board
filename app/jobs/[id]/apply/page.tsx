import Container from "@/components/ui/container";
import ApplyForm from "@/components/jobs/apply-form";
import { applyForJob } from "../actions";

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Container>
      <div className="py-12">
        <h1 className="mb-8 text-4xl font-bold">Apply</h1>

        <ApplyForm action={applyForJob.bind(null, id)} />
      </div>
    </Container>
  );
}
