// Custom next/image loader for static export on GitHub Pages.
// Returns a direct URL (no optimization server) and prepends the basePath so
// local images resolve under /portfolio. Remote URLs pass through untouched.
// `?w=` is ignored by the static host; it just satisfies next/image's
// requirement that loaders use the requested width.
export default function imageLoader({ src, width }) {
  if (/^https?:\/\//.test(src)) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src}?w=${width}`;
}
