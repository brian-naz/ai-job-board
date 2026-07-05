"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const remote = searchParams.get("remote") || "all";
  const sort = searchParams.get("sort") || "newest";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/jobs?${params.toString()}`);
  }

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      <Input
        placeholder="Search jobs..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => updateParam("search", e.target.value)}
      />

      <Select
        defaultValue={searchParams.get("remote") ?? "all"}
        onValueChange={(value) => {
          updateParam("sort", value ?? "");
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Remote" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Jobs</SelectItem>
          <SelectItem value="true">Remote</SelectItem>
          <SelectItem value="false">On-site</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue={searchParams.get("sort") ?? "newest"}
        onValueChange={(value) => {
          updateParam("sort", value ?? "");
        }}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="salary">Salary</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
