import type { Metadata } from "next";
import "./globals.css";
import { initPostHog } from "@/lib/posthog";

export const metadata: Metadata = {
  title: "Maine Purity Test",
  description: "Find out how Maine you really are with this fun purity test!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Initialize PostHog
  if (typeof window !== 'undefined') {
    initPostHog();
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
