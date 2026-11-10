/**
 * Configuração central do site.
 *
 * Potiguar Solar é uma marca fictícia criada para um projeto demonstrativo de web design.
 * As integrações abaixo estão PENDENTES de propósito: enquanto estiverem vazias,
 * nenhum dado do formulário é enviado e o botão de WhatsApp não abre conversa.
 */

const env = import.meta.env;

export const site = {
  name: "Potiguar Solar",
  tagline: "Energia inteligente. Economia que faz sentido.",
  region: "Natal e região metropolitana, RN",
  url: (env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://potiguar-solar.vercel.app",
  isDemo: true,
} as const;

export const integrations = {
  /** PENDENTE: número com DDI + DDD, só dígitos (ex.: 5584XXXXXXXXX). */
  whatsappNumber: ((env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "").replace(/\D/g, ""),
  /** PENDENTE: endpoint que recebe o lead via POST JSON. */
  leadEndpoint: (env.VITE_LEAD_ENDPOINT as string | undefined) ?? "",
  /** PENDENTE: perfil do Instagram (ex.: https://instagram.com/potiguarsolar). */
  instagramUrl: "",
};

export const hasWhatsApp = integrations.whatsappNumber.length >= 12;
export const hasLeadEndpoint = /^https:\/\//.test(integrations.leadEndpoint);

export function whatsappLink(message: string) {
  if (!hasWhatsApp) return null;
  return `https://wa.me/${integrations.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#economia", label: "Economia" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];
