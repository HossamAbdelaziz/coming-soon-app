import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from blocking deployment
  },
};

export default nextConfig;
