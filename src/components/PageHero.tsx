import type { ReactNode } from "react";
import { CallButton, InspectionButton } from "./Buttons";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="on-dark bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <p className="font-display text-lg font-bold uppercase tracking-[0.2em] text-[#ff6b7f]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-xl text-white/80">{children}</div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <InspectionButton />
          <CallButton />
        </div>
      </div>
    </section>
  );
}
