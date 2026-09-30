import Link from "next/link";
import { business } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy-900 bg-white md:hidden">
      <a
        href={business.phoneHref}
        className="flex min-h-14 items-center justify-center font-display text-lg font-bold uppercase tracking-wider text-navy-900"
      >
        Call Now
      </a>
      <Link
        href="/contact#inspection"
        className="flex min-h-14 items-center justify-center bg-red font-display text-lg font-bold uppercase tracking-wider text-white"
      >
        Free Inspection
      </Link>
    </div>
  );
}
