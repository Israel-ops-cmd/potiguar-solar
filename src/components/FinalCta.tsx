import { ArrowRight, MessageCircle } from "lucide-react";
import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { whatsappLink } from "../config/site";
import { goToSimulation } from "../lib/events";

export function FinalCta() {
  const wa = whatsappLink("Olá! Quero solicitar um orçamento de energia solar.");
  return (
    <section id="orcamento" className="grain relative isolate overflow-hidden bg-navy text-white" aria-labelledby="orcamento-title">
      <div data-parallax className="absolute inset-[-10%_0] -z-10">
        <Photo photo={photos.ceu} sizes="100vw" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,29,64,.75),rgba(7,29,64,.9))]" />

      <div className="container-x py-28 sm:py-40">
        <p className="eyebrow text-sun" data-reveal>
          Orçamento sem compromisso
        </p>
        <h2 id="orcamento-title" className="display mt-6 max-w-5xl text-[clamp(2.4rem,6.4vw,5rem)]" data-reveal>
          Antes de pagar a próxima conta, descubra quanto dela <em>o sol pode cobrir.</em>
        </h2>
        <p className="mt-8 max-w-xl text-[1.15rem] text-white/75" data-reveal>
          Leva poucos minutos. Você informa a média da conta e o tipo de imóvel, e recebe o retorno para dar o próximo passo.
        </p>
        <div className="mt-11 flex flex-col gap-3 sm:flex-row" data-reveal>
          <button type="button" className="btn btn-sun" onClick={() => goToSimulation()}>
            Solicitar minha simulação <ArrowRight className="arrow size-5" aria-hidden="true" />
          </button>
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <MessageCircle className="size-5" aria-hidden="true" /> Falar no WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
