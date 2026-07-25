"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { profile, socials } from "@/lib/data";
import GlowBackground from "./GlowBackground";
import { Reveal, Magnetic } from "./motion";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <GlowBackground variant="soft" />
      <div className="container-x relative z-10 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted">
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
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted text-pretty">
            Have a product that needs design, or a design that needs polish?
            I’m one message away.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.3}>
              <Link
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-black transition-shadow hover:shadow-[0_0_50px_-8px_var(--color-accent)]"
              >
                Shoot me a mail
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-8 py-4 text-lg font-medium transition-colors hover:border-accent hover:text-accent"
            >
              WhatsApp
            </Link>
          </div>
        </Reveal>

        {/* social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-line pt-8 text-sm"
        >
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              className="link-underline text-muted transition-colors hover:text-fg"
            >
              <span className="text-faint">{s.label}</span>{" "}
              <span className="text-fg">{s.handle}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
