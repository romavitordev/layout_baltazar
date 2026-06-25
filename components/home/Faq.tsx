import { Plus } from 'lucide-react'

import { faq } from '@/lib/site'
import { Reveal } from '@/components/ui/Reveal'

/** Perguntas frequentes — accordion nativo (details/summary), acessível. */
export function Faq() {
  return (
    <section className="bg-carvao py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="kicker">09 — Perguntas rápidas</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">Antes de pedir.</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-osso/10 border-y border-osso/10">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                  <span className="font-serif text-lg text-osso md:text-xl">{item.q}</span>
                  <Plus
                    size={20}
                    className="shrink-0 text-brasa transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-2xl pb-6 text-base leading-7 text-osso/65">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
