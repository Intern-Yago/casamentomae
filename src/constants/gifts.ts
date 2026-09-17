export interface GiftItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  highlight?: boolean;
}

export const GIFT_CATEGORIES = [
  "Todos",
  "Utensílios de Cozinha",
  "Panos de Prato",
  "Potes & Mantimentos",
  "Descanso de Panela",
  "Organizadores",
  "Mesa & Servir",
  "Formas de Gelo"
] as const;

export const GIFTS_DATA: GiftItem[] = [
  // Saca Rolha
  {
    id: "saca-rolha-01",
    title: "Saca-Rolhas Profissional",
    category: "Utensílios de Cozinha",
    description: "Para brindarmos às melhores memórias e aos momentos especiais da nossa nova vida.",
    url: "https://s.shopee.com.br/BTrZuqNUq",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
    highlight: true,
  },

  // Panos de Prato
  {
    id: "pano-prato-01",
    title: "Kit Panos de Prato Algodão - Modelo 1",
    category: "Panos de Prato",
    description: "Panos de prato atoalhados com alta absorção para deixar a cozinha sempre linda.",
    url: "https://s.shopee.com.br/50Z7Lni8Ac",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pano-prato-02",
    title: "Kit Panos de Prato Decorados - Modelo 2",
    category: "Panos de Prato",
    description: "Acabamento delicado para dar aquele toque de aconchego ao nosso dia a dia.",
    url: "https://s.shopee.com.br/1qc5a21dVc",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pano-prato-03",
    title: "Jogo de Panos de Copa - Modelo 3",
    category: "Panos de Prato",
    description: "Práticos e macios, perfeitos para secar louça e decorar o fogão.",
    url: "https://s.shopee.com.br/4VcqkxUg6r",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pano-prato-04",
    title: "Kit Panos de Prato Gourmet - Modelo 4",
    category: "Panos de Prato",
    description: "Estampas elegantes que combinam com o ambiente acolhedor do nosso lar.",
    url: "https://s.shopee.com.br/3g3jlWIEAW",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pano-prato-05",
    title: "Kit Panos de Prato Premium - Modelo 5",
    category: "Panos de Prato",
    description: "Pano de prato resistente e super absorvente para a bancada.",
    url: "https://s.shopee.com.br/6q0lXN5VDu",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pano-prato-06",
    title: "Kit Panos de Prato Estilizados - Modelo 6",
    category: "Panos de Prato",
    description: "Conjunto completo para facilitar as refeições em família.",
    url: "https://s.shopee.com.br/8AW97pzkPU",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80",
  },

  // Descascador de Legumes
  {
    id: "descascador-01",
    title: "Descascador de Legumes Ergonômico",
    category: "Utensílios de Cozinha",
    description: "Lâmina afiada e anatômica para agilizar o preparo dos nossos almoços.",
    url: "https://s.shopee.com.br/AUu3uXyEel",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },

  // Espremedor de Limão
  {
    id: "espremedor-01",
    title: "Espremedor de Limão Manual",
    category: "Utensílios de Cozinha",
    description: "Indispensável para temperar saladas e preparar deliciosas caipirinhas.",
    url: "https://s.shopee.com.br/7Kx28pPKQJ",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&auto=format&fit=crop&q=80",
  },

  // Tesoura de Cozinha
  {
    id: "tesoura-01",
    title: "Tesoura de Cozinha Multiuso",
    category: "Utensílios de Cozinha",
    description: "Corte preciso para temperos, embalagens e carnes.",
    url: "https://s.shopee.com.br/4qFhAPHGuq",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600&auto=format&fit=crop&q=80",
  },

  // Fouet
  {
    id: "fouet-01",
    title: "Batedor Fouet Culinário",
    category: "Utensílios de Cozinha",
    description: "Para bater massas leves, ovos nevados e criar doces inesquecíveis.",
    url: "https://s.shopee.com.br/1VzFCMS0j2",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&auto=format&fit=crop&q=80",
  },

  // Pegador de Massa
  {
    id: "pegador-massa-01",
    title: "Pegador de Massa em Inox/Silicone",
    category: "Utensílios de Cozinha",
    description: "Para servir nossas macarronadas de domingo com praticidade e carinho.",
    url: "https://s.shopee.com.br/70KBkXeedj",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
  },

  // Escumadeira
  {
    id: "escumadeira-01",
    title: "Escumadeira Culinária",
    category: "Utensílios de Cozinha",
    description: "Utensílio resistente e prático para frituras e cozidos.",
    url: "https://s.shopee.com.br/AKadj5haO0",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
  },

  // Espátula de Silicone
  {
    id: "espatula-01",
    title: "Espátula de Silicone Pão Duro",
    category: "Utensílios de Cozinha",
    description: "Não risca as panelas e aproveita até a última gota de cada receita.",
    url: "https://s.shopee.com.br/3LQtOBDz0z",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&auto=format&fit=crop&q=80",
  },

  // Colher de Pau / Bambu
  {
    id: "colher-pau-01",
    title: "Colher de Pau / Bambu Tradicional",
    category: "Utensílios de Cozinha",
    description: "O sabor do tempero caseiro e o clássico indispensável em qualquer fogão.",
    url: "https://s.shopee.com.br/9AOgKfFZYD",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
  },

  // Jogo de Colheres Medidoras
  {
    id: "colheres-medidoras-01",
    title: "Jogo de Colheres Medidoras",
    category: "Utensílios de Cozinha",
    description: "Medidas exatas para acertar em cheio em bolos e receitas especiais.",
    url: "https://s.shopee.com.br/4qFhBFifDm",
    image: "https://images.unsplash.com/photo-1588644525273-f37b60d78512?w=600&auto=format&fit=crop&q=80",
  },

  // Peneiras
  {
    id: "peneiras-01",
    title: "Conjunto de Peneiras Culinárias",
    category: "Utensílios de Cozinha",
    description: "Tamanhos variados para sucos, farinhas e preparos delicados.",
    url: "https://s.shopee.com.br/AKadjXsTpw",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
  },

  // Funil
  {
    id: "funil-01",
    title: "Jogo de Funis para Cozinha",
    category: "Utensílios de Cozinha",
    description: "Facilidade para armazenar líquidos e temperos sem desperdício.",
    url: "https://s.shopee.com.br/70KBlUPLXf",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },

  // Luvas Térmicas
  {
    id: "luvas-termicas-01",
    title: "Par de Luvas Térmicas de Forno",
    category: "Utensílios de Cozinha",
    description: "Proteção e conforto para tirar assadeiras e travessas do forno.",
    url: "https://s.shopee.com.br/5fooBJEtQf",
    image: "https://images.unsplash.com/photo-1584269600519-112d071b35e6?w=600&auto=format&fit=crop&q=80",
    highlight: true,
  },

  // Descanso de Panela
  {
    id: "descanso-panela-01",
    title: "Descanso de Panela Resistente - Opção 1",
    category: "Descanso de Panela",
    description: "Protege a toalha de mesa e a bancada contra o calor das panelas.",
    url: "https://s.shopee.com.br/1Lfp1PYF6V",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "descanso-panela-02",
    title: "Descanso de Panela Decorativo - Opção 2",
    category: "Descanso de Panela",
    description: "Design moderno para levar a panela quente direto à mesa.",
    url: "https://s.shopee.com.br/2BEw0xLw2o",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "descanso-panela-03",
    title: "Kit Descansos de Panela - Opção 3",
    category: "Descanso de Panela",
    description: "Material térmico de alta durabilidade para proteger nossas superfícies.",
    url: "https://s.shopee.com.br/7AdbyBsc94",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },

  // Potes de Vidro
  {
    id: "potes-vidro-01",
    title: "Kit Potes de Vidro Herméticos - Opção 1",
    category: "Potes & Mantimentos",
    description: "Vidro borossilicato com vedação total para conservar alimentos frescos.",
    url: "https://s.shopee.com.br/8AW9ADfhKt",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
    highlight: true,
  },
  {
    id: "potes-vidro-02",
    title: "Conjunto Potes Herméticos - Opção 2",
    category: "Potes & Mantimentos",
    description: "Tampa com trava de segurança, pode ir ao micro-ondas e lava-louças.",
    url: "https://s.shopee.com.br/5q8ENzrQwg",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "potes-vidro-03",
    title: "Potes de Vidro Multiuso - Opção 3",
    category: "Potes & Mantimentos",
    description: "Ideais para guardar mantimentos secos, grãos e temperos.",
    url: "https://s.shopee.com.br/7Kx2Am2iAw",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "potes-vidro-04",
    title: "Jogo de Potes de Mantimentos - Opção 4",
    category: "Potes & Mantimentos",
    description: "Organização impecável e visual clean para a despensa.",
    url: "https://s.shopee.com.br/9peN9OnzFr",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "potes-vidro-05",
    title: "Kit Potes de Vidro Redondos - Opção 5",
    category: "Potes & Mantimentos",
    description: "Vidro resistente a choque térmico com vedação hermética.",
    url: "https://s.shopee.com.br/9peN9SZJGC",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "potes-vidro-06",
    title: "Potes de Vidro com Tampa Hermética - Opção 6",
    category: "Potes & Mantimentos",
    description: "Mantém os sabores e nutrientes por muito mais tempo.",
    url: "https://s.shopee.com.br/112ydG1rp5",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "potes-vidro-07",
    title: "Coleção Potes de Vidro Retangulares - Opção 7",
    category: "Potes & Mantimentos",
    description: "Perfeitos para empilhar e otimizar espaço na geladeira e armários.",
    url: "https://s.shopee.com.br/9fKwxRSflE",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=80",
  },

  // Forma de Gelo
  {
    id: "forma-gelo-01",
    title: "Forma de Gelo em Silicone com Tampa - Modelo 1",
    category: "Formas de Gelo",
    description: "Fácil de desenformar e com tampa higiênica que não pega odor de geladeira.",
    url: "https://s.shopee.com.br/9V1WlDR9Oo",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "forma-gelo-02",
    title: "Forma de Gelo Esferas/Cubos Grandes - Modelo 2",
    category: "Formas de Gelo",
    description: "Gelos duradouros para drinks, sucos e momentos festivos com amigos.",
    url: "https://s.shopee.com.br/6q0laNIMWs",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=600&auto=format&fit=crop&q=80",
  },

  // Organizador de Talheres
  {
    id: "organizador-01",
    title: "Organizador de Gaveta para Talheres - Modelo 1",
    category: "Organizadores",
    description: "Divisórias sob medida para manter gavetas arrumadas e práticas.",
    url: "https://s.shopee.com.br/5AsXbMsIES",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "organizador-02",
    title: "Divisor de Gavetas Ajustável - Modelo 2",
    category: "Organizadores",
    description: "Ajuste perfeito ao tamanho da gaveta da cozinha.",
    url: "https://s.shopee.com.br/4B00PYHcyH",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "organizador-03",
    title: "Organizador de Talheres Compacto - Modelo 3",
    category: "Organizadores",
    description: "Design moderno que economiza espaço e organiza com elegância.",
    url: "https://s.shopee.com.br/9peN9yzyq2",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "organizador-04",
    title: "Bandeja Organizadora de Talheres - Modelo 4",
    category: "Organizadores",
    description: "Visual clean e material durável fácil de higienizar.",
    url: "https://s.shopee.com.br/6L4UzZhhNC",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "organizador-05",
    title: "Porta Talheres de Gaveta Modular - Modelo 5",
    category: "Organizadores",
    description: "Módulos versáteis para organizar garfos, facas, colheres e conchas.",
    url: "https://s.shopee.com.br/7fZsa4OLj1",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "organizador-06",
    title: "Porta Talheres Extensível - Modelo 6",
    category: "Organizadores",
    description: "Extensão lateral para comportar todos os itens da gaveta com perfeição.",
    url: "https://s.shopee.com.br/AUu3xJ3t2t",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    highlight: true,
  },

  // Porta Papel-Toalha
  {
    id: "porta-papel-01",
    title: "Porta-Papel-Toalha de Bancada",
    category: "Mesa & Servir",
    description: "Firme e prático para destacar folhas com apenas uma mão.",
    url: "https://s.shopee.com.br/3qNA14t3RB",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
  },

  // Porta Guardanapo
  {
    id: "porta-guardanapo-01",
    title: "Porta-Guardanapo de Mesa Elegance - Modelo 1",
    category: "Mesa & Servir",
    description: "Charme especial para mesas de almoço e jantares a dois.",
    url: "https://s.shopee.com.br/qjYRgWeUL",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "porta-guardanapo-02",
    title: "Porta-Guardanapo Moderno - Modelo 2",
    category: "Mesa & Servir",
    description: "Design contemporâneo para valorizar qualquer posta de mesa.",
    url: "https://s.shopee.com.br/80CiyuqYPF",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "porta-guardanapo-03",
    title: "Porta-Guardanapo Aurora em Bambu & Metal",
    category: "Mesa & Servir",
    description: "Bambu natural e acabamento dourado/preto para mesa posta sofisticada.",
    url: "https://shopee.com.br/Porta-Guardanapo-Aurora-Suporte-Guardanapos-Bambu-Metal-Dourado-Preto-Mesa-Posta-Cozinha-Bancada-Organizador-i.430136280.58216443765?extraParams=%7B%22display_model_id%22%3A238812088386%2C%22model_selection_logic%22%3A3%7D",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    highlight: true,
  },
];
