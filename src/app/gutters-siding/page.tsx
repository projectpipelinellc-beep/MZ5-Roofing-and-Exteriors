import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionCta } from "@/components/blocks";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutters, Siding & Exterior Repairs | Wiggins, CO",
  description:
    "Gutters, siding and exterior repairs from MZ5 Roofing & Exteriors, a locally owned, licensed and insured contractor in Wiggins, Colorado.",
  alternates: { canonical: "/gutters-siding" },
  openGraph: { url: "/gutters-siding" },
};

const items = [
  ["Gutters", "Gutters carry water off the roof and away from your walls and foundation. We install and repair them."],
  ["Siding", "Siding is the first layer between your house and the weather. We handle siding work and repairs."],
  ["Exterior repairs", "Damage that isn't the roof still needs fixing. Tell us what you're seeing and we'll take a look."],
];

export default function GuttersSidingPage() {
  return (
    <>
      <PageHero eyebrow="Gutters & siding" title="The rest of your exterior, handled">
        <p>Gutters, siding and exterior repairs from the same roofing team, licensed and insured.</p>
      </PageHero>
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <ul className="border-t border-navy-900">
            {items.map(([t, d]) => (
              <li key={t} className="border-b border-line py-6">
                <h2 className="font-display text-3xl font-bold uppercase text-navy-900">{t}</h2>
                <p className="mt-1 text-gray-600">{d}</p>
              </li>
            ))}
          </ul>
          <div>
            <Eyebrow>Why do it with your roofer</Eyebrow>
            <H2>One team. One phone call.</H2>
            <p className="mt-5 text-xl">
              Your roof, gutters and siding work together. Having one crew look at all of it means fewer people to coordinate.
            </p>
            <PhotoSlot photo={photos.guttersSiding} className="mt-8 aspect-[4/3]" />
          </div>
        </div>
      </Section>
      <InspectionCta heading="Get a free look at your exterior." />
    </>
  );
}
