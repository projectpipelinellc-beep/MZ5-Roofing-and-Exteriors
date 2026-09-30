import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { InspectionCta, ProjectsGrid } from "@/components/blocks";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing Projects",
  description:
    "Recent roofing, siding and exterior projects by MZ5 Roofing & Exteriors, a locally owned roofer in Wiggins, Colorado.",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="See the work.">
        <p>
          Real MZ5 jobs from our crews. More on Instagram:{" "}
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {business.instagramHandle}
          </a>
          .
        </p>
      </PageHero>
      <Section>
        <ProjectsGrid count={9} />
      </Section>
      <InspectionCta />
    </>
  );
}
