import Link from "next/link";
import { CallButton, InspectionButton } from "./Buttons";
import { PhotoSlot } from "./PhotoSlot";
import { Eyebrow, H2, Section } from "./Section";
import { projectPhotos, reviews, services, stormSteps, whyMz5, photos } from "@/lib/site";

export function ServicesList() {
  return (
    <Section id="services">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <Eyebrow>What we do</Eyebrow>
          <H2>Roofs first. The rest of the exterior too.</H2>
        </div>
        <ul className="border-t border-navy-900 lg:col-span-8">
          {services.map((s, i) => (
            <li key={s.title} className="border-b border-line">
              <Link href={s.href} className="group grid gap-1 py-6 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-6">
                <span className="font-display text-xl font-bold text-red">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-3xl font-bold uppercase text-navy-900 group-hover:text-red">
                    {s.title}
                  </span>
                  <span className="mt-1 block max-w-xl text-gray-600">{s.body}</span>
                </span>
                <span aria-hidden="true" className="hidden font-display text-2xl text-navy-900 md:block">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function StormSection({ showPhoto = true }: { showPhoto?: boolean }) {
  return (
    <Section id="storm" tone="navy">
      <div className={`grid gap-10 ${showPhoto ? "lg:grid-cols-2" : ""}`}>
        <div>
          <Eyebrow dark>Storm damage</Eyebrow>
          <H2 dark>
            Hail doesn&rsquo;t wait.
            <br />
            Neither should your roof.
          </H2>
          <p className="mt-6 max-w-xl text-xl text-white/80">
            Hail and wind damage isn&rsquo;t always visible from the ground, and waiting can turn a fixable roof into a leaking one. We&rsquo;ll inspect it for free and tell you what we see.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InspectionButton label="Book a Storm Inspection" />
            <CallButton />
          </div>
        </div>
        {showPhoto && <PhotoSlot photo={photos.storm} className="min-h-72 lg:min-h-full" />}
      </div>
      <ol className="mt-14 grid border-t border-white/25 md:grid-cols-4">
        {stormSteps.map((s) => (
          <li key={s.n} className="border-b border-white/25 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
            <span className="font-display text-5xl font-extrabold text-[#ff6b7f]">{s.n}</span>
            <h3 className="mt-2 font-display text-2xl font-bold uppercase">{s.title}</h3>
            <p className="mt-2 text-white/75">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl text-sm text-white/65">
        MZ5 is a roofing contractor, not a public adjuster. We can help you understand the process, but coverage and claim decisions are made by your insurance company.
      </p>
    </Section>
  );
}

export function WhyMz5() {
  return (
    <Section tone="paper">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Why MZ5</Eyebrow>
          <H2>A local roofer you can actually call.</H2>
          <PhotoSlot photo={photos.crew} className="mt-8 aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
          {whyMz5.map((w) => (
            <div key={w.title} className="border-t-2 border-navy-900 pt-4">
              <dt className="font-display text-2xl font-bold uppercase text-navy-900">{w.title}</dt>
              <dd className="mt-1 text-gray-600">{w.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

const aspects = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]"];

export function ProjectsGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
      {projectPhotos.slice(0, count).map((p, i) => (
        <PhotoSlot
          key={p.id}
          photo={p}
          className={`${aspects[i]} break-inside-avoid`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ))}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Eyebrow>Projects</Eyebrow>
          <H2>See the work.</H2>
        </div>
        <Link href="/projects" className="font-display text-xl font-bold uppercase tracking-wider text-navy-900 underline decoration-red decoration-4 underline-offset-4">
          All projects
        </Link>
      </div>
      <ProjectsGrid />
    </Section>
  );
}

export function ReviewsSection() {
  const [featured, ...rest] = reviews;
  return (
    <Section id="reviews" tone="paper">
      <Eyebrow>Customer reviews</Eyebrow>
      <H2>What our customers say.</H2>
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <figure className="border-l-4 border-red pl-6 lg:col-span-7">
          <blockquote className="font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 font-display text-lg font-bold uppercase tracking-wider text-gray-600">
            {featured.name}
          </figcaption>
        </figure>
        <div className="space-y-8 lg:col-span-5">
          {rest.map((r) => (
            <figure key={r.name} className="border-t border-navy-900 pt-5">
              <blockquote className="text-lg">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 font-display text-base font-bold uppercase tracking-wider text-gray-600">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function InspectionCta({ heading = "Get your roof looked at. It's free." }: { heading?: string }) {
  return (
    <Section tone="white" className="border-t border-line">
      <div className="grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <H2>{heading}</H2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600">
            Tell us about your property and we&rsquo;ll set up a free inspection. You get an honest assessment either way.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-4">
          <InspectionButton />
          <CallButton tone="light" />
        </div>
      </div>
    </Section>
  );
}
