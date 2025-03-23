import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

const sans = FontSans({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SummarAIze - AI-Powered PDF Summarization",
  description:
    "Save hours of reading time. Transform length PDFs into clear, accurate summaries in seconds with out advanced AI platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} source-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
