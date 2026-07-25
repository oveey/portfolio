import Link from "next/link";
import GlowBackground from "@/components/GlowBackground";

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6 text-center">
      <GlowBackground variant="soft" />
      <div className="relative z-10">
        <p className="font-display text-[clamp(4rem,20vw,12rem)] font-semibold leading-none tracking-tight">
          4<span className="text-accent">0</span>4
        </p>
        <p className="mt-4 text-lg text-muted">
          This page wandered off. Let’s get you back.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-black"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
