/**
 * Baltazar Burger — Sorocaba/SP
 * ---------------------------------------------------------------
 * TODO o conteúdo editável vive aqui: marca, cardápio, preços,
 * horários, endereço, canais de pedido e provas sociais.
 * Trocar conteúdo = editar este arquivo (zero texto hardcoded
 * nos componentes).
 *
 * Itens marcados com PLACEHOLDER precisam dos dados reais do
 * cliente (WhatsApp, link do site de pedidos, iFood).
 */

export const brand = {
  nome: 'Baltazar',
  sufixo: 'grilled burger',
  nomeCompleto: 'Baltazar Burger — Sorocaba',
  tagline: 'Burger artesanal na brasa desde 2017.',
  promessa: 'Carne na brasa, fogo de verdade e a maionese que virou assinatura.',
  descricao:
    'Hamburgueria artesanal de Sorocaba. Blend de 150g selado na brasa, pão brioche tostado na chapa e a Maionese Baltazar feita na casa. Na brasa, sem atalho, desde 2017.',
  // PLACEHOLDER — troque pelo número real (só dígitos, com DDI 55).
  whatsapp: '5515991234567',
  instagram: '@baltazar.burger',
  instagramUrl: 'https://www.instagram.com/baltazar.burger/',
  url: 'https://baltazarburger.com.br',
}

/** Canais de pedido e oferta. PLACEHOLDER nos links externos. */
export const pedido = {
  // Site próprio de pedidos (mais barato). PLACEHOLDER.
  site: 'https://pedido.anota.ai/loja/baltazar-burger',
  // iFood da loja. PLACEHOLDER.
  ifood: 'https://www.ifood.com.br/',
  // Hub de links (estava na bio do Instagram).
  beacons: 'https://beacons.ai/baltazarburger',
  cupom: 'BALTA10',
  cupomTexto: '10% OFF no 1º pedido',
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
  mesa: (pessoas: string, dia: string, horario: string, nome: string) =>
    `Opa! Queria garantir uma mesa na Baltazar — ${pessoas} pessoa(s), ${dia} às ${horario}. Nome: ${nome}.`,
}

