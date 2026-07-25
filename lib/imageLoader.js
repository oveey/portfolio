// Custom next/image loader for static export on GitHub Pages.
// Returns a direct URL (no optimization server) and prepends the basePath so
// local images resolve under /portfolio. Remote URLs pass through untouched.
export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src}`;
}
