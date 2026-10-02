import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { services } from "@/lib/constants";

export function ServiceGrid() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="What We Do"
        title="One contractor. Three core disciplines."
        description="Ares Energy Solution Limited provides professional electrical, air conditioning and refrigeration services to homes and businesses across the Isle of Man."
      />
      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-brand-light-grey bg-brand-light-grey md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={service.href}
              className="group relative flex flex-col justify-between bg-brand-white p-8 transition-colors duration-200 hover:bg-brand-off-white"
            >
              <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-md border border-brand-light-grey">
                <ImagePlaceholder className="transition-transform duration-500 ease-out group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-brand-mid-grey">
                  {service.number}
                </span>
                <Icon className="h-5 w-5 text-brand-mid-grey" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-black">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-dark-grey">
                {service.shortDescription}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                Explore {service.name} Services
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
