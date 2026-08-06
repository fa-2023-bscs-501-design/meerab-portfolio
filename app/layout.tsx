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
    "Python",
    "Machine Learning",
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
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              "name": "Meerab Asif",

              "url":
                "https://meerab-portfolio-six.vercel.app",

              "jobTitle":
                "Frontend Developer",

              "description":
                "Computer Science student and Frontend Developer passionate about building modern responsive web applications using Next.js, React, JavaScript and Tailwind CSS.",

              "sameAs": [
                "https://github.com/fa-2023-bscs-501-design",
                "https://www.linkedin.com/in/meerab-asif-3b5689411"
              ],

              "knowsAbout": [
                "Next.js",
                "React",
                "JavaScript",
                "Tailwind CSS",
                "HTML",
                "CSS",
                "Python",
                "Machine Learning",
                "Web Development"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}