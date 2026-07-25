"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { technicalSkills, designSkills } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion";

function SkillBar({ name, level, i }: { name: string; level: number; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="font-display text-sm text-faint">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--color-cyan), var(--color-accent))",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const row = [...technicalSkills, ...technicalSkills];
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools I reach for, skills I lean on."
          description="A design toolkit sharpened over years of shipping real products with real teams."
          align="center"
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* design skills */}
          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-muted">
              Design expertise
            </h3>
            <div className="space-y-6">
              {designSkills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} i={i} />
              ))}
            </div>
          </div>

          {/* tools grid */}
          <div>
            <h3 className="mb-8 font-display text-lg font-semibold text-muted">
              Tools & tech
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {technicalSkills.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.03}>
                  <div className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface p-3 transition-all hover:-translate-y-1 hover:border-line-strong">
                    <Image
                      src={t.icon}
                      alt={t.name}
                      width={28}
                      height={28}
                      className="h-7 w-7 opacity-80 transition-opacity group-hover:opacity-100"
                    />
                    <span className="text-center text-[0.7rem] text-faint">
                      {t.name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* infinite tech marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-line py-5">
        <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center gap-12 pr-12">
          {row.map((t, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 text-muted">
              <Image src={t.icon} alt="" width={22} height={22} className="h-5 w-5 opacity-70" />
              <span className="font-display text-lg font-medium tracking-tight">
                {t.name}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
