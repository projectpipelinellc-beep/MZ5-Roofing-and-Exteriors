import Link from "next/link";

/* Placeholder wordmark. Replace with the official MZ5 logo file when supplied. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "light" ? "text-navy-900" : "text-white";
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MZ5 Roofing & Exteriors, home">
      <svg width="40" height="34" viewBox="0 0 40 34" aria-hidden="true">
        <path d="M2 17 20 3l18 14" fill="none" stroke="#c8102e" strokeWidth="4" strokeLinejoin="miter" />
        <path d="M8 16v16h24V16" fill="none" stroke={tone === "light" ? "#0b1f3a" : "#fff"} strokeWidth="4" />
      </svg>
      <span className={`font-display leading-none ${text}`}>
        <span className="block text-3xl font-extrabold tracking-wide">MZ5</span>
        <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.2em]">
          Roofing &amp; Exteriors
        </span>
      </span>
    </Link>
  );
}
