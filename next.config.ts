import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // reemplaza a experimental.ppr
  },
}

export default nextConfig