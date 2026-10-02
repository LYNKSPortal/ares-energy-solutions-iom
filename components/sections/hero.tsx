import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MeteorField } from "@/components/sections/meteor-field";
import { business } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-brand-black text-brand-off-white sm:min-h-[620px]">
      <MeteorField />

      <Container className="relative py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <Eyebrow tone="light">{business.tagline}</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.25rem,1.6rem+3vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-balance text-brand-white">
            Professional electrical and climate-control solutions across the
            Isle of Man.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-brand-light-grey sm:text-lg">
            Reliable installation, maintenance and repair services for homes,
            businesses and commercial properties across the Island.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" showArrow variant="onDark">
              Request a Quote
            </Button>
            <Button href="/services" size="lg" variant="ghost" className="border-brand-dark-grey text-brand-white hover:bg-brand-white hover:text-brand-black">
              Explore Our Services
            </Button>
          </div>
          <a
            href={business.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-white transition-colors hover:text-brand-light-grey"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
