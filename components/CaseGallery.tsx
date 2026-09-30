"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

type Shot = { src: string; caption: string };

export default function CaseGallery({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % shots.length)),
    [shots.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {shots.map((shot, i) => (
          <motion.button
            key={shot.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActive(i)}
            className="group relative block overflow-hidden rounded-2xl border border-line bg-surface text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-accent text-sm text-black opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                ⤢
              </span>
            </div>
            <div className="px-4 py-3 text-sm text-muted">{shot.caption}</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 sm:right-5 sm:top-5 place-items-center rounded-full border border-line-strong text-xl hover:bg-white/10"
            >
              ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute bottom-6 left-1/2 z-10 grid h-12 w-12 -translate-x-[calc(100%+0.5rem)] place-items-center rounded-full border border-line-strong bg-black/60 text-2xl hover:bg-white/10 sm:bottom-auto sm:left-8 sm:translate-x-0"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute bottom-6 left-1/2 z-10 grid h-12 w-12 translate-x-2 place-items-center rounded-full border border-line-strong bg-black/60 text-2xl hover:bg-white/10 sm:bottom-auto sm:left-auto sm:right-8 sm:translate-x-0"
            >
              ›
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
            >
              <Image
                src={shots[active].src}
                alt={shots[active].caption}
                width={1800}
                height={1350}
                className="mx-auto max-h-[70svh] w-auto rounded-xl object-contain sm:max-h-[80vh]"
              />
              <figcaption className="mt-4 text-center text-sm text-muted">
                {shots[active].caption} · {active + 1} / {shots.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
