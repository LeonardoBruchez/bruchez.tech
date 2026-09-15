export type ProductMedia = {
  file: string;
  kind?: "image" | "video";
  alt?: string;
};
export type ProductViewer = {
  model: string;
  kind?: "physical" | "two-layer-text";
  scale?: number;
};
export type Product = {
  slug: string;
  category: string;
  name: string;
  meta: string;
  file: string;
  kind?: "image" | "video";
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  media: ProductMedia[];
  viewer?: ProductViewer;
};
type Seed = {
  name: string;
  meta: string;
  file: string;
  kind?: "image" | "video";
  shortDescription?: string;
  description?: string;
  specifications?: Record<string, string>;
  media?: ProductMedia[];
  viewer?: ProductViewer;
};
const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
const category = (name: string, items: Seed[]): Product[] =>
  items.map((item) => ({
    ...item,
    category: name,
    slug: slugify(item.name),
    shortDescription:
      item.shortDescription ??
      "Peça produzida sob encomenda com acabamento pensado para o seu projeto.",
    description:
      item.description ??
      "Esta peça pode ser produzida sob encomenda e ajustada conforme a necessidade do seu projeto. Fale com a bruchez.tech para confirmar medidas, cores, acabamento e prazo.",
    specifications: item.specifications ?? {
      Material: item.meta.split(" · ")[0],
      Produção: "Sob encomenda",
    },
    // `file` é sempre a imagem de capa. As mídias informadas abaixo dele são
    // fotos/vídeos adicionais para a galeria do produto.
    media: [
      { file: item.file.trim(), kind: item.kind, alt: item.name },
      ...(item.media ?? []).map((media) => ({
        ...media,
        file: media.file.trim(),
      })),
    ].filter(
      (media, index, all) =>
        all.findIndex(
          (candidate) =>
            candidate.file === media.file && candidate.kind === media.kind,
        ) === index,
    ),
  }));

