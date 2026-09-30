import { business, getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${url}/#business`,
    name: business.name,
    url,
    telephone: "+1-970-587-3006",
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "US",
    },
    areaServed: { "@type": "State", name: "Colorado" },
    sameAs: [business.instagramUrl],
    description:
      "Locally owned and family operated residential and commercial roofing company in Wiggins, Colorado. Roof replacements, free inspections, storm and hail damage restoration, gutters and siding.",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
