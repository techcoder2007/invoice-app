import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="container max-w-5xl mx-auto flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="text-4xl font-bold">Invoices</h1>
        <Button asChild variant="outline">
          <Link href="/invoices/new">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Create Invoice
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>01/01/2023</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>gBk4R@example.com</TableCell>
            <TableCell>
              <Badge variant="default">Open</Badge>
            </TableCell>
            <TableCell>$100</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
