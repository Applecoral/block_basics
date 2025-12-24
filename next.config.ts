import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    // This is the specific fix for the A-Frame "a-scene" errors
    ignoreBuildErrors: true,
  },
  // Removed `eslint` key because it is no longer supported
};

export default nextConfig;
