import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { services } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Air Conditioning Isle of Man",
  description:
    "Air conditioning installation, servicing, maintenance and repair for domestic and commercial properties across the Isle of Man.",
  path: "/services/air-conditioning",
});

const service = services.find((s) => s.slug === "air-conditioning")!;

export default function AirConditioningPage() {
  return (
    <ServiceDetail
      service={service}
      heroTitle="Air conditioning installation, servicing and repair."
      heroDescription="New installations, planned maintenance and repairs for domestic and commercial air conditioning systems across the Isle of Man."
      accredited="Air Conditioning"
    />
  );
}
