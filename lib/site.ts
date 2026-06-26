/**
 * Baltazar Burger — Sorocaba/SP
 * ---------------------------------------------------------------
 * TODO o conteúdo editável vive aqui: marca, cardápio, preços,
 * horários, endereço, canais de pedido e provas sociais.
 * Trocar conteúdo = editar este arquivo (zero texto hardcoded
 * nos componentes).
 *
 * Cardápio e preços conferidos com o cardápio oficial
 * (shop.beetech.com.br/baltazar.burger). Itens com PLACEHOLDER
 * ainda precisam do dado real do cliente (WhatsApp, iFood).
 */

export const brand = {
  nome: 'Baltazar',
  sufixo: 'grilled burger',
  nomeCompleto: 'Baltazar Burger — Sorocaba',
  tagline: 'Burger artesanal na brasa desde 2017.',
  selo: 'na brasa desde 2017',
  promessa: 'Carne grelhada no fogo, pão na chapa e a Maionese Baltazar — um caminho sem volta.',
  descricao:
    'Hamburgueria artesanal de Sorocaba. Hambúrguer grelhado no fogo, pão brioche tostado na chapa e a Maionese Baltazar feita na casa. Na brasa, sem atalho, desde 2017.',
  // PLACEHOLDER — troque pelo número real (só dígitos, com DDI 55).
  whatsapp: '5515991234567',
  instagram: '@baltazar.burger',
  instagramUrl: 'https://www.instagram.com/baltazar.burger/',
  url: 'https://baltazarburger.com.br',
}

/** Canais de pedido e oferta. */
export const pedido = {
  // Site/app oficial de pedidos (mais barato que o balcão).
  site: 'https://shop.beetech.com.br/baltazar.burger',
  // iFood da loja. PLACEHOLDER.
  ifood: 'https://www.ifood.com.br/',
  // Hub de links (estava na bio do Instagram).
  beacons: 'https://beacons.ai/baltazarburger',
  cupom: 'BALTA10',
  cupomTexto: '10% OFF no 1º pedido',
  ctaHero: 'Peça com 10% OFF',
  vantagemSite: '15% mais barato que no balcão',
  cashback: '1% de cashback em todo pedido (validade de 45 dias)',
}

export const endereco = {
  rua: 'Rua Pedro Álvares Cabral, 710',
  bairro: 'Vila Progresso',
  cidade: 'Sorocaba',
  uf: 'SP',
  cep: '18090-505',
  linha: 'Rua Pedro Álvares Cabral, 710 — Vila Progresso, Sorocaba/SP',
  mapsEmbed:
    'https://www.google.com/maps?q=Rua+Pedro+Alvares+Cabral+710+Vila+Progresso+Sorocaba+SP&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Rua+Pedro+Alvares+Cabral+710+Vila+Progresso+Sorocaba+SP',
}

export const horarios = [
  { dias: 'Quarta a domingo', horas: '18h às 23h' },
  { dias: 'Segunda e terça', horas: 'Fechado' },
]

/** Para o selo "Aberto agora" (getDay: dom=0 … sáb=6). Qua–Dom, 18h–23h. */
export const funcionamento = { diasAbertos: [3, 4, 5, 6, 0], abre: 18, fecha: 23 }

export const pagamentos = ['Pix', 'Crédito', 'Débito']

