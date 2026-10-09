import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccreditationBlock } from "@/components/sections/accreditation-block";
import { Certifications } from "@/components/sections/certifications";
import { CapabilityList } from "@/components/sections/capability-list";
import { ContactCTA } from "@/components/sections/contact-cta";
import { leadership } from "@/lib/constants";
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
        image="/projects/electrical-ares-branding.jpg"
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
            <Image
              src="/projects/ac-ceiling-diffuser-tech.jpg"
              alt="Ares technician carrying out an air conditioning ceiling installation"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Leadership" title="Led by an experienced, qualified engineer." />
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.32fr_1fr] lg:items-start">
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-brand-light-grey">
            <Image
              src="/team/leon-dawson.jpg"
              alt={`${leadership.name}, ${leadership.role} of Ares Energy Solution Limited`}
              fill
              sizes="(min-width: 1024px) 20vw, 60vw"
              className="object-cover grayscale"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-black">{leadership.name}</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-brand-mid-grey">
              {leadership.role}
            </p>
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-brand-dark-grey">
              {leadership.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg border border-brand-light-grey bg-brand-white p-8">
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-mid-grey">
            Qualifications & Certifications
          </h4>
          <div className="mt-6">
            <CapabilityList items={leadership.qualifications} />
          </div>
        </div>
      </Section>

      <Section tone="white">
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
