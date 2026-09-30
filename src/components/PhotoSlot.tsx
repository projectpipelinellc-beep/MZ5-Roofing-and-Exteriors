import Image from "next/image";
import type { Photo } from "@/lib/site";

export function PhotoSlot({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (photo.src) {
    return (
      <div className={`relative overflow-hidden bg-navy-800 ${className}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={photo.alt}
      className={`photo-slot relative overflow-hidden ${className}`}
    >
      <span className="absolute bottom-0 left-0 max-w-full bg-navy-950/80 px-3 py-2 font-display text-sm font-semibold uppercase tracking-widest text-white/80">
        Photo slot &middot; {photo.slot}
      </span>
    </div>
  );
}
