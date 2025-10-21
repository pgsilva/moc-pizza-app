import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
  // outras opções do Next.js
};

module.exports = withPWA(nextConfig);
