import { Logo } from "./Logo";
import { nav, site, integrations, whatsappLink } from "../config/site";
import { photos } from "../config/photos";

export function Footer() {
  const credits = Array.from(new Map(Object.values(photos).map((p) => [p.author, p])).values());
  return (
    <footer className="bg-graphite pt-20 pb-28 text-white/70 sm:pb-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="display mt-6 max-w-sm text-[1.6rem] leading-snug text-white">{site.tagline}</p>
            <p className="mt-4 max-w-sm">Energia solar fotovoltaica residencial e comercial. Referência de atendimento: {site.region}.</p>
          </div>

          <nav className="lg:col-span-3 lg:col-start-7" aria-label="Rodapé">
            <p className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Navegação</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a className="link-underline hover:text-white" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="link-underline hover:text-white" href="#simulacao">
                  Simulação
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold tracking-[0.16em] text-white uppercase">Contato</p>
            <ul className="mt-5 space-y-3">
              <li>
                WhatsApp:{" "}
                {whatsappLink("Olá! Vim pelo site da Potiguar Solar.") ? (
                  <a className="link-underline text-white" href={whatsappLink("Olá! Vim pelo site da Potiguar Solar.")!} target="_blank" rel="noopener noreferrer">
                    iniciar conversa
                  </a>
                ) : (
                  <span className="text-white/45">a definir</span>
                )}
              </li>
              <li>
                Instagram:{" "}
                {integrations.instagramUrl ? (
                  <a className="link-underline text-white" href={integrations.instagramUrl} target="_blank" rel="noopener noreferrer">
                    perfil oficial
                  </a>
                ) : (
                  <span className="text-white/45">a definir</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-white/[0.04] p-5 text-[0.92rem] leading-relaxed ring-1 ring-white/10 sm:p-6">
          <strong className="text-white">Aviso:</strong> este site é um projeto demonstrativo de web design. A Potiguar
          Solar é uma marca fictícia e não presta serviços. Não há empresa, CNPJ, endereço ou equipe por trás desta página,
          e o formulário não envia dados enquanto a integração não for configurada. As fotografias são ilustrativas, do
          banco Unsplash, e não retratam instalações da marca.
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.88rem] text-white/50 lg:flex-row lg:justify-between">
          <p>© {new Date().getFullYear()} Potiguar Solar · marca fictícia para portfólio.</p>
          <p>
            Fotos:{" "}
            {credits.map((p, i) => (
              <span key={p.author}>
                <a className="link-underline hover:text-white" href={p.pageUrl} target="_blank" rel="noopener noreferrer">
                  {p.author}
                </a>
                {i < credits.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            / Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}
