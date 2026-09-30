"use client";

import Image from "next/image";
import { profile, services } from "@/lib/data";
import { Reveal, StaggerGroup, staggerItem } from "./motion";
import SectionHeading from "./SectionHeading";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* portrait */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="ring-glow absolute -inset-1 rounded-[1.75rem] opacity-40 blur-md" />
              <div className="relative overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/images/brand/portrait.webp"
                  alt={profile.name}
                  width={600}
                  height={720}
                  className="aspect-[5/6] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="font-display text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.role}</p>
                </div>
              </div>

              {/* stats */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {profile.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-line bg-surface px-2 py-4 text-center sm:px-3"
                  >
                    <div className="font-display text-2xl font-semibold text-accent">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-faint">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* text */}
          <div>
            <SectionHeading
              eyebrow="About"
              title="A designer who thinks in systems and ships in pixels."
            />
            <div className="mt-6 space-y-5 text-base text-muted text-pretty sm:text-lg">
              {profile.about.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {/* services */}
            <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={staggerItem}
                  className="group rounded-2xl border border-line bg-surface p-5 transition-colors sm:p-6 hover:border-line-strong"
                >
                  <h3 className="font-display text-lg font-semibold">
                    <span className="text-accent">/ </span>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted text-pretty">{s.body}</p>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
