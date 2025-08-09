/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
  // Configure for Netlify deployment
  trailingSlash: false,
}

module.exports = nextConfig
