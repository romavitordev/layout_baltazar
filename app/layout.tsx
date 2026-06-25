import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Anton, Fraunces, Inter, Space_Mono } from 'next/font/google'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { PageTransition } from '@/components/layout/PageTransition'
import { GrainOverlay } from '@/components/fx/GrainOverlay'
import { Preloader } from '@/components/fx/Preloader'
import { ScrollProgress } from '@/components/fx/ScrollProgress'
import { PedirModal } from '@/components/home/PedirModal'
import { avaliacaoDestaque, brand, cardapio, endereco, funcionamento, imagens } from '@/lib/site'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.nomeCompleto} | Burger artesanal na brasa`,
    template: `%s | ${brand.nome} Burger`,
  },
  description: brand.descricao,
  keywords: [
    'hamburgueria Sorocaba',
    'burger artesanal Sorocaba',
    'hambúrguer na brasa',
    'Baltazar Burger',
    'delivery hambúrguer Sorocaba',
    'costelinha na brasa',
    'grilled burger',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: brand.url,
    siteName: brand.nomeCompleto,
    title: brand.nomeCompleto,
    description: brand.tagline,
    images: [{ url: imagens.og, width: 1200, height: 630, alt: brand.nomeCompleto }],
  },
  twitter: {
    card: 'summary_large_image',
    title: brand.nomeCompleto,
    description: brand.tagline,
    images: [imagens.og],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0C0A09',
  colorScheme: 'dark',
}

const diasSchema = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: brand.nomeCompleto,
  description: brand.descricao,
  url: brand.url,
  image: imagens.og,
  servesCuisine: ['Hambúrguer artesanal', 'Hambúrguer na brasa'],
  priceRange: '$$',
  acceptsReservations: 'False',
  address: {
    '@type': 'PostalAddress',
    streetAddress: endereco.rua,
    addressLocality: endereco.cidade,
    addressRegion: endereco.uf,
    postalCode: endereco.cep,
    addressCountry: 'BR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: funcionamento.diasAbertos.map((d) => diasSchema[d]),
      opens: '18:00',
      closes: '23:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: avaliacaoDestaque.media,
    reviewCount: '500',
    bestRating: '5',
  },
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: cardapio.map((c) => ({
      '@type': 'MenuSection',
      name: c.categoria,
      hasMenuItem: c.itens.map((it) => ({
        '@type': 'MenuItem',
        name: it.nome,
        description: it.descricao,
        offers: { '@type': 'Offer', price: it.preco.replace(/[^\d]/g, ''), priceCurrency: 'BRL' },
      })),
    })),
  },
  sameAs: [brand.instagramUrl],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brasa focus:px-5 focus:py-2 focus:text-sm focus:text-osso"
        >
          Pular para o conteúdo
        </a>

        <GrainOverlay />
        <Preloader />
        <ScrollProgress />
        <LenisProvider />
        <Header />
        <PageTransition>
          <main id="conteudo" className="overflow-x-clip">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <MobileBottomNav />
        <PedirModal />
      </body>
    </html>
  )
}
