/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['hxchzlvlqbybppemfugm.supabase.co'],
  },
}

module.exports = nextConfig