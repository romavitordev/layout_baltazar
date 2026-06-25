import type { Metadata } from 'next'
import { Clock, Flame, MapPin, MessageCircle, ShoppingBag } from 'lucide-react'

import { endereco, horarios, pedido, waLink, waMensagens } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'
import { StatusAberto } from '@/components/ui/StatusAberto'

export const metadata: Metadata = {
  title: 'Visite',
  description:
    'Onde fica a Baltazar Burger em Sorocaba: Rua Pedro Álvares Cabral, 710 — Vila Progresso. Horários, salão e delivery (site, iFood e WhatsApp).',
  alternates: { canonical: '/visite' },
}

export default function VisitePage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-osso/10 bg-carvao pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="raios pointer-events-none absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2" aria-hidden />
        <div className="container-page relative">
          <p className="kicker">Visite</p>
          <h1 className="mt-5 max-w-3xl font-anton text-5xl uppercase leading-[0.95] tracking-tight text-osso md:text-7xl">
            A brasa fica <span className="texto-fogo">em Sorocaba.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-osso/65">
            Salão na Vila Progresso e delivery pela cidade. De quarta a domingo, a grelha está acesa.
          </p>
        </div>
      </header>

      {/* Mapa */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-osso/10 md:aspect-[21/7]">
        <iframe
          src={endereco.mapsEmbed}
          title={`Mapa — ${endereco.linha}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
          style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.7)' }}
        />
      </div>

      {/* Info */}
      <section className="bg-carvao py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <Reveal className="card-escuro p-7">
            <MapPin size={22} className="text-brasa" aria-hidden />
            <h2 className="mt-4 font-serif text-xl text-osso">Endereço</h2>
            <p className="mt-2 text-sm leading-7 text-osso/70">
              {endereco.rua}
              <br />
              {endereco.bairro} — {endereco.cidade}/{endereco.uf}
              <br />
              CEP {endereco.cep}
            </p>
            <a
              href={endereco.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm uppercase tracking-[0.16em] text-brasa underline-offset-4 hover:underline"
            >
              Como chegar →
            </a>
          </Reveal>

          <Reveal delay={0.07} className="card-escuro p-7">
            <Clock size={22} className="text-brasa" aria-hidden />
            <h2 className="mt-4 font-serif text-xl text-osso">Horários</h2>
            <div className="mt-2 text-sm leading-7 text-osso/70">
              {horarios.map((h) => (
                <p key={h.dias}>
                  <span className="text-osso">{h.dias}</span>
                  <br />
                  {h.horas}
                </p>
              ))}
            </div>
            <StatusAberto className="mt-4" />
          </Reveal>

          <Reveal delay={0.14} className="card-escuro p-7">
            <Flame size={22} className="text-brasa" aria-hidden />
            <h2 className="mt-4 font-serif text-xl text-osso">Delivery</h2>
            <p className="mt-2 text-sm leading-7 text-osso/70">
              No site sai {pedido.vantagemSite.toLowerCase()} e ainda acumula cashback. Cupom{' '}
              <span className="font-mono font-semibold text-brasa">{pedido.cupom}</span> no 1º pedido.
            </p>
            <div className="mt-4 grid gap-2">
              <a href={pedido.site} target="_blank" rel="noopener noreferrer" className="btn-fogo !py-2.5 text-xs">
                <Flame size={15} /> Nosso site
              </a>
              <a href={pedido.ifood} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2.5 text-xs">
                <ShoppingBag size={15} /> iFood
              </a>
              <a
                href={waLink(waMensagens.pedido)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5 text-xs"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <div className="container-page mt-10">
          <Reveal className="rounded-2xl border border-osso/10 bg-grelha p-7 text-center">
            <p className="font-serif text-lg italic text-osso/80">
              “Burger bom é burger quente — por isso a gente faz tudo na hora, do fogo pra sua mesa.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
