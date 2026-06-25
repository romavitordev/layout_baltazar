import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'

import { endereco, horarios } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'
import { StatusAberto } from '@/components/ui/StatusAberto'

/** Teaser de localização — endereço, horários, status e mapa. */
export function VisiteTeaser() {
  return (
    <section className="border-y border-osso/10 bg-grelha py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal>
          <p className="kicker">08 — Venha pra mesa</p>
          <h2 className="mt-5 max-w-md text-balance font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
            A brasa fica em Sorocaba.
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brasa" aria-hidden />
              <p className="text-osso/80">{endereco.linha}</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="mt-0.5 shrink-0 text-brasa" aria-hidden />
              <div className="text-osso/80">
                {horarios.map((h) => (
                  <p key={h.dias}>
                    <span className="text-osso">{h.dias}</span> · {h.horas}
                  </p>
                ))}
              </div>
            </div>
            <StatusAberto />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={endereco.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Como chegar
            </a>
            <Link href="/visite" className="btn-ghost group">
              Salão & delivery
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-osso/10 grayscale-[0.2]">
            <iframe
              src={endereco.mapsEmbed}
              title={`Mapa — ${endereco.linha}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.7)' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
