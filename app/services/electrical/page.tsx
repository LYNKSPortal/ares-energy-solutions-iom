import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { services } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Electrical Services Isle of Man",
  description:
    "Electrical installation, maintenance, repairs, alterations and upgrades for domestic and commercial customers across the Isle of Man.",
  path: "/services/electrical",
});

const service = services.find((s) => s.slug === "electrical")!;

export default function ElectricalPage() {
  return (
    <ServiceDetail
      service={service}
      heroTitle="Professional electrical services across the Isle of Man."
      heroDescription="Electrical installation, maintenance, repairs, alterations and upgrades for domestic and commercial clients."
      accredited="Electrical Installation"
    />
  );
}
