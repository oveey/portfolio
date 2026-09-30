"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  // Everything is driven by the stack's single scroll progress. Measuring each
  // sticky card on its own gives jumpy values once it pins, which caused the
  // stutter. Card i is fully pinned at progress i / (total - 1).
  const steps = Math.max(total - 1, 1);
  const pinnedAt = index / steps;
  const enteredFrom = Math.max(index - 1, 0) / steps;

  // Image zooms out while the card slides up over the previous one.
  const imageScale = useTransform(
    progress,
    [enteredFrom, pinnedAt],
    reduce || index === 0 ? [1, 1] : [1.15, 1],
  );

  // Once pinned, the card shrinks and dims as later cards stack over it.
  const depth = total - index - 1;
  const scale = useTransform(progress, [pinnedAt, 1], reduce ? [1, 1] : [1, 1 - depth * 0.05]);
  const dim = useTransform(progress, [pinnedAt, 1], reduce ? [0, 0] : [0, depth * 0.12]);

  const href = project.liveUrl ?? "#";
  const accent = project.accent ?? "#a3ff5e";

  return (
    <div
      className="sticky top-0 flex h-svh items-center px-3 pb-4 pt-20 sm:px-6 sm:pb-6"
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — visit ${project.liveLabel ?? "live site"} (opens in a new tab)`}
        style={{ scale }}
        className="group relative block h-full w-full origin-top will-change-transform overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.8)]"
      >
        {/* image */}
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 will-change-transform">
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        {/* readability gradient + accent glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 120%, ${accent}33, transparent 60%)` }}
        />
        {/* darkens the card as it gets buried in the stack */}
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />

        {/* live badge */}
        <div className="absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-fg backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Live
          </span>
        </div>

        {/* counter */}
        <div className="absolute right-5 top-5 z-10 font-display text-sm text-fg/70 sm:right-8 sm:top-8">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* meta */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-end justify-between gap-6 p-5 sm:p-8 lg:p-12">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-fg/60">
              <span className="text-accent">{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm text-fg/75 text-pretty sm:text-base">
              {project.subtitle}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-transform duration-500 group-hover:-translate-y-1">
            {project.liveLabel ?? "Visit site"}
            <span aria-hidden>↗</span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}
