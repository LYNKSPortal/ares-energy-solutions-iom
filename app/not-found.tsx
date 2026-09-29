import { Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-brand-black text-brand-off-white">
      <Container className="py-24 text-center">
        <Compass className="mx-auto h-10 w-10 text-brand-mid-grey" aria-hidden="true" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-mid-grey">
          Page not found
        </p>
        <h1 className="mt-4 text-[clamp(2rem,1.6rem+2vw,3rem)] font-semibold tracking-tight text-brand-white">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-light-grey">
          The page you&apos;re looking for may have moved or is no longer
          available. You can head back home or get in touch with{" "}
          {business.name}.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="onDark" size="lg">
            Back to Home
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            size="lg"
            className="border-brand-dark-grey text-brand-white hover:bg-brand-white hover:text-brand-black"
          >
            Contact Ares
          </Button>
        </div>
      </Container>
    </section>
  );
}
