import type { CSSProperties } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/constants";

// Brand marks streaking across the hero like meteors — travelling from the
// top-right down to the bottom-left, fading in and out along the way. Each
// entry has its own start position, size, speed and peak brightness so the
// shower feels organic rather than mechanically synced. Purely decorative —
// CSS animation only, no client JS — and muted by the overlay so it never
// competes with the text. Respects prefers-reduced-motion globally.
const floatingIcons: { top: string; left: string; size: number; duration: number; delay: number; opacity: number }[] = [
  { top: "-4%", left: "58%", size: 34, duration: 4.5, delay: -0.5, opacity: 0.28 },
  { top: "2%", left: "78%", size: 64, duration: 6, delay: -3, opacity: 0.2 },
  { top: "-6%", left: "92%", size: 22, duration: 3.5, delay: -6, opacity: 0.32 },
  { top: "10%", left: "68%", size: 46, duration: 5, delay: -1.5, opacity: 0.24 },
  { top: "-8%", left: "104%", size: 80, duration: 6.5, delay: -8, opacity: 0.16 },
  { top: "18%", left: "88%", size: 28, duration: 4, delay: -4.5, opacity: 0.3 },
  { top: "4%", left: "48%", size: 20, duration: 3.8, delay: -10, opacity: 0.26 },
  { top: "-2%", left: "112%", size: 54, duration: 5.5, delay: -12, opacity: 0.19 },
  { top: "24%", left: "76%", size: 90, duration: 7, delay: -2, opacity: 0.14 },
  { top: "12%", left: "100%", size: 30, duration: 4.2, delay: -14, opacity: 0.29 },
  { top: "-10%", left: "70%", size: 40, duration: 4.8, delay: -7, opacity: 0.22 },
  { top: "30%", left: "94%", size: 24, duration: 3.6, delay: -9.5, opacity: 0.31 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-brand-black text-brand-off-white sm:min-h-[620px]">
      <div className="absolute inset-0" aria-hidden="true">
        {floatingIcons.map((icon, index) => (
          <Image
            key={index}
            src="/logo/ares-mark-white.png"
            alt=""
            width={icon.size}
            height={icon.size}
            className="floating-icon absolute"
            style={
              {
                top: icon.top,
                left: icon.left,
                width: icon.size,
                height: icon.size,
                animationDuration: `${icon.duration}s`,
                animationDelay: `${icon.delay}s`,
                "--meteor-opacity": icon.opacity,
              } as CSSProperties
            }
          />
        ))}
        <div className="absolute inset-0 bg-brand-black/75" />
      </div>

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
