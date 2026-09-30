"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Work() {
  // Scroll progress across the whole stack drives each card's shrink-back.
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative">
      {/* Full-width cards that pin and stack on top of each other as you scroll */}
      <div ref={stackRef} className="relative">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
