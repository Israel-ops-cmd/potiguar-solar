import { ArrowRight, MapPin } from "lucide-react";
import { Photo } from "./Photo";
import { SplitLines } from "./SplitLines";
import { LeadForm } from "./LeadForm";
import { photos } from "../config/photos";
import { site } from "../config/site";
import { goToSimulation } from "../lib/events";

/** Hero cinematográfica: fotografia em tela cheia, texto à esquerda e formulário à direita. */
export function Hero() {
  return (
    <section id="topo" className="grain relative -mt-[72px] overflow-hidden bg-navy text-white" aria-labelledby="hero-title">
      {/* Camada de imagem: zoom de entrada + parallax na rolagem */}
      <div className="absolute inset-0">
        <div data-hero-img className="absolute inset-[-6%_0_-6%_0] will-change-transform">
          <Photo photo={photos.hero} sizes="100vw" priority className="h-full w-full" imgClassName="-scale-x-100 !object-[8%_50%] lg:!object-[35%_50%]" />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,64,.82)_0%,rgba(7,29,64,.6)_35%,rgba(7,29,64,.92)_70%,#071d40_100%)] lg:bg-[linear-gradient(100deg,rgba(7,29,64,.96)_0%,rgba(7,29,64,.82)_36%,rgba(7,29,64,.28)_66%,rgba(7,29,64,.5)_100%)]"
          aria-hidden="true"
        />
        {/* Sol: brilho que nasce no canto e acompanha a profundidade da imagem */}
        <div
          data-hero-sun
          className="pointer-events-none absolute -top-[18vmax] right-[-14vmax] size-[52vmax] rounded-full opacity-60 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,.5) 0%, rgba(245,166,35,.16) 35%, transparent 65%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-end gap-12 pt-[124px] pb-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-[140px] lg:pb-20">
        <div className="lg:col-span-7 lg:pr-8">
          <h1 id="hero-title" className="t-hero">
            <SplitLines lines={["Sua energia pode", <>custar <em className="text-sun">menos.</em></>]} />
            <span className="mt-4 block text-[0.44em] leading-[1.15] font-[380] tracking-[-0.02em] text-white/90 lg:mt-5">
              <SplitLines lines={["Comece pela simulação."]} />
            </span>
          </h1>
          <p data-hero-fade className="lead mt-7 max-w-[33rem] text-white/80">
            Energia solar para sua casa ou empresa. Descubra como ela pode reduzir seus gastos com eletricidade e dar mais
            controle sobre o seu consumo.
          </p>
          <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" className="btn btn-sun !min-h-[56px] !px-8" onClick={() => goToSimulation()}>
              Quero simular minha economia <ArrowRight className="arrow size-5" aria-hidden="true" />
            </button>
            <a href="#solucoes" className="btn btn-ghost-light !min-h-[56px]">
              Conhecer as soluções
            </a>
          </div>
          <p data-hero-fade className="mt-10 hidden items-center gap-2 text-[0.95rem] text-white/60 lg:flex">
            <MapPin className="size-4 text-sun" aria-hidden="true" /> {site.region}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div
            id="simulacao"
            data-hero-form
            className="relative rounded-[28px] bg-navy/80 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)] ring-1 ring-white/12 backdrop-blur-xl sm:p-8"
          >
            <LeadForm stacked />
          </div>
        </div>
      </div>
    </section>
  );
}
