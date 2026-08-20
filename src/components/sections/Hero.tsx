"use client";

import { home } from "@/content/home";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate grid min-h-[78svh] overflow-hidden lg:min-h-[88svh] lg:grid-cols-[0.92fr_1.08fr]">
      <div className="relative z-10 flex flex-col justify-end bg-forest px-5 pb-16 pt-28 sm:px-8 lg:justify-center lg:px-12 lg:pb-20 xl:px-16">
        <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="max-w-[13ch] text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white">
            {home.h1}
          </h1>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.45 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button href="#enquiry">{home.heroCta}</Button>
          <Button href={site.whatsapp} variant="ghost" arrow={false}>
            {home.chatExpert}
          </Button>
        </motion.div>
      </div>
      <div className="relative min-h-[42vh] lg:min-h-full">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={media.heroPortrait}
            alt=""
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </motion.div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-forest/55 to-transparent" />
      </div>
      <a
        href="#treatments"
        className="absolute bottom-6 left-1/2 z-10 flex min-h-11 -translate-x-1/2 items-center justify-center text-white/70 lg:text-forest/40"
        aria-label="Scroll"
      >
        <span className="h-8 w-px bg-current" />
      </a>
    </section>
  );
}
