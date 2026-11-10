import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../config/site";
import { goToSimulation } from "../lib/events";

/**
 * Botão flutuante de contato.
 * Com VITE_WHATSAPP_NUMBER configurado, abre o WhatsApp.
 * PENDENTE: sem número, leva ao formulário de simulação (nenhum número fictício é usado).
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const link = whatsappLink("Olá! Vim pelo site e quero simular minha economia com energia solar.");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = `fixed right-4 bottom-4 z-40 flex h-14 items-center gap-2.5 rounded-full bg-[#1fa855] pr-5 pl-4 font-semibold text-white shadow-[0_16px_34px_-12px_rgba(31,168,85,.8)] transition-[opacity,transform] duration-500 ease-out-expo hover:-translate-y-0.5 sm:right-6 sm:bottom-6 ${
    visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
  }`;

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={cls} aria-label="Falar no WhatsApp" tabIndex={visible ? 0 : -1}>
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      onClick={() => goToSimulation()}
      aria-label="WhatsApp ainda não configurado. Ir para o formulário de simulação"
      title="WhatsApp a definir. Use o formulário de simulação."
      tabIndex={visible ? 0 : -1}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="text-[0.95rem]">Simular</span>
    </button>
  );
}
