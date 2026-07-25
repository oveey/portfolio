/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Legacy static site kept for reference; keep it out of the build.
  outputFileTracingExcludes: {
    "*": ["./legacy/**"],
  },
};

export default nextConfig;
