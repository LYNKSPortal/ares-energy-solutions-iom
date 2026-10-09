import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";

const routes = [
  "",
  "/services",
  "/services/electrical",
  "/services/air-conditioning",
  "/services/refrigeration",
  "/gallery",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
