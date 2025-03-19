import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maine Purity Test",
  description: "The Maine Purity Test - How Mainer are you?",
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
