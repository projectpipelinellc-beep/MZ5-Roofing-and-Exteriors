import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const paths = ["", "/roofing", "/storm-damage", "/gutters-siding", "/projects", "/about", "/contact"];
  return paths.map((p) => ({
    url: `${url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
