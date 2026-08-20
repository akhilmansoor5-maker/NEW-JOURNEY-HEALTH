import type { NextConfig } from "next";

const repo = "NEW-JOURNEY-HEALTH";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
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
