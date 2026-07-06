import JobForm from "@/components/dashboard/job-form";
import { getJob } from "@/lib/jobs";
import { updateJob } from "../../actions";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const job = await getJob(id);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Edit Job</h1>

      <JobForm job={job} action={updateJob.bind(null, id)} />
    </div>
  );
}
