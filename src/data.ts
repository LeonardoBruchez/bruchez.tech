export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  images: string[];
  priceFrom?: number;
  bulkPricing?: string;
  imagePosition?: string;
};

export const phoneNumber = "+55 48 99830-1531";
export const whatsappNumber = "5548998301531";
export const contactEmail = "leonardobruchez.code@gmail.com";

export function formatPriceFrom(priceFrom: number) {
  const formatted = priceFrom.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `A partir de ${formatted}`;
}

export function whatsappLinkFor(product: Product) {
  const message = `Olá! Vim do site bruchez.tech e tenho interesse em: ${product.name}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function colorWhatsappLink(colorName: string) {
  const message = `Olá! Vim do site bruchez.tech. Quero um produto com a cor ${colorName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const genericWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim do site bruchez.tech e quero saber mais sobre as peças em impressão 3D.",
)}`;

export const customRequestWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim do site bruchez.tech. Tenho algo em mente que não vi no catálogo, dá pra fazer sob encomenda?",
)}`;

export const categories = [
  "Todos",
  "Decoração",
  "Suportes",
  "Chaveiros",
  "Organização",
  "Ferramentas",
  "Personalizado",
  "Pet",
  "Curiosidades",
  "Educacional",
] as const;

export const products: Product[] = [
  {
    slug: "suporte-controle-banguela",
    name: "Suporte de Controle Banguela",
    category: "Suportes",
    tagline: "Base temática para deixar o setup mais bonito",
    description:
      "Suporte de controle inspirado no Banguela (Dragão do filme Como Treinar o Seu Dragão), impresso em preto fosco com bastante detalhe nas asas e no chifre. Segura o controle com firmeza e ainda decora a mesa ou estante.",
    features: [
      "Compatível com controles de PS4, PS5 e Xbox",
      "Acabamento fosco em preto profundo",
      "Base estável, não risca a mesa",
      "Ótimo item de presente para gamers",
    ],
    images: [
      "suporte-controle-banguela-frente.jpg",
      "suporte-controle-banguela-costas.jpg",
    ],
  },
  {
    slug: "suporte-celular-qrcode",
    name: "Placa de QR Code",
    category: "Suportes",
    tagline: "QR code impresso em relevo, com base própria para ficar em pé",
    description:
      "Placa de mesa com um QR code impresso em relevo, ideal para divulgar Instagram, cardápio, Pix ou portfólio de forma criativa no balcão.",
    features: [
      "QR code gerado sob encomenda para o seu link",
      "Fica em pé sozinha, sem precisar de suporte extra",
      "Ótimo para balcão de loja, feira ou mesa de trabalho",
      "Acabamento branco limpo",
    ],
    images: ["suporte-celular-qrcode.jpg"],
    priceFrom: 30,
  },
  {
    slug: "adaptador-bateria",
    name: "Adaptador de Bateria para Ferramentas",
    category: "Ferramentas",
    tagline: "Faça baterias de marcas diferentes funcionarem juntas",
    description:
      "Adaptador impresso em material resistente que permite usar a bateria de uma marca de ferramenta em equipamentos de outra marca. Encaixe preciso nos contatos, corpo reforçado para uso pesado no dia a dia.",
    features: [
      "Impresso em material de alta resistência",
      "Encaixe preciso testado nos contatos elétricos",
      "Feito sob medida para o par de marcas que você usa",
      "Economiza a compra de baterias duplicadas",
    ],
    images: [
      "adaptador-bateria-01.jpg",
      "adaptador-bateria-02.jpg",
      "adaptador-bateria-03.jpg",
      "anuncio-adaptador-bateria.jpg",
    ],
    priceFrom: 100,
  },
  {
    slug: "porta-canetas-jaqueta",
    name: "Porta-Canetas Jaqueta",
    category: "Decoração",
    tagline: "Organizador de mesa com visual de jaqueta puffer",
    description:
      "Porta-canetas com textura de jaqueta puffer, incluindo zíper e detalhes costurados impressos em alto relevo. Um item decorativo e útil para a mesa de estudo ou escritório.",
    features: [
      "Espaço para canetas, lápis e réguas",
      "Textura detalhada em relevo, com zíper impresso",
      "Base larga, não vira com o peso das canetas",
      "Ótimo item para presente criativo",
    ],
    images: ["porta-canetas-jaqueta.jpg"],
    priceFrom: 37.9,
  },
  {
    slug: "pote-organizador",
    name: "Pote Organizador com Tampa",
    category: "Organização",
    tagline: "Potinho estriado com tampa de encaixe",
    description:
      "Pote redondo com paredes estriadas e tampa de encaixe justo, perfeito para guardar cotonetes, clipes, joias pequenas ou qualquer miudeza de banheiro e escritório.",
    features: [
      "Tampa de encaixe firme, não abre à toa",
      "Acabamento liso por dentro, fácil de limpar",
      "Tamanho compacto para bancada ou gaveta",
      "Disponível em diferentes cores",
    ],
    images: ["pote-organizador-aberto.jpg", "pote-organizador-fechado.jpg"],
  },
  {
    slug: "placa-confie-em-deus",
    name: "Placa Confie em Deus",
    category: "Decoração",
    tagline: "Letreiro decorativo para casa",
    description:
      "Letreiro em 3D com a frase \"Confie em Deus\", combinando letras brancas com o destaque \"em Deus\" em efeito metalizado. Fica ótimo apoiado em estante, escrivaninha ou parede.",
    features: [
      "Letras grandes com ótimo acabamento",
      "Detalhe em efeito metalizado no destaque",
      "Pode ser pendurado ou apoiado",
      "Também fazemos outras frases sob encomenda",
    ],
    images: ["placa-confie-em-deus.jpg"],
    priceFrom: 49.9,
  },
  {
    slug: "chaveiro-dia-dos-pais",
    name: "Chaveiro Feliz Dia dos Pais",
    category: "Chaveiros",
    tagline: "Presente rápido e certeiro para o Dia dos Pais",
    description:
      "Chaveiro redondo com a frase \"Feliz Dia dos Pais para o melhor pai do mundo\" e bigode em relevo. Um presente simples, barato e cheio de carinho.",
    features: [
      "Ótimo para vendas em lote em datas comemorativas",
      "Argola de metal resistente inclusa",
      "Pode ser personalizado com outro nome ou frase",
      "Leve e resistente ao dia a dia",
    ],
    images: ["chaveiro-dia-dos-pais.webp"],
    priceFrom: 8.9,
    bulkPricing: "A partir de 40 unidades: R$ 5,00 cada",
  },
  {
    slug: "chaveiro-labios",
    name: "Chaveiro Lábios",
    category: "Chaveiros",
    tagline: "Chaveiro delicado, em rosa ou vermelho brilhante",
    description:
      "Chaveiro em formato de lábios, impresso em filamento com acabamento brilhante (silk). Disponível em rosa ou vermelho. Discreto, charmoso e ótimo para revenda.",
    features: [
      "Disponível em rosa e vermelho",
      "Filamento silk com brilho suave",
      "Tamanho compacto, ideal para bolsa ou mochila",
      "Ótimo para vender em kits ou avulso",
    ],
    images: ["chaveiro-labios.jpg", "chaveiro-labios-vermelho.jpg"],
    priceFrom: 8.9,
    bulkPricing: "A partir de 40 unidades: R$ 5,00 cada",
  },
  {
    slug: "vaso-espiral",
    name: "Vaso Espiral",
    category: "Decoração",
    tagline: "Vaso torcido com efeito metalizado",
    description:
      "Vaso decorativo com padrão espiral contínuo e acabamento metalizado, disponível em roxo e azul. Um item de destaque para mesa, estante ou centro de mesa.",
    features: [
      "Impressão em uma peça só, sem colagem",
      "Acabamento metalizado com brilho",
      "Disponível em roxo, azul e outras cores",
      "Também funciona como suporte para flores secas",
    ],
    images: ["vaso-espiral-roxo.jpg", "vaso-espiral-azul.jpg"],
  },
  {
    slug: "fidget-spinner-engrenagens",
    name: "Fidget Spinner de Engrenagens",
    category: "Curiosidades",
    tagline: "Fidget spinner com engrenagens reais que giram",
    description:
      "Fidget spinner em formato de mandala com engrenagens internas totalmente funcionais: gire a peça central e todas as outras giram junto. Vistoso e viciante, impresso em uma peça só, sem montagem.",
    features: [
      "Engrenagens funcionam de verdade, sem montagem",
      "Impressa em uma única peça (print-in-place)",
      "Ótimo item de vitrine para chamar atenção",
      "Disponível em várias cores",
    ],
    images: ["engrenagem-mandala-amarela.jpg"],
    priceFrom: 35,
  },
  {
    slug: "suporte-clamp-branco",
    name: "Suporte de Clamp Ajustável",
    category: "Suportes",
    tagline: "Fixação por clamp para trilho, mesa ou estrutura",
    description:
      "Suporte com sistema de clamp ajustável por rosca, ideal para fixar celular, luminária ou acessório em trilhos, mesas e estruturas de perfil. Aperto firme e regulável.",
    features: [
      "Rosca de ajuste para várias espessuras",
      "Boa firmeza, não escorrega com o peso",
      "Fácil de instalar e remover sem ferramentas",
      "Feito sob medida para o seu uso",
    ],
    images: ["suporte-clamp-branco-01.jpg", "suporte-clamp-branco-02.jpg"],
    priceFrom: 35,
  },
  {
    slug: "modelo-dental",
    name: "Modelo Dental Didático",
    category: "Educacional",
    tagline: "Réplica de arcada dentária para estudo e apresentação",
    description:
      "Modelo didático de arcada dentária, com dentes destacáveis em branco e base rosa, montado em suporte octogonal. Ótimo para estudantes de odontologia, professores e consultórios.",
    features: [
      "Proporções fiéis para fins didáticos",
      "Suporte de base estável incluso",
      "Ótimo para apresentações e salas de aula",
      "Também serve como peça decorativa de consultório",
    ],
    images: ["dentadura-modelo-dental.jpg"],
  },
  {
    slug: "letreiro-personalizado",
    name: "Letreiro Decorativo Personalizado",
    category: "Personalizado",
    tagline: "Letra e nome montados em 3D para presentear",
    description:
      "Letra inicial grande combinada com o nome em fonte cursiva, montada em duas cores. Um presente afetivo e personalizado para quarto, mesa de festa ou decoração de evento.",
    features: [
      "Feito com o nome e as cores que você escolher",
      "Duas peças que se encaixam (letra + nome)",
      "Ótimo para maternidade, aniversário e casamento",
      "Acabamento liso e pintável",
    ],
    images: ["letra-m-marrie.jpg", "letra-m-marrie-02.jpg"],
    imagePosition: "center 70%",
    priceFrom: 49.9,
  },
  {
    slug: "chaveiro-jesus",
    name: "Chaveiro Personalizado com Nome",
    category: "Chaveiros",
    tagline: "Chaveiro em fonte cursiva com o nome ou palavra que você quiser",
    description:
      "Chaveiro em fonte cursiva personalizado com o nome, palavra ou frase curta que você escolher. Exemplos na foto: \"Jesus\", \"Beatriz\" e \"MaxArthur\", em cores diferentes.",
    features: [
      "Personalizado com o nome ou palavra que você quiser",
      "Argola e correntinha de metal inclusas",
      "Leve e resistente ao uso diário",
      "Disponível em várias cores",
    ],
    images: ["chaveiro-jesus.jpg", "chaveiro-personalizado-exemplos.jpg"],
    priceFrom: 7,
  },
  {
    slug: "chaveiro-halteres-fitness",
    name: "Chaveiro Halteres Fitness",
    category: "Chaveiros",
    tagline: "Mini halteres coloridos para quem é do fitness",
    description:
      "Chaveiro em miniatura de halteres, nas cores amarela, preta e vermelha, com detalhe de peso impresso. Item perfeito para academia, personal trainer e loja de suplementos.",
    features: [
      "Ótimo para vender em lote (kits e brindes)",
      "Réplica fiel de halteres de academia",
      "Cores variadas disponíveis",
      "Resistente ao uso no chaveiro do dia a dia",
    ],
    images: [
      "chaveiros-halteres-fitness-01.jpg",
      "chaveiros-halteres-fitness-02.jpg",
    ],
    priceFrom: 10,
  },
  {
    slug: "brinquedo-gato",
    name: "Brinquedo Giratório para Gatos",
    category: "Pet",
    tagline: "Pista circular com bolinha para estimular o instinto de caça",
    description:
      "Brinquedo circular para gatos, com uma bolinha que gira livremente por dentro da pista. Estimula o instinto de caça, reduz o tédio e o estresse do pet, e é resistente ao uso diário.",
    features: [
      "Estimula o instinto de caça do gato",
      "Bolinha interna gira suavemente na pista",
      "Material resistente a mordidas e arranhões",
      "Fácil de limpar",
    ],
    images: ["anuncio-brinquedo-gato.jpg"],
  },
  {
    slug: "suporte-nfc-whatsapp",
    name: "Suporte de Aproximação NFC para WhatsApp",
    category: "Suportes",
    tagline: "Encoste o celular e o WhatsApp abre sozinho",
    description:
      "Placa de mesa com tag NFC embutida: a pessoa só encosta o celular e o WhatsApp já abre direto na sua conversa, sem precisar escanear QR code ou salvar número. Ótimo para balcão de loja, recepção ou estande de feira.",
    features: [
      "Tag NFC configurada com o seu WhatsApp",
      "Funciona só de encostar o celular, sem app extra",
      "Design com o ícone do WhatsApp em relevo",
      "Ótimo para loja, consultório, feira e recepção",
    ],
    images: ["suporte-nfc-whatsapp-01.jpg", "suporte-nfc-whatsapp-02.jpg"],
    imagePosition: "center 10%",
  },
  {
    slug: "fidget-ovo-dragao",
    name: "Fidget Ovo de Dragão",
    category: "Curiosidades",
    tagline: "Ovo sensorial que se abre em espiral, print-in-place",
    description:
      "Ovo decorativo com textura de escamas de dragão que se transforma: puxe e ele se abre em uma espiral longa, tipo cauda ou chama. Impresso em uma peça só, sem montagem, ótimo pra mexer com as mãos e aliviar estresse.",
    features: [
      "Se transforma: fecha como ovo ou abre em espiral",
      "Impresso em uma única peça (print-in-place)",
      "Ótimo fidget toy anti-estresse",
      "Item bonito de vitrine, chama atenção",
    ],
    images: [
      "ovo-dragao.jpg",
      "espiral-dourada-01.jpg",
      "espiral-dourada-02.jpg",
      "espiral-dourada-03.jpg",
    ],
    priceFrom: 35,
  },
  {
    slug: "pote-coracao-personalizado",
    name: "Pote de Coração Personalizado",
    category: "Personalizado",
    tagline: "Caixinha em formato de coração com sua mensagem",
    description:
      "Caixa em formato de coração com tampa, personalizada com o nome ou mensagem que você quiser (ex: \"Eu te amo [nome]\"). Detalhe de corações em relevo nas laterais. Ótimo presente de aniversário, namoro ou data comemorativa.",
    features: [
      "Personalizada com o nome ou frase que você escolher",
      "Tampa com encaixe, serve pra guardar bilhetes, joias ou docinhos",
      "Detalhe de corações em relevo nas laterais",
      "Ótimo presente de data comemorativa",
    ],
    images: ["pote-coracao-01.jpg", "pote-coracao-02.jpg"],
    priceFrom: 50,
  },
  {
    slug: "chaveiro-instagram",
    name: "Chaveiro Instagram",
    category: "Chaveiros",
    tagline: "Logo do Instagram em chaveiro colorido",
    description:
      "Chaveiro com o ícone do Instagram, nas cores originais do app. Leve, resistente e chamativo — ótimo pra quem cria conteúdo ou quer um chaveiro diferente.",
    features: [
      "Cores fiéis ao ícone original",
      "Argola e correntinha de metal inclusas",
      "Leve e resistente ao uso diário",
      "Ótimo pra revenda ou brinde",
    ],
    images: ["chaveiro-instagram-01.jpg", "chaveiro-instagram-02.jpg"],
  },
];

