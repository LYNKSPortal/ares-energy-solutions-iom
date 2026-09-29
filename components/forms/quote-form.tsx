"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitQuoteRequest, type QuoteFormState } from "@/app/actions/quote";
import { cn } from "@/lib/utils";

const initialState: QuoteFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-md border border-brand-light-grey bg-brand-white px-4 py-3 text-sm text-brand-black placeholder:text-brand-mid-grey transition-colors focus:border-brand-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-black/20";

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-brand-black">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-brand-mid-grey">(optional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteForm() {
  const [state, formAction, isPending] = useActionState(submitQuoteRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success" && formRef.current) {
      formRef.current.reset();
    }
  }, [state.status]);

  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-brand-light-grey bg-brand-white p-8"
      >
        <CheckCircle2 className="h-8 w-8 text-brand-black" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-brand-black">
          Thanks for getting in touch.
        </h3>
        <p className="text-sm leading-relaxed text-brand-dark-grey">
          Your enquiry has been received. We will be in touch using your
          preferred contact method as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* Honeypot field for spam prevention — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company Website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </Field>
        <Field label="Company name" htmlFor="companyName" optional>
          <input id="companyName" name="companyName" type="text" autoComplete="organization" className={inputClasses} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </Field>
        <Field label="Phone" htmlFor="phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Customer type" htmlFor="customerType" error={errors.customerType}>
          <select id="customerType" name="customerType" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select an option
            </option>
            <option value="Domestic">Domestic</option>
            <option value="Commercial">Commercial</option>
          </select>
        </Field>
        <Field label="Service required" htmlFor="service" error={errors.service}>
          <select id="service" name="service" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select an option
            </option>
            <option value="Electrical">Electrical</option>
            <option value="Air Conditioning">Air Conditioning</option>
            <option value="Refrigeration">Refrigeration</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="Other">Other</option>
          </select>
        </Field>
      </div>

      <Field label="Project location" htmlFor="location" optional>
        <input id="location" name="location" type="text" placeholder="e.g. Castletown, Isle of Man" className={inputClasses} />
      </Field>

      <Field label="Message / project details" htmlFor="message" error={errors.message}>
        <textarea id="message" name="message" required rows={5} className={cn(inputClasses, "resize-y")} />
      </Field>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium text-brand-black">
          Preferred contact method
        </legend>
        <div className="flex flex-wrap gap-6">
          {["Phone", "Email"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-brand-dark-grey">
              <input
                type="radio"
                name="preferredContact"
                value={option}
                defaultChecked={option === "Email"}
                className="h-4 w-4 border-brand-light-grey text-brand-black focus-visible:ring-2 focus-visible:ring-brand-black/20"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="flex items-start gap-3 text-sm text-brand-dark-grey">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-4 w-4 shrink-0 border-brand-light-grey text-brand-black focus-visible:ring-2 focus-visible:ring-brand-black/20"
          />
          <span>
            I am happy for Ares Energy Solution Limited to contact me about
            this enquiry, in line with the{" "}
            <a href="/privacy" className="font-medium text-brand-black underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent ? (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-brand-black px-7 py-3.5 text-base font-semibold text-brand-white transition-colors hover:bg-brand-dark-grey disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {isPending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
