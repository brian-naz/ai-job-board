"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "../../app/dashboard/actions";

export default function JobForm() {
  return (
    <form id="newJob" action={createJob} className="space-y-6">
      <Input name="title" placeholder="Job Title" />

      <Input name="company" placeholder="Company" />

      <Input name="location" placeholder="Location" />

      <Input name="salary" placeholder="Salary" />

      <Textarea name="description" placeholder="Job Description" />

      <Textarea
        name="requirements"
        placeholder="Requirements (comma separated)"
      />

      <Button type="submit" form="newJob">Create Job</Button>
    </form>
  );
}
