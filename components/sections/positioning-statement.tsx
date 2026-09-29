import Image from "next/image";
import { Eyebrow } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";

export function PositioningStatement() {
  return (
    <section className="bg-brand-off-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-brand-light-grey">
          <Image
            src="/our-approach.jpg"
            alt="The Ares team carrying out electrical, air conditioning and refrigeration work on a commercial fit-out"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover grayscale"
          />
        </div>
        <div>
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.75rem,1.4rem+1.6vw,2.75rem)] font-semibold leading-tight tracking-tight text-balance text-brand-black">
            Electrical and climate-control work, carried out with precision.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-dark-grey sm:text-lg">
            From installations and alterations to servicing, repairs and
            ongoing maintenance, Ares supports projects of varying sizes
            across residential and commercial environments — working to a
            consistent standard whatever the scale of the requirement.
          </p>
        </div>
      </Container>
    </section>
  );
}
