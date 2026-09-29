import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { QuoteForm } from "@/components/forms/quote-form";
import { ContactDetails } from "@/components/sections/contact-details";
import { buildMetadata } from "@/lib/metadata";
import { images } from "@/lib/images";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Request a Quote",
  description:
    "Request a quote from Ares Energy Solution Limited for electrical, air conditioning or refrigeration work in the Isle of Man, or contact us directly by phone or email.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Request a quote."
        description="Tell us about your electrical, air conditioning or refrigeration project and we'll be in touch to discuss the work."
        image={images.ctaDark}
        crumbs={[{ label: "Contact" }]}
      />
      <Section tone="white">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <ContactDetails />
          <div className="rounded-lg border border-brand-light-grey bg-brand-off-white p-6 sm:p-10">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
