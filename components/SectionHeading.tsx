import { Reveal } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base text-muted text-pretty sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
