import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AccreditationBlock } from "@/components/sections/accreditation-block";
import { ServiceGrid } from "@/components/sections/service-grid";
import { AudienceSplit } from "@/components/sections/audience-split";
import { PositioningStatement } from "@/components/sections/positioning-statement";
import { WhyAres } from "@/components/sections/why-ares";
import { Testimonials } from "@/components/sections/testimonials";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ContactCTA } from "@/components/sections/contact-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Electrician & Air Conditioning Isle of Man",
  description:
    "Ares Energy Solution Limited provides professional electrical, air conditioning and refrigeration services for domestic and commercial customers across the Isle of Man.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccreditationBlock />
      <ServiceGrid />
      <AudienceSplit />
      <PositioningStatement />
      <WhyAres />
      <Testimonials />
      <ProcessSteps />
      <ContactCTA />
    </>
  );
}