export const filamentColors = [
  { name: "Azul", image: "azul.jpg" },
  { name: "Azul com Roxo (Dual Color)", image: "azul-roxo-dual-color.jpg" },
  {
    name: "Vermelho com Preto (Dual Color)",
    image: "vermelho-preto-dual-color-01.jpg",
  },
  { name: "Amarelo", image: "amarelo.jpg" },
  { name: "Bege", image: "bege.jpg" },
  { name: "Branco", image: "branco.jpg" },
  { name: "Branco (PETG)", image: "branco-petg.jpg" },
  { name: "Dourado", image: "dourado.jpg" },
  { name: "Preto", image: "preto.jpg" },
  { name: "Rosa", image: "rosa.jpg" },
  { name: "Verde", image: "verde.jpg" },
  { name: "Vermelho", image: "vermelho.jpg" },
];

export const highlights = [
  {
    title: "Feito sob encomenda",
    subtitle:
      "Cada peça pode ser ajustada em cor, tamanho e texto conforme o seu pedido.",
    accent: "Sob medida",
  },
  {
    title: "Do decorativo ao funcional",
    subtitle:
      "Chaveiros, decoração, suportes, ferramentas e peças didáticas em um só lugar.",
    accent: "Variedade",
  },
  {
    title: "Fechamento direto no WhatsApp",
    subtitle:
      "Sem carrinho, sem cadastro. Você escolhe a peça e já chama para combinar.",
    accent: "Rápido",
  },
];

