/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or comment out output: 'export'
  // output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true }
  // Do not disable serverActions here
}

module.exports = nextConfig