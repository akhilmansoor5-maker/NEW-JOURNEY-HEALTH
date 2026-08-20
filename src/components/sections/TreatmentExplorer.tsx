"use client";

import { home } from "@/content/home";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "../ui/Container";

export function TreatmentExplorer() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="treatments" className="bg-white py-14 lg:py-20">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-[clamp(1.7rem,3.4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-forest">
          {home.treatmentsHeading}
        </h2>
        <div className="mt-8 hidden justify-end gap-2 lg:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => ref.current?.scrollBy({ left: -320, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-forest hover:bg-mist"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => ref.current?.scrollBy({ left: 320, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-forest hover:bg-mist"
          >
            <ChevronRight />
          </button>
        </div>
        <div
          ref={ref}
          className="mt-6 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {home.treatmentCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative h-[380px] w-[min(78vw,280px)] shrink-0 overflow-hidden rounded-2xl lg:h-[420px] lg:w-auto"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 18vw, 78vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-semibold text-lime">{card.title}</h3>
                <p className="mt-1 text-sm text-white/85">{card.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