export const serviceSteps = [
  "Escolha a peça no catálogo e clique em \"Tenho interesse!\".",
  "Você cai direto no meu WhatsApp com a peça já identificada na mensagem.",
  "Combinamos cor, tamanho, prazo e forma de entrega sem burocracia.",
];

export const faq = [
  {
    question: "Dá para personalizar cor, nome ou frase da peça?",
    answer:
      "Sim. A maioria das peças pode ser personalizada em cor, tamanho e texto. É só falar no WhatsApp o que você tem em mente.",
  },
  {
    question: "Vocês fazem pedidos em quantidade, tipo chaveiros para revenda?",
    answer:
      "Sim, trabalho tanto com peça única quanto com lotes maiores para revenda, brindes e datas comemorativas.",
  },
  {
    question: "Como funciona o pagamento e a entrega?",
    answer:
      "Isso é combinado direto no WhatsApp depois de definirmos a peça, cor e prazo. Atendo entrega local e envio para outras cidades.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo mínimo é de 2 dias, mas sempre confirmo a disponibilidade certinha no WhatsApp antes de fechar o pedido. Para pedidos em quantidade maior, o prazo aumenta conforme o número de peças.",
  },
  {
    question: "Posso mandar uma referência ou ideia própria?",
    answer:
      "Pode sim. Manda a ideia, foto ou modelo de referência no WhatsApp que eu avalio a viabilidade e te passo um orçamento.",
  },
];
