import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section tone="dark">
      <div className="flex flex-col items-center text-center">
        <Eyebrow tone="light">Client Feedback</Eyebrow>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="flex flex-col border-t border-brand-dark-grey pt-8"
          >
            <Quote className="h-7 w-7 text-brand-mid-grey" aria-hidden="true" />
            <blockquote className="mt-6 flex-1">
              <p className="text-base leading-relaxed text-brand-light-grey">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="mt-6 flex flex-col gap-1">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-brand-white">
                {testimonial.author}
              </span>
              <span className="text-sm text-brand-mid-grey">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
