import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Products I've shaped, end to end."
            description="A mix of fintech, travel, gaming and healthcare — from first wireframe to shipped, developer-ready UI."
          />
          <p className="text-sm text-faint">
            {projects.length} projects
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              featured={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
