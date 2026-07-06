import { deleteJob } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";

export default function DeleteJobButton({ id }: { id: string }) {
  return (
    <form action={deleteJob.bind(null, id)}>
      <Button type="submit" variant="destructive">
        Delete
      </Button>
    </form>
  );
}
