import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyAres } from "@/lib/constants";

export function WhyAres() {
  return (
    <Section tone="white">
      <SectionHeading
        eyebrow="Why Ares"
        title="A single, capable point of contact."
        description="Ares Energy Solution Limited brings electrical and climate-control expertise together for domestic and commercial customers across the Isle of Man."
      />
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyAres.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="border-t-2 border-brand-black pt-6">
              <Icon className="h-6 w-6 text-brand-black" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-brand-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-dark-grey">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
