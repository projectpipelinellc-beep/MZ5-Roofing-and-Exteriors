import Link from "next/link";
import { Logo } from "./Logo";
import { business, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark bg-navy-950 pb-28 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-white/75">
            Locally owned and family operated roofing and exteriors in Wiggins, Colorado. Licensed &amp; insured.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold uppercase tracking-widest text-white/60">Pages</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white/70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <h2 className="font-display text-lg font-bold uppercase tracking-widest text-white/60">Contact</h2>
          <ul className="mt-4 space-y-2">
            <li>
              {business.street}
              <br />
              {business.city}, {business.region} {business.postalCode}
            </li>
            <li>
              <a href={business.phoneHref} className="font-semibold hover:text-white/70">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-white/70">
                {business.email}
              </a>
            </li>
            <li>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white/70">
                Instagram {business.instagramHandle}
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-sm text-white/60 lg:px-8">
          &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
