import { Home, Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityList } from "@/components/sections/capability-list";
import { AccreditationBlock } from "@/components/sections/accreditation-block";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import type { ServiceSummary } from "@/lib/constants";

export function ServiceDetail({
  service,
  heroTitle,
  heroDescription,
  accredited,
}: {
  service: ServiceSummary;
  heroTitle: string;
  heroDescription: string;
  accredited?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={`Services / ${service.name}`}
        title={heroTitle}
        description={heroDescription}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={`${service.name} services`}
              description={service.description}
              className="mb-10"
            />
            <CapabilityList items={service.capabilities} />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-brand-light-grey">
            <ImagePlaceholder />
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Domestic & Commercial"
          title={`${service.name} for homes and businesses.`}
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-brand-light-grey bg-brand-light-grey md:grid-cols-2">
          <div className="bg-brand-white p-8 sm:p-10">
            <Home className="h-6 w-6 text-brand-black" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-brand-black">
              Domestic {service.name}
            </h3>
            <p className="mt-2 text-sm text-brand-mid-grey">
              For homes, renovations and refurbishments.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {service.domestic.map((item) => (
                <li key={item} className="text-sm text-brand-dark-grey">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-white p-8 sm:p-10">
            <Building2 className="h-6 w-6 text-brand-black" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-brand-black">
              Commercial {service.name}
            </h3>
            <p className="mt-2 text-sm text-brand-mid-grey">
              For commercial properties and fit-outs.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {service.commercial.map((item) => (
                <li key={item} className="text-sm text-brand-dark-grey">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {accredited ? <AccreditationBlock tone="light" category={accredited} /> : null}

      <ContactCTA
        title={`Have a ${service.name.toLowerCase()} project in mind?`}
        description={`Talk to Ares about ${service.name.toLowerCase()} work for your home or business.`}
      />
    </>
  );
}
