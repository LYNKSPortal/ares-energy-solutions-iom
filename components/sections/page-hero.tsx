import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-black text-brand-off-white">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black/40" />
        </div>
      ) : null}
      <Container className="relative py-20 sm:py-24 lg:py-28">
        {crumbs ? <Breadcrumbs items={crumbs} className="mb-8" /> : null}
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,1.7rem+2.4vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-balance text-brand-white">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-light-grey sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
