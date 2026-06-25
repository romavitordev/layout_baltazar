import Image from 'next/image'
import { Instagram as InstagramIcon } from 'lucide-react'

import { brand, instagram } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Grade do Instagram (estática — sem API, ótimo pra static export).
 * Troque as imagens em lib/site.ts (`instagram`) pelos posts reais.
 */
export function InstagramGrid() {
  return (
    <section className="bg-grelha py-24 md:py-32">
      <div className="container-wide">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">06 — Direto da chapa</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">No nosso Instagram.</h2>
          </div>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-osso/70 transition-colors hover:text-brasa"
          >
            <InstagramIcon size={18} />
            {brand.instagram}
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {instagram.map((img, i) => (
            <a
              key={i}
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div aria-hidden className="absolute inset-0 bg-carvao/0 transition-colors duration-300 group-hover:bg-carvao/40" />
              <InstagramIcon
                size={22}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-osso opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
