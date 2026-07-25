import { clients } from "@/lib/data";
import { asset } from "@/lib/asset";
import { Reveal } from "./motion";

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.25em] text-faint">
            Trusted by teams &amp; startups I&apos;ve designed for
          </p>
        </Reveal>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {row.map((c, i) => (
            <span
              key={i}
              title={c.name}
              aria-label={c.name}
              className="h-7 shrink-0 opacity-55 transition-opacity duration-300 hover:opacity-100 sm:h-8"
              style={{
                width: "clamp(90px, 12vw, 150px)",
                backgroundColor: "var(--color-fg)",
                WebkitMaskImage: `url(${asset(c.logo)})`,
                maskImage: `url(${asset(c.logo)})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </section>
  );
}
