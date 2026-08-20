import type { MetadataRoute } from "next";
import { siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((path) => ({
    url: `https://newjourneyhealth.com${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
