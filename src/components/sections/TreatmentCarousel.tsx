"use client";

import { home } from "@/content/home";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function TreatmentCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  return (
    <section id="treatments" className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading title={home.treatmentsHeading} underline className="mx-auto text-center" />
        </Reveal>
        <div className="mt-10 flex justify-end gap-2">
          <button aria-label="Previous" onClick={() => scroll(-1)} className="rounded-full border border-line p-2 hover:bg-mist">
            <ChevronLeft />
          </button>
          <button aria-label="Next" onClick={() => scroll(1)} className="rounded-full border border-line p-2 hover:bg-mist">
            <ChevronRight />
          </button>
        </div>
        <div ref={ref} className="mt-4 flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {home.treatmentCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative h-[420px] w-[min(82vw,360px)] shrink-0 snap-start overflow-hidden rounded-3xl"
            >
              <Image src={card.image} alt={card.alt} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/80">{card.subtitle}</p>
                <p className="mt-4 text-sm font-semibold text-lime">{home.learnMore}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
