import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maine Purity Test",
  description: "The Maine Purity Test - How Maine are you?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
