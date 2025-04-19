import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GlowCursor } from "@/components/glow-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dormsdots - Your Best Web Solution Partner",
  description:
    "dormsdots offers professional web development, SEO optimization, UI/UX design, and scalable digital solutions tailored to your business needs.",
  keywords: [
    "web development",
    "freelance web developer",
    "custom websites",
    "SEO services",
    "UI UX design",
    "digital solutions",
    "responsive design",
    "next.js developer",
    "dormsdots",
  ],
  authors: [{ name: "dormsdots", url: "https://dormsdots.com" }],
  creator: "dormsdots",
  metadataBase: new URL("https://dormsdots.com"),
  openGraph: {
    title: "dormsdots - Your Best Web Solution Partner",
    description:
      "Need a professional freelance developer? dormsdots builds modern, scalable, SEO-friendly websites tailored for your success.",
    url: "https://dormsdots.com",
    siteName: "dormsdots",
    images: [
      {
        url: "https://res.cloudinary.com/profilepic/image/upload/v1744969418/profilepic/j7powk11mhav06m5nhdt.png", // replace with actual image
        width: 1200,
        height: 630,
        alt: "dormsdots Web Development Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dormsdots - Your Best Web Solution Partner",
    description:
      "Professional freelance web development, UI/UX design, SEO services, and more from dormsdots.",
    images: [
      "https://res.cloudinary.com/profilepic/image/upload/v1744969418/profilepic/j7powk11mhav06m5nhdt.png",
    ], // replace with actual image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&family=Rubik:ital,wght@0,300..900;1,300..900&family=Special+Gothic+Expanded+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlowCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
