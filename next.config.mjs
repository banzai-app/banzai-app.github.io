/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração condicional baseada no ambiente
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'dist',
  } : {
    // Configuração para desenvolvimento
    trailingSlash: false,
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
