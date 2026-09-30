import type { Metadata } from "next";
import { CallButton, InspectionButton } from "@/components/Buttons";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Eyebrow, H2, Section } from "@/components/Section";
import { InspectionForm } from "@/components/InspectionForm";
import {
  InspectionCta,
  ProjectsSection,
  ReviewsSection,
  ServicesList,
  StormSection,
  WhyMz5,
} from "@/components/blocks";
import { business, photos } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="grid lg:grid-cols-[1fr_42%]">
          <div className="px-5 py-8 md:py-20 lg:py-28 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12">
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-7xl xl:text-8xl">
              Roofing built to protect what matters most.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85 md:mt-6 md:text-xl">
              Residential and commercial roofing, storm restoration, siding and gutters from a locally owned team based in Wiggins, Colorado.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <InspectionButton label="Get a Free Inspection" />
              <CallButton />
            </div>
            <p className="mt-8 font-display text-base font-semibold uppercase tracking-[0.18em] text-white/70">
              Locally owned &bull; Family operated &bull; Licensed &amp; insured
            </p>
          </div>
          <PhotoSlot
            photo={photos.hero}
            priority
            className="order-first h-40 sm:h-56 lg:order-none lg:h-auto lg:min-h-full"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <ServicesList />
      <StormSection />
      <WhyMz5 />
      <ProjectsSection />
      <ReviewsSection />

      <Section id="about" tone="white" className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-12">
          <PhotoSlot photo={photos.about} className="aspect-[4/3] lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" />
          <div className="lg:col-span-7 lg:pl-6">
            <Eyebrow>About</Eyebrow>
            <H2>Family-run, from Wiggins.</H2>
            <p className="mt-6 max-w-2xl text-xl">
              MZ5 Roofing &amp; Exteriors is a locally owned, family-operated roofing company. Our mission is simple: honest assessments, quality workmanship and real customer service, while helping homeowners protect their most valuable investment.
            </p>
            <p className="mt-4 max-w-2xl text-gray-600">
              We work on homes and commercial properties in communities throughout Colorado. Licensed and insured.
            </p>
          </div>
        </div>
      </Section>

      <InspectionCta />

      <Section id="contact" tone="paper">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <H2>Talk to MZ5.</H2>
            <address className="mt-6 space-y-2 text-lg not-italic">
              <p>
                <a href={business.phoneHref} className="font-display text-4xl font-extrabold text-navy-900">
                  {business.phoneDisplay}
                </a>
              </p>
              <p><a href={`mailto:${business.email}`} className="underline">{business.email}</a></p>
              <p>{business.street}<br />{business.city}, {business.region} {business.postalCode}</p>
              <p>
                <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  Instagram {business.instagramHandle}
                </a>
              </p>
            </address>
          </div>
          <div id="inspection" className="lg:col-span-7">
            <InspectionForm />
          </div>
        </div>
      </Section>
    </>
  );
}
