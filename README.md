# Potiguar Solar — landing page demonstrativa

Landing page de alta conversão para a **Potiguar Solar**, marca **fictícia** de energia solar fotovoltaica (Natal/RN), criada como case de portfólio de web design.

> A página não representa uma empresa real. Não há depoimentos, números de resultado, CNPJ, endereço ou certificações inventados, e o formulário não envia dados enquanto a integração não for configurada.

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger (animações, com respeito a `prefers-reduced-motion`)
- Lucide (ícones)
- Fontes self-hosted: Fraunces (títulos) e Inter Tight (texto), via Fontsource

## Rodando localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # typecheck + build de produção em dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  components/   # uma seção por componente (Hero, Solutions, Savings, Faq...)
  config/
    site.ts     # marca, navegação e integrações (WhatsApp, leads, Instagram)
    content.ts  # toda a copy das seções
    photos.ts   # fotografias, créditos e URLs responsivas
  hooks/useMotion.ts  # todas as animações em um só lugar
  lib/          # eventos (CTA → formulário) e validação
public/         # favicon, og-image, robots.txt, manifest
```

## Integrações pendentes

Configure em `.env.local` (local) ou em **Vercel → Settings → Environment Variables**. Veja `.env.example`.

| Variável | O que faz | Enquanto vazia |
| --- | --- | --- |
| `VITE_WHATSAPP_NUMBER` | Número com DDI+DDD (ex.: `5584XXXXXXXXX`). Ativa o botão flutuante e o CTA de WhatsApp. | O botão flutuante leva ao formulário. Nenhum número fictício é usado. |
| `VITE_LEAD_ENDPOINT` | URL `https://` que recebe o lead via `POST` JSON (`nome`, `whatsapp`, `tipo`, `conta`, `origem`, `enviadoEm`). | O formulário valida e mostra o aviso de projeto demonstrativo. Nada é enviado. |
| `VITE_SITE_URL` | URL pública usada no canonical/Open Graph. | Usa `https://potiguar-solar.vercel.app`. |

Os contatos exibidos (WhatsApp `(84) 00000-0000` e Instagram `@potiguarsolar.demo`) são **ilustrativos** e ficam em `demoContacts`, em `src/config/site.ts`. Eles não são links: ao clicar, aparece um aviso de que os canais estão em configuração.

## Indexação

Por ser um case fictício, a página usa `noindex` (meta tag e cabeçalho `X-Robots-Tag` em `vercel.json`), para não aparecer no Google como uma empresa real em Natal. Para um cliente real, remova os dois e volte a publicar um `sitemap.xml`.

## Fotografias

Imagens do [Unsplash](https://unsplash.com/license) (licença livre), servidas pelo CDN com `auto=format` (AVIF/WebP), `srcset` responsivo, `lazy` abaixo da dobra e `preload` + `fetchpriority=high` na hero. São ilustrativas e não retratam instalações da marca. Créditos no rodapé e em `src/config/photos.ts`.

Para um projeto real, substitua por fotos próprias da empresa (de preferência exportadas em AVIF/WebP e colocadas em `public/`).

## Animações escolhidas

Zoom de profundidade + parallax na imagem da hero, brilho solar que nasce no canto, títulos entrando por linhas, revelação de imagens por máscara, entradas em cascata, linha do tempo que se desenha com a rolagem e microinterações nos botões. Sem cursor personalizado, partículas ou rolagem artificial.
