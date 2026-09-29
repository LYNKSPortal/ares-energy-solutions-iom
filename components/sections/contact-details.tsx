import { Mail, MapPin, Phone } from "lucide-react";
import { business, fullAddress } from "@/lib/constants";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-semibold text-brand-black">
          {business.name}
        </h2>
        <p className="mt-1 text-sm text-brand-mid-grey">{business.tagline}</p>
      </div>

      <div className="flex flex-col gap-6 border-t border-brand-light-grey pt-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-mid-grey" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-brand-black">Address</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-dark-grey">
              {business.address.line1}
              <br />
              {business.address.line2}
              <br />
              {business.address.town}
              <br />
              {business.address.country}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-mid-grey" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-brand-black">Telephone</p>
            <a
              href={business.phoneHref}
              className="mt-1 block text-sm text-brand-dark-grey transition-colors hover:text-brand-black"
            >
              {business.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-mid-grey" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-brand-black">Email</p>
            <a
              href={business.emailHref}
              className="mt-1 block text-sm text-brand-dark-grey transition-colors hover:text-brand-black"
            >
              {business.email}
            </a>
          </div>
        </div>
      </div>

      <p className="border-t border-brand-light-grey pt-6 text-xs leading-relaxed text-brand-mid-grey">
        {fullAddress}
      </p>
    </div>
  );
}
