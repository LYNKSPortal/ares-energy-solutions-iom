import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCTA } from "@/components/sections/contact-cta";
import { galleryImages, type GalleryCategory } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Project Gallery",
  description:
    "A gallery of recent electrical, air conditioning and refrigeration installation work carried out by Ares Energy Solution Limited across the Isle of Man.",
  path: "/gallery",
});

const categories: { name: GalleryCategory; description: string }[] = [
  {
    name: "Electrical",
    description:
      "Installations, containment, testing and inspection work across domestic and commercial sites.",
  },
  {
    name: "Air Conditioning",
    description:
      "Cassette units, condensers and rooftop plant installed for homes and businesses.",
  },
  {
    name: "Refrigeration",
    description:
      "Cold rooms, controllers and commercial refrigeration installations.",
  },
  {
    name: "Domestic",
    description: "Installation work carried out in residential properties.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at our recent work."
        description="A selection of electrical, air conditioning and refrigeration projects carried out by Ares Energy Solution Limited for domestic and commercial customers across the Isle of Man."
        image="/gallery/ac-rooftop-wide.jpg"
        crumbs={[{ label: "Gallery" }]}
      />

      {categories.map((category, index) => {
        const images = galleryImages.filter((image) => image.category === category.name);
        if (images.length === 0) return null;

        return (
          <Section key={category.name} tone={index % 2 === 0 ? "white" : "light"}>
            <SectionHeading eyebrow={category.name} title={`${category.name} work`} description={category.description} />
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {images.map((image) => (
                <div
                  key={image.src}
                  className="group relative aspect-square w-full overflow-hidden rounded-md border border-brand-light-grey"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 32vw, 48vw"
                    className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      <ContactCTA
        title="Have a project you would like to discuss?"
        description="Talk to Ares about electrical, air conditioning or refrigeration work for your home or business."
      />
    </>
  );
}
