import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateInvoice() {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col items-center justify-center p-2">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="text-4xl font-bold">Create new invoice </h1>
      </div>
      <form className="grid gap-3 p-4 items-start w-full grid-cols-2">
        <Label htmlFor="name">Billing name</Label>
        <Input type="text" id="name" name="name" placeholder="John Doe" />
        <Label htmlFor="email">Billing email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="2i0dI@example.com"
        />
        <Label htmlFor="value">Value</Label>
        <Input type="number" name="value" id="value" placeholder="100.00" />
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          placeholder="Description of the invoice"
        />
        <div className="flex gap-2">
          <Button type="submit">submit</Button>
          <Button type="reset" variant="outline">
            reset
          </Button>
        </div>
      </form>
    </main>
  );
}
