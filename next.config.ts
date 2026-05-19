import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/:slug",
        destination: "/product",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
