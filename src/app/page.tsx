import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Invoicipedia</h1>
      <Button asChild>
        <a href="/sign-in">Sign In</a>
      </Button>
    </main>
  );
}
