import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionCta, ReviewsSection } from "@/components/blocks";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing in Wiggins, CO: Residential & Commercial",
  description:
    "Residential and commercial roof replacements, repairs and free inspections from MZ5 Roofing & Exteriors, a locally owned roofer in Wiggins, Colorado.",
  alternates: { canonical: "/roofing" },
  openGraph: { url: "/roofing" },
};

const blocks = [
  {
    title: "Residential roofing",
    body: "Repairs and full replacements for homes, including asphalt shingle roofs. We look at the whole roof, explain what we find, and give you options you can actually compare.",
    photo: photos.roofing,
  },
  {
    title: "Commercial roofing",
    body: "Roofing for commercial properties from the same locally owned team. Call us to talk through your building and what it needs.",
    photo: photos.commercial,
  },
];

export default function RoofingPage() {
  return (
    <>
      <PageHero eyebrow="Roofing" title="Roof repair and replacement in Wiggins, CO">
        <p>
          Residential and commercial roofing from a locally owned, family-operated team. Licensed and insured, with free inspections.
        </p>
      </PageHero>

      {blocks.map((b, i) => (
        <Section key={b.title} tone={i % 2 ? "paper" : "white"}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <Eyebrow>{i === 0 ? "Homes" : "Business"}</Eyebrow>
              <H2>{b.title}</H2>
              <p className="mt-5 max-w-xl text-xl">{b.body}</p>
            </div>
            <PhotoSlot photo={b.photo} className="aspect-[4/3]" />
          </div>
        </Section>
      ))}

      <Section tone="navy">
        <Eyebrow dark>Roof replacements</Eyebrow>
        <H2 dark>Replace it only if it needs it.</H2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            ["Free inspection", "We inspect the roof at no charge."],
            ["Straight answer", "You get an honest assessment: repair, replace, or leave it alone."],
            ["Quality install", "If it needs replacing, we do the work with quality workmanship and keep you informed."],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-white/30 pt-4">
              <h3 className="font-display text-2xl font-bold uppercase">{t}</h3>
              <p className="mt-2 text-white/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <ReviewsSection />
      <InspectionCta />
    </>
  );
}
