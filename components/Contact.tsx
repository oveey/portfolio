"use client";

import Link from "next/link";
import { profile } from "@/lib/data";
import GlowBackground from "./GlowBackground";
import { Reveal, Magnetic } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-36">
      <GlowBackground variant="soft" />
      <div className="container-x relative z-10 text-center">
        <Reveal>
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-muted sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.status}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-tight text-balance">
            Let’s build something
            <br />
            worth <span className="italic text-accent">using.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted text-pretty sm:text-lg">
            Have a product that needs design, or a design that needs polish?
            I’m one message away.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Magnetic strength={0.3}>
              <Link
                href={`mailto:${profile.email}`}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold sm:w-auto sm:px-8 sm:py-4 sm:text-lg text-black transition-shadow hover:shadow-[0_0_50px_-8px_var(--color-accent)]"
              >
                Shoot me a mail
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-base font-medium sm:px-8 sm:py-4 sm:text-lg transition-colors hover:border-accent hover:text-accent"
            >
              WhatsApp
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
