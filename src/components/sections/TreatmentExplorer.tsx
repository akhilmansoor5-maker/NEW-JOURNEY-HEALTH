"use client";

import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../ui/Container";
import { PhraseTitle } from "../ui/PhraseTitle";

export function TreatmentExplorer() {
  const [index, setIndex] = useState(1);
  const reduce = useReducedMotion();
  const cards = home.treatmentCards;
  const active = cards[index];

  return (
    <section id="treatments" className="bg-white py-14 lg:py-20">
      <Container>
        <PhraseTitle text={home.treatmentsHeading} mark="treatments we offer" className="max-w-2xl" />
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[420px] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Image src={active.image} alt={active.alt} fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-sm text-white/75">{active.subtitle}</p>
                  <h3 className="mt-2 text-3xl font-semibold">{active.title}</h3>
                  <Link href={active.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-lime">
                    {home.learnMore}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col justify-center divide-y divide-line">
            {cards.map((card, i) => (
              <button
                key={card.title}
                type="button"
                aria-pressed={i === index}
                onMouseEnter={() => setIndex(i)}
                onFocus={() => setIndex(i)}
                onClick={() => setIndex(i)}
                className={cn(
                  "flex min-h-14 items-center justify-between gap-4 py-4 text-left transition duration-200",
                  i === index ? "text-forest" : "text-muted hover:text-forest",
                )}
              >
                <span>
                  <span className="block text-lg font-semibold">{card.title}</span>
                  <span className="mt-0.5 block text-sm">{card.subtitle}</span>
                </span>
                <span className={cn("h-px w-8 shrink-0 transition duration-200", i === index ? "bg-lime" : "bg-line")} />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
