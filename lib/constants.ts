import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Snowflake,
  Thermometer,
  Building2,
  Home,
  Wrench,
} from "lucide-react";

export const business = {
  name: "Ares Energy Solution Limited",
  shortName: "Ares Energy Solution",
  tagline: "Electrical • Air Conditioning • Refrigeration",
  phone: "07624 438424",
  phoneHref: "tel:+447624438424",
  whatsappHref: "https://wa.me/447624438424",
  email: "ares.solutions@outlook.com",
  emailHref: "mailto:ares.solutions@outlook.com",
  address: {
    line1: "18 Station Court",
    line2: "The Meadows",
    town: "Castletown",
    country: "Isle of Man",
  },
  serviceArea: "Isle of Man",
} as const;

export const fullAddress = `${business.address.line1}, ${business.address.line2}, ${business.address.town}, ${business.address.country}`;

// When true, `proxy.ts` routes every visitor to the live site to the
// maintenance page (see app/maintenance/page.tsx) regardless of which URL
// they requested. Flip back to false (and push) to bring the site back.
export const maintenanceMode = false;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Electrical",
        href: "/services/electrical",
        description: "Installations, maintenance and repairs",
      },
      {
        label: "Air Conditioning",
        href: "/services/air-conditioning",
        description: "Installation, servicing and repair",
      },
      {
        label: "Refrigeration",
        href: "/services/refrigeration",
        description: "Domestic and commercial refrigeration",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSummary = {
  slug: "electrical" | "air-conditioning" | "refrigeration";
  number: string;
  name: string;
  href: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  capabilities: string[];
  domestic: string[];
  commercial: string[];
  image: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "electrical",
    number: "01",
    name: "Electrical",
    href: "/services/electrical",
    icon: Zap,
    shortDescription:
      "Professional electrical installation, alterations, upgrades, maintenance and repair services.",
    description:
      "Ares provides electrical installation, maintenance, repairs, alterations and upgrades for domestic and commercial customers across the Isle of Man, including work related to renovations, refurbishments and commercial fit-outs.",
    capabilities: [
      "Electrical installations",
      "General electrical work",
      "Electrical maintenance and repairs",
      "Electrical alterations and upgrades",
      "Electrical work for renovations and refurbishments",
      "Commercial electrical installations and fit-outs",
      "Ongoing electrical maintenance",
    ],
    domestic: [
      "Installations",
      "General electrical work",
      "Maintenance",
      "Repairs",
      "Alterations",
      "Upgrades",
      "Renovations",
      "Refurbishments",
    ],
    commercial: [
      "Installations",
      "Maintenance",
      "Repairs",
      "Alterations",
      "Upgrades",
      "Refurbishments",
      "Fit-outs",
    ],
    image: "/projects/electrical-ares-branding.jpg",
  },
  {
    slug: "air-conditioning",
    number: "02",
    name: "Air Conditioning",
    href: "/services/air-conditioning",
    icon: Snowflake,
    shortDescription:
      "Air conditioning installation, servicing, maintenance and repair for domestic and commercial properties.",
    description:
      "Ares installs, services and maintains air conditioning systems for homes and businesses across the Isle of Man, supporting new installations, planned maintenance and repairs.",
    capabilities: [
      "New air conditioning installations",
      "Air conditioning servicing",
      "Planned maintenance",
      "Air conditioning repairs",
      "Domestic systems",
      "Commercial systems",
      "Systems for refurbished spaces and fit-outs",
    ],
    domestic: ["Installation", "Servicing", "Maintenance", "Repairs"],
    commercial: ["Installation", "Servicing", "Maintenance", "Repairs"],
    image: "/projects/ac-cassette-clean.jpg",
  },
  {
    slug: "refrigeration",
    number: "03",
    name: "Refrigeration",
    href: "/services/refrigeration",
    icon: Thermometer,
    shortDescription:
      "Professional refrigeration services for domestic and commercial requirements.",
    description:
      "Ares provides refrigeration services, maintenance and repairs for domestic and commercial customers, including ongoing maintenance requirements.",
    capabilities: [
      "Refrigeration services",
      "Maintenance",
      "Repairs",
      "Commercial refrigeration",
      "Ongoing maintenance requirements",
    ],
    domestic: ["Refrigeration services"],
    commercial: ["Refrigeration services", "Ongoing maintenance"],
    image: "/projects/refrigeration-cold-room.jpg",
  },
];

export const accreditation = {
  title: "Construction Isle of Man Accredited Professional",
  categories: ["Electrical Installation", "Air Conditioning"],
};

export type Certification = {
  name: string;
  detail?: string;
};

export type CertificationGroup = {
  title: string;
  items: Certification[];
};

