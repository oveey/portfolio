// GitHub Pages serves this project under /portfolio. next/image and <Link>
// apply basePath automatically, but raw asset URLs (a <video> <source>, a CSS
// mask-image, favicon metadata) do not — prefix those with asset().
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) =>
  path.startsWith("http") ? path : `${BASE_PATH}${path}`;
