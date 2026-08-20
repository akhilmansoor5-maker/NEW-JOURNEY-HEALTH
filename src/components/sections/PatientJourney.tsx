"use client";

import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function PatientJourney() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const steps = home.journeySteps;
  const step = steps[index];
  const progress = (index / (steps.length - 1)) * 100;

  return (
    <section className="bg-sage py-14 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={home.journeyEyebrow}
          title={home.journeyHeading}
          subtitle={home.journeySub}
          className="max-w-2xl"
        />
        <div className="mt-12 hidden lg:block">
          <div className="relative h-[3px] rounded-full bg-forest/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-lime"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="mt-6 grid grid-cols-8 gap-2">
            {steps.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className="min-h-11 text-left"
              >
                <span className={cn("block font-serif text-2xl", i === index ? "text-forest" : "text-forest/30")}>
                  {String(s.id).padStart(2, "0")}
                </span>
                <span className={cn("mt-1 block text-[11px] leading-snug font-medium", i === index ? "text-forest" : "text-muted")}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[2rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={760}
                  className="h-[280px] w-full object-cover sm:h-[420px]"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-4 bottom-4 flex justify-between">
              <button
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-soft"
                onClick={() => setIndex((i) => (i + steps.length - 1) % steps.length)}
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-soft"
                onClick={() => setIndex((i) => (i + 1) % steps.length)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <p className="font-serif text-6xl leading-none text-forest/15">{String(step.id).padStart(2, "0")}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-forest">{step.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">{step.fullDesc}</p>
              <a href="#enquiry" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-teal">
                {home.learnMore}
              </a>
              <div className="mt-6 flex gap-2 overflow-x-auto lg:hidden">
                {steps.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-semibold",
                      i === index ? "bg-forest text-white" : "bg-white text-forest",
                    )}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
