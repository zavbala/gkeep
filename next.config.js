/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['cdn.svgporn.com'],
  },
};

module.exports = nextConfig;
