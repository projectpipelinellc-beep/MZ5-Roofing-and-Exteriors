import Link from "next/link";
import { business } from "@/lib/site";

const base =
  "inline-flex min-h-12 items-center justify-center px-6 py-3 font-display text-lg font-bold uppercase tracking-wider transition-colors";

export function InspectionButton({
  className = "",
  label = "Get a Free Inspection",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href="/contact#inspection"
      className={`${base} bg-red text-white hover:bg-red-dark ${className}`}
    >
      {label}
    </Link>
  );
}

export function CallButton({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const tones =
    tone === "dark"
      ? "border-2 border-white text-white hover:bg-white hover:text-navy-900"
      : "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white";
  return (
    <a href={business.phoneHref} className={`${base} ${tones} ${className}`}>
      Call {business.phoneDisplay}
    </a>
  );
}
