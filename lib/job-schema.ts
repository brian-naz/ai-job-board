import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(3, "Job title is required"),
  company: z.string().min(2, "Company is required"),
  location: z.string().min(2, "Location is required"),
  salary: z.string().min(1, "Salary is required"),
  description: z.string().min(30, "Description is too short"),
  requirements: z.string().min(5, "Requirements are required"),
});

export type JobFormValues = z.infer<typeof jobSchema>;
