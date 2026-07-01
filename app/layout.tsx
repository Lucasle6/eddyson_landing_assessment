import type { Metadata } from "next";
import { Quando, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

// DM Sans: fuente base para body, UI y headings.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Quando: fuente serif de display para el H1 del Hero.
const quando = Quando({
  variable: "--font-quando",
  weight: "400",
  subsets: ["latin"],
});

// DM Mono: usada para labels/eyebrows monoespaciados (ej. "SELECT. CONNECT. EVOLVE.").
const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eddyson — Partner Program",
  description:
    "Your partner in the EDI jungle. Fast, scalable and successful EDI solutions for automotive, grocery and retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${quando.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
