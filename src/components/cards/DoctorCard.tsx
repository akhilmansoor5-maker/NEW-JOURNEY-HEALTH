import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

export function DoctorCard({
  name,
  specialty,
  location,
  sub,
  photo,
  href = "/doctor-detail-page-template/",
  large,
}: {
  name: string;
  specialty?: string;
  location?: string;
  sub?: string;
  photo: { src: string; alt: string };
  href?: string;
  large?: boolean;
}) {
  return (
    <Link href={href} className="group block w-full">
      <div className="img-zoom overflow-hidden rounded-2xl">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={640}
          height={800}
          className={cn("w-full object-cover", large ? "aspect-[4/5] lg:min-h-[520px]" : "aspect-[4/5]")}
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      {specialty ? (
        <p className={cn("mt-3 text-teal", specialty.length < 28 ? "text-[11px] uppercase tracking-[0.16em]" : "text-sm")}>
          {specialty}
        </p>
      ) : null}
      <h3 className={cn("mt-1 font-semibold text-forest", large ? "text-2xl" : "text-lg")}>{name}</h3>
      {location ? <p className="text-sm text-muted">{location}</p> : null}
      {sub ? <p className="text-sm text-muted">{sub}</p> : null}
      <p className="mt-2 text-sm font-semibold text-teal">{home.viewProfile}</p>
    </Link>
  );
}
