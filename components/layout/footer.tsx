import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { business, fullAddress, primaryNav, services, accreditation } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-light-grey">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo tone="light" />
            <p className="text-sm leading-relaxed text-brand-mid-grey">
              Electrical • Air Conditioning • Refrigeration
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-white">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-light-grey transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-sm text-brand-light-grey transition-colors hover:text-brand-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-white">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-brand-light-grey">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-mid-grey" aria-hidden="true" />
                <span>{fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-mid-grey" aria-hidden="true" />
                <a href={business.phoneHref} className="transition-colors hover:text-brand-white">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-mid-grey" aria-hidden="true" />
                <a href={business.emailHref} className="transition-colors hover:text-brand-white">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-brand-dark-grey pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white">
              {accreditation.title}
            </p>
            <p className="mt-1 text-xs text-brand-mid-grey">
              {accreditation.categories.join(" • ")}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-brand-mid-grey sm:flex-row sm:items-center sm:gap-6">
            <Link href="/privacy" className="transition-colors hover:text-brand-white">
              Privacy Policy
            </Link>
            <span>
              © {year} {business.name}. All rights reserved.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
