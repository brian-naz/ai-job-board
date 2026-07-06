"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ApplyButton({ id }: { id: string }) {
  return (
    <Link href={`/jobs/${id}/apply`}>
      <Button>Apply Now</Button>
    </Link>
  );
}
