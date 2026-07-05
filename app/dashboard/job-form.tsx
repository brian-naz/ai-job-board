"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "./actions";

export default function JobForm() {
  return (
    <form action={createJob} className="space-y-6">
      <Input name="title" placeholder="Job Title" />

      <Input name="company" placeholder="Company" />

      <Input name="location" placeholder="Location" />

      <Input name="salary" placeholder="Salary" />

      <Textarea name="description" placeholder="Job Description" />

      <Textarea
        name="requirements"
        placeholder="Requirements (comma separated)"
      />

      <Button className="w-full">Create Job</Button>
    </form>
  );
}
