import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="relative -scroll-mt-24">
      {/* Cards pin and stack on top of each other as you scroll. The recede
          effect is a CSS scroll-driven animation on this container's view
          timeline (see .stack in globals.css), so it runs on the compositor
          in lockstep with the sticky positioning — no JS per scroll frame. */}
      <div className="stack relative">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
