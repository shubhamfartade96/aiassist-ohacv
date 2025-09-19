/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },      // ignore ESLint errors during CI build
  // remove any experimental.serverActions entry entirely
};

module.exports = nextConfig;