import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newjourneyhealth.com",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
