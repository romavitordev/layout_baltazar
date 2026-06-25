# Baltazar Burger — site-experiência

Hamburgueria artesanal **na brasa** de Sorocaba/SP (desde 2017). Site-experiência
premium: Next.js 14 (App Router) + TypeScript + Tailwind + GSAP/ScrollTrigger +
Lenis + Framer Motion. Identidade própria — tela de carvão, acento de brasa,
motivo de raios de calor e um hambúrguer que se monta no scroll.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Onde mexer no conteúdo

**Tudo** vive em [`lib/site.ts`](lib/site.ts): marca, cardápio e preços, horários,
endereço, canais de pedido (site/iFood/WhatsApp), cupom, avaliações e FAQ.
Trocar conteúdo = editar esse arquivo. Zero texto hardcoded nos componentes.

### Itens a preencher com dados reais (estão marcados como `PLACEHOLDER`)

- `brand.whatsapp` — número real (só dígitos, com DDI 55).
- `pedido.site` — link do site próprio de pedidos.
- `pedido.ifood` — link do iFood da loja.

## Fotos e vídeo (opcional, recomendado)

O site funciona com imagens-conceito (Unsplash) por enquanto. Para deixar com a
cara real da casa:

1. **Fotos dos burgers / Instagram:** troque as URLs em `lib/site.ts`
   (`destaquesCardapio`, `instagram`, `imagens`). Pode apontar para arquivos seus
   em `public/galeria/`.
2. **Vídeo do hero (scrubbed):** o hero já é um palco de brasa em CSS. Para um
   vídeo controlado por scroll, coloque `public/media/hero.mp4` (+ `hero-poster.jpg`)
   e me chame que eu ligo o scrub.

## Deploy

- **Repo principal (dev):** `baltazarburger_lndpage`.
- **Mirror GitHub Pages:** `layout_baltazar` (com `output: 'export'` + `basePath`).
  O push na `main` do mirror dispara o deploy via GitHub Actions.

---

Desenvolvido por [romavitordev](https://github.com/romavitordev).
