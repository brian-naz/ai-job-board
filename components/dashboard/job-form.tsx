"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createJob } from "../../app/dashboard/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "../ui/card";

export default function JobForm() {
  return (
    <Card>
      <CardContent className="p-8">
        <form id="newJob" action={createJob} className="space-y-6">
          <Input name="title" placeholder="Job Title" />

          <Input name="company" placeholder="Company" />

          <Input name="location" placeholder="Location" />

          <Input name="salary" placeholder="Salary" />

          <div className="space-y-2">
            <label className="text-sm font-medium">Employment Type</label>

            <Select name="employment_type" defaultValue="Full Time">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Full Time">Full Time</SelectItem>
                <SelectItem value="Part Time">Part Time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea name="description" placeholder="Job Description" />

          <Textarea
            name="requirements"
            placeholder="Requirements (seperate with commas)"
          />

          <Button type="submit" form="newJob">
            Create Job
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
