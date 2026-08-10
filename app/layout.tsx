import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baizid-portfolio.vercel.app"),
  title: "Baizid Yaldram — ML & AI Engineer",
  description:
    "Data Science graduate from University of Malaya building LLM-powered applications, hybrid ML pipelines, and multi-agent AI systems. Open to Data Analyst, Data Scientist, and AI Engineer roles.",
  keywords: [
    "Baizid Yaldram",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Baizid Yaldram" }],
  openGraph: {
    title: "Baizid Yaldram — ML & AI Engineer",
    description:
      "Data Science graduate building LLM-powered applications, hybrid ML pipelines, and multi-agent AI systems.",
    url: "https://baizid-portfolio.vercel.app",
    siteName: "Baizid Yaldram Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baizid Yaldram — ML & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baizid Yaldram — ML & AI Engineer",
    description:
      "Data Science graduate building LLM-powered applications, hybrid ML pipelines, and multi-agent AI systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
