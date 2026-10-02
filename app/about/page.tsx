import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccreditationBlock } from "@/components/sections/accreditation-block";
import { Certifications } from "@/components/sections/certifications";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Ares Energy Solution Limited",
  description:
    "Ares Energy Solution Limited is an Isle of Man-based electrical, air conditioning and refrigeration contractor serving domestic and commercial customers, based in Castletown.",
  path: "/about",
});

const capabilities = [
  "Homes",
  "Residential renovations",
  "Refurbishments",
  "Commercial installations",
  "Commercial fit-outs",
  "Ongoing maintenance",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ares"
        title="An Isle of Man-based electrical and climate-control contractor."
        description="Based in Castletown, Ares Energy Solution Limited serves domestic and commercial customers across the Isle of Man."
        crumbs={[{ label: "About" }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Our Business"
              title="Electrical, air conditioning and refrigeration, under one roof."
            />
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-brand-dark-grey">
              <p>
                Ares Energy Solution Limited is an Isle of Man-based
                electrical, air conditioning and refrigeration contractor
                serving domestic and commercial customers across the Island.
              </p>
              <p>
                The company is based in Castletown and works across
                electrical installations, maintenance and repairs, air
                conditioning and refrigeration requirements.
              </p>
              <p>
                Ares supports homeowners and businesses alike — from
                individual repairs and upgrades to larger installation and
                fit-out projects, along with the ongoing maintenance that
                keeps electrical and climate-control systems running as
                intended.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-brand-light-grey">
            <ImagePlaceholder />
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="What We Cover"
          title="Working across a wide range of property types and requirements."
        />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-brand-light-grey bg-brand-light-grey sm:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="bg-brand-white p-6 text-sm font-medium text-brand-black sm:p-8">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <AccreditationBlock tone="light" />

      <Certifications />

      <ContactCTA />
    </>
  );
}
