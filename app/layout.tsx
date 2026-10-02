import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { business, fullAddress, maintenanceMode, siteUrl } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Electrical, Air Conditioning & Refrigeration`,
    template: `%s | ${business.name}`,
  },
  description:
    "Professional electrical, air conditioning and refrigeration services for domestic and commercial customers across the Isle of Man. Based in Castletown.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: business.name,
  email: business.email,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: business.address.town,
    addressCountry: business.address.country,
  },
  areaServed: business.serviceArea,
  description: fullAddress,
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Services" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Conditioning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigeration" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-off-white text-brand-black">
        <Script
          id="ares-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-brand-black focus:px-4 focus:py-2 focus:text-brand-white"
        >
          Skip to content
        </a>
        {!maintenanceMode && <Header />}
        <main id="main-content" className="flex-1">
          {children}
        </main>
        {!maintenanceMode && <Footer />}
      </body>
    </html>
  );
}
