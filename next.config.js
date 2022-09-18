/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rb.gy", "apple-redesign-yt.vercel.app"]
  }
}

module.exports = nextConfig
