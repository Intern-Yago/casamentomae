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
  "Utensílios de Cozinha",
  "Panos de Prato",
  "Potes & Mantimentos",
  "Descanso de Panela",
  "Organizadores",
  "Mesa & Servir",
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
    "title": "8/10 Peças Jogo de Colher Medidora Inox Copo Medidor Xicaras Kit Co...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/4qFhBFifDm",
    "image": "https://down-br.img.susercontent.com/file/br-11110105-6kfko-m85nc6uod4414c_cover",
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
    "title": "Luva Térmica Para Forno Par De Luvas Termicas Cozinha Pegador Térmi...",
    "category": "Utensílios de Cozinha",
    "description": "Item essencial e prático para o dia a dia da nossa nova cozinha.",
    "url": "https://s.shopee.com.br/5fooBJEtQf",
    "image": "https://down-br.img.susercontent.com/file/br-11110105-6kfko-maygejis7atr69_cover",
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
    "title": "Jogo de Copos de Vidro Canelado 430ml Conjunto de Copos Grosso 12 U...",
    "category": "Copos, Taças & Xícaras",
    "description": "Lindo jogo para servir bebidas com estilo e elegância às nossas visitas.",
    "url": "https://s.shopee.com.br/1ARSgQtTK",
    "image": "https://down-br.img.susercontent.com/file/br-11110105-6kfko-mdqkztgwjs2957_cover",
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
    "title": "Taça de champanhe com borda dourada e detalhes de diamante, estilo...",
    "category": "Copos, Taças & Xícaras",
    "description": "Para brindar aos momentos inesquecíveis e celebrar a vida a dois.",
    "url": "https://s.shopee.com.br/AUu3yYCArS",
    "image": "https://down-br.img.susercontent.com/file/sg-11110106-6vcdl-msfdbqsyeio05b_cover",
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
  }
];
