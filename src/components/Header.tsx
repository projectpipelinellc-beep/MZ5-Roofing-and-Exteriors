import Link from "next/link";
import { Logo } from "./Logo";
import { InspectionButton } from "./Buttons";
import { business, nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 font-display text-lg font-semibold uppercase tracking-wider">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-900 hover:text-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={business.phoneHref} className="font-display text-xl font-bold tracking-wide text-navy-900">
            {business.phoneDisplay}
          </a>
          <InspectionButton label="Free Inspection" className="min-h-11 py-2" />
        </div>
        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center px-1 font-display text-lg font-bold uppercase tracking-wider text-navy-900 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-full mt-3 w-64 border border-line bg-white shadow-lg"
          >
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    className="block px-5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-navy-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
