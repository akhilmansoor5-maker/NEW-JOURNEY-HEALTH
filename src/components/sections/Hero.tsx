"use client";

import { home } from "@/content/home";
import { site } from "@/content/site";
import { media } from "@/lib/media";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { PhraseTitle } from "../ui/PhraseTitle";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[68svh] overflow-hidden sm:min-h-[76svh] lg:min-h-[88svh]">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={media.hero}
          alt=""
          fill
          priority
          className="object-cover object-[center_26%]"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,56,62,0.9)_0%,rgba(11,56,62,0.55)_28%,rgba(11,56,62,0.12)_50%,transparent_66%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,56,62,0.5)_0%,transparent_38%)] lg:bg-none" />
      <div className="relative mx-auto flex min-h-[68svh] max-w-[1280px] flex-col justify-end px-5 pb-20 pt-28 sm:min-h-[76svh] sm:px-6 lg:min-h-[88svh] lg:justify-center lg:px-8 lg:pb-20">
        <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <PhraseTitle
            as="h1"
            text={home.h1}
            mark="new journey"
            light
            className="max-w-[16ch] text-[clamp(2.5rem,6.4vw,5rem)] leading-[1.02] tracking-[-0.045em] text-white"
          />
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
      <a
        href="#treatments"
        className="absolute bottom-6 left-1/2 flex min-h-11 -translate-x-1/2 items-center justify-center text-white/70"
        aria-label="Scroll"
      >
        <span className="h-8 w-px bg-white/50" />
      </a>
    </section>
  );
}