export const Chaveiros = category("Ferramentas e acessórios", [
  {
    name: "Letreiro Confie Em Deus",
    meta: "PLA · encaixe preciso",
    file: "confieEmDeusLetreiro.jpg",
    viewer: {
      model: "/models/confie-em-deus.3mf",
      kind: "two-layer-text",
      scale: 0.01,
    },
    shortDescription: "Proteção feita para o encaixe da sua bateria.",
    specifications: {
      Material: "PETG",
      Encaixe: "Preciso",
      Aplicação: "Bateria DeWalt",
      Produção: "Sob encomenda",
    },
  },
  {
    name: "Suporte de parede para bateria",
    meta: "PETG · reforçado",
    file: "bateria-02.jpg",
  },
  {
    name: "Carcaça protetora 20V",
    meta: "PETG · resistente a impacto",
    file: "bateria-03.jpg",
  },
  {
    name: "Organizador de baterias",
    meta: "PLA+ · modular",
    file: "bateria-04.jpg",
  },
  {
    name: "Tampa de proteção de contatos",
    meta: "TPU · flexível",
    file: "bateria-05.jpg",
  },
]);
export const BONECOS = category("Bonecos & Estátuas", [
  {
    name: "Divino Espírito Santo com Resplendor Dourado",
    meta: "PLA · Branco e Dourado",
    file: "PomboBranco.png",
    media: [
      {
        file: "PomboBrancoFrente.png",
      },
    ],
    shortDescription:
      "Escultura de parede com acabamento em textura branca e raios dourados.",
    description:
      "Escultura de parede do Divino Espírito Santo com resplendor em raios dourados e corpo com acabamento levemente branco. Uma peça decorativa e religiosa elegante, perfeita para ambientes internos, altares domésticos, salas e presente de batismo ou crisma.",
    specifications: {
      Material: "PLA",
      Acabamento: "Impressão 3D de alta precisão (Efeito branco e Dourado)",
      Aplicação: "Decoração de parede / Altar doméstico",
      Produção: "Sob encomenda",
    },
  },
  {
    name: "Miniatura A380",
    meta: "PLA · detalhado",
    file: "A380NaMesa.jpg",
    shortDescription: "Miniatura do AIRBUS A380 cheia de presença.",
    specifications: {
      Material: "PLA",
      Detalhamento: "Alta definição",
      Categoria: "Colecionável",
      Produção: "Sob encomenda",
    },
  },
  {
    name: "Porta caneta Jaqueta",
    meta: "PLA · sob encomenda",
    file: "portaCaneta.jpg",
    shortDescription: "Organização com personalidade na sua mesa.",
  },
  {
    name: "Vaso Espiral",
    meta: "PLA · cores sob medida",
    file: "vasoRoxo.jpg",
    shortDescription: "Vaso escultural em cores escolhidas por você.",
    media: [
      { file: "VasoAzul.jpg", alt: "Vaso espiral azul" },
      { file: "vasoRoxo.jpg", alt: "Vaso espiral roxo" },
      { file: "vaso.mp4", kind: "video", alt: "Vídeo do vaso espiral" },
    ],
  },
  {
    name: "Escultura de Parede Leão Real com Coroa",
    meta: "PLA · Branco e Dourado",
    file: "LionKingSide.png ",
    shortDescription:
      "Escultura imponente de leão com coroa e resplendor dourado.",
    media: [
      {
        file: "LionKingSide.png",
        alt: "Escultura de parede leão com coroa e resplendor de perfil",
      },
      {
        file: "LionKingFront.png",
        alt: "Escultura de parede leão com coroa vista por trás",
      },
      {
        file: "LionKingBack.png",
        alt: "Escultura de parede leão com coroa de frente",
      },
    ],
    description:
      "Escultura de parede imponente em formato de cabeça de leão com coroa e resplendor em raios dourados. A cabeça possui textura visual no estilo branco, enquanto a coroa e os raios trazem um acabamento dourado elegante. Ideal para composição de ambientes modernos, escritórios, salas de estar e decoração de destaque.",
    specifications: {
      Material: "PLA",
      Acabamento:
        "Impressão 3D de alta precisão (Efeito branco e Dourado Silk)",
      Fixação: "Suporte traseiro para parede",
      Produção: "Sob encomenda",
    },
  },

  {
    name: "Cruz Sagrada de Parede com Resplendor Dourado",
    meta: "PLA · Branco e Dourado",
    file: "CruzComDourado.png",
    shortDescription:
      "Cruz trabalhada com detalhes em relevo e resplendor dourado.",
    media: [
      {
        file: "CruzComDourado.png ",
        alt: "Cruz sagrada de parede com detalhes ornamentados e resplendor dourado em ângulo",
      },
      {
        file: "CruzComDouradoDeFrente.png",
        alt: "Cruz sagrada de parede com detalhes ornamentados e resplendor dourado em ângulo",
      },
      {
        file: "CruzComDouradoDeLado.png",
        alt: "Cruz sagrada de parede com detalhes ornamentados e resplendor dourado em ângulo",
      },
      {
        file: "CruzComDouradoFundoPretoFrente.png",
        alt: "Cruz sagrada de parede com detalhes ornamentados e resplendor dourado em ângulo",
      },
      {
        file: "CruzComDouradoDeCostas.png",
        alt: "Cruz sagrada de parede com detalhes ornamentados e resplendor dourado em ângulo",
      },
    ],
    description:
      "Escultura de parede com Cruz Sagrada rica em ornamentos em relevo, destacada por um resplendor de raios dourados ao fundo. O corpo da cruz possui acabamento com textura estilo Branco, proporcionando um visual sofisticado e devocional. Perfeita para decoração de altares domésticos, salas, corredores ou como presente especial de fé.",
    specifications: {
      Material: "PLA",
      Acabamento:
        "Impressão 3D de alta precisão (Efeito Branco e Dourado Silk)",
      Fixação: "Suporte traseiro para parede",
      Produção: "Sob encomenda",
    },
  },
]);

export const DIVERSOS = category("Diversos & Sob Medida", [
  {
    name: "Brinquedo para gato",
    meta: "PLA · seguro e leve",
    file: "diversos-01.jpg",
  },
  {
    name: "Item decorativo",
    meta: "PLA silk · acabamento premium",
    file: "diversos-02.jpg",
  },
  {
    name: "Suporte organizador utilitário",
    meta: "PETG · sob medida",
    file: "diversos-03.jpg",
  },
  {
    name: "Peça de reposição sob medida",
    meta: "Escaneado ou modelado do zero",
    file: "diversos-04.jpg",
  },
  {
    name: "Presente personalizado",
    meta: "PLA · ideias sob consulta",
    file: "diversos-05.jpg",
  },
]);
export const PRODUCTS = [...Chaveiros, ...BONECOS, ...DIVERSOS];
export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((product) => product.slug === slug);
