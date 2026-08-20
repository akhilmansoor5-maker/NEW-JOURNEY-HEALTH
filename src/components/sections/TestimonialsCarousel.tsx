"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function TestimonialsCarousel({
  heading,
  items,
  sage,
}: {
  heading: string;
  items: { quote: string; name: string }[];
  sage?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const item = items[index];

  return (
    <section className={sage ? "bg-sage py-14 lg:py-20" : "bg-white py-14 lg:py-20"}>
      <Container className="max-w-3xl">
        <SectionHeading title={heading} className="mb-8" />
        <motion.blockquote
          key={item.name + index}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
        >
          <p className="text-[clamp(1.15rem,2.2vw,1.55rem)] leading-relaxed text-forest">{item.quote}</p>
          <footer className="mt-5 text-sm font-semibold tracking-[0.06em] text-teal">– {item.name}</footer>
        </motion.blockquote>
        <div className="mt-8 flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
            onClick={() => setIndex((i) => (i + items.length - 1) % items.length)}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {items.map((t, i) => (
              <button
                key={t.name}
                aria-label={t.name}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition duration-200 ${i === index ? "w-6 bg-forest" : "w-2 bg-line"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
          >
            <ChevronRight />
          </button>
        </div>
      </Container>
    </section>
  );
}
