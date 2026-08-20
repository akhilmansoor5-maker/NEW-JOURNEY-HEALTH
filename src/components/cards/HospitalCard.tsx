import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";

export function HospitalCard({
  title,
  city,
  stats,
  photo,
  href,
}: {
  title: string;
  city: string;
  stats: string;
  photo: string;
  href: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-2xl bg-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:shadow-media">
      <div className="img-zoom relative h-48">
        <Image src={photo} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-5">
        <p className="text-sm text-muted">{city}</p>
        <h3 className="mt-1 text-lg font-semibold text-forest">{title}</h3>
        <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-teal">{stats}</p>
        <p className="mt-3 text-sm font-semibold text-teal">{home.learnMore}</p>
      </div>
    </Link>
  );
}
