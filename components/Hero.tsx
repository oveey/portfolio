"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { profile } from "@/lib/data";
import GlowBackground from "./GlowBackground";
import { Magnetic } from "./motion";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = ["Designing", "products", "people", "love", "to", "use."];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <GlowBackground variant="hero" />

      <div className="container-x relative z-10">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
          <span className="text-faint">·</span>
          <span className="text-faint">{profile.location}</span>
        </motion.div>

        {/* headline */}
        <h1 className="max-w-5xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-balance">
          {headline.map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease }}
                className={`inline-block ${
                  word === "love" ? "italic text-accent" : ""
                }`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-8 max-w-xl text-lg text-muted text-pretty sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic strength={0.3}>
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-black transition-shadow hover:shadow-[0_0_40px_-6px_var(--color-accent)]"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Magnetic>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Let’s talk
          </Link>
        </motion.div>

        {/* role tag bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 flex items-center gap-3 text-sm text-faint"
        >
          <span className="h-px w-10 bg-line-strong" />
          {profile.role}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line-strong p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
