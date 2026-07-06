"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ApplyForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="space-y-6">
      <Textarea
        name="coverLetter"
        placeholder="Tell the employer why you're a good fit..."
      />

      <Button type="submit">Submit Application</Button>
    </form>
  );
}
