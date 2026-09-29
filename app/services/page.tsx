import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityList } from "@/components/sections/capability-list";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Electrical, Air Conditioning & Refrigeration Services",
  description:
    "Explore electrical, air conditioning and refrigeration services from Ares Energy Solution Limited, serving domestic and commercial customers across the Isle of Man.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical and climate-control services for homes and businesses."
        description="Ares Energy Solution Limited works with domestic and commercial customers throughout the Isle of Man, covering electrical, air conditioning and refrigeration requirements."
        image={images.heroSecondary}
        crumbs={[{ label: "Services" }]}
      />

      {services.map((service, index) => (
        <Section key={service.slug} tone={index % 2 === 0 ? "white" : "light"}>
          <div
            className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-brand-light-grey">
              <Image
                src={service.image}
                alt={`${service.name} project detail`}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover grayscale"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow={`0${index + 1} — ${service.name}`}
                title={service.shortDescription}
                description={service.description}
              />
              <div className="mt-8">
                <CapabilityList items={service.capabilities.slice(0, 4)} />
              </div>
              <div className="mt-8">
                <Button href={service.href} variant="secondary" showArrow>
                  Explore {service.name} Services
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <ContactCTA />
    </>
  );
}
