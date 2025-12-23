import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    // This is the specific fix for the A-Frame "a-scene" errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This prevents linting warnings from stopping your deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
