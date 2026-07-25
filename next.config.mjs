/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  // Static HTML export for GitHub Pages (no Node server available there).
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // No optimization server on GitHub Pages — a custom loader returns direct
    // URLs (with basePath) to the pre-optimized webp sources.
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
};

export default nextConfig;
