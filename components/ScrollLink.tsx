"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Smooth-scrolls to an in-page section WITHOUT writing a #hash to the URL.
 * On sub-pages it routes home first, then scrolls (see Navbar's mount effect).
 */
export default function ScrollLink({
  id,
  children,
  className,
  onNavigate,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      try {
        sessionStorage.setItem("scrollTo", id);
      } catch {}
      router.push("/");
    }
  };

  return (
    <a href={`#${id}`} onClick={handle} className={className}>
      {children}
    </a>
  );
}
