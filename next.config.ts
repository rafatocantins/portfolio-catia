import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio-catia",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
