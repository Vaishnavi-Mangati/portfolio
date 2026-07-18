import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vaishnavi Mangati — Software Engineer, Full Stack Developer",
  description:
    "Vaishnavi Mangati — Full-stack software engineer building scalable applications with intuitive interfaces. Explore projects, journey, and skills.",
  openGraph: {
    title: "Vaishnavi Mangati — Software Engineer",
    description:
      "Full-stack developer building scalable applications with beautiful interfaces.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Mangati — Software Engineer",
    description:
      "Full-stack developer building scalable applications with beautiful interfaces.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
