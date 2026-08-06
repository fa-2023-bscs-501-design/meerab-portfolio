import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meerab-portfolio-six.vercel.app"),

  title: {
    default: "Meerab Asif | Frontend Developer Portfolio",
    template: "%s | Meerab Asif",
  },

  description:
    "Meerab Asif is a Computer Science student and Frontend Developer specializing in Next.js, React, Tailwind CSS, JavaScript and modern web applications.",

  keywords: [
    "Meerab Asif",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Computer Science Student",
    "Tailwind CSS",
    "JavaScript",
  ],

  authors: [
    {
      name: "Meerab Asif",
    },
  ],

  creator: "Meerab Asif",

  openGraph: {
    title: "Meerab Asif | Frontend Developer Portfolio",
    description:
      "Portfolio website showcasing projects, skills and development journey.",
    url: "https://meerab-portfolio-six.vercel.app",
    siteName: "Meerab Asif Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}