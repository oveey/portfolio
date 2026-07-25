"use client";

import Image from "next/image";
import { shots } from "@/lib/data";

export default function Shots() {
  const row = [...shots, ...shots];
  return (
    <section className="relative overflow-hidden border-y border-line py-6">
      <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-4 pr-4 hover:[animation-play-state:paused]">
        {row.map((src, i) => (
          <figure
            key={i}
            className="relative h-52 w-72 shrink-0 overflow-hidden rounded-xl border border-line sm:h-64 sm:w-96"
          >
            <Image
              src={src}
              alt="Design shot"
              fill
              sizes="384px"
              className="object-cover"
              unoptimized
            />
          </figure>
        ))}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </section>
  );
}
