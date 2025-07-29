import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  },
  images: {
    domains: [
      'barrapneus.com.br',
      'imgix.cosmicjs.com',
      'res.cloudinary.com',
    ]
  }
};

export default nextConfig;