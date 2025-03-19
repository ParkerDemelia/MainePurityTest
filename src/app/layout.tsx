import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rice Purity Test",
  description: "The Rice Purity Test - How pure are you?",
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
