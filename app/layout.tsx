import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Meerab Asif | Frontend Developer",

  description:
    "Meerab Asif is a Computer Science student and Frontend Developer skilled in React, Next.js, Tailwind CSS and modern web technologies.",

  keywords: [
    "Meerab Asif",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],

  openGraph: {
    title: "Meerab Asif | Frontend Developer",
    description:
      "Frontend Developer portfolio showcasing projects, skills and web development experience.",
    type: "website",
  },
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