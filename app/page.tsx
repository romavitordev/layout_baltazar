import { faq } from '@/lib/site'
import { Hero } from '@/components/hero/Hero'
import { Manifesto } from '@/components/home/Manifesto'
import { Montagem } from '@/components/home/Montagem'
import { Numeros } from '@/components/home/Numeros'
import { Destaques } from '@/components/home/Destaques'
import { Brasa } from '@/components/home/Brasa'
import { Avaliacoes } from '@/components/home/Avaliacoes'
import { InstagramGrid } from '@/components/home/InstagramGrid'
import { Pedir } from '@/components/home/Pedir'
import { VisiteTeaser } from '@/components/home/VisiteTeaser'
import { Faq } from '@/components/home/Faq'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Manifesto />
      <Montagem />
      <Numeros />
      <Destaques />
      <Brasa />
      <Avaliacoes />
      <InstagramGrid />
      <Pedir />
      <VisiteTeaser />
      <Faq />
    </>
  )
}
