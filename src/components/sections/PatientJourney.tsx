"use client";

import { home } from "@/content/home";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import { PhraseTitle } from "../ui/PhraseTitle";

export function PatientJourney() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const steps = home.journeySteps;
  const step = steps[index];

  return (
    <section className="bg-sage py-14 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex min-h-9 items-center rounded-full bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest shadow-soft">
            {home.journeyEyebrow}
          </p>
          <PhraseTitle text={home.journeyHeading} mark="Journey" className="mx-auto mt-5 text-center" />
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{home.journeySub}</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={760}
                  className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[460px]"
                />
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              aria-label="Previous"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest shadow-soft"
              onClick={() => setIndex((i) => (i + steps.length - 1) % steps.length)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-forest shadow-soft"
              onClick={() => setIndex((i) => (i + 1) % steps.length)}
            >
              <ChevronRight />
            </button>
            <div className="absolute inset-x-0 bottom-5 flex justify-center gap-1.5">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={s.title}
                  onClick={() => setIndex(i)}
                  className={cn("h-2 rounded-full transition duration-200", i === index ? "w-6 bg-white" : "w-2 bg-white/50")}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={step.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="flex flex-col justify-between rounded-[1.6rem] bg-white p-7 shadow-soft sm:p-9"
            >
              <div>
                <h3 className="text-3xl font-semibold tracking-[-0.03em] text-forest">{step.title}</h3>
                <p className="mt-5 text-[16px] leading-relaxed text-muted">{step.fullDesc}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <p className="inline-flex min-h-9 items-center rounded-full bg-sage px-4 text-sm font-semibold text-forest">
                  {step.id} / {steps.length}
                </p>
                <a href="#enquiry" className="inline-flex min-h-11 items-center text-sm font-semibold text-lime">
                  {home.learnMore}
                </a>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <ol className="mt-12 hidden lg:grid lg:grid-cols-8">
          {steps.map((s, i) => {
            const state = i < index ? "done" : i === index ? "active" : "todo";
            return (
              <li key={s.id} className="relative px-1 text-center">
                {i < steps.length - 1 ? (
                  <span
                    className={cn(
                      "absolute top-[15px] left-[calc(50%+16px)] right-[calc(-50%+16px)] h-px",
                      i < index ? "bg-forest" : "bg-forest/20",
                    )}
                  />
                ) : null}
                <button type="button" onClick={() => setIndex(i)} className="relative mx-auto block">
                  <span
                    className={cn(
                      "mx-auto flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-semibold",
                      state === "active" && "bg-lime text-forest",
                      state === "done" && "bg-forest text-white",
                      state === "todo" && "bg-white text-muted",
                    )}
                  >
                    {s.id}
                  </span>
                  <span className={cn("mt-3 block text-sm font-semibold", state === "active" ? "text-lime" : state === "done" ? "text-forest" : "text-muted")}>
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[12px] text-muted">{s.short}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex gap-2 overflow-x-auto lg:hidden">
          {steps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "flex h-11 min-w-11 items-center justify-center rounded-full px-3 text-sm font-semibold",
                i === index ? "bg-lime text-forest" : "bg-white text-forest",
              )}
            >
              {s.id}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
