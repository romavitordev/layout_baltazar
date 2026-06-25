import Link from 'next/link'
import { Github, Instagram, MapPin, MessageCircle } from 'lucide-react'

import { brand, endereco, horarios, nav, pedido, waLink, waMensagens } from '@/lib/site'
import { PedirButton } from '@/components/layout/PedirButton'

export function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-osso/10 bg-carvao text-osso">
      <div className="raios pointer-events-none absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 opacity-60" aria-hidden />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_1fr] md:py-20">
        <div>
          <p className="font-anton text-4xl uppercase tracking-tight">Baltazar</p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] text-osso/50">grilled burger · {endereco.cidade}</p>
          <p className="mt-6 max-w-sm text-sm leading-7 text-osso/70">{brand.promessa}</p>
          <PedirButton className="btn-fogo mt-7">Peça agora</PedirButton>
        </div>

        <nav
          className="grid content-start gap-3 text-sm uppercase tracking-[0.18em] text-osso/75"
          aria-label="Navegação do rodapé"
        >
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-brasa">
              {item.label}
            </Link>
          ))}
          <a
            href={pedido.site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brasa underline-offset-4 hover:underline"
          >
            Pedir no site
          </a>
        </nav>

        <div className="text-sm leading-7 text-osso/70">
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-1 shrink-0 text-brasa" aria-hidden />
            <span>{endereco.linha}</span>
          </p>
          {horarios.map((h) => (
            <p key={h.dias} className="mt-1">
              {h.dias} · {h.horas}
            </p>
          ))}
          <div className="mt-5 flex gap-4 text-osso">
            <a
              aria-label="WhatsApp da Baltazar"
              href={waLink(waMensagens.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-brasa"
            >
              <MessageCircle size={20} />
            </a>
            <a
              aria-label="Instagram da Baltazar"
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-brasa"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page relative flex flex-col gap-2 border-t border-osso/10 py-6 text-xs text-osso/45 md:flex-row md:items-center md:justify-between">
        <p>© {ano} {brand.nomeCompleto} · Burger artesanal na brasa</p>
        <a
          href="https://github.com/romavitordev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-brasa"
        >
          <Github size={14} aria-hidden />
          Desenvolvido por romavitordev
        </a>
      </div>
    </footer>
  )
}
