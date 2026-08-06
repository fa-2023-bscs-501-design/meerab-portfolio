import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meerab-portfolio-six.vercel.app"),

  title: {
    default: "Meerab Asif | Frontend Developer",
    template: "%s | Meerab Asif",
  },

  description:
    "Frontend Developer skilled in Next.js, React, JavaScript, Tailwind CSS, and Python. Explore my portfolio, projects, and technical skills.",

  keywords: [
    "Meerab Asif",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Python",
    "Portfolio",
  ],

  verification: {
    google: "EfU5VDmlYMDB2k5nNL9NSWOTFJaQFchSRVqR0OESZNU",
  },

  alternates: {
    canonical: "https://meerab-portfolio-six.vercel.app",
  },

  openGraph: {
    title: "Meerab Asif | Frontend Developer",
    description:
      "Portfolio showcasing my projects, skills, and experience in modern web development.",
    url: "https://meerab-portfolio-six.vercel.app",
    siteName: "Meerab Asif Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Meerab Asif | Frontend Developer",
    description:
      "Frontend Developer Portfolio built with Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Meerab Asif",
          url: "https://meerab-portfolio-six.vercel.app",
          email: "mailto:meerabasif04@gmail.com",
          jobTitle: "Frontend Developer",
          description:
            "Frontend Developer specializing in Next.js, React, Tailwind CSS, JavaScript and Python.",
          image: "https://meerab-portfolio-six.vercel.app/profile.png",
          sameAs: [
            "https://github.com/fa-2023-bscs-501-design",
            "https://www.linkedin.com/in/meerab-asif-3b5689411"
          ]
        }),
      }}
    />

    {children}

  </body>
</html>
  
  );
}