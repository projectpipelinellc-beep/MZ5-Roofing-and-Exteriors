import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionCta, ReviewsSection, WhyMz5 } from "@/components/blocks";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About MZ5 Roofing & Exteriors | Wiggins, CO",
  description:
    "MZ5 Roofing & Exteriors is a locally owned, family-operated roofing company in Wiggins, Colorado. Honest assessments, quality workmanship and real customer service.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Locally owned. Family operated.">
        <p>A roofing company based on Main Street in Wiggins, Colorado.</p>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Our mission</Eyebrow>
            <H2>Honest assessments. Quality work. Real service.</H2>
            <p className="mt-6 max-w-2xl text-xl">
              Our mission is to give homeowners a roofer they can trust: one who tells them what their roof actually needs, does the work right, and treats them with respect.
            </p>
            <p className="mt-4 max-w-2xl text-gray-600">
              Your roof protects your most valuable investment. We take that seriously, on every home and every commercial property we work on across Colorado. We&rsquo;re licensed and insured.
            </p>
          </div>
          <PhotoSlot photo={photos.about} className="aspect-[4/5] lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
      </Section>
      <WhyMz5 />
      <ReviewsSection />
      <InspectionCta />
    </>
  );
}
