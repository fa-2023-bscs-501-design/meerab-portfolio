import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meerab Asif | Frontend Developer",
  description:
    "Frontend Developer portfolio showcasing projects, skills, and modern web development experience.",

  keywords: [
    "Meerab Asif",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],

verification: {
  google: "EfU5VDmlYMDB2k5nNL9NSWOTFJaQFchSRVqR0OESZNU",
},
  openGraph: {
    title: "Meerab Asif | Frontend Developer",
    description:
      "Frontend Developer portfolio showcasing projects, skills, and web development experience.",
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