export const certificationGroups: CertificationGroup[] = [
  {
    title: "Certifications & Compliance",
    items: [
      { name: "ITSSAR", detail: "Lift and plant operator training" },
      { name: "UKATA", detail: "Asbestos awareness" },
      { name: "NAPIT", detail: "Electrical installation, testing and inspection" },
      { name: "REFCOM", detail: "Refrigeration and air conditioning" },
      { name: "Hydrocarbon Refrigerant Qualified", detail: "Flammable refrigerants" },
      { name: "CO2 Refrigerant Certified" },
      { name: "Health & Safety Level 2" },
    ],
  },
  {
    title: "Approved Dealer Status",
    items: [
      { name: "Mitsubishi Heavy Industries", detail: "Approved Diamond Dealer" },
      { name: "Daikin", detail: "Approved Dealer" },
      { name: "Aspen Pumps", detail: "Approved" },
    ],
  },
];

export const audiences = [
  {
    key: "domestic" as const,
    icon: Home,
    title: "Domestic Customers",
    description:
      "Homes, renovations, refurbishments, upgrades, maintenance and climate-control requirements.",
    cta: "Explore Our Services",
    href: "/services",
  },
  {
    key: "commercial" as const,
    icon: Building2,
    title: "Commercial Customers",
    description:
      "Commercial properties, installations, fit-outs, refurbishments and ongoing maintenance.",
    cta: "Explore Our Services",
    href: "/services",
  },
];

export const whyAres = [
  {
    icon: Wrench,
    title: "Professional workmanship",
    description:
      "Electrical and climate-control work carried out with attention to quality and detail.",
  },
  {
    icon: Building2,
    title: "Domestic & commercial capability",
    description:
      "Experience working across homes, refurbishments, commercial fit-outs and ongoing maintenance.",
  },
  {
    icon: Zap,
    title: "Electrical & climate-control expertise",
    description:
      "One contractor covering electrical, air conditioning and refrigeration requirements.",
  },
  {
    icon: Home,
    title: "Isle of Man coverage",
    description:
      "Serving domestic and commercial customers across the Island, based in Castletown.",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ares Solutions was a pleasant experience from start to finish. Leon and Daniel were the easiest team to work with — professional, reliable, and a genuine pleasure to have on site. Their communication was clear and consistent throughout, which made coordinating the work straightforward and stress-free. Whenever challenges arose, they adapted and overcame them without any fuss, keeping everything on track. The quality of their electrical and refrigeration work was consistently of a very high standard, with excellent attention to detail and a clear focus on getting the job done right first time. Their proactive, solution-focused attitude helped the entire project run smoothly and gave us complete confidence in the finished result. We were thoroughly impressed with both their workmanship and their approach, and we look forward to working with Ares Solutions again on future projects.",
    author: "Simon O'Donoghue",
    role: "Owner, United Interior Fit Out Ltd",
  },
  {
    quote:
      "Working with Ares Solutions Limited was a highly professional experience from beginning to end. Their employees consistently worked to full site Health and Safety rules, demonstrating a clear and responsible approach at all times. They were courteous throughout and arrived with clear plans to utilise the designated area that had been prepared in advance. This careful planning helped assist the site operationally and enabled our own staff to continue working with minimal disruption, thanks to their full and efficient working schedule. Ares Solutions fully conformed with all ITSSAR regulations and showed they are thoroughly competent when working on a live site. They signed all required passes and left the work area very clean after every shift. We were impressed by their standards and professionalism, and we look forward to working alongside them again on future projects.",
    author: "Pete Lennon",
    role: "Site Manager, Lennon Building Solutions",
  },
  {
    quote:
      "We've worked with the team on the M&S Isle of Man Food Hall and Clothing & Home refurbishment project and found them to be a great company to work with. They provided reliable labour resources throughout and were always proactive in helping overcome challenges on site. The quality of their electrical, plumbing and AC installations was excellent, and their electrical testing, inspection and reporting was carried out professionally and to a high standard. Communication was good throughout, and they always approached the project with a positive, can-do attitude. Reliable, knowledgeable and easy to work with — I'd be happy to recommend them for future commercial refurbishment and fit-out projects.",
    author: "John Thacker",
    role: "MEP Project Manager",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Tell us what you need and provide any relevant project details.",
  },
  {
    number: "02",
    title: "Discuss the Work",
    description:
      "We assess the requirements and determine the appropriate solution.",
  },
  {
    number: "03",
    title: "Installation or Repair",
    description:
      "Work is carried out professionally with attention to quality and detail.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Servicing and maintenance can help keep electrical and climate-control systems performing as intended.",
  },
];

export const siteUrl = "https://www.aresenergysolution.im";
