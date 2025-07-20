import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti Imperialist AI",
  description: "AI answers are grounded in anti-imperialist news articles",
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
