/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // enable image optimization for api hosted image sources
  images: {
    domains: ["image.tmdb.org"]
  }
}

module.exports = nextConfig
