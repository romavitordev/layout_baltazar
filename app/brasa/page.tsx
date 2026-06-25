import type { Metadata } from 'next'
import Image from 'next/image'

import { brasa, historia, imagens, montagem } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'
import { Pedir } from '@/components/home/Pedir'

export const metadata: Metadata = {
  title: 'A Brasa',
  description:
    'O método da Baltazar Burger: fogo vivo, carne pesada na hora, pão na chapa e a Maionese Baltazar. Por que na brasa muda tudo, desde 2017.',
  alternates: { canonical: '/brasa' },
}

export default function BrasaPage() {
  return (
    <>
      <header className="relative overflow-hidden bg-carvao pt-28 md:pt-36">
        <div className="container-page relative pb-14 md:pb-20">
          <p className="kicker">A brasa · desde 2017</p>
          <h1 className="mt-5 max-w-3xl font-anton text-5xl uppercase leading-[0.95] tracking-tight text-osso md:text-7xl">
            Fogo de verdade <span className="texto-fogo">muda tudo.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-osso/70">{historia.curta}</p>
        </div>

        <div className="relative aspect-[16/7] w-full overflow-hidden">
          <Image
            src={imagens.brasaHero.src}
            alt={imagens.brasaHero.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carvao via-carvao/30 to-transparent" />
        </div>
      </header>

      {/* Pilares */}
      <section className="bg-carvao py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="max-w-2xl font-serif text-3xl tracking-tight text-osso md:text-4xl">{brasa.titulo}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-osso/65">{brasa.intro}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brasa.pilares.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 0.06} className="card-escuro h-full p-6">
                <span className="font-mono text-sm text-brasa">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl text-osso">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-6 text-osso/65">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Os 6 passos (editorial) */}
      <section className="border-y border-osso/10 bg-grelha py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <p className="kicker">Da brasa ao pão</p>
            <h2 className="mt-5 font-serif text-3xl tracking-tight text-osso md:text-4xl">Seis passos, sem atalho.</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {montagem.map((p) => (
              <Reveal key={p.numero} className="flex gap-5 border-t border-osso/12 pt-6">
                <span className="font-anton text-4xl leading-none text-brasa/70 md:text-5xl">{p.numero}</span>
                <div>
                  <p className="label-mono text-osso/45">{p.ingrediente}</p>
                  <h3 className="mt-1 font-serif text-2xl text-osso">{p.titulo}</h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-osso/65">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Temperatura — número gigante */}
      <section className="relative overflow-hidden bg-carvao py-24 text-center md:py-32">
        <div className="raios pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2" aria-hidden />
        <div className="halo-brasa absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 animate-brasapulse" aria-hidden />
        <div className="container-page relative">
          <p className="t-num font-anton leading-none texto-fogo">{brasa.temperatura}</p>
          <p className="mt-4 text-base uppercase tracking-[0.2em] text-osso/60">{brasa.temperaturaLabel}</p>
        </div>
      </section>

      <Pedir />
    </>
  )
}
