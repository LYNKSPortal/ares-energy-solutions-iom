import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Logo } from "@/components/layout/logo";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Site Maintenance | Ares Energy Solution Limited",
  description:
    "Ares Energy Solution Limited's website is currently undergoing scheduled maintenance. Please check back shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <section className="flex min-h-screen items-center bg-brand-black text-brand-off-white">
      <Container className="flex flex-col items-center gap-10 py-24 text-center">
        <Logo tone="light" />

        <div className="flex flex-col items-center gap-5">
          <Eyebrow tone="light">Site Maintenance</Eyebrow>
          <h1 className="max-w-xl text-[clamp(1.75rem,1.4rem+1.6vw,2.75rem)] font-semibold leading-tight tracking-tight text-balance text-brand-white">
            We&apos;re currently making some improvements.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-brand-light-grey">
            Our website is temporarily offline while we carry out some
            maintenance. Please check back shortly — in the meantime, you can
            reach us directly.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand-white transition-colors hover:text-brand-light-grey"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phone}
          </a>
          <a
            href={business.emailHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand-white transition-colors hover:text-brand-light-grey"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {business.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
