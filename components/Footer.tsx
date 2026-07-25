import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-line-strong">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span>
            Designed & developed by{" "}
            <span className="text-fg">{profile.name}</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/#work" className="transition-colors hover:text-fg">
            Work
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-fg">
            Contact
          </Link>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
