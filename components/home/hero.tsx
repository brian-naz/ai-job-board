import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-6xl font-extrabold">Find Your Dream Job</h1>

        <p className="mt-6 text-xl text-muted-foreground">
          Discover opportunities from the world's best companies.
        </p>

        <div className="mt-10 flex gap-3">
          <Input placeholder="Search jobs" />

          <Button>Search</Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-gray-100 px-4 py-2">Java</span>

          <span className="rounded-full bg-gray-100 px-4 py-2">React</span>

          <span className="rounded-full bg-gray-100 px-4 py-2">AI</span>

          <span className="rounded-full bg-gray-100 px-4 py-2">Remote</span>

          <span className="rounded-full bg-gray-100 px-4 py-2">AWS</span>
        </div>
      </div>
    </section>
  );
}
