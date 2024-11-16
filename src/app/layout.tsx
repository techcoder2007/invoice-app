import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "In voice app",
  description: "Created by @techcoder444",
  creator: "@techcoder444",
  keywords: ['next-invoice-app', 'invoice-app']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
