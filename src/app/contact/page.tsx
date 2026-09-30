import type { Metadata } from "next";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionForm } from "@/components/InspectionForm";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Roof Inspection & Contact | Wiggins, CO",
  description:
    "Request a free roof inspection from MZ5 Roofing & Exteriors in Wiggins, Colorado, or call 970-587-3006.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-20 lg:px-8">
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
            Request a free inspection.
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-white/80">
            Fill this out and we&rsquo;ll get back to you, or skip the form and call{" "}
            <a href={business.phoneHref} className="font-bold underline">{business.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div id="inspection" className="lg:col-span-7">
            <InspectionForm />
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>Find us</Eyebrow>
            <H2>MZ5 Roofing &amp; Exteriors</H2>
            <address className="mt-5 space-y-2 text-lg not-italic">
              <p>{business.street}<br />{business.city}, {business.region} {business.postalCode}</p>
              <p><a href={business.phoneHref} className="font-bold underline">{business.phoneDisplay}</a></p>
              <p><a href={`mailto:${business.email}`} className="underline">{business.email}</a></p>
              <p>
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Instagram {business.instagramHandle}
                </a>
              </p>
            </address>
            <PhotoSlot photo={photos.crew} className="mt-8 aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
      </Section>
    </>
  );
}
