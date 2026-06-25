/**
 * Mirror estático para GitHub Pages (romavitordev.github.io/layout_baltazar).
 * Difere do repo principal (baltazarburger_lndpage): output export, basePath,
 * trailingSlash e imagens sem otimizador.
 */
const basePath = '/layout_baltazar'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    // Usado em assets referenciados por src "cru" (ex.: vídeo da hero),
    // que não ganham basePath automático como next/link e next/image.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
}

export default nextConfig
