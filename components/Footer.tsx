import Image from "next/image";
import { profile } from "@/lib/data";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 text-sm text-faint sm:flex-row">
        {/* brand */}
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

        {/* contact icons + nav */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              title={profile.email}
              className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m3 6 9 6.5L21 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title={`+${profile.whatsapp}`}
              className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            </a>
          </div>

          <span className="h-4 w-px bg-line-strong" />

          <div className="flex items-center gap-5">
            <ScrollLink id="work" className="cursor-pointer transition-colors hover:text-fg">
              Work
            </ScrollLink>
            <ScrollLink id="contact" className="cursor-pointer transition-colors hover:text-fg">
              Contact
            </ScrollLink>
            <span>© {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
