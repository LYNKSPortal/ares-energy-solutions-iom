import type { Metadata } from "next";
import { siteUrl, business } from "./constants";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataArgs): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      url,
      siteName: business.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${business.name}`,
      description,
    },
  };
}
