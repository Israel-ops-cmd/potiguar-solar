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
    id: "photo-1583345237708-add35a664d77",
    alt: "Casa moderna com painéis solares no telhado iluminada pela luz do fim de tarde",
    author: "Giorgio Trovato",
    pageUrl: "https://unsplash.com/photos/brown-and-white-concrete-house-mIlvCv21W1s",
    ratio: 5760 / 3840,
    color: "#1b3355",
    focus: "60% 50%",
  },
  residencial: {
    id: "photo-1637417494521-78b4d1d33029",
    alt: "Residência com painéis fotovoltaicos instalados sobre o telhado",
    author: "Markus Winkler",
    pageUrl: "https://unsplash.com/photos/a-house-with-solar-panels-on-the-roof-VX0ZEZSwqnY",
    ratio: 3999 / 2667,
    color: "#c9d6e3",
  },
  comercial: {
    id: "photo-1694327671725-e2a81cda3436",
    alt: "Fileiras de painéis solares em uma cobertura ampla, típica de imóveis comerciais",
    author: "Michael Pointner",
    pageUrl: "https://unsplash.com/photos/several-rows-of-solar-panels-on-a-roof-t-rzp15L7qg",
    ratio: 4314 / 2876,
    color: "#23324a",
  },
  instalacao: {
    id: "photo-1624397640148-949b1732bb0a",
    alt: "Profissional instalando um painel solar em um telhado sob céu azul",
    author: "Bill Mead",
    pageUrl: "https://unsplash.com/photos/person-installing-solar-panel-on-roof-wmaP3Tl80ww",
    ratio: 4032 / 3024,
    color: "#408cf3",
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
    id: "photo-1463173904305-ba479d2123b7",
    alt: "Painel solar sob nuvens avermelhadas ao entardecer",
    author: "Karsten Würth",
    pageUrl: "https://unsplash.com/photos/black-solar-panel-under-red-and-gray-clouds--tzkyLKPvL4",
    ratio: 1.5,
    color: "#2a2230",
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
