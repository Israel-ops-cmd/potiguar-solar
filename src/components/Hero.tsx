import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Photo } from "./Photo";
import { SplitLines } from "./SplitLines";
import { LeadForm } from "./LeadForm";
import { photos } from "../config/photos";
import { site } from "../config/site";
import { goToSimulation } from "../lib/events";

export function Hero() {
  return (
    <section id="topo" className="grain relative -mt-[72px] overflow-hidden bg-navy text-white" aria-labelledby="hero-title">
      {/* Camada de imagem: zoom de entrada + parallax na rolagem */}
      <div className="absolute inset-0" aria-hidden="false">
        <div data-hero-img className="absolute inset-[-6%_0_-6%_0] will-change-transform">
          <Photo photo={photos.hero} sizes="100vw" priority className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,64,.55)_0%,rgba(7,29,64,.35)_35%,rgba(7,29,64,.92)_78%,#071d40_100%)] lg:bg-[linear-gradient(100deg,rgba(7,29,64,.94)_0%,rgba(7,29,64,.78)_38%,rgba(7,29,64,.25)_68%,rgba(7,29,64,.55)_100%)]" />
        {/* Sol: brilho que nasce no canto e acompanha a profundidade da imagem */}
        <div
          data-hero-sun
          className="pointer-events-none absolute -top-[18vmax] right-[-14vmax] size-[52vmax] rounded-full opacity-70 mix-blend-screen"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,.55) 0%, rgba(245,166,35,.18) 35%, transparent 65%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="container-x relative grid min-h-[100svh] grid-cols-1 items-end gap-12 pt-[128px] pb-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-[150px] lg:pb-24">
        <div className="lg:col-span-7 lg:pr-6">
          <p data-hero-fade className="eyebrow text-sun">Energia solar para sua casa ou empresa</p>
          <h1 id="hero-title" className="display mt-6 text-[clamp(2.6rem,6.6vw,4.9rem)] font-normal">
            <SplitLines lines={["Sua energia pode", <>custar <em>menos.</em></>, "Comece pela simulação."]} />
          </h1>
          <p data-hero-fade className="mt-7 max-w-[34rem] text-[1.12rem] leading-relaxed text-white/80 sm:text-[1.2rem]">
            Descubra como a energia solar pode ajudar a reduzir seus gastos com eletricidade. Uma solução pensada para
            quem busca mais eficiência e controle sobre o consumo de energia.
          </p>
          <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" className="btn btn-sun" onClick={() => goToSimulation()}>
              Quero simular minha economia <ArrowRight className="arrow size-5" aria-hidden="true" />
            </button>
            <a href="#solucoes" className="btn btn-ghost-light">
              Conhecer as soluções
            </a>
          </div>
          <p data-hero-fade className="mt-10 hidden items-center gap-2 text-[0.95rem] text-white/60 lg:flex">
            <MapPin className="size-4 text-sun" aria-hidden="true" /> Referência de atendimento: {site.region}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div
            id="simulacao"
            data-hero-form
            className="relative rounded-[28px] bg-navy/75 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,.7)] ring-1 ring-white/12 backdrop-blur-xl sm:p-8"
          >
            <LeadForm />
          </div>
        </div>
      </div>

      <a
        href="#beneficios"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[0.8rem] tracking-[0.2em] text-white/55 uppercase hover:text-white lg:flex"
        aria-label="Rolar para os benefícios"
      >
        <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" /> Role
      </a>
    </section>
  );
}
