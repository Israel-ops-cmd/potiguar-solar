/**
 * Fotografias: Unsplash (Licença Unsplash, uso livre).
 * São imagens ilustrativas de terceiros, não instalações da Potiguar Solar.
 *
 * As imagens são servidas pelo CDN do Unsplash com `auto=format`, que entrega
 * AVIF ou WebP conforme o navegador, em larguras responsivas (srcset).
 * Para trocar uma foto, altere apenas o `id` (trecho "photo-..." da URL).
 */

export type Photo = {
  id: string;
  alt: string;
  author: string;
  pageUrl: string;
  /** proporção original (largura / altura) */
  ratio: number;
  /** cor média, usada como fundo enquanto carrega */
  color: string;
  /** foco do recorte (object-position) */
  focus?: string;
};

export const photos = {
  hero: {
    id: "photo-1721620845374-1cef4ceae9cf",
    alt: "Telhado de cerâmica com painéis solares iluminados pelo sol do fim de tarde",
    author: "Joshua Bowers",
    pageUrl: "https://unsplash.com/photos/a-solar-panel-on-a-roof-with-a-rainbow-in-the-background-0SyvPKyZc-M",
    ratio: 1.5,
    color: "#3d4a5a",
    focus: "35% 50%",
  },
  residencial: {
    id: "photo-1630608354129-6a7704150401",
    alt: "Casas com telhados cobertos por painéis solares sob céu claro",
    author: "Mischa Frank",
    pageUrl: "https://unsplash.com/photos/white-and-black-wooden-house-under-white-sky-during-daytime-6M9OhcblUHM",
    ratio: 1.5,
    color: "#909da5",
    focus: "50% 85%",
  },
  comercial: {
    id: "photo-1617269778723-73a40cf299bd",
    alt: "Fileiras de painéis solares na cobertura de um edifício comercial, com a cidade ao fundo",
    author: "Jeroen van de Water",
    pageUrl: "https://unsplash.com/photos/black-and-white-solar-panels-aQOzmgcT6sI",
    ratio: 1.5,
    color: "#969da3",
  },
  instalacao: {
    id: "photo-1624397640148-949b1732bb0a",
    alt: "Profissional instalando um painel solar em um telhado sob céu azul",
    author: "Bill Mead",
    pageUrl: "https://unsplash.com/photos/person-installing-solar-panel-on-roof-wmaP3Tl80ww",
    ratio: 4032 / 3024,
    color: "#408cf3",
    focus: "50% 22%",
  },
  tecnico: {
    id: "photo-1668097613572-40b7c11c8727",
    alt: "Técnico trabalhando na montagem de painéis fotovoltaicos",
    author: "Markus Spiske",
    pageUrl: "https://unsplash.com/photos/a-person-working-on-a-solar-panel-rNn_TU8dvoY",
    ratio: 8192 / 5464,
    color: "#404040",
  },
  detalhe: {
    id: "photo-1694327672187-74aa0605314d",
    alt: "Detalhe de um painel solar com fundo desfocado",
    author: "Michael Pointner",
    pageUrl: "https://unsplash.com/photos/a-close-up-of-a-solar-panel-with-a-blurry-background-ZGzMr04QdmU",
    ratio: 6000 / 4000,
    color: "#594040",
  },
  paineis: {
    id: "photo-1613665813446-82a78c468a1d",
    alt: "Painéis solares refletindo a luz do entardecer",
    author: "Nuno Marques",
    pageUrl: "https://unsplash.com/photos/black-and-white-solar-panels-0GbrjL3vZF4",
    ratio: 5314 / 3596,
    color: "#405959",
  },
  ceu: {
    id: "photo-1698752821934-28bd5ce6fd42",
    alt: "Painéis solares sob o sol nascente, com raios de luz entre as nuvens",
    author: "Dad hotel",
    pageUrl: "https://unsplash.com/photos/a-row-of-solar-panels-sitting-on-top-of-a-sandy-beach-iopyZ4hDCNQ",
    ratio: 4 / 3,
    color: "#57797a",
    focus: "50% 45%",
  },
} satisfies Record<string, Photo>;

const BASE = "https://images.unsplash.com/";
const WIDTHS = [480, 768, 1080, 1440, 1920, 2400];

export function photoUrl(p: Photo, w: number, q = 70) {
  return `${BASE}${p.id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export function photoSrcSet(p: Photo, max = 2400, q = 70) {
  return WIDTHS.filter((w) => w <= max)
    .map((w) => `${photoUrl(p, w, q)} ${w}w`)
    .join(", ");
}
