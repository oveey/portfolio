"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { profile } from "@/lib/data";

const links = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-x">
          <nav
            className={`mt-3 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
                : "border border-transparent"
            }`}
          >
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label={`${profile.name} home`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong">
                <span className="h-3.5 w-3.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-125" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {profile.name}
                <span className="text-accent">.</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <Link
                href={profile.resumeUrl}
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_-4px_var(--color-accent)]"
              >
                Résumé
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </Link>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`h-0.5 w-6 bg-fg transition-all duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-fg transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-fg transition-all duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-semibold tracking-tight"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href={profile.resumeUrl}
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-black"
                >
                  View Résumé ↗
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
