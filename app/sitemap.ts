import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://meerab-portfolio-six.vercel.app",
      lastModified: new Date(),
    },
  ];
}