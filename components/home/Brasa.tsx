import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { brasa, imagens } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'

/** Spotlight do método na brasa — imagem + temperatura + pilares. */
export function Brasa() {
  return (
    <section className="relative overflow-hidden border-y border-osso/10 bg-grelha py-24 md:py-32">
      <div className="container-page relative grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
        {/* Imagem com brasa */}
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] ring-1 ring-osso/10">
            <Image
              src={imagens.brasaHero.src}
              alt={imagens.brasaHero.alt}
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carvao/70 via-transparent to-transparent" />
            {/* selo de temperatura */}
            <div className="absolute bottom-5 left-5 rounded-2xl border border-osso/15 bg-carvao/70 px-5 py-3 backdrop-blur-sm">
              <p className="font-anton text-4xl leading-none texto-fogo">{brasa.temperatura}</p>
              <p className="mt-1 text-xs text-osso/60">{brasa.temperaturaLabel}</p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <p className="kicker">04 — A brasa</p>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-md text-balance font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
              {brasa.titulo}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-osso/70">{brasa.intro}</p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {brasa.pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={0.1 + i * 0.06} className="border-t border-osso/12 pt-4">
                <p className="font-serif text-lg text-osso">{p.titulo}</p>
                <p className="mt-1.5 text-sm leading-6 text-osso/60">{p.texto}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link href="/brasa" className="group mt-9 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-brasa">
              Conheça o método
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
