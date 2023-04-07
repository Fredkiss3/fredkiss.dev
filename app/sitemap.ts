import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fredkiss.dev",
      lastModified: new Date(),
    },
    {
      url: "https://fredkiss.dev/resume.pdf",
      lastModified: new Date(),
    },
  ];
}
