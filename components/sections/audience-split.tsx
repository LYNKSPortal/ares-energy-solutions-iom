import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { audiences } from "@/lib/constants";

const audienceImages: Record<(typeof audiences)[number]["key"], string> = {
  domestic: "/projects/domestic-water-heater.jpg",
  commercial: "/projects/commercial-lighting-install.jpg",
};

export function AudienceSplit() {
  return (
    <section className="bg-brand-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {audiences.map((audience) => (
          <Link
            key={audience.key}
            href={audience.href}
            className="group relative flex min-h-[420px] items-end overflow-hidden"
          >
            <Image
              src={audienceImages[audience.key]}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
            <div className="relative w-full px-8 py-12 sm:px-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-light-grey">
                {audience.key === "domestic" ? "For Homes" : "For Businesses"}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-brand-white sm:text-3xl">
                {audience.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-light-grey sm:text-base">
                {audience.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-white">
                {audience.cta}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
