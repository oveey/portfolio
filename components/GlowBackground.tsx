"use client";

import { motion } from "motion/react";

/**
 * Decorative animated radial glows for the dark theme.
 * Purely presentational + aria-hidden.
 */
export default function GlowBackground({
  variant = "hero",
}: {
  variant?: "hero" | "soft";
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: variant === "hero" ? 0.5 : 0.28 }}
        transition={{ duration: 1.6 }}
        className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,255,94,0.28), transparent 65%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,123,255,0.25), transparent 65%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="absolute bottom-[-8rem] left-[-6rem] h-[26rem] w-[26rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(71,229,210,0.2), transparent 65%)",
        }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
        }}
      />
    </div>
  );
}
