import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/constants";

export function ProcessSteps() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="How It Works"
        title="A straightforward process, from enquiry to completion."
      />
      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.number} className="relative pl-0">
            <span className="block text-4xl font-semibold text-brand-light-grey">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-brand-black">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark-grey">
              {step.description}
            </p>
            {index !== processSteps.length - 1 ? (
              <div className="mt-8 hidden h-px w-full bg-brand-light-grey lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
