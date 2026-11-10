import { Logo } from "./Logo";
import { ContactChannels } from "./ContactChannels";
import { nav, site } from "../config/site";
import { photos } from "../config/photos";

export function Footer() {
  const credits = Array.from(new Map(Object.values(photos).map((p) => [p.author, p])).values());
  return (
    <footer className="bg-graphite pt-20 pb-28 text-white/70 sm:pb-16">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="t-md mt-7 max-w-sm text-white">{site.tagline}</p>
            <p className="mt-4 max-w-sm">Energia solar fotovoltaica residencial e comercial em {site.region}.</p>
          </div>

          <nav className="lg:col-span-3 lg:col-start-7" aria-label="Rodapé">
            <p className="font-semibold text-white">Navegação</p>
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
            <p className="font-semibold text-white">Contato</p>
            <ContactChannels className="mt-4" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.88rem] text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>Projeto conceitual desenvolvido para fins de portfólio.</p>
          <p>
            Fotos ilustrativas:{" "}
            {credits.map((p, i) => (
              <span key={p.author}>
                <a className="link-underline hover:text-white" href={p.pageUrl} target="_blank" rel="noopener noreferrer">
                  {p.author}
                </a>
                {i < credits.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            (Unsplash)
          </p>
        </div>
      </div>
    </footer>
  );
}
