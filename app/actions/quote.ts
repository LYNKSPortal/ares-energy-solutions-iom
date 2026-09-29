"use server";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

const REQUIRED_FIELDS = ["name", "email", "customerType", "service", "message"] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData
): Promise<QuoteFormState> {
  // Honeypot spam-prevention field. Bots tend to fill every input; real
  // users never see or complete this field because it is visually hidden.
  if (formData.get("company_website")) {
    return { status: "success" };
  }

  const fieldErrors: Partial<Record<string, string>> = {};

  for (const field of REQUIRED_FIELDS) {
    const value = formData.get(field);
    if (!value || String(value).trim().length === 0) {
      fieldErrors[field] = "This field is required.";
    }
  }

  const email = String(formData.get("email") ?? "");
  if (email && !isValidEmail(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (!formData.get("consent")) {
    fieldErrors.consent = "Please confirm you are happy for Ares to contact you.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const enquiry = {
    name: formData.get("name"),
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    customerType: formData.get("customerType"),
    service: formData.get("service"),
    location: formData.get("location"),
    message: formData.get("message"),
    preferredContact: formData.get("preferredContact"),
  };

  try {
    // NOTE: No email/CRM provider is currently connected. To deliver
    // enquiries, integrate a transactional email provider here (for
    // example Resend: https://resend.com) using an API key stored in
    // an environment variable such as RESEND_API_KEY. Example:
    //
    // await resend.emails.send({
    //   from: "enquiries@aresenergysolution.im",
    //   to: business.email,
    //   subject: `New enquiry from ${enquiry.name}`,
    //   text: JSON.stringify(enquiry, null, 2),
    // });
    //
    // For now, log the enquiry so it is visible during development.
    console.log("New quote enquiry received:", enquiry);

    return {
      status: "success",
      message: "Thanks for getting in touch. Your enquiry has been received.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong while sending your enquiry. Please call or email us directly.",
    };
  }
}
