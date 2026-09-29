import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { business } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Ares Energy Solution Limited handles information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="How we handle information submitted through this website."
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <Section tone="white">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <p className="rounded-md border border-brand-light-grey bg-brand-off-white p-5 text-sm leading-relaxed text-brand-dark-grey">
            This page provides a general starting point for how{" "}
            {business.name} handles information submitted through this
            website. It does not constitute legal advice and should be
            reviewed by a qualified professional before being relied upon as
            a complete or compliant privacy policy.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              Information submitted through the contact form
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              When you submit an enquiry through our contact form, we collect
              the information you provide, which may include your name,
              company name, email address, telephone number, customer type,
              service required, project location and any details you choose
              to share about your enquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              How we use this information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              Information submitted through the contact form is used solely
              to respond to your enquiry and to discuss the electrical, air
              conditioning or refrigeration work you have requested. We do
              not sell or share your information with third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              Data retention
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              We retain enquiry information for as long as reasonably
              necessary to respond to your enquiry and, where applicable, to
              carry out and administer any resulting work. Retention periods
              should be confirmed and formalised as part of a full data
              protection review.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              Third-party service providers
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              Should a third-party email or customer relationship management
              provider be used to process enquiries in future, this section
              will be updated to name that provider and explain how
              information is handled by them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              Cookies and analytics
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              This website does not currently use analytics or non-essential
              cookies. Should this change in future, this policy will be
              updated accordingly and, where required, appropriate consent
              mechanisms will be introduced.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-brand-black">
              Contact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-dark-grey">
              If you have questions about how your information is handled,
              please contact us at{" "}
              <a href={business.emailHref} className="font-medium text-brand-black underline underline-offset-2">
                {business.email}
              </a>{" "}
              or {business.phone}.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
