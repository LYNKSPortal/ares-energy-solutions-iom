import { BadgeCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificationGroups } from "@/lib/constants";

export function Certifications() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Certifications & Accreditations"
        title="Qualified, certified and approved."
        description="Alongside our Construction Isle of Man accreditation, our team holds a range of industry certifications and approved dealer status covering electrical, refrigeration and air conditioning work."
      />
      <div className="mt-14 flex flex-col gap-12">
        {certificationGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-mid-grey">
              {group.title}
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-brand-light-grey bg-brand-light-grey sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-start gap-3 bg-brand-white p-6">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-black" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-brand-black">{item.name}</p>
                    {item.detail ? (
                      <p className="mt-1 text-sm text-brand-mid-grey">{item.detail}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
