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
  "Copos, Taças & Xícaras",
  "Mesa & Servir",
  "Utensílios de Cozinha",
  "Potes & Mantimentos",
  "Panos de Prato",
  "Organizadores",
  "Cama & Banho",
  "Decoração & Casa",
  "Lavanderia & Limpeza",
  "Eletroportáteis",
  "Descanso de Panela",
  "Formas de Gelo"
] as const;

export const GIFTS_DATA: GiftItem[] = [
  {
    "id": "saca-rolha-01",
    "title": "Abridor Elétrico de Vinho Automático Portátil Recarregável",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/BTrZuqNUq",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820m5-mmau49rbpm9y1b",
    "highlight": true
  },
  {
    "id": "pano-prato-01",
    "title": "Kit 5 Panos De Copa Pano de Prato 100% Algodão 70x45cm Guardanapos...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/50Z7Lni8Ac",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lg-mo8vrz6vnif453",
    "highlight": false
  },
  {
    "id": "pano-prato-02",
    "title": "KIT 5 Panos de Prato Atoalhado Premium Jacquard 45x70 Seca bem - To...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/1qc5a21dVc",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfjyu4e8lfyd43",
    "highlight": false
  },
  {
    "id": "pano-prato-03",
    "title": "Kit 5 Panos de Prato Preto grande para cozinha Pano de Copa Bate mã...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/4VcqkxUg6r",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5x4isvn21cgca",
    "highlight": false
  },
  {
    "id": "pano-prato-04",
    "title": "Kit 5 Pano Prato Copa Atoalhado Xadrez 100% Algodão Colorido Vintag...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/3g3jlWIEAW",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81zuh-ml47vjd78wzn87",
    "highlight": false
  },
  {
    "id": "pano-prato-05",
    "title": "Kit 3/5 Panos de Prato Jacquard Atoalhado Gourmet 70x45cm Felpudo P...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/6q0lXN5VDu",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-820nb-mnbws4wp7riee6",
    "highlight": false
  },
  {
    "id": "pano-prato-06",
    "title": "Kit Pano de Prato Copa Atoalhado Gourmet Cozinha 45x65cm 100% algod...",
    "category": "Panos de Prato",
    "description": "Tecido de alta absorção e acabamento delicado para a bancada da nossa cozinha.",
    "url": "https://s.shopee.com.br/8AW97pzkPU",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820ma-mmoyquz3r5l092",
    "highlight": false
  },
  {
    "id": "descascador-01",
    "title": "Descascador INOX Legumes Frutas Dupla Lâmina Móvel 2 Em 1",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/AUu3uXyEel",
    "image": "https://down-br.img.susercontent.com/file/1c7b5654d20fd3d7e59f3ac17b3d3359",
    "highlight": false
  },
  {
    "id": "espremedor-01",
    "title": "Espremedor de limão multifuncional Manual clipe de limão",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/7Kx28pPKQJ",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-825ao-msq54u7fijuy26",
    "highlight": false
  },
  {
    "id": "tesoura-01",
    "title": "Tesoura de Cozinha Multiuso Premium Inox 23cm P/ Cozinha, Utensílio...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/4qFhAPHGuq",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lt-mm2fcui6169yc5",
    "highlight": false
  },
  {
    "id": "fouet-01",
    "title": "Kit Batedor Fouet Profissional De Ovos e Massas Inox Utensílios Coz...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/1VzFCMS0j2",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820m6-mrhczhf2eio777",
    "highlight": false
  },
  {
    "id": "pegador-massa-01",
    "title": "Kit Cozinha 3 peças Pegador Universal, Massa e Gelo Aço Inox",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/70KBkXeedj",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rat5-mafzgj25zof66a",
    "highlight": false
  },
  {
    "id": "escumadeira-01",
    "title": "Kit 2 Escumadeira Aramada Escumadeira De Inox Peneira Fritura Escum...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/AKadj5haO0",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztw-mklew7e4mlts76",
    "highlight": false
  },
  {
    "id": "espatula-01",
    "title": "Kit 6 /4 Espátulas Preta Pão duro de Silicone Grande Espátula flexí...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/3LQtOBDz0z",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6lhznfwiek074",
    "highlight": false
  },
  {
    "id": "colher-pau-01",
    "title": "Colher de Pau Madeira Premium kit com 4 colheres",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/9AOgKfFZYD",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lc-mmug9z1vvitc9e",
    "highlight": false
  },
  {
    "id": "colheres-medidoras-01",
    "title": "Jogo de Colheres e Copos Medidores em Inox (8 a 10 Peças)",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/4qFhBFifDm",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-824gg-mdw4cahb6ex2eb",
    "highlight": false
  },
  {
    "id": "peneiras-01",
    "title": "Kit 3 Peneira Coador De Peneiras Aço Inoxidável Para Cozinha Peneir...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/AKadjXsTpw",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820m5-mmpd4zrv01s08f",
    "highlight": false
  },
  {
    "id": "funil-01",
    "title": "Funil de Silicone Dobrável Retrátil para Cozinha",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/70KBlUPLXf",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-825a5-mrd0twq8qryfcc",
    "highlight": false
  },
  {
    "id": "luvas-termicas-01",
    "title": "Par de Luvas Térmicas de Silicone para Forno e Cozinha",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/5fooBJEtQf",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rat4-max40fuszhw109",
    "highlight": false
  },
  {
    "id": "descanso-panela-01",
    "title": "Suporte De Panela Quente Trivets De Madeira Para Pratos Quentes For...",
    "category": "Descanso de Panela",
    "description": "Protege toalhas e bancadas com muito charme na hora de servir o almoço.",
    "url": "https://s.shopee.com.br/1Lfp1PYF6V",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820l5-mrfv8mr7utjab8",
    "highlight": false
  },
  {
    "id": "descanso-panela-02",
    "title": "Combo 8 Descansos de Panela em MDF Protetor de Mesa para Panela Pro...",
    "category": "Descanso de Panela",
    "description": "Protege toalhas e bancadas com muito charme na hora de servir o almoço.",
    "url": "https://s.shopee.com.br/2BEw0xLw2o",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mk8kbszusetdf5",
    "highlight": false
  },
  {
    "id": "descanso-panela-03",
    "title": "Descanso de Panela Mesa Posta Kit Descanso de Panela de Bambu Ecoló...",
    "category": "Descanso de Panela",
    "description": "Protege toalhas e bancadas com muito charme na hora de servir o almoço.",
    "url": "https://s.shopee.com.br/7AdbyBsc94",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjvz75b5jbwm14",
    "highlight": false
  },
  {
    "id": "potes-vidro-01",
    "title": "Kit 4 Pote Hermetico De Vidro Tampa De Bambu Tigela Marmita Salada...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/8AW9ADfhKt",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mebmxyaobfnkb6",
    "highlight": true
  },
  {
    "id": "potes-vidro-02",
    "title": "Kit de Jogo de Potes Quadrados de Vidro com tampa de bambu Hermétic...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/5q8ENzrQwg",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lb-mp9vfbdxbxmp88",
    "highlight": false
  },
  {
    "id": "potes-vidro-03",
    "title": "5 Potes de vidro Hermético Vidro com Tampa de Bambu pote tempero 25...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/7Kx2Am2iAw",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnbvike8tvinc8",
    "highlight": false
  },
  {
    "id": "potes-vidro-04",
    "title": "Pote Com Tampa Bambu Pote Vidro Hermético Redondo Marmita Potes De...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/9peN9OnzFr",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6e161w6fq0755",
    "highlight": false
  },
  {
    "id": "potes-vidro-05",
    "title": "kit de pote vidro com tampa hermética 640ml para marmita pote vedaç...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/9peN9SZJGC",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lj-ml6khqmjwg069a",
    "highlight": false
  },
  {
    "id": "potes-vidro-06",
    "title": "Pote Vidro Hermetico 1040ml Tampa Bambu Pote Marmita Vidro Armazena...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/112ydG1rp5",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820me-mpli3mzxov0ha1",
    "highlight": false
  },
  {
    "id": "potes-vidro-07",
    "title": "Kit Até 5 Potes De Vidro Hermético 350ml Pote Com Tampa E Travas Ma...",
    "category": "Potes & Mantimentos",
    "description": "Potes herméticos de vidro para conservar nossos alimentos frescos e organizados.",
    "url": "https://s.shopee.com.br/9fKwxRSflE",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81ztc-mjqcko57435y49",
    "highlight": false
  },
  {
    "id": "forma-gelo-01",
    "title": "Conjunto de Formas de Gelo Redondas com Recipiente e Colher",
    "category": "Formas de Gelo",
    "description": "Forma prática para drinks refrescantes e momentos especiais com amigos.",
    "url": "https://s.shopee.com.br/9V1WlDR9Oo",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-824i2-mpoiblmo5b7x52",
    "highlight": false
  },
  {
    "id": "forma-gelo-02",
    "title": "14 formas de gelo, forma quadrada para gelo com tampa, forma de gel...",
    "category": "Formas de Gelo",
    "description": "Forma prática para drinks refrescantes e momentos especiais com amigos.",
    "url": "https://s.shopee.com.br/6q0laNIMWs",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-maa4z8o7cn1y2f",
    "highlight": false
  },
  {
    "id": "organizador-01",
    "title": "Organizador Separador Porta Talheres Cozinha Organizadora de Gaveta...",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/5AsXbMsIES",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lw31pmm6suc265",
    "highlight": false
  },
  {
    "id": "organizador-02",
    "title": "Porta Talheres de Sisal Wolff 15x20cm Organizador de Mesa Posta Rus...",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/4B00PYHcyH",
    "image": "https://down-br.img.susercontent.com/file/br-11110105-6v6x6-msa4yolc00sl63_cover",
    "highlight": false
  },
  {
    "id": "organizador-03",
    "title": "Caixa Organizadora de Talheres em Madeira para Cozinha",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/9peN9yzyq2",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-823q1-monuqj8rbklqe8",
    "highlight": false
  },
  {
    "id": "organizador-04",
    "title": "Organizador de Gaveta para Armário e Talheres",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/6L4UzZhhNC",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-824g9-mpze1gvs7f2n52",
    "highlight": false
  },
  {
    "id": "organizador-05",
    "title": "Porta Talheres em Bambu com 5 Divisórias para Gaveta",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/7fZsa4OLj1",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rd6y-lw8puq4e3jepd4",
    "highlight": false
  },
  {
    "id": "organizador-06",
    "title": "Kit 5 Organizadores grande gaveta talheres geladeira maquiagem 976",
    "category": "Organizadores",
    "description": "Divisórias práticas para manter nossas gavetas e talheres sempre organizados.",
    "url": "https://s.shopee.com.br/AUu3xJ3t2t",
    "image": "https://down-br.img.susercontent.com/file/br-11134201-820m3-mqxgzjl9gs92f7",
    "highlight": false
  },
  {
    "id": "porta-papel-01",
    "title": "Kit Porta Papel Toalha + Porta Guardanapos",
    "category": "Mesa & Servir",
    "description": "Peça charmosa para compor a mesa posta e receber quem amamos com carinho.",
    "url": "https://s.shopee.com.br/3qNA14t3RB",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-823rp-mpbejvpubu9se6",
    "highlight": false
  },
  {
    "id": "porta-guardanapo-01",
    "title": "Porta Guardanapo Porta Guardanapo Mesa Posta Porta Guardanapo De Me...",
    "category": "Mesa & Servir",
    "description": "Peça charmosa para compor a mesa posta e receber quem amamos com carinho.",
    "url": "https://s.shopee.com.br/qjYRgWeUL",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820ld-mp9thypn8ni866",
    "highlight": false
  },
  {
    "id": "porta-guardanapo-02",
    "title": "Porta Guardanapos Querida Black Porta Guardanapo Preto Black Arthi-...",
    "category": "Mesa & Servir",
    "description": "Peça charmosa para compor a mesa posta e receber quem amamos com carinho.",
    "url": "https://s.shopee.com.br/80CiyuqYPF",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820ld-mnblo455emtd51",
    "highlight": false
  },
  {
    "id": "porta-guardanapo-03",
    "title": "Porta Guardanapo Aurora Suporte Guardanapos Bambu Metal Dourado Pre...",
    "category": "Mesa & Servir",
    "description": "Peça charmosa para compor a mesa posta e receber quem amamos com carinho.",
    "url": "https://shopee.com.br/Porta-Guardanapo-Aurora-Suporte-Guardanapos-Bambu-Metal-Dourado-Preto-Mesa-Posta-Cozinha-Bancada-Organizador-i.430136280.58216443765?extraParams=%7B%22display_model_id%22%3A238812088386%2C%22model_selection_logic%22%3A3%7D",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lp-ms1m2czd4g7816",
    "highlight": true
  },
  {
    "id": "copos-01",
    "title": "Jogo com 6 Copos Copo de Vidro 250ml Copo de Café Copo Parede Dupla",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/4LJQcd6OxO",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgapsydytr0l60",
    "highlight": false
  },
  {
    "id": "copos-02",
    "title": "Jogo de Copos de Vidro Canelado 430ml",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/1ARSgQtTK",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-7rdyx-mdqkrsvsv0f87d",
    "highlight": false
  },
  {
    "id": "copos-03",
    "title": "Jogo De 6 Copos De Whisky Vidro Grosso 310ml Copo Baixo Premium De...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/8plpyvbGNG",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81zun-mkz51zhislxd24",
    "highlight": false
  },
  {
    "id": "copos-04",
    "title": "Kit 6 Copos de Chopp Jogo de Copos para Cerveja Chopp Bebidas Mesa...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/3VkJdCtTk8",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820mc-mszj3m7p9dza76",
    "highlight": false
  },
  {
    "id": "copos-05",
    "title": "Jogo de 6 Copos de Vidro Altos Requinte 350ml - Copos para Agua, Su...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/8V8zaSUUtF",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820le-mpxph4pxnitcad",
    "highlight": false
  },
  {
    "id": "copos-06",
    "title": "Jogo Copos Diamond Vidro com Borda Dourada 370ml Luxo Cristal para...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/1gIfRwFhYZ",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820mf-mt6no853sow48e",
    "highlight": true
  },
  {
    "id": "copos-07",
    "title": "Jogo 2/4/6 Copos de Vidro Base Esfera Bubble Bola 450ml Copo Bolha...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/2BEw2sQarK",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820lf-mrrjxelmrj7o0b",
    "highlight": true
  },
  {
    "id": "copos-08",
    "title": "Jogo de Copos Taças Canelado Versalhes Clear Ambar Jogo Com 6 unidades",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/4fwH1Y1vW1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820ly-mnwy1aaxp98g02",
    "highlight": false
  },
  {
    "id": "copos-09",
    "title": "Kit Jogo Canelado Jarra Borossilicato Copo Taça Sobremesa Suco Água...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/60Rec19VX1",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-81z1k-meiodmna0ikj3d",
    "highlight": false
  },
  {
    "id": "tacas-01",
    "title": "Taça Champanhe de Cristal Fio de Ouro 300ml Lyor 1 Taça de Champagn...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para brindar aos momentos inesquecíveis e celebrar a vida a dois.",
    "url": "https://s.shopee.com.br/4LJQd445WR",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820l9-mooc19nalblv97",
    "highlight": true
  },
  {
    "id": "tacas-02",
    "title": "Jogo Taça Vinho de Cristal com Fio de Ouro 500ml Lyor Conjunto 2 Ta...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para brindar aos momentos inesquecíveis e celebrar a vida a dois.",
    "url": "https://s.shopee.com.br/1BMOrFu11p",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820l9-mqlxtvd094ow56",
    "highlight": true
  },
  {
    "id": "tacas-03",
    "title": "Jogo de Taças de Champanhe com Borda Dourada e Detalhes Diamante",
    "category": "Copos, Taças & Xícaras",
    "description": "Para brindar aos momentos inesquecíveis e celebrar a vida a dois.",
    "url": "https://s.shopee.com.br/AUu3yYCArS",
    "image": "https://down-br.img.susercontent.com/file/sg-11134201-825ae-msfdc9dj32ti79",
    "highlight": false
  },
  {
    "id": "tacas-04",
    "title": "Jogo de Taças Paulista 220ml, para sorvetes e sobremesas, vidro Nad...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para brindar aos momentos inesquecíveis e celebrar a vida a dois.",
    "url": "https://s.shopee.com.br/8V8zat6BYZ",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx2wqc4xlpqq06",
    "highlight": false
  },
  {
    "id": "xicaras-01",
    "title": "Jogo de Xícaras em Porcelana Café Expresso - 12 Peças Pires em Made...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/20vVr69QhO",
    "image": "https://down-br.img.susercontent.com/file/br-11134201-820lg-mqxhwe4sfeo7f7",
    "highlight": true
  },
  {
    "id": "xicaras-02",
    "title": "Jogo Xícara de Vidro 220ml com Pires 6 Xícaras Café Elegante Bolinh...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/7Adc0cBUZI",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820ls-mrvlokqlurk4f1",
    "highlight": false
  },
  {
    "id": "xicaras-03",
    "title": "Kit Xícaras e Pires Café Porcelana Premium - Jogo de Luxo para Pres...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/6Al4onS5uo",
    "image": "https://down-br.img.susercontent.com/file/br-11134201-820lg-mqxjxwlosef9b9",
    "highlight": false
  },
  {
    "id": "xicaras-04",
    "title": "Conjunto 2 Xícaras Parede Dupla de Vidro 350 ML Jogo de Xicaras par...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/7ptIntTk1t",
    "image": "https://down-br.img.susercontent.com/file/br-11134201-820li-mr1dyxd9rcasf5",
    "highlight": false
  },
  {
    "id": "xicaras-05",
    "title": "Kit Xícaras de Café Vidro Duplo Parede Dupla 200ML Jogo de Xícaras...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/5AsXd0HLxB",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-820mg-mn4lkzqykruq4f",
    "highlight": false
  },
  {
    "id": "xicaras-06",
    "title": "JOGO DE XÍCARAS COM PIRES 12 PEÇAS - 6 PIRES - 6 XÍCARAS 200ML ACRÍ...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/8fSPnShMLC",
    "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9ewbixtoyt534",
    "highlight": false
  },
  {
    "id": "xicaras-07",
    "title": "Jogo 12 Peças Xícaras de Café Vidro 150ml com Borda Dourada Estilo...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para aquele cafezinho aconchegante da manhã e da tarde no nosso novo lar.",
    "url": "https://s.shopee.com.br/1ARTZ4kH7",
    "image": "https://down-br.img.susercontent.com/file/sg-11110106-6vasv-mr0h4t5ufnrg40_cover",
    "highlight": true
  },
  {
    "id": "jarra-01",
    "title": "Jarra de Vidro 2.000ml Transparente com Alça para Suco e Água",
    "category": "Mesa & Servir",
    "description": "Jarra elegante e espaçosa para servir sucos frescos, água aromatizada e chás gelados.",
    "url": "https://s.shopee.com.br/5VVPJKy4l9",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jarra-02",
    "title": "Jarra de Vidro Borossilicato com Tampa de Bambu e Filtro Inox",
    "category": "Mesa & Servir",
    "description": "Design minimalista e resistente a altas temperaturas, perfeita para bebidas quentes ou frias.",
    "url": "https://s.shopee.com.br/4fwIJqQhW8",
    "image": "https://images.unsplash.com/photo-1570857502809-08184874388e?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jarra-03",
    "title": "Jarra de Vidro Canelado Retrô com Bico Dosador 1.5L",
    "category": "Mesa & Servir",
    "description": "Textura canelada clássica que traz sofisticação e charme à mesa posta da família.",
    "url": "https://s.shopee.com.br/1BMQ9QZQbW",
    "image": "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jarra-04",
    "title": "Jarra de Cristal Ecológico Lapidado com Alça Reforçada",
    "category": "Mesa & Servir",
    "description": "Brilho incomparável para receber amigos e celebrar almoços de domingo.",
    "url": "https://s.shopee.com.br/8AWAUJPyTH",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jarra-05",
    "title": "Jarra em Acrílico Resistente Diamond 2L para Bebidas e Sucos",
    "category": "Mesa & Servir",
    "description": "Prática, leve e super segura para o dia a dia e encontros ao ar livre.",
    "url": "https://s.shopee.com.br/30o4KpeqA6",
    "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jarra-06",
    "title": "Jarra de Cerâmica Artesanal Estilo Provençal 1.8L",
    "category": "Mesa & Servir",
    "description": "Toque acolhedor e aconchegante para compor a mesa do café da manhã.",
    "url": "https://s.shopee.com.br/2VrnjwFOrF",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jarra-07",
    "title": "Jarra Térmica Nórdica com Cabo de Madeira para Café e Chá 1L",
    "category": "Mesa & Servir",
    "description": "Mantém o café quentinho por horas com visual moderno e encantador.",
    "url": "https://s.shopee.com.br/3qNBKR9BJ0",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jarra-08",
    "title": "Jarra de Vidro com Tampa Hermética e Infusor de Frutas",
    "category": "Mesa & Servir",
    "description": "Ideal para criar águas saborizadas refrescantes e saudáveis para a nossa rotina.",
    "url": "https://s.shopee.com.br/9V1Y4rn4C1",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-01",
    "title": "Bowl Saladeira 2 Litros Acrílico Multiuso para Saladas e Frutas",
    "category": "Mesa & Servir",
    "description": "Saladeira leve e funcional, excelente para o preparo e serviço de saladas frescas.",
    "url": "https://s.shopee.com.br/1gIgkUYDi7",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "saladeira-02",
    "title": "Saladeira de Vidro Canelado com Borda Dourada 2.5L",
    "category": "Mesa & Servir",
    "description": "Design sofisticado com acabamento requintado que valoriza qualquer mesa de jantar.",
    "url": "https://s.shopee.com.br/7Kx3UuqFEt",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-03",
    "title": "Saladeira em Bambu Ecológico com Pegadores Integrados",
    "category": "Mesa & Servir",
    "description": "Material nobre e sustentável que confere um visual rústico e acolhedor.",
    "url": "https://s.shopee.com.br/4B01j6xZ5X",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-04",
    "title": "Tigela Saladeira Funda de Cerâmica Branca 3L",
    "category": "Mesa & Servir",
    "description": "Perfeita para massas, saladas verdes completas e receitas especiais em família.",
    "url": "https://s.shopee.com.br/30o4KzJ40x",
    "image": "https://images.unsplash.com/photo-1505253758473-96b3015f240a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-05",
    "title": "Saladeira de Vidro Temperado Resistente Linha Pétala",
    "category": "Mesa & Servir",
    "description": "Vidro de altíssima durabilidade e brilho para o almoço do dia a dia.",
    "url": "https://s.shopee.com.br/112zxJzo5D",
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-06",
    "title": "Saladeira com Tampa Hermética e Talheres de Servir Acoplados",
    "category": "Mesa & Servir",
    "description": "Super prática para armazenar na geladeira e levar à mesa sem complicações.",
    "url": "https://s.shopee.com.br/20vX9B4bNV",
    "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-07",
    "title": "Saladeira de Inox com Base de Silicone Antiderrapante",
    "category": "Mesa & Servir",
    "description": "Facilita misturar molhos com estabilidade total durante o preparo culinário.",
    "url": "https://s.shopee.com.br/3g3l8FXJhh",
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-08",
    "title": "Jogo de Saladeiras de Vidro com 3 Tamanhos Empilháveis",
    "category": "Mesa & Servir",
    "description": "Conjunto versátil para servir porções individuais ou grandes saladas.",
    "url": "https://s.shopee.com.br/2qUe8k4x8P",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "saladeira-09",
    "title": "Saladeira Oval de Cristal Lapidado para Ocasiões Especiais",
    "category": "Mesa & Servir",
    "description": "Uma verdadeira joia na mesa para jantares comemorativos e ceias.",
    "url": "https://s.shopee.com.br/4qFiWQo8QC",
    "image": "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-10",
    "title": "Saladeira de Porcelana Pintada com Frutas e Folhagens",
    "category": "Mesa & Servir",
    "description": "Traz alegria, frescor e um toque de primavera para a nossa cozinha.",
    "url": "https://s.shopee.com.br/5LBz7NY5SB",
    "image": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-11",
    "title": "Saladeira Cerâmica Artesanal Terracota Fosca",
    "category": "Mesa & Servir",
    "description": "Charme rústico contemporâneo que combina perfeitamente com pratos caseiros.",
    "url": "https://s.shopee.com.br/2LYNXswIt5",
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-12",
    "title": "Saladeira Quadrada em Vidro Espesso para Sobremesas e Saladas",
    "category": "Mesa & Servir",
    "description": "Design geométrico arrojado para inovar na apresentação dos pratos.",
    "url": "https://s.shopee.com.br/4qFiWUMBox",
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "saladeira-13",
    "title": "Saladeira Grande Transparente com Borda Ondulada",
    "category": "Mesa & Servir",
    "description": "Capacidade generosa para receber toda a família reunida com fartura e amor.",
    "url": "https://s.shopee.com.br/8AWAUdzgcL",
    "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "petisqueira-01",
    "title": "Petisqueira de Bambu com 5 Divisórias e Pote Central para Molho",
    "category": "Mesa & Servir",
    "description": "Perfeita para servir castanhas, queijos, azeitonas e molhos saborosos aos amigos.",
    "url": "https://s.shopee.com.br/3qNBKjb2Tg",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "petisqueira-02",
    "title": "Petisqueira Giratória em Madeira Maciça com Molheira Inox",
    "category": "Mesa & Servir",
    "description": "Base giratória que facilita o acesso aos petiscos por todos ao redor da mesa.",
    "url": "https://s.shopee.com.br/3VkKw8tQx3",
    "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "petisqueira-03",
    "title": "Petisqueira de Cerâmica com 4 Compartimentos Removíveis",
    "category": "Mesa & Servir",
    "description": "Cores suaves e potinhos independentes para montar aperitivos com muita elegância.",
    "url": "https://s.shopee.com.br/1BMQ9rg7V9",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "petisqueira-04",
    "title": "Petisqueira de Cristal Lapidado com Cavidades Geométricas",
    "category": "Mesa & Servir",
    "description": "Brilho e requinte para servir petiscos sofisticados em dias comemorativos.",
    "url": "https://s.shopee.com.br/4B01jOuUJl",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "petisqueira-05",
    "title": "Petisqueira Formato Flor em Bambu com Potes de Porcelana",
    "category": "Mesa & Servir",
    "description": "Design lúdico e delicado que encanta qualquer visita em nosso novo lar.",
    "url": "https://s.shopee.com.br/9V1Y5DDv1z",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "petisqueira-06",
    "title": "Conjunto de Petisqueiras Individuais em Grés Tons Terrosos",
    "category": "Mesa & Servir",
    "description": "Práticas para finger foods e degustações intimistas a dois.",
    "url": "https://s.shopee.com.br/9zxogA2Gpc",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "petisqueira-07",
    "title": "Petisqueira Rústica em Madeira Teca com Alça de Couro",
    "category": "Mesa & Servir",
    "description": "Acabamento artesanal impecável que une rusticidade e bom gosto à bancada.",
    "url": "https://s.shopee.com.br/4fwIKNQdex",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tabua-corte-01",
    "title": "Tábua de Corte em Bambu com Canaleta Coletora de Líquidos e Alça Inox",
    "category": "Utensílios de Cozinha",
    "description": "Resistente, antibacteriana natural e ideal para cortar carnes, legumes e temperos.",
    "url": "https://s.shopee.com.br/2gBDwk6duS",
    "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "tabua-corte-02",
    "title": "Tábua de Corte Culinária em Polipropileno Higiênica Livre de BPA",
    "category": "Utensílios de Cozinha",
    "description": "Não desgasta as facas, super fácil de higienizar e não absorve odores de alimentos.",
    "url": "https://s.shopee.com.br/AUu5HAc0va",
    "image": "https://images.unsplash.com/photo-1592417817098-8f3d69109853?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tabua-corte-03",
    "title": "Kit com 3 Tábuas de Corte Flexíveis com Ícones de Alimentos",
    "category": "Utensílios de Cozinha",
    "description": "Organização e segurança para evitar contaminação cruzada entre carnes e vegetais.",
    "url": "https://s.shopee.com.br/6L4WJWeGz6",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tabua-corte-04",
    "title": "Tábua de Corte Profissional em Madeira Maciça de Reflorestamento",
    "category": "Utensílios de Cozinha",
    "description": "Espessura robusta e acabamento acetinado para durar a vida inteira na cozinha.",
    "url": "https://s.shopee.com.br/1BMQABPAp5",
    "image": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tabua-frios-01",
    "title": "Tábua para Queijos e Frios em Ardósia Natural e Bambu",
    "category": "Mesa & Servir",
    "description": "Combinação refinada de pedra ardósia e madeira para montar tábuas de queijos de cinema.",
    "url": "https://s.shopee.com.br/30o4LXivYa",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "tabua-frios-02",
    "title": "Conjunto Tábua de Frios com Gaveta Embutida e 4 Espátulas de Queijo",
    "category": "Mesa & Servir",
    "description": "Praticidade total com faquinhas especiais guardadas dentro da própria tábua.",
    "url": "https://s.shopee.com.br/4fwIKd2iKQ",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "travessa-01",
    "title": "Travessa Refratária de Vidro Oval com Alças 3 Litros",
    "category": "Mesa & Servir",
    "description": "Direto do forno para a mesa: perfeita para lasanhas, assados e pratos especiais.",
    "url": "https://s.shopee.com.br/6fhMiLpQ6F",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "travessa-02",
    "title": "Travessa de Cerâmica Branca Retangular Canelada para Servir",
    "category": "Mesa & Servir",
    "description": "Visual clean e clássico que mantém a comida quentinha durante toda a refeição.",
    "url": "https://s.shopee.com.br/905HUebb0K",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "travessa-03",
    "title": "Jogo com 2 Travessas de Porcelana Fundas Borda Dourada",
    "category": "Mesa & Servir",
    "description": "Sofisticação e delicadeza para acomodar carnes grelhadas e risotos à mesa.",
    "url": "https://s.shopee.com.br/1LfqMade3U",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "travessa-04",
    "title": "Travessa Oval Canelada Vintage em Vidro Âmbar Nobre",
    "category": "Mesa & Servir",
    "description": "Tom âmbar aconchegante que destaca os alimentos com muita personalidade.",
    "url": "https://s.shopee.com.br/60RfvBhXjJ",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "travessa-05",
    "title": "Travessa Térmica de Aço Inox com Tampa Hermética para Buffet",
    "category": "Mesa & Servir",
    "description": "Excelente para manter o churrasco e os acompanhamentos aquecidos e protegidos.",
    "url": "https://s.shopee.com.br/8fSR66fiYh",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "travessa-06",
    "title": "Travessa Rasa de Servir em Cerâmica Nórdica Fosca Verde Oliva",
    "category": "Mesa & Servir",
    "description": "Acabamento moderno e minimalista que combina com a nossa paleta de decoração.",
    "url": "https://s.shopee.com.br/LnJAosxzT",
    "image": "https://images.unsplash.com/photo-1505253758473-96b3015f240a?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "assadeira-01",
    "title": "Jogo de Assadeiras Refratárias de Vidro Temperado (3 Peças)",
    "category": "Utensílios de Cozinha",
    "description": "Tamanhos pequeno, médio e grande para todas as receitas de forno doces e salgadas.",
    "url": "https://s.shopee.com.br/7AddJR9jo0",
    "image": "https://images.unsplash.com/photo-1556911073-38141963c9e0?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "assadeira-02",
    "title": "Assadeira Antiaderente Retangular com Revestimento Cerâmico Grafite",
    "category": "Utensílios de Cozinha",
    "description": "Não gruda nada, fácil de desinformar e incrivelmente rápida de lavar.",
    "url": "https://s.shopee.com.br/W6jNCLaCR",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "assadeira-03",
    "title": "Forma Assadeira Redonda Canelada para Tortas e Quiches com Fundo Removível",
    "category": "Utensílios de Cozinha",
    "description": "Perfeita para fazer tortas de maçã e quiches com bordas crocantes e perfeitas.",
    "url": "https://s.shopee.com.br/1gIglMCPHm",
    "image": "https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "assadeira-04",
    "title": "Assadeira de Inox com Grelha Removível para Carnes e Aves",
    "category": "Utensílios de Cozinha",
    "description": "Grelha elevada para assar carnes douradas e crocantes sem ficarem imersas em gordura.",
    "url": "https://s.shopee.com.br/2VrnkuvEBT",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "assadeira-05",
    "title": "Kit com 3 Formas de Pão e Bolo Inglês Antiaderentes",
    "category": "Utensílios de Cozinha",
    "description": "Para aquele cheirinho irresistível de bolo e pão caseiro saindo do forno quentinho.",
    "url": "https://s.shopee.com.br/1LfqMogijg",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "escorredor-macarrao-01",
    "title": "Escorredor de Macarrão em Aço Inox com Alças Laterais e Base Firme",
    "category": "Utensílios de Cozinha",
    "description": "Furos uniformes e material resistente que dura a vida toda na preparação de massas.",
    "url": "https://s.shopee.com.br/1VzGZAW4i7",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "escorredor-macarrao-02",
    "title": "Escorredor de Massas e Legumes Retrátil de Silicone Dobrável",
    "category": "Utensílios de Cozinha",
    "description": "Super compacto: dobra-se facilmente ocupando o mínimo de espaço nas gavetas.",
    "url": "https://s.shopee.com.br/4B01k7pVcV",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "potes-geladeira-01",
    "title": "Kit Potes Organizadores com Cesto Escorredor para Frutas e Saladas",
    "category": "Potes & Mantimentos",
    "description": "Mantém frutas e vegetais frescos e sequinhos por muito mais tempo na geladeira.",
    "url": "https://s.shopee.com.br/80CkJCwAxC",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "potes-geladeira-02",
    "title": "Conjunto 4 Potes Herméticos Empilháveis com Válvula de Respiro",
    "category": "Potes & Mantimentos",
    "description": "Travas nos quatro lados e anel de silicone para vedação completa sem vazamentos.",
    "url": "https://s.shopee.com.br/4qFiXOuczO",
    "image": "https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "potes-geladeira-03",
    "title": "Porta Frios Duplo de Acrílico com Tampa Hermética Transparente",
    "category": "Potes & Mantimentos",
    "description": "Ideal para queijo e presunto fatiados sempre protegidos e organizados na prateleira.",
    "url": "https://s.shopee.com.br/7ptK6wV8Ch",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "potes-geladeira-04",
    "title": "Jogo de Potes de Vidro Retangulares com Trava Click para Marmita e Geladeira",
    "category": "Potes & Mantimentos",
    "description": "Vidro borossilicato puro que vai ao freezer, micro-ondas e lava-louças com segurança.",
    "url": "https://s.shopee.com.br/112zyPU0X1",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "potes-geladeira-05",
    "title": "Organizadores de Gaveta de Geladeira Acrílico Crystal com Alça",
    "category": "Potes & Mantimentos",
    "description": "Praticidade para puxar e visualizar iogurtes, molhos e conservas facilmente.",
    "url": "https://s.shopee.com.br/1ASmaFwuv",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "potes-geladeira-06",
    "title": "Porta Ovos Acrílico com Tampa para 14 Unidades Empilhável",
    "category": "Potes & Mantimentos",
    "description": "Protege os ovos com tampa plana que permite empilhar outros itens por cima.",
    "url": "https://s.shopee.com.br/112zyTFGHr",
    "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "potes-geladeira-07",
    "title": "Kit 6 Potes Herméticos Livres de BPA para Congelador e Mantimentos",
    "category": "Potes & Mantimentos",
    "description": "Ótimos para congelar porções individuais de feijão, sopas e molhos caseiros.",
    "url": "https://s.shopee.com.br/7Kx3WBT44o",
    "image": "https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-americano-01",
    "title": "Kit 4 Jogos Americanos em Tecido Impermeável Linhão Off-White",
    "category": "Mesa & Servir",
    "description": "Tecido nobre que repele líquidos e sujeiras, unindo sofisticação e facilidade de limpeza.",
    "url": "https://s.shopee.com.br/9zxoh9Q5zm",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-americano-02",
    "title": "Kit 6 Lugares Jogo Americano Redondo Trançado Rústico Natural",
    "category": "Mesa & Servir",
    "description": "Textura trançada charmosa que combina com pratos brancos e louças florais.",
    "url": "https://s.shopee.com.br/5q8FjWJ5CH",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-americano-03",
    "title": "Jogo Americano Retangular em Couro Sintético Dupla Face Costurado",
    "category": "Mesa & Servir",
    "description": "Elegância minimalista para almoços modernos e práticos com acabamento premium.",
    "url": "https://s.shopee.com.br/W6jNjYihn",
    "image": "https://images.unsplash.com/photo-1505253758473-96b3015f240a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-americano-04",
    "title": "Jogo Americano em Fibra Natural de Milho Trançada à Mão",
    "category": "Mesa & Servir",
    "description": "Artesanato autêntico para trazer o calor e acolhimento da natureza para a nossa casa.",
    "url": "https://s.shopee.com.br/8AWAVr93Yc",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "sousplat-01",
    "title": "Conjunto de Sousplats Redondos para Mesa Posta 6 Peças",
    "category": "Mesa & Servir",
    "description": "Base essencial para proteger a toalha e estruturar pratos com imponência e requinte.",
    "url": "https://s.shopee.com.br/1ASmsdL40",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "acucareiro-01",
    "title": "Açucareiro de Vidro Canelado com Tampa de Bambu e Colherzinha Inox",
    "category": "Mesa & Servir",
    "description": "Peça delicada e cheia de charme para adoçar nossos momentos e o café da manhã.",
    "url": "https://s.shopee.com.br/5AsYwQVnI8",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "acucareiro-02",
    "title": "Açucareiro em Cerâmica Esmaltada Branca com Pegador de Coração",
    "category": "Mesa & Servir",
    "description": "Um detalhe romântico e afetivo no cantinho do café da nossa cozinha nova.",
    "url": "https://s.shopee.com.br/5LBz8kv5LN",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "acucareiro-03",
    "title": "Açucareiro de Porcelana Clássica com Filete Dourado",
    "category": "Mesa & Servir",
    "description": "Harmoniza perfeitamente com jogos de xícaras finas para receber as visitas.",
    "url": "https://s.shopee.com.br/70KD7pb4JP",
    "image": "https://images.unsplash.com/photo-1570857502809-08184874388e?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "acucareiro-04",
    "title": "Açucareiro em Aço Inox com Tampa Basculante e Colher Dosadora",
    "category": "Mesa & Servir",
    "description": "Durabilidade extrema, prático de usar com apenas uma mão e super resistente.",
    "url": "https://s.shopee.com.br/3B7UYoSmpQ",
    "image": "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "manteigueira-01",
    "title": "Manteigueira Francesa de Cerâmica para Manteiga Sempre Cremosa",
    "category": "Mesa & Servir",
    "description": "Sistema com água que mantém a manteiga fresca e no ponto de passar no pão sem gelar.",
    "url": "https://s.shopee.com.br/AKaf64YgJK",
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "manteigueira-02",
    "title": "Manteigueira de Vidro com Tampa Canelada Retangular Clássica",
    "category": "Mesa & Servir",
    "description": "Transparência cristalina para acompanhar a quantidade de manteiga à mesa.",
    "url": "https://s.shopee.com.br/gQ9aFFUt2",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "manteigueira-03",
    "title": "Manteigueira com Base de Bambu e Tampa de Acrílico Transparente",
    "category": "Mesa & Servir",
    "description": "Combinação moderna e leve que harmoniza com a bancada da cozinha.",
    "url": "https://s.shopee.com.br/7AddKCUQ1L",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "manteigueira-04",
    "title": "Manteigueira de Porcelana Branca com Espátula de Inox Inclusa",
    "category": "Mesa & Servir",
    "description": "Acompanha espátula própria para espalhar manteiga ou geleia suavemente nas torradas.",
    "url": "https://s.shopee.com.br/3qNBM5KqKw",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "manteigueira-05",
    "title": "Manteigueira em Aço Inox com Tampa Protetora Elegante",
    "category": "Mesa & Servir",
    "description": "Higiênica, inquebrável e com brilho duradouro para as refeições em família.",
    "url": "https://s.shopee.com.br/6Al68NpYdn",
    "image": "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "molheira-01",
    "title": "Molheira de Vidro Borossilicato com Bico Dosador e Pires de Apoio",
    "category": "Mesa & Servir",
    "description": "Ideal para servir molhos de salada, caldas de sobremesa e azeite sem respingos.",
    "url": "https://s.shopee.com.br/LnJBiwwx9",
    "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "molheira-02",
    "title": "Conjunto com 2 Molheiras em Cerâmica Branca com Alça Ergonômica",
    "category": "Mesa & Servir",
    "description": "Tamanho perfeito para dispor maioneses caseiras, shoyu e vinagretes à mesa.",
    "url": "https://s.shopee.com.br/9AOhi0SRRp",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "bowl-01",
    "title": "Kit 4 Bowls de Cerâmica para Sopa, Cereal, Açaí e Sobremesa",
    "category": "Mesa & Servir",
    "description": "Tigelas versáteis e resistentes para todas as refeições do café ao jantar.",
    "url": "https://s.shopee.com.br/8plrJQbdIx",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "bowl-02",
    "title": "Jogo de 4 Bowls de Vidro Facetado com Borda Dourada Imperial",
    "category": "Mesa & Servir",
    "description": "Brilho encantador que valoriza sobremesas, mousses e saladas de frutas.",
    "url": "https://s.shopee.com.br/9peOVHOlEE",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "bowl-03",
    "title": "Conjunto 3 Bowls em Aço Inox com Tampa Hermética e Base de Silicone",
    "category": "Mesa & Servir",
    "description": "Práticos para preparar massas, bater bolos e guardar na geladeira com tampa.",
    "url": "https://s.shopee.com.br/AAHEtu0x2s",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "bowl-04",
    "title": "Kit de Bowls em Bambu Ecológico para Petiscos e Frutas Secas",
    "category": "Mesa & Servir",
    "description": "Traz textura e beleza sustentável para as noites de cinema e petiscos.",
    "url": "https://s.shopee.com.br/2VrnlpPTJS",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "bowl-05",
    "title": "Conjunto de Mini Bowls para Molhos, Geleias e Finger Foods (6 Peças)",
    "category": "Mesa & Servir",
    "description": "Indispensáveis para montar mesas de café e tábuas completas de petiscos.",
    "url": "https://s.shopee.com.br/9Ki7uOuebo",
    "image": "https://images.unsplash.com/photo-1505253758473-96b3015f240a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "bowl-06",
    "title": "Bowl Médio de Cerâmica Reativa Verde Oliva Artesanal",
    "category": "Mesa & Servir",
    "description": "Peça de autor com esmaltação artística única que dialoga com nossa identidade visual.",
    "url": "https://s.shopee.com.br/2qUeATnaRq",
    "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "bowl-07",
    "title": "Jogo 6 Bowls de Porcelana Estilo Oriental com Desenhos Florais",
    "category": "Mesa & Servir",
    "description": "Charme asiático para noites de comida japonesa, poke e caldos deliciosos.",
    "url": "https://s.shopee.com.br/8plrJWHbuA",
    "image": "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "utensilios-kit-01",
    "title": "Kit Completo de Utensílios de Cozinha em Silicone e Cabo de Madeira (12 Peças)",
    "category": "Utensílios de Cozinha",
    "description": "Conjunto completo com suporte organizador: não risca panelas e resiste a altas temperaturas.",
    "url": "https://s.shopee.com.br/5LBz97czkD",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "cesto-organizador-01",
    "title": "Kit 3 Cestos Organizadores de Corda de Algodão Trançado com Alça",
    "category": "Organizadores",
    "description": "Aconchegantes e versáteis para organizar toalhas, mantas e cantinhos da casa.",
    "url": "https://s.shopee.com.br/7fZtvTx9md",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "cesto-organizador-02",
    "title": "Cesto Organizador Aramado de Metal Preto com Alça de Madeira",
    "category": "Organizadores",
    "description": "Estilo industrial moderno para despensas, frutas e bancada da cozinha.",
    "url": "https://s.shopee.com.br/4B01l4NLVD",
    "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "cesto-organizador-03",
    "title": "Conjunto de Cestos Plásticos Empilháveis Vazados para Armário",
    "category": "Organizadores",
    "description": "Aproveita a altura interna dos armários com ventilação e ordem impecável.",
    "url": "https://s.shopee.com.br/9Ki7uZd0kb",
    "image": "https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "cesto-organizador-04",
    "title": "Cesto Organizador em Palha Natural com Forro de Algodão Removível",
    "category": "Organizadores",
    "description": "Textura boho encantadora que adiciona calor e delicadeza aos ambientes.",
    "url": "https://s.shopee.com.br/50Z8kdWhXd",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "cesto-organizador-05",
    "title": "Caixas Organizadoras de Tecido Dobráveis com Tampa e Visor",
    "category": "Organizadores",
    "description": "Perfeitas para guardar roupas de cama e toalhas protegidas da poeira.",
    "url": "https://s.shopee.com.br/2BExNStk3u",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "cesto-organizador-06",
    "title": "Cesto Fruteira Multiuso de Bancada em Dois Andares",
    "category": "Organizadores",
    "description": "Economiza espaço na bancada e deixa maçãs, bananas e laranjas sempre à mão.",
    "url": "https://s.shopee.com.br/4qFiYNRaRs",
    "image": "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-pratos-01",
    "title": "Aparelho de Jantar e Chá 20 Peças em Cerâmica Porto Brasil",
    "category": "Mesa & Servir",
    "description": "Louça sofisticada e atemporal para celebrar almoços memoráveis em família.",
    "url": "https://s.shopee.com.br/1BMQBjhSAY",
    "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-pratos-02",
    "title": "Jogo de 6 Pratos Rasos de Porcelana Branca com Filete Dourado",
    "category": "Mesa & Servir",
    "description": "Clássico luxuoso que nunca sai de moda e eleva qualquer celebração.",
    "url": "https://s.shopee.com.br/4LJRxZiOnI",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-pratos-03",
    "title": "Kit 6 Pratos Fundos de Cerâmica Artesanal para Massas e Caldos",
    "category": "Mesa & Servir",
    "description": "Bordas generosas para valorizar massas caseiras, sopas e risotos aveludados.",
    "url": "https://s.shopee.com.br/4fwIMCXn15",
    "image": "https://images.unsplash.com/photo-1505253758473-96b3015f240a?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-pratos-04",
    "title": "Jogo de 6 Pratos de Sobremesa Decorados com Estampa Botânica",
    "category": "Mesa & Servir",
    "description": "Delicadeza para servir bolos, tortas e sobremesas no café da tarde.",
    "url": "https://s.shopee.com.br/70KD8V6pox",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-pratos-05",
    "title": "Aparelho de Jantar 16 Peças em Grés Tons Neutros e Bordas Orgânicas",
    "category": "Mesa & Servir",
    "description": "Design contemporâneo com toque tátil aconchegante para as refeições diárias.",
    "url": "https://s.shopee.com.br/8V90vIe3Fk",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-pratos-06",
    "title": "Jogo de Pratos de Cerâmica Fosca Acabamento Rústico Chic",
    "category": "Mesa & Servir",
    "description": "Elegância minimalista para momentos especiais no nosso novo lar.",
    "url": "https://s.shopee.com.br/7VGTjW2VWz",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "faqueiro-01",
    "title": "Faqueiro em Aço Inox 24 Peças Completo com Estojo Gaveteiro",
    "category": "Utensílios de Cozinha",
    "description": "Talheres robustos com polimento espelhado de alto brilho e corte preciso.",
    "url": "https://s.shopee.com.br/BTt04ccgF",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "faqueiro-02",
    "title": "Jogo de Talheres Inox Dourado Luxo 24 Peças para Ocasiões Especiais",
    "category": "Utensílios de Cozinha",
    "description": "Toque glamouroso e moderno que transforma a composição de qualquer mesa posta.",
    "url": "https://s.shopee.com.br/1gIgmsDxr4",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "frigideira-01",
    "title": "Frigideira Antiaderente de Cerâmica com Cabo Soft-Touch Amadeirado",
    "category": "Utensílios de Cozinha",
    "description": "Não gruda, requer mínimo óleo e garante um cozimento saudável e uniforme.",
    "url": "https://s.shopee.com.br/5VVPM1A99j",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "frigideira-02",
    "title": "Frigideira Funda Tipo Wok Antiaderente com Tampa de Vidro Temperado",
    "category": "Utensílios de Cozinha",
    "description": "Espaço de sobra para preparar legumes salteados, yakissoba e risotos deliciosos.",
    "url": "https://s.shopee.com.br/5fopYMzV7r",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-toalhas-01",
    "title": "Jogo de Toalhas Banho e Rosto 4 Peças 100% Algodão Felpudo Egípcio",
    "category": "Cama & Banho",
    "description": "Máxima absorção, toque super macio e aconchego para a hora do banho.",
    "url": "https://s.shopee.com.br/70KD8u5k3s",
    "image": "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-toalhas-02",
    "title": "Kit Toalhas Banhão Felpudas Toque Aveludado Jacquard Luxo",
    "category": "Cama & Banho",
    "description": "Gramatura encorpada e barra decorativa trabalhada que valoriza o banheiro.",
    "url": "https://s.shopee.com.br/8AWAX3jIWI",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-toalhas-03",
    "title": "Jogo de Toalhas 5 Peças (2 Banho, 2 Rosto e 1 Piso de Banheiro)",
    "category": "Cama & Banho",
    "description": "Conjunto completo coordenado em cores neutras e suaves para o nosso enxoval.",
    "url": "https://s.shopee.com.br/8V90viKkWd",
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-cama-01",
    "title": "Jogo de Cama Queen 4 Peças Percal 200 Fios 100% Algodão Toque Macio",
    "category": "Cama & Banho",
    "description": "Frescor, respirabilidade e maciez incomparável para noites de sono perfeitas.",
    "url": "https://s.shopee.com.br/BTt0StBlo",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "jogo-cama-02",
    "title": "Kit Jogo de Lençol Casal com Elástico e 2 Fronhas Toque Acetinado",
    "category": "Cama & Banho",
    "description": "Praticidade que não amassa com facilidade e veste o colchão perfeitamente.",
    "url": "https://s.shopee.com.br/8KpajX0U9o",
    "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "jogo-cama-03",
    "title": "Jogo de Cama Completo com Sobre-lençol e Estampa Suave Romântica",
    "category": "Cama & Banho",
    "description": "Traz aconchego e harmonia para transformar o quarto no nosso refúgio de amor.",
    "url": "https://s.shopee.com.br/qjZnnRkva",
    "image": "https://images.unsplash.com/photo-1540518614846-7ede433c4b69?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-01",
    "title": "Mop Giratório com Balde Centrifugador Inox para Limpeza Prática",
    "category": "Lavanderia & Limpeza",
    "description": "Limpeza rápida e sem esforço, sem precisar molhar ou torcer panos com as mãos.",
    "url": "https://s.shopee.com.br/6L4WMKMmc0",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "limpeza-02",
    "title": "Kit 3 Dispensers de Lavanderia para Sabão Líquido, Amaciante e Alvejante",
    "category": "Lavanderia & Limpeza",
    "description": "Frascos elegantes com etiquetas impermeáveis para uma lavanderia de Pinterest.",
    "url": "https://s.shopee.com.br/7VGTkBPXmz",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-03",
    "title": "Varal de Parede Dobrável / Retrátil em Alumínio para Roupas",
    "category": "Lavanderia & Limpeza",
    "description": "Otimiza o espaço na área de serviço fechando discretamente quando fora de uso.",
    "url": "https://s.shopee.com.br/9AOhjHIb67",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-04",
    "title": "Cesto de Roupas Sujas Dobrável em Tecido Impermeável com Alça Dupla",
    "category": "Lavanderia & Limpeza",
    "description": "Capacidade ampla para organizar as roupas antes de lavar com muita discrição.",
    "url": "https://s.shopee.com.br/8V90w56vCY",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-05",
    "title": "Kit com 10 Panos de Microfibra de Alta Absorção para Casa e Vidros",
    "category": "Lavanderia & Limpeza",
    "description": "Limpa superfícies, espelhos e bancadas sem soltar fiapos nem riscar nada.",
    "url": "https://s.shopee.com.br/1qc6zyOP3C",
    "image": "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-06",
    "title": "Organizador Multiuso com Alça para Produtos de Limpeza e Utensílios",
    "category": "Lavanderia & Limpeza",
    "description": "Facilita carregar os produtos de limpeza de um cômodo para o outro sem bagunça.",
    "url": "https://s.shopee.com.br/2BExOcdr9O",
    "image": "https://images.unsplash.com/photo-1606859191214-25806e8e2423?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-07",
    "title": "Conjunto Pá de Lixo e Vassoura de Cabo Longo Ergonômico",
    "category": "Lavanderia & Limpeza",
    "description": "Varrição prática sem precisar se curvar, com cerdas macias que recolhem tudo.",
    "url": "https://s.shopee.com.br/1qc706uIkW",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-08",
    "title": "Kit 5 Sacos de Lavagem para Roupas Delicadas e Íntimas com Zíper",
    "category": "Lavanderia & Limpeza",
    "description": "Protege rendas, malhas finas e roupas especiais contra atrito na máquina de lavar.",
    "url": "https://s.shopee.com.br/4fwINNZ6CC",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "limpeza-09",
    "title": "Suporte Organizador de Parede para Vassouras, Rodos e Pás",
    "category": "Lavanderia & Limpeza",
    "description": "Fixação firme que mantém a lavanderia sempre livre, organizada e desimpedida.",
    "url": "https://s.shopee.com.br/8plrL2sVGL",
    "image": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "cafe-cha-01",
    "title": "Cafeteira Prensa Francesa em Vidro Borossilicato e Inox 600ml",
    "category": "Mesa & Servir",
    "description": "Extrai os óleos essenciais do café com sabor marcante e aroma irresistível.",
    "url": "https://s.shopee.com.br/3VkKzMEF2Z",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "cafe-cha-02",
    "title": "Bule Térmico Nórdico com Cabo de Madeira para Café e Chá 1L",
    "category": "Mesa & Servir",
    "description": "Mantém a bebida bem quentinha com um design escandinavo lindo para a mesa.",
    "url": "https://s.shopee.com.br/5AsYyRY65j",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "cafe-cha-03",
    "title": "Chaleira de Vidro com Infusor de Chá Inox Removível 800ml",
    "category": "Mesa & Servir",
    "description": "Permite acompanhar a infusão de chás florais e ervas com beleza visual e aroma.",
    "url": "https://s.shopee.com.br/50Z8m9POIU",
    "image": "https://images.unsplash.com/photo-1570857502809-08184874388e?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "cafe-cha-04",
    "title": "Suporte Coador de Café V60 em Cerâmica com Base Estável",
    "category": "Mesa & Servir",
    "description": "Para aquele ritual clássico e afetuoso de passar o cafezinho fresco da manhã.",
    "url": "https://s.shopee.com.br/8V90wc2OHJ",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "sanduicheira-01",
    "title": "Sanduicheira Baurutex (Misteira de Alumínio Fundido para Fogão)",
    "category": "Eletroportáteis",
    "description": "A clássica sanduicheira de fogão para fazer misto-quente crocante e dourado com nostalgia.",
    "url": "https://s.shopee.com.br/qjZoeAocT",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "sanduicheira-02",
    "title": "Sanduicheira e Mini Grill Elétrica Antiaderente 750W",
    "category": "Eletroportáteis",
    "description": "Grelha rápida para sanduíches, queijo quente e lanches perfeitos no dia a dia.",
    "url": "https://s.shopee.com.br/6fhMlNaw9H",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "sanduicheira-03",
    "title": "Sanduicheira Dupla com Trava de Segurança e Placas Antiaderentes Duplas",
    "category": "Eletroportáteis",
    "description": "Prepara dois lanches simultaneamente de forma rápida, crocante e sem grudar.",
    "url": "https://s.shopee.com.br/AKaf88572X",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tapete-01",
    "title": "Tapete Passadeira Aconchegante para Bancada da Cozinha Antiderrapante",
    "category": "Decoração & Casa",
    "description": "Conforto para os pés na pia da cozinha, com base emborrachada que não escorrega.",
    "url": "https://s.shopee.com.br/80CkLyoQha",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "tapete-02",
    "title": "Tapete para Sala e Quarto Toque Super Macio e Cores Neutras",
    "category": "Decoração & Casa",
    "description": "Delícia ao pisar e acolhedor para reunir quem amamos na sala de estar.",
    "url": "https://s.shopee.com.br/2BExPJQxGz",
    "image": "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tapete-03",
    "title": "Jogo de Tapetes para Banheiro 2 Peças Felpudo Ultra Absorvente",
    "category": "Decoração & Casa",
    "description": "Mantém o chão do banheiro sempre seco e gostoso ao sair do banho relaxante.",
    "url": "https://s.shopee.com.br/1LfqPnKzed",
    "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tapete-04",
    "title": "Tapete Capacho de Entrada Bem-vindos em Fibra Natural Resistente",
    "category": "Decoração & Casa",
    "description": "Dá as boas-vindas com carinho e proteção logo na porta de entrada da casa nova.",
    "url": "https://s.shopee.com.br/4LJRzKHpWS",
    "image": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tapete-05",
    "title": "Tapete Geométrico Estilo Nórdico Lavável para Quarto e Sala",
    "category": "Decoração & Casa",
    "description": "Padronagem elegante que moderniza os ambientes e pode ser lavado facilmente.",
    "url": "https://s.shopee.com.br/8plrLdqkyL",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  },
  {
    "id": "tapete-06",
    "title": "Passadeira Boho com Franjas Trançada em Algodão Natural",
    "category": "Decoração & Casa",
    "description": "Charme artesanal perfeito para corredores, beira de cama ou varanda.",
    "url": "https://s.shopee.com.br/50Z8mbw98B",
    "image": "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "manta-01",
    "title": "Manta Aconchegante para Sofá e Cama Microfibra Toque de Seda",
    "category": "Cama & Banho",
    "description": "Quentinha, leve e aveludada para os momentos de filme, descanso e romance no sofá.",
    "url": "https://s.shopee.com.br/4B01n8XNDU",
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80",
    "highlight": true
  },
  {
    "id": "manta-02",
    "title": "Manta Trançada em Algodão com Franjas Decorativas Estilo Boho",
    "category": "Cama & Banho",
    "description": "Traz textura rica e elegância sobreposta ao sofá ou aos pés da cama de casal.",
    "url": "https://s.shopee.com.br/5fopZuin1C",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80",
    "highlight": false
  }
];
