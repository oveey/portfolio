"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  // Where does the card lead? Case study first, else live site.
  const href = project.hasCaseStudy
    ? `/work/${project.slug}`
    : project.liveUrl ?? "#";
  const external = !project.hasCaseStudy && !!project.liveUrl;

  const cardClass =
    "group relative block overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-500 hover:border-line-strong";

  const inner = (
    <>
      {/* image */}
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <div
            className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 120%, ${
                project.accent ?? "#a3ff5e"
              }22, transparent 60%)`,
            }}
          />
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            sizes={featured ? "(max-width:768px) 100vw, 66vw" : "(max-width:768px) 100vw, 33vw"}
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* badges */}
          <div className="absolute left-4 top-4 z-20 flex gap-2">
            {project.wip && (
              <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
                In progress
              </span>
            )}
            {project.liveUrl && !external && (
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-fg backdrop-blur">
                Live
              </span>
            )}
          </div>

          {/* hover action */}
          <div className="absolute bottom-4 right-4 z-20 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-black">
              {external ? "↗" : "→"}
            </span>
          </div>
        </div>

        {/* meta */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-faint">
              <span className="text-accent">{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted text-pretty">
              {project.subtitle}
            </p>
          </div>
        </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={featured ? "sm:col-span-2" : ""}
    >
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} className={cardClass}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}
