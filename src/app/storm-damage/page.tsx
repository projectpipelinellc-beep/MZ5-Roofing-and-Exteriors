import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionCta, ReviewsSection, StormSection } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Hail & Storm Damage Roof Inspections | Wiggins, CO",
  description:
    "Free hail and wind damage roof inspections and storm restoration from MZ5 Roofing & Exteriors in Wiggins, Colorado. We help you through the insurance process.",
  alternates: { canonical: "/storm-damage" },
  openGraph: { url: "/storm-damage" },
};

const faqs = [
  ["Is the inspection really free?", "Yes. Free roof inspections are part of how we work."],
  [
    "Do you handle the insurance claim for me?",
    "You file the claim with your insurance company. We can walk you through the process and answer questions along the way. We're roofers, not public adjusters, and we can't promise what your insurer will approve or cover.",
  ],
  [
    "What if you don't find damage?",
    "Then we'll tell you that. An honest assessment goes both ways.",
  ],
  [
    "Do you work on commercial buildings?",
    "Yes. We do residential and commercial roofing.",
  ],
];

export default function StormDamagePage() {
  return (
    <>
      <PageHero eyebrow="Storm damage" title="Hail and wind damage inspections">
        <p>
          Free inspections after a storm, an honest assessment, and help with the insurance process, from a locally owned team in Wiggins, Colorado.
        </p>
      </PageHero>
      <StormSection />
      <Section tone="paper">
        <Eyebrow>Common questions</Eyebrow>
        <H2>Straight answers.</H2>
        <dl className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="border-t-2 border-navy-900 pt-4">
              <dt className="font-display text-2xl font-bold uppercase text-navy-900">{q}</dt>
              <dd className="mt-2 text-gray-600">{a}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <ReviewsSection />
      <InspectionCta heading="Think your roof took a hit? Have us look." />
    </>
  );
}
