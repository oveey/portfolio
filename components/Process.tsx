"use client";

import { motion } from "motion/react";
import { processSteps } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { StaggerGroup, staggerItem } from "./motion";

export default function Process() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How I work"
          title="A process built to ship, not to stall."
          description="Four steps that keep projects moving — from fuzzy problem to pixel-perfect, developer-ready product."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <motion.div
              key={s.no}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-6 font-display text-8xl font-bold text-fg/[0.04] transition-colors group-hover:text-accent/10"
              >
                {s.no}
              </div>
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong font-display text-sm text-accent">
                  {s.no}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted text-pretty">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
