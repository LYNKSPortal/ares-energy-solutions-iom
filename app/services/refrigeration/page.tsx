import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { services } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Refrigeration Services Isle of Man",
  description:
    "Professional refrigeration services, maintenance and repairs for domestic and commercial customers across the Isle of Man.",
  path: "/services/refrigeration",
});

const service = services.find((s) => s.slug === "refrigeration")!;

export default function RefrigerationPage() {
  return (
    <ServiceDetail
      service={service}
      heroTitle="Professional refrigeration services for domestic and commercial requirements."
      heroDescription="Refrigeration services, maintenance and repairs for homes and businesses across the Isle of Man."
    />
  );
}