export const nav = [
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/brasa', label: 'A Brasa' },
  { href: '/visite', label: 'Visite' },
]

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export function waLink(mensagem: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

export const waMensagens = {
  geral: 'Opa! Vim pelo site da Baltazar Burger.',
  pedido: 'Salve! Quero fazer um pedido na Baltazar Burger.',
  item: (nome: string, preco: string) =>
    `Salve! Quero pedir o ${nome} (${preco}). Tá rolando entrega agora?`,
}

/* ------------------------------------------------------------------ */
/* Cardápio (oficial)                                                  */
/* ------------------------------------------------------------------ */

export type ItemCardapio = {
  nome: string
  descricao?: string
  preco: string
  historia?: string
  tag?: string
}

export const cardapio: { categoria: string; nota?: string; itens: ItemCardapio[] }[] = [
  {
    categoria: 'Hambúrgueres na brasa',
    nota: 'Grelhados no fogo. Salvo indicação, vêm com 150g de carne, pão brioche selado na chapa e Maionese Baltazar.',
    itens: [
      {
        nome: 'Baltazar',
        tag: 'O lendário',
        descricao:
          '1 burger suíno + 1 bovino (150g cada), pão australiano na chapa, cheddar, onion rings, molho barbecue, bacon fatiado e Maionese Baltazar.',
        preco: 'R$ 49',
        historia:
          'O burger que leva o nome da casa — e não leva desaforo pra mesa. Dois discos, suíno e bovino, grelhados no fogo, no pão australiano, com cheddar, onion rings crocantes, barbecue e bacon fatiado. É o pedido de quem veio com fome de verdade e quer entender por que a gente faz tudo na brasa.',
      },
      {
        nome: 'Super Gratinado',
        tag: 'Fome braba',
        descricao: 'Burger bovino de 200g, o dobro de mussarela gratinada, o dobro de bacon e Maionese Baltazar.',
        preco: 'R$ 43',
        historia:
          '200 gramas de carne na brasa, dose dupla de mussarela gratinada por cima e o dobro de bacon. Sem firula e sem meio-termo — é o burger pra quem acha que queijo nunca é demais.',
      },
      {
        nome: 'Bacon',
        tag: 'Clássico',
        descricao: 'Cheddar cremoso, cebola roxa, bacon fatiado e Maionese Baltazar.',
        preco: 'R$ 32',
        historia:
          'O xodó da casa e um dos mais pedidos desde sempre. Carne na brasa, cheddar cremoso derretido no calor, bacon fatiado e cebola roxa pra cortar a gordura — segurado pela Maionese Baltazar. O clássico que a gente entrega de olho fechado.',
      },
      {
        nome: 'Caramelo Três Queijos',
        tag: 'Três queijos',
        descricao: 'Cheddar, mussarela e queijo coalho, cebola caramelizada e bacon.',
        preco: 'R$ 42',
      },
      {
        nome: 'Catupiry Empanado',
        tag: 'Ousado',
        descricao: 'Catupiry empanado e frito, mussarela, tomate, bacon e Maionese Baltazar.',
        preco: 'R$ 48',
        historia:
          'Pra quem gosta de exagero do bom: uma porção de catupiry empanado e frito por cima da carne na brasa, com mussarela, tomate e bacon. Crocante por fora, cremoso por dentro — escorre na primeira mordida e ninguém reclama.',
      },
      {
        nome: 'Afogado',
        tag: 'Diferentão',
        descricao: 'O burger cortado ao meio e afogado numa camada de creme de queijo com pedaços de bacon.',
        preco: 'R$ 42',
        historia:
          'A gente pega o burger (carne bovina de 150g, pão brioche e mussarela), corta ao meio e afoga numa camada generosa de creme de queijo com pedaços de bacon. Come de garfo e faca, sem pressa. Não é pra todo mundo — é pra quem topa.',
      },
      {
        nome: 'Pork',
        descricao: 'Burger suíno de 150g, queijo coalho grelhado, vinagrete, molho barbecue e Maionese Baltazar.',
        preco: 'R$ 31',
      },
      {
        nome: 'Salada',
        descricao: 'Mussarela, alface, tomate, cebola roxa, picles e Maionese Baltazar.',
        preco: 'R$ 31',
      },
      {
        nome: 'Burger',
        tag: 'O começo',
        descricao: 'Mussarela, picles, ketchup e Maionese Baltazar.',
        preco: 'R$ 25',
        historia:
          'Pão, carne na brasa e queijo — do jeito que burger bom começou. O teste de qualquer hamburgueria: se o simples é bom, o resto é bom.',
      },
      {
        nome: 'Vegetariano',
        tag: 'Sem carne',
        descricao: 'Burger de cogumelos (mix de shitake e shimeji) de 100g, mussarela, coalho, alface, tomate, cebola roxa e picles.',
        preco: 'R$ 36',
        historia:
          'Sem carne, com a mesma atenção: um burger de mix de shitake e shimeji, dourado na chapa, com dois queijos e salada fresca. Prova de que vegetariano também merece ir pro fogo.',
      },
      {
        nome: 'Kids',
        tag: 'Kids',
        descricao: 'Burger de 80g, pão brioche na chapa, mussarela e ketchup.',
        preco: 'R$ 18',
      },
    ],
  },
  {
    categoria: 'Combos em promoção',
    nota: 'Os queridinhos da casa em versão combo. Peça pelo site e ative o cupom BALTA10 no primeiro pedido.',
    itens: [
      { nome: 'Baltazar Combo', preco: 'R$ 64' },
      { nome: 'Super Gratinado Combo', preco: 'R$ 58' },
      { nome: 'Catupiry Empanado Combo', preco: 'R$ 63' },
      { nome: 'Caramelo Três Queijos Combo', preco: 'R$ 57' },
      { nome: 'Afogado Combo', preco: 'R$ 57' },
      { nome: 'Vegetariano Combo', preco: 'R$ 51' },
      { nome: 'Bacon Combo', preco: 'R$ 47' },
      { nome: 'Pork Combo', preco: 'R$ 46' },
      { nome: 'Salada Combo', preco: 'R$ 46' },
      { nome: 'Burger Combo', preco: 'R$ 40' },
    ],
  },
  {
    categoria: 'Lanches na baguete',
    nota: 'Carnes desfiadas no pão baguete, com queijo gratinado e vinagrete.',
    itens: [
      {
        nome: 'Costela na Baguete',
        descricao: 'Costela feita no bafo e desfiada, mussarela gratinada, vinagrete e Maionese Baltazar.',
        preco: 'R$ 43',
      },
      {
        nome: 'Cupim na Baguete',
        descricao: 'Cupim levemente defumado e desfiado, mussarela gratinada, vinagrete e Maionese Baltazar.',
        preco: 'R$ 43',
      },
      {
        nome: 'Pernil na Baguete',
        descricao: 'Pernil suíno defumado e desfiado, molho barbecue, mussarela gratinada e vinagrete.',
        preco: 'R$ 38',
      },
    ],
  },
  {
    categoria: 'Costelinha no barbecue',
    itens: [
      {
        nome: 'Costelinha BBQ',
        tag: 'Serve 2 a 3',
        descricao:
          'Costelinha de porco defumada e finalizada no barbecue (~800g), com porção de batata (200g), vinagrete e Maionese Baltazar.',
        preco: 'R$ 99',
        historia:
          'A peça que fica horas no defumador até a carne soltar do osso, pincelada no nosso barbecue. Vem com batata, vinagrete e maionese — feita pra dividir entre 2 ou 3, mas a gente entende se você não quiser dividir.',
      },
    ],
  },
  {
    categoria: 'Porções',
    nota: 'Pra dividir na mesa — ou não.',
    itens: [
      {
        nome: 'Batata Baltazar',
        descricao: 'Batata palito com o tempero da casa. Individual 100g; a grande (300g) acompanha Maionese Baltazar.',
        preco: 'a partir de R$ 12',
      },
      { nome: 'Batata Palito', descricao: 'A tradicional, sequinha.', preco: 'a partir de R$ 11' },
      { nome: 'Batata Palito Cheddar e Bacon', descricao: 'Coberta com cheddar e bacon.', preco: 'a partir de R$ 19' },
      { nome: 'Batata Rústica', descricao: 'Com casca, sequinha.', preco: 'a partir de R$ 14' },
      { nome: 'Batata Rústica Cheddar e Bacon', descricao: 'Rústica coberta com cheddar e bacon.', preco: 'a partir de R$ 22' },
      { nome: 'Onion Rings', descricao: 'Anéis de cebola empanados na hora (100g).', preco: 'a partir de R$ 14' },
      { nome: 'Onion Rings Cheddar e Bacon', descricao: 'Com cheddar e bacon por cima.', preco: 'a partir de R$ 22' },
      { nome: 'Batata com Costela', descricao: 'Batata com costela desfiada e requeijão cremoso.', preco: 'R$ 45' },
      { nome: 'Batata com Cupim', descricao: 'Batata com cupim desfiado e requeijão cremoso.', preco: 'R$ 45' },
      {
        nome: 'Batata com Pulled Pork',
        descricao: 'Batata com pernil defumado e desfiado, requeijão, barbecue e cebolinha.',
        preco: 'R$ 42',
      },
      { nome: 'Bolinho de Cupim Defumado', descricao: '8 unidades, com molho à sua escolha.', preco: 'R$ 42' },
      { nome: 'Dadinho de Tapioca', descricao: '250g, com molho à sua escolha.', preco: 'R$ 27' },
    ],
  },
  {
    categoria: 'Saladas (sem pão)',
    nota: 'A carne na brasa sem o pão, pra quem quer mais leve.',
    itens: [
      {
        nome: 'Salada Baltazar',
        descricao: 'Burger de 140g, alface, tomate, cebola roxa, picles, mussarela e Maionese Baltazar.',
        preco: 'R$ 29',
      },
      {
        nome: 'Salada Proteica',
        descricao: 'Burger bovino de 150g, ovo, bacon, salada, mussarela e Maionese Baltazar.',
        preco: 'R$ 38',
      },
      {
        nome: 'Salada Vegetariana',
        descricao: 'Burger de cogumelos, salada, queijo coalho e Maionese Baltazar.',
        preco: 'R$ 32',
      },
    ],
  },
  {
    categoria: 'Milk shakes',
    nota: '400ml, base de creme americano. Os com bebida alcoólica são pra maiores de 18.',
    itens: [
      { nome: 'Super Sensação', descricao: 'Morango com pedaços, Nutella e Ovomaltine por cima.', preco: 'R$ 26' },
      { nome: 'Leite Ninho e Nutella', descricao: 'Leite Ninho e muita Nutella.', preco: 'R$ 26' },
      { nome: 'Morango com Ninho', preco: 'R$ 26' },
      { nome: 'Ovomaltine', descricao: 'Calda de chocolate e Ovomaltine em pó.', preco: 'R$ 26' },
      { nome: 'Nutella', preco: 'R$ 26' },
      { nome: 'Cookies', preco: 'R$ 26' },
      { nome: 'Leite Ninho', preco: 'R$ 26' },
      { nome: 'Prestígio', descricao: 'Calda de chocolate e coco ralado.', preco: 'R$ 26' },
      { nome: 'Doce de Leite', preco: 'R$ 26' },
      { nome: 'Paçoca', preco: 'R$ 26' },
      { nome: 'Amarula', descricao: 'Baunilha, uma dose de Amarula e calda de chocolate. (+18)', preco: 'R$ 30' },
      { nome: 'Jack Daniel’s', descricao: 'Calda de caramelo e uma dose de whiskey. (+18)', preco: 'R$ 30' },
      { nome: 'Caipirinha', descricao: 'Baunilha, uma dose de vodka e limão. (+18)', preco: 'R$ 30' },
      { nome: 'Chocolate', preco: 'R$ 22' },
      { nome: 'Baunilha', preco: 'R$ 22' },
      { nome: 'Morango', descricao: 'Calda de morango com pedaços.', preco: 'R$ 22' },
    ],
  },
  {
    categoria: 'Sobremesa',
    itens: [
      {
        nome: 'Burger de Nutella',
        tag: 'Doce',
        descricao: 'Nutella empanada e frita, calda de morango, no pão brioche polvilhado com leite Ninho.',
        preco: 'R$ 25',
        historia:
          'A brincadeira que virou pedido fixo: a gente empana e frita a Nutella, joga calda de morango e monta num brioche doce com leite Ninho. Um burger de sobremesa — porque na Baltazar o fogo também faz doce.',
      },
    ],
  },
  {
    categoria: 'Molhos da casa',
    nota: 'Um caminho sem volta. Potinho de 30g.',
    itens: [
      {
        nome: 'Maionese Baltazar',
        tag: 'A assinatura',
        descricao: 'A receita da casa que o pessoal pede pra levar. A gente nunca conta o que tem.',
        preco: 'R$ 3',
      },
      { nome: 'Geléia de Pimenta', preco: 'R$ 5' },
      { nome: 'Molho Barbecue', preco: 'R$ 4' },
      { nome: 'Melado de Cana', preco: 'R$ 4' },
    ],
  },
  {
    categoria: 'Bebidas',
    itens: [
      { nome: 'Refrigerante lata', descricao: '350ml.', preco: 'a partir de R$ 8' },
      { nome: 'Suco Del Valle lata', descricao: 'Maracujá ou uva.', preco: 'R$ 7' },
      { nome: 'H2O', descricao: 'Limão ou limoneto.', preco: 'R$ 9' },
      { nome: 'Água', descricao: 'Com ou sem gás.', preco: 'R$ 4' },
      { nome: 'Heineken long neck', descricao: 'Produto para maiores de 18 anos.', preco: 'R$ 12' },
      { nome: 'Heineken 600ml', descricao: 'Produto para maiores de 18 anos.', preco: 'R$ 22' },
      { nome: 'Budweiser long neck', descricao: 'Produto para maiores de 18 anos.', preco: 'R$ 12' },
      { nome: 'Original 600ml', descricao: 'Produto para maiores de 18 anos.', preco: 'R$ 19' },
      { nome: 'Heineken Zero', descricao: 'Sem álcool, long neck.', preco: 'R$ 12' },
      { nome: 'Smirnoff Ice', descricao: 'Produto para maiores de 18 anos.', preco: 'R$ 12' },
    ],
  },
]

/** Destaques exibidos na home (com imagem). */
export type Destaque = {
  nome: string
  descricao: string
  preco: string
  tag: string
  imagem: string
  imagemAlt: string
}

export const destaquesCardapio: Destaque[] = [
  {
    nome: 'Baltazar',
    descricao: 'Suíno + bovino, pão australiano, cheddar, onion rings, barbecue e bacon.',
    preco: 'R$ 49',
    tag: 'O lendário',
    imagem:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer duplo alto com duas carnes, cheddar e onion rings',
  },
  {
    nome: 'Bacon',
    descricao: 'Cheddar cremoso, cebola roxa, bacon fatiado e Maionese Baltazar.',
    preco: 'R$ 32',
    tag: 'Clássico',
    imagem:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer artesanal com bacon e cheddar derretido, fundo escuro',
  },
  {
    nome: 'Afogado',
    descricao: 'Cortado ao meio e afogado em creme de queijo com bacon.',
    preco: 'R$ 42',
    tag: 'Diferentão',
    imagem:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer coberto por molho cremoso de queijo escorrendo',
  },
  {
    nome: 'Costelinha BBQ',
    descricao: 'Costela defumada no barbecue (~800g) com batata e vinagrete. Serve 2 a 3.',
    preco: 'R$ 99',
    tag: 'Pra dividir',
    imagem:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Costelinha suína caramelizada com molho barbecue sobre tábua',
  },
]

/* ------------------------------------------------------------------ */
/* História & números                                                  */
/* ------------------------------------------------------------------ */

export const historia = {
  manifesto:
    'A gente acredita em fogo de verdade. Carne grelhada na hora, pão tostado na chapa, queijo que derrete no calor e a Maionese Baltazar fechando tudo. Sem congelado, sem atalho, sem pressa. Burger é coisa simples — por isso cada detalhe conta.',
  curta:
    'A Baltazar nasceu em 2017 de uma obsessão por carne grelhada no fogo. Uma chapa quente, uma grelha na brasa e a teimosia de fazer o hambúrguer artesanal que a gente queria comer em Sorocaba.',
}

export const contadores = [
  { valor: 9, sufixo: '', label: 'anos no fogo, desde 2017' },
  { valor: 30, sufixo: '+', label: 'opções no cardápio' },
  { valor: 23, sufixo: ' mil', label: 'na nossa mesa no Instagram' },
]

export const avaliacaoDestaque = { media: '5.0', total: '23 mil seguidores' }

/* ------------------------------------------------------------------ */
/* Da brasa ao pão (seção pinada da home)                              */
/* ------------------------------------------------------------------ */

export type PassoMontagem = {
  numero: string
  titulo: string
  ingrediente: string
  texto: string
}

export const montagem: PassoMontagem[] = [
  {
    numero: '01',
    titulo: 'A carne',
    ingrediente: 'Pesada na hora',
    texto: 'Carne pesada na hora e levada à grelha — 150g no clássico, 200g no gratinado. Nada de disco congelado esperando na geladeira.',
  },
  {
    numero: '02',
    titulo: 'No fogo',
    ingrediente: 'Grelhada na brasa',
    texto: 'A carne vai pro fogo e ganha o sabor que só a brasa dá: fumaça de verdade, beirada caramelizada e o ponto suculento no centro.',
  },
  {
    numero: '03',
    titulo: 'O queijo',
    ingrediente: 'Derretido no calor',
    texto: 'Cheddar, mussarela ou coalho por cima ainda no calor, pra derreter e abraçar a carne. Derrete junto, vira uma coisa só.',
  },
  {
    numero: '04',
    titulo: 'A maionese',
    ingrediente: 'Maionese Baltazar',
    texto: 'A receita da casa, feita aqui, generosa. É a assinatura que o pessoal pede pra levar em pote — e a gente nunca conta o que tem.',
  },
  {
    numero: '05',
    titulo: 'O pão',
    ingrediente: 'Brioche na chapa',
    texto: 'Pão brioche (australiano no Baltazar) selado na manteiga na chapa quente até dourar. Aguenta o recheio e traz o tostado no primeiro contato.',
  },
  {
    numero: '06',
    titulo: 'Montado',
    ingrediente: 'Na sua mão',
    texto: 'Tudo junto, montado na hora, ainda fumegando. Do fogo pra sua mão no menor tempo possível — porque burger bom é burger quente.',
  },
]

/* ------------------------------------------------------------------ */
/* A brasa (página/seção do método)                                    */
/* ------------------------------------------------------------------ */

export const brasa = {
  titulo: 'Por que grelhar no fogo muda tudo',
  intro:
    'Chapa cozinha. Brasa transforma. O fogo vivo sela a carne, puxa a gordura pro sabor e deixa a fumaça fazer o resto. É mais trabalhoso, mais quente e mais lento — e é exatamente por isso que a gente faz assim.',
  pilares: [
    {
      titulo: 'Grelhado no fogo',
      texto: 'Brasa de verdade, controlada no olho e na mão. Cada carne vai pro fogo no ponto certo — não tem timer que substitua quem está na grelha.',
    },
    {
      titulo: 'Carne pesada na hora',
      texto: 'Blend fresco, pesado na hora do pedido — 150g no clássico, 200g no gratinado. Nada de disco congelado.',
    },
    {
      titulo: 'Maionese Baltazar',
      texto: 'Feita na casa, do zero. É a assinatura que liga tudo, vendida em pote e a coisa que mais perguntam a receita — sem sucesso.',
    },
    {
      titulo: 'Pão na chapa',
      texto: 'Brioche (ou australiano) selado na manteiga até dourar. Estrutura pra segurar e sabor no primeiro toque.',
    },
  ],
  temperatura: '+250°C',
  temperaturaLabel: 'na brasa, onde a carne crosta',
}

/* ------------------------------------------------------------------ */
/* Hero — palco de brasa (e pronto pra vídeo no scroll)                */
/* ------------------------------------------------------------------ */

/**
 * Para ativar o HERO em VÍDEO controlado por scroll, coloque os arquivos
 * em /public/media e preencha os caminhos abaixo (relativos à raiz pública).
 * Com os campos vazios, o hero usa o palco de brasa em CSS (atual).
 * Dica de encode: vídeo all-intra (keyframe a cada frame) pra seek liso.
 */
export const hero = {
  video: '', // ex.: '/media/hero.mp4'
  videoMobile: '', // ex.: '/media/hero-mobile.mp4'
  poster: '', // ex.: '/media/hero-poster.jpg'
}

/* ------------------------------------------------------------------ */
/* Imagens (Unsplash — placeholders do conceito)                       */
/* Troque por fotos reais em /public/galeria quando tiver.             */
/* ------------------------------------------------------------------ */

export const imagens = {
  og: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
  brasaHero: {
    src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1600&q=80',
    alt: 'Carne sendo grelhada na brasa com chamas e fumaça',
  },
  cardapioHero: {
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80',
    alt: 'Hambúrguer artesanal com batatas fritas em tábua escura',
  },
  visiteHero: {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    alt: 'Salão de hamburgueria com luz quente e ambiente acolhedor',
  },
}

/* Grade do Instagram (estática — sem API). Troque pelos seus posts. */
export const instagram = [
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=75', alt: 'Hambúrguer com bacon e cheddar' },
  { src: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=75', alt: 'Hambúrguer duplo alto' },
  { src: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=75', alt: 'Hambúrguer com molho escorrendo' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=75', alt: 'Costelinha com barbecue' },
  { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=75', alt: 'Combo de hambúrguer com fritas' },
  { src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=75', alt: 'Carne na brasa com fogo' },
  { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=75', alt: 'Hambúrguer artesanal close' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=75', alt: 'Hambúrguer com queijo derretido' },
]

/* ------------------------------------------------------------------ */
/* Avaliações (prova social)                                           */
/* ------------------------------------------------------------------ */

export type Avaliacao = { nome: string; nota: number; texto: string; quando: string }

export const avaliacoes: Avaliacao[] = [
  { nome: 'Rafael Munhoz', nota: 5, quando: 'há 1 semana', texto: 'Melhor burger de Sorocaba, sem discussão. A carne grelhada no fogo é outro nível e a tal Maionese Baltazar vicia mesmo.' },
  { nome: 'Carla Diniz', nota: 5, quando: 'há 2 semanas', texto: 'A Costelinha BBQ desmancha na boca e serve a mesa toda. Já virei cliente fixa.' },
  { nome: 'Thiago Prado', nota: 5, quando: 'há 3 dias', texto: 'O Baltazar é uma experiência. Vim pela fama do Instagram e a real é melhor que o vídeo.' },
  { nome: 'Bianca Lemos', nota: 5, quando: 'há 1 mês', texto: 'Pedi o Afogado e não tem volta. Ambiente gostoso e ponto da carne perfeito.' },
  { nome: 'Eduardo Salles', nota: 5, quando: 'há 5 dias', texto: 'Pedi pelo site com o cupom e veio rápido e quente. Onion rings crocantes que nem na hora.' },
  { nome: 'Marina Couto', nota: 5, quando: 'há 2 meses', texto: 'O Catupiry Empanado é absurdo de bom. Combinação de queijo, bacon e a maionese da casa: perfeito.' },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  { q: 'Qual o horário de funcionamento?', a: 'Abrimos de quarta a domingo, das 18h às 23h. Segunda e terça a brasa descansa.' },
  { q: 'Vocês fazem entrega?', a: 'Fazemos! Peça pelo nosso site (mais barato), pelo iFood ou chame no WhatsApp. O cupom BALTA10 dá 10% OFF no primeiro pedido no site.' },
  { q: 'Por que pedir pelo site é mais barato?', a: 'No nosso site próprio o pedido sai cerca de 15% mais barato que no balcão, e ainda acumula 1% de cashback pra usar depois.' },
  { q: 'Tem combo?', a: 'Tem — quase todo burger queridinho tem versão combo, em promoção. Dá uma olhada na seção de Combos do cardápio.' },
  { q: 'A Costelinha BBQ serve quantas pessoas?', a: 'A Costelinha BBQ tem cerca de 800g e vem com batata e vinagrete — serve tranquilo de 2 a 3 pessoas.' },
  { q: 'Tem opção sem carne bovina?', a: 'Tem: o Vegetariano é de cogumelos (shitake e shimeji), e ainda temos o Pork (suíno) e os lanches de pernil, costela e cupim na baguete.' },
  { q: 'Dá pra comprar a Maionese Baltazar?', a: 'Dá! Vendemos em potinho de 30g. É um caminho sem volta — não diga que não avisamos.' },
  { q: 'Quais as formas de pagamento?', a: 'Pix, débito, crédito e os apps de delivery. No salão também tem cerveja gelada e milk shakes.' },
]
