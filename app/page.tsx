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

export default function HomePage() {
  return (
    <>
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
