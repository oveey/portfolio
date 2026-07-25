import Image from "next/image";
import { profile } from "@/lib/data";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-line-strong">
            <Image
              src="/images/brand/avatar.webp"
              alt={profile.name}
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span>
            Designed &amp; developed by{" "}
            <span className="text-fg">{profile.name}</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <ScrollLink id="work" className="cursor-pointer transition-colors hover:text-fg">
            Work
          </ScrollLink>
          <ScrollLink id="contact" className="cursor-pointer transition-colors hover:text-fg">
            Contact
          </ScrollLink>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
