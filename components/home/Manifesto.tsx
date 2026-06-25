import { historia } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'

/** Manifesto editorial — a filosofia da brasa, em tipografia grande. */
export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-osso/10 bg-carvao py-24 md:py-36">
      <div className="container-page relative">
        <p className="kicker">01 — A nossa teimosia</p>

        <Reveal>
          <h2 className="mt-8 max-w-4xl font-serif text-3xl font-light leading-[1.22] tracking-tight text-osso md:text-5xl md:leading-[1.2]">
            Fogo de verdade. Carne pesada na hora,{' '}
            <span className="texto-fogo">grelhada na brasa até crostar.</span>{' '}
            <span className="text-osso/55">Sem congelado, sem atalho, sem pressa.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-12 max-w-2xl border-l-2 border-brasa/40 pl-6" delay={0.1}>
          <p className="text-base leading-8 text-osso/70 md:text-lg">{historia.manifesto}</p>
        </Reveal>
      </div>
    </section>
  )
}
