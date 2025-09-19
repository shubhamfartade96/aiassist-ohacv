/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove server actions - they're not compatible with static exports
  experimental: {
    serverActions: false
  }
}

module.exports = nextConfig