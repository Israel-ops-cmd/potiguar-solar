import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { demoContacts, whatsappLink } from "../config/site";
import { showToast } from "../lib/toast";

/**
 * Botão flutuante do WhatsApp (ícone oficial).
 * Com VITE_WHATSAPP_NUMBER configurado, abre a conversa.
 * Sem número, exibe aviso discreto de canal em configuração.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const link = whatsappLink("Olá! Vim pelo site e quero simular minha economia com energia solar.");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = `group fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-10px_rgba(18,140,74,.75)] ring-1 ring-black/5 transition-[opacity,transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-10px_rgba(18,140,74,.9)] sm:right-6 sm:bottom-6 lg:size-auto lg:h-14 lg:pr-6 lg:pl-4 ${
    visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
  }`;

  const content = (
    <>
      <FaWhatsapp className="size-[30px] shrink-0 lg:size-[26px]" aria-hidden="true" />
      <span className="hidden text-[0.98rem] leading-none font-semibold lg:inline">Fale conosco</span>
    </>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={cls} aria-label="Conversar no WhatsApp" tabIndex={visible ? 0 : -1}>
      {content}
    </a>
  ) : (
    <button
      type="button"
      className={cls}
      onClick={() => showToast(demoContacts.notice)}
      aria-label={`WhatsApp ${demoContacts.whatsapp}`}
      tabIndex={visible ? 0 : -1}
    >
      {content}
    </button>
  );
}
