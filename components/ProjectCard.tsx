import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  // Card i recedes while card i + 1 slides up over it, i.e. across the slice
  // [i, i + 1] / (total - 1) of the stack's scroll range. The last card never
  // gets covered, so it doesn't animate.
  const steps = Math.max(total - 1, 1);
  const recedes = index < total - 1;
  const range = {
    "--stack-from": `${(index / steps) * 100}%`,
    "--stack-to": `${((index + 1) / steps) * 100}%`,
  } as CSSProperties;

  const href = project.liveUrl ?? "#";
  const accent = project.accent ?? "#a3ff5e";

  return (
    <div className="container-x sticky top-0 flex h-svh items-center pb-4 pt-[5.5rem] sm:pb-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — visit ${project.liveLabel ?? "live site"} (opens in a new tab)`}
        style={range}
        className={`group relative flex w-full origin-top flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.8)] sm:block sm:h-full sm:rounded-3xl ${
          recedes ? "stack-card" : ""
        }`}
      >
        {/* image — full landscape frame on phones, full-bleed from sm up */}
        <div className="relative aspect-[5/3] w-full shrink-0 sm:absolute sm:inset-0 sm:aspect-auto">
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            sizes="(max-width: 1248px) 100vw, 1208px"
            priority={index === 0}
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent sm:hidden" />
        </div>

        {/* readability gradient + accent glow on hover */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/90 via-black/30 to-transparent sm:block" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 120%, ${accent}33, transparent 60%)` }}
        />
        {/* darkens the card as the next one covers it */}
        {recedes && <div className="stack-dim pointer-events-none absolute inset-0 bg-black opacity-0" />}

        {/* live badge */}
        <div className="absolute left-4 top-4 z-10 sm:left-8 sm:top-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-fg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Live
          </span>
        </div>

        {/* counter */}
        <div className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-2.5 py-1 font-display text-xs text-fg/80 sm:right-8 sm:top-8 sm:bg-transparent sm:p-0 sm:text-sm sm:text-fg/70">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>

        {/* meta */}
        <div className="relative z-10 flex flex-col items-start gap-5 px-5 pb-5 pt-1 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6 sm:p-8 lg:p-12">
          <div className="max-w-2xl">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-fg/60">
              <span className="text-accent">{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-[clamp(1.75rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-balance">
              {project.title}
            </h3>
            <p className="mt-3 line-clamp-2 max-w-xl text-sm text-fg/75 text-pretty sm:line-clamp-none sm:text-base">
              {project.subtitle}
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-transform duration-500 group-hover:-translate-y-1">
            {project.liveLabel ?? "Visit site"}
            <span aria-hidden>↗</span>
          </span>
        </div>
      </a>
    </div>
  );
}
