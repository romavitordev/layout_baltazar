import { ChevronDown } from 'lucide-react'

import { cardapio } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** Cardápio completo, por categoria. Itens com história ganham um expandível. */
export function CardapioCompleto() {
  return (
    <div className="space-y-20 md:space-y-28">
      {cardapio.map((cat) => (
        <section key={cat.categoria} id={slug(cat.categoria)} aria-label={cat.categoria}>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <h2 className="font-anton text-3xl uppercase tracking-tight text-osso md:text-4xl">{cat.categoria}</h2>
              <span className="h-px flex-1 bg-osso/15" aria-hidden />
            </div>
            {cat.nota && <p className="mt-3 max-w-2xl text-sm leading-6 text-fumaca">{cat.nota}</p>}
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cat.itens.map((item, i) => (
              <Reveal key={item.nome} delay={(i % 2) * 0.06}>
                <article className="card-escuro h-full p-5 transition-colors duration-300 hover:border-brasa/30">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="flex items-center gap-2 font-serif text-xl text-osso">
                      {item.nome}
                      {item.tag && <span className="chip border-brasa/40 px-2 py-0.5 text-[0.6rem] text-brasa">{item.tag}</span>}
                    </h3>
                    <span className="shrink-0 font-mono text-sm font-medium text-brasa">{item.preco}</span>
                  </div>

                  {item.descricao && <p className="mt-2 text-sm leading-6 text-osso/65">{item.descricao}</p>}

                  {item.historia && (
                    <details className="group mt-3">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-osso/45 transition-colors hover:text-brasa">
                        A história
                        <ChevronDown size={14} className="transition-transform group-open:rotate-180" aria-hidden />
                      </summary>
                      <p className="mt-2 border-l-2 border-brasa/30 pl-4 text-sm leading-7 text-osso/70">
                        {item.historia}
                      </p>
                    </details>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