/* ------------------------------------------------------------------ */
/* Cardápio                                                            */
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
    categoria: 'Burgers na brasa',
    nota: 'Blend de 150g selado na brasa, pão brioche na chapa e Maionese Baltazar. Todos saem fumegando.',
    itens: [
      {
        nome: 'O Baltazar',
        tag: 'Assinatura',
        descricao: 'Bacon, cheddar cremoso, cebola roxa e Maionese Baltazar.',
        preco: 'R$ 32',
        historia:
          'O burger que acendeu tudo em 2017 e nunca saiu do cardápio. Carne na brasa, cheddar derretido no calor, bacon crocante e a cebola roxa pra cortar a gordura — segurado pela Maionese Baltazar, a receita da casa que o pessoal pede pra levar em pote. É o pedido que a gente entrega de olho fechado.',
      },
      {
        nome: 'Brasa Clássico',
        tag: 'O começo',
        descricao: 'Mussarela, picles, ketchup da casa e cebola.',
        preco: 'R$ 25',
        historia:
          'Pão, carne na brasa e queijo — do jeito que burger bom começou. Mussarela derretida, picles pra acidez, cebola e o nosso ketchup da casa. Sem firula, no ponto certo. O teste de qualquer hamburgueria: se o simples é bom, o resto é bom.',
      },
      {
        nome: 'Verde & Brasa',
        descricao: 'Mussarela, alface americana, tomate e cebola roxa.',
        preco: 'R$ 31',
        historia:
          'Pra quem quer a brasa com frescor. A mesma carne selada no fogo, com alface americana crocante, tomate e cebola roxa. Leve sem ser sem graça — o vegetal entra pra equilibrar, não pra esconder a carne.',
      },
      {
        nome: 'Costela 12 Horas',
        tag: 'Mais pedido',
        descricao: 'Costelinha desfiada 12h na brasa, barbecue defumado e cheddar.',
        preco: 'R$ 36',
        historia:
          'Costela suína que passa doze horas na brasa baixa até desmanchar. Desfiamos na hora, banhamos no nosso barbecue defumado e fechamos com cheddar sobre a carne de 150g. Dois tipos de carne, uma mordida só. Quando acaba a costela do dia, acabou.',
      },
      {
        nome: 'Duplo Fogo',
        tag: 'Pra fome braba',
        descricao: 'Dois smash de 150g, cheddar duplo, bacon e Maionese Baltazar.',
        preco: 'R$ 39',
        historia:
          'Dobro de carne, dobro de brasa. Dois discos de 150g prensados fino pra crostar na chapa, cheddar entre as camadas e bacon no topo. É o burger que pede as duas mãos e um guardanapo extra. Não vem com pedido de desculpas.',
      },
      {
        nome: 'Pernil na Brasa',
        descricao: 'Pernil assado lento, vinagrete da casa e maionese.',
        preco: 'R$ 34',
        historia:
          'Uma homenagem ao sanduíche de pernil de boteco, com sotaque de brasa. Pernil suíno temperado e assado lento até soltar no garfo, no brioche tostado, com vinagrete fresco pra cortar. Diferente, honesto e do tamanho da fome.',
      },
    ],
  },
  {
    categoria: 'Costelinha & porções',
    nota: 'Pra dividir na mesa — ou não.',
    itens: [
      {
        nome: 'Costelinha na Brasa',
        tag: 'Da casa',
        descricao: 'Costela suína marinada e assada lenta na brasa, com barbecue.',
        preco: 'R$ 49',
        historia:
          'A peça que fica horas na brasa, marinada na véspera. Casca caramelizada por fora, carne soltando do osso por dentro, pincelada no barbecue defumado da casa. Vem pra mesa pra ser disputada — costuma sair antes de todo mundo decidir o burger.',
      },
      {
        nome: 'Batata Rústica',
        descricao: 'Batata com casca, alecrim e parmesão. Vai com a Maionese Baltazar.',
        preco: 'R$ 24',
      },
      {
        nome: 'Onion Rings',
        descricao: 'Anéis de cebola empanados na hora, crocantes por fora, doces por dentro.',
        preco: 'R$ 26',
      },
      {
        nome: 'Frango a Passarinho',
        descricao: 'Frango crocante com alho dourado e limão.',
        preco: 'R$ 32',
      },
      {
        nome: 'Mix Baltazar',
        descricao: 'Batata, onion rings e frango a passarinho na mesma porção.',
        preco: 'R$ 38',
      },
    ],
  },
  {
    categoria: 'Milk shakes',
    itens: [
      { nome: 'Ovomaltine', descricao: 'O clássico, com floco crocante de verdade.', preco: 'R$ 22' },
      { nome: 'Ninho com Nutella', descricao: 'Leite Ninho e Nutella — pedido garantido.', preco: 'R$ 24' },
      { nome: 'Morango', descricao: 'Morango com leite condensado, cremoso.', preco: 'R$ 20' },
    ],
  },
  {
    categoria: 'Drinks',
    itens: [
      { nome: 'Chopp Artesanal', descricao: 'Gelado, da torneira. Pergunte o rótulo do dia.', preco: 'R$ 14' },
      { nome: 'Limonada Suíça', descricao: 'Batida na hora, bem cítrica.', preco: 'R$ 12' },
      { nome: 'Refri / Água', descricao: 'Lata, água com ou sem gás.', preco: 'R$ 7' },
    ],
  },
  {
    categoria: 'Sobremesas',
    itens: [
      { nome: 'Petit Gâteau', descricao: 'Bolo quente de chocolate com sorvete de creme.', preco: 'R$ 22' },
      { nome: 'Churros na Brasa', descricao: 'Tostado no fogo, com doce de leite.', preco: 'R$ 18' },
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
    nome: 'O Baltazar',
    descricao: 'Bacon, cheddar cremoso, cebola roxa e Maionese Baltazar.',
    preco: 'R$ 32',
    tag: 'Assinatura',
    imagem:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer artesanal com bacon e cheddar derretido, fundo escuro',
  },
  {
    nome: 'Costela 12 Horas',
    descricao: 'Costelinha desfiada na brasa, barbecue defumado e cheddar.',
    preco: 'R$ 36',
    tag: 'Mais pedido',
    imagem:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer suculento com carne desfiada e molho barbecue escorrendo',
  },
  {
    nome: 'Duplo Fogo',
    descricao: 'Dois smash de 150g, cheddar duplo e bacon.',
    preco: 'R$ 39',
    tag: 'Fome braba',
    imagem:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80',
    imagemAlt: 'Hambúrguer duplo alto com duas carnes e cheddar entre as camadas',
  },
  {
    nome: 'Costelinha na Brasa',
    descricao: 'Costela suína marinada, assada lenta, com barbecue da casa.',
    preco: 'R$ 49',
    tag: 'Da casa',
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
    'A gente acredita em fogo de verdade. Carne pesada na hora, selada na brasa até crostar, queijo que derrete no calor e pão tostado na chapa. Sem congelado, sem atalho, sem pressa. Burger é coisa simples — por isso cada detalhe conta.',
  curta:
    'A Baltazar nasceu em 2017 de uma obsessão por carne na brasa. Uma chapa quente, uma grelha no fogo e a teimosia de fazer o hambúrguer artesanal que a gente queria comer em Sorocaba.',
}

export const contadores = [
  { valor: 9, sufixo: '', label: 'anos na brasa, desde 2017' },
  { valor: 150, sufixo: 'g', label: 'de carne em cada burger' },
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
    ingrediente: 'Blend 150g',
    texto: 'Blend bovino pesado na hora e prensado fino na chapa quente, pra formar aquela crosta dourada que segura todo o suco dentro.',
  },
  {
    numero: '02',
    titulo: 'Na brasa',
    ingrediente: 'Fogo de verdade',
    texto: 'A carne vai pro fogo e ganha o sabor que só a brasa dá: fumaça de verdade, beirada caramelizada e o ponto suculento no centro.',
  },
  {
    numero: '03',
    titulo: 'O queijo',
    ingrediente: 'Cheddar / mussarela',
    texto: 'Queijo por cima ainda no calor, pra derreter e abraçar a carne. Nada de queijo frio caído depois — derrete junto, vira uma coisa só.',
  },
  {
    numero: '04',
    titulo: 'A maionese',
    ingrediente: 'Maionese Baltazar',
    texto: 'A receita da casa, feita aqui, generosa. É o tempero secreto que o pessoal jura que leva pra casa em pote — e a gente nunca conta o que tem.',
  },
  {
    numero: '05',
    titulo: 'O pão',
    ingrediente: 'Brioche na chapa',
    texto: 'Pão brioche macio, selado na manteiga na chapa quente até dourar. Aguenta o recheio sem desmanchar e ainda traz aquele tostado no primeiro contato.',
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
  titulo: 'Por que na brasa muda tudo',
  intro:
    'Chapa cozinha. Brasa transforma. O fogo vivo sela a carne, puxa a gordura pro sabor e deixa a fumaça fazer o resto. É mais trabalhoso, mais quente e mais lento — e é exatamente por isso que a gente faz assim.',
  pilares: [
    {
      titulo: 'Fogo vivo, não botão',
      texto: 'Brasa de verdade, controlada no olho e na mão. Cada carne vai pro fogo no ponto certo — não tem timer que substitua quem está na grelha.',
    },
    {
      titulo: 'Carne pesada na hora',
      texto: 'Blend bovino fresco, 150g pesados na hora do pedido. Nada de disco congelado esperando na geladeira.',
    },
    {
      titulo: 'Maionese Baltazar',
      texto: 'Feita na casa, do zero. É a assinatura que liga tudo e a coisa que mais perguntam a receita — sem sucesso.',
    },
    {
      titulo: 'Pão na chapa',
      texto: 'Brioche selado na manteiga até dourar. Estrutura pra segurar e sabor no primeiro toque.',
    },
  ],
  temperatura: '+250°C',
  temperaturaLabel: 'na brasa, onde a carne crosta',
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
  { nome: 'Rafael Munhoz', nota: 5, quando: 'há 1 semana', texto: 'Melhor burger de Sorocaba, sem discussão. A carne na brasa é outro nível e a tal Maionese Baltazar vicia mesmo.' },
  { nome: 'Carla Diniz', nota: 5, quando: 'há 2 semanas', texto: 'A Costela 12 Horas desmancha na boca. Já virei cliente fixa, peço todo fim de semana.' },
  { nome: 'Thiago Prado', nota: 5, quando: 'há 3 dias', texto: 'Duplo Fogo é uma experiência. Vim pela fama do Instagram e a real é melhor que o vídeo.' },
  { nome: 'Bianca Lemos', nota: 5, quando: 'há 1 mês', texto: 'Atendimento ótimo, ambiente gostoso e o ponto da carne perfeito. Brasa de verdade faz diferença.' },
  { nome: 'Eduardo Salles', nota: 5, quando: 'há 5 dias', texto: 'Pedi pelo site com o cupom e veio rápido e quente. Onion rings crocantes que nem na hora.' },
  { nome: 'Marina Couto', nota: 5, quando: 'há 2 meses', texto: 'O Baltazar é o meu favorito do mundo. Cebola roxa com o cheddar e o bacon: combinação perfeita.' },
]

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  { q: 'Qual o horário de funcionamento?', a: 'Abrimos de quarta a domingo, das 18h às 23h. Segunda e terça a brasa descansa.' },
  { q: 'Vocês fazem entrega?', a: 'Fazemos! Peça pelo nosso site (mais barato), pelo iFood ou chame no WhatsApp. O cupom BALTA10 dá 10% OFF no primeiro pedido no site.' },
  { q: 'Por que pedir pelo site é mais barato?', a: 'No nosso site próprio o pedido sai cerca de 15% mais barato que nos apps, e ainda acumula 1% de cashback pra usar depois.' },
  { q: 'Precisa reservar mesa?', a: 'Não é obrigatório, mas em fim de semana enche. Se for grupo grande, chama no WhatsApp que a gente segura a mesa.' },
  { q: 'Tem opção sem carne bovina?', a: 'Temos o Pernil na Brasa e o Frango a Passarinho. Pergunte no balcão sobre adaptações.' },
  { q: 'Quais as formas de pagamento?', a: 'Pix, débito, crédito e os apps de delivery. No salão também tem chopp na torneira.' },
]
