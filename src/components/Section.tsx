import type { ReactNode } from "react";

export function Section({
  id,
  tone = "white",
  children,
  className = "",
}: {
  id?: string;
  tone?: "white" | "paper" | "navy";
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    white: "bg-white text-ink",
    paper: "bg-paper text-ink",
    navy: "on-dark bg-navy-900 text-white",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">{children}</div>
    </section>
  );
}

export function H2({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2
      className={`font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight md:text-6xl ${
        dark ? "text-white" : "text-navy-900"
      }`}
    >
      {children}
    </h2>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-3 font-display text-base font-bold uppercase tracking-[0.2em] ${
        dark ? "text-[#ff6b7f]" : "text-red"
      }`}
    >
      {children}
    </p>
  );
}
