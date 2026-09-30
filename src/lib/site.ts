export const business = {
  name: "MZ5 Roofing & Exteriors",
  shortName: "MZ5",
  phoneDisplay: "970-587-3006",
  phoneHref: "tel:+19705873006",
  email: "mz5llc@yahoo.com",
  street: "103 Main St.",
  city: "Wiggins",
  region: "CO",
  postalCode: "80654",
  instagramHandle: "@mz5_roofing_and_exteriors",
  instagramUrl: "https://www.instagram.com/mz5_roofing_and_exteriors/",
} as const;

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const nav = [
  { href: "/roofing", label: "Roofing" },
  { href: "/storm-damage", label: "Storm Damage" },
  { href: "/gutters-siding", label: "Gutters & Siding" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Residential Roofing",
    body: "Repairs and full replacements on the house you live in, including asphalt shingle.",
    href: "/roofing",
  },
  {
    title: "Commercial Roofing",
    body: "Roofing for business properties, handled with the same crew and the same straight answers.",
    href: "/roofing",
  },
  {
    title: "Roof Replacements",
    body: "When a repair won't cut it, we'll tell you. When it will, we'll tell you that too.",
    href: "/roofing",
  },
  {
    title: "Storm & Hail Damage",
    body: "Free hail and wind inspections, and help working through the insurance process.",
    href: "/storm-damage",
  },
  {
    title: "Gutters",
    body: "Gutters that move water away from your roof, walls and foundation.",
    href: "/gutters-siding",
  },
  {
    title: "Siding & Exterior Repairs",
    body: "Siding and the exterior fixes that keep the rest of the house protected.",
    href: "/gutters-siding",
  },
] as const;

export const stormSteps = [
  {
    n: "01",
    title: "Inspection",
    body: "We get on the roof and look at it. The inspection is free.",
  },
  {
    n: "02",
    title: "Assessment",
    body: "You get an honest read on what we found, including when the damage isn't there.",
  },
  {
    n: "03",
    title: "Insurance Process",
    body: "If there's a claim to file, we walk you through it and answer questions as they come up.",
  },
  {
    n: "04",
    title: "Restoration",
    body: "We repair or replace what the storm damaged.",
  },
] as const;

export const whyMz5 = [
  {
    title: "Locally owned",
    body: "Our office is at 103 Main St. in Wiggins. You are not calling a national call center.",
  },
  {
    title: "Family operated",
    body: "It's a family business, and the name on the truck is the name on the work.",
  },
  {
    title: "Licensed & insured",
    body: "Ask us for proof before you sign anything. You should.",
  },
  {
    title: "Honest assessments",
    body: "If your roof doesn't need replacing, we'll say so.",
  },
  {
    title: "Quality workmanship",
    body: "The roof is the part of the house you never want to think about again.",
  },
  {
    title: "Clear communication",
    body: "You'll know what's happening and what's next without chasing us for it.",
  },
  {
    title: "Reliable service",
    body: "When you call, someone from the team answers and follows through.",
  },
  {
    title: "Free inspections",
    body: "No charge to have us look at your roof and give you the facts.",
  },
] as const;

export const reviews = [
  {
    name: "Kenny Gildow",
    quote:
      "Most amazing place to work made all the insurance drama seem so easy, 10 out of 10 recommend, really took care of us and walked us through the whole process.",
    featured: true,
  },
  {
    name: "Jasmin Marie Gildow",
    quote:
      "Highly recommend this roofing company! They did an amazing job on our roof and were very professional, friendly, and accommodating. Great communication, quality work, and such nice people to work with. We're very happy with the results!",
    featured: false,
  },
  {
    name: "Maria Tait",
    quote: "Very good to work with.",
    featured: false,
  },
] as const;

export const serviceOptions = [
  "Roof Inspection",
  "Storm / Hail Damage",
  "Roof Replacement",
  "Commercial Roofing",
  "Gutters",
  "Siding",
  "Exterior Repair",
  "Other",
] as const;

/*
  PHOTO MANIFEST
  Drop real MZ5 photos into /public/images and set `src` (e.g. "/images/crew-01.jpg").
  Slots without a `src` render a labeled placeholder. Write specific alt text when
  you add the file; describe what is actually in the photo.
*/
export type Photo = {
  id: string;
  src?: string;
  width?: number;
  height?: number;
  alt: string;
  slot: string;
};

export const photos: Record<string, Photo> = {
  hero: {
    id: "hero",
    alt: "MZ5 crew installing asphalt shingles on a residential roof in Colorado",
    slot: "Hero: crew on a roof or a finished shingle roof, landscape or tall crop",
  },
  storm: {
    id: "storm",
    alt: "Hail-damaged asphalt shingles on a Colorado roof",
    slot: "Storm: close-up of hail or wind damage on shingles",
  },
  crew: {
    id: "crew",
    alt: "The MZ5 Roofing & Exteriors crew on a job site",
    slot: "Crew: MZ5 team photo or branded truck",
  },
  roofing: {
    id: "roofing",
    alt: "Completed asphalt shingle roof on a Colorado home",
    slot: "Roofing: completed residential roof",
  },
  commercial: {
    id: "commercial",
    alt: "Commercial roofing project by MZ5 Roofing & Exteriors",
    slot: "Commercial: commercial roof project",
  },
  guttersSiding: {
    id: "guttersSiding",
    alt: "Exterior siding and gutter work by MZ5 Roofing & Exteriors",
    slot: "Exterior: gutters or siding project",
  },
  about: {
    id: "about",
    alt: "The family behind MZ5 Roofing & Exteriors in Wiggins, Colorado",
    slot: "About: owners or crew portrait",
  },
};

export const projectPhotos: Photo[] = [
  { id: "p1", alt: "Completed asphalt shingle roof installed by MZ5", slot: "Project 01: completed roof, tall", },
  { id: "p2", alt: "MZ5 crew tearing off old shingles", slot: "Project 02: crew at work, landscape" },
  { id: "p3", alt: "Residential roof replacement finished by MZ5", slot: "Project 03: residential roof, square" },
  { id: "p4", alt: "New shingles going down on a Colorado home", slot: "Project 04: installation detail, tall" },
  { id: "p5", alt: "Exterior repair completed by MZ5 Roofing & Exteriors", slot: "Project 05: exterior repair, landscape" },
  { id: "p6", alt: "Branded MZ5 truck and crew at a job site", slot: "Project 06: branded MZ5 content, square" },
  { id: "p7", alt: "Finished roof line on a residential property", slot: "Project 07: finished roof line, landscape" },
  { id: "p8", alt: "Gutter and siding work completed by MZ5", slot: "Project 08: gutters or siding, tall" },
  { id: "p9", alt: "Commercial roofing work by MZ5", slot: "Project 09: commercial roof, landscape" },
];
