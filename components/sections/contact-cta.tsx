import { Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/constants";

export function ContactCTA({
  title = "Need electrical, air conditioning or refrigeration work?",
  description = "Speak with Ares Energy Solution Limited about your home, business or commercial project.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="dark">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-[clamp(1.75rem,1.4rem+1.6vw,2.75rem)] font-semibold leading-tight tracking-tight text-balance text-brand-white">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-light-grey sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg" variant="onDark" showArrow>
            Request a Quote
          </Button>
          <Button
            href={business.phoneHref}
            size="lg"
            variant="ghost"
            className="border-brand-dark-grey text-brand-white hover:bg-brand-white hover:text-brand-black"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {business.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
