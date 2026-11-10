import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { SplitLines } from "./SplitLines";
import { LeadForm } from "./LeadForm";
import { photos } from "../config/photos";
import { goToSimulation } from "../lib/events";

/**
 * Hero assimétrica: texto à esquerda, fotografia como objeto à direita
 * (sangrando até a borda da tela) e formulário integrado sobre a borda da foto.
 */
export function Hero() {
  return (
    <section id="topo" className="relative -mt-[72px] overflow-hidden bg-navy text-white" aria-labelledby="hero-title">
      {/* Fotografia (desktop): coluna direita, do topo à base, com canto inferior arredondado */}
      <div
        data-hero-frame
        className="absolute top-0 right-0 bottom-0 hidden w-[52%] overflow-hidden rounded-bl-[56px] lg:block"
      >
        <div data-hero-img className="absolute inset-[-8%_0] will-change-transform">
          <Photo photo={photos.hero} sizes="(min-width: 1024px) 52vw, 100vw" className="h-full w-full" />
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/70 to-transparent" aria-hidden="true" />
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-navy/45 to-transparent" aria-hidden="true" />
      </div>

      <div className="container-x relative grid gap-10 pt-[112px] pb-16 lg:min-h-[max(100svh,760px)] lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-0 lg:pt-[132px] lg:pb-14">
        {/* Texto */}
        <div className="flex flex-col justify-center lg:col-span-5 lg:row-span-2 lg:pr-4 lg:pb-[18vh]">
          <h1 id="hero-title" className="t-hero">
            <SplitLines lines={["Sua energia", <>pode custar <em className="text-sun">menos.</em></>]} />
            <span className="mt-4 block text-[0.42em] leading-[1.15] font-[380] tracking-[-0.02em] text-white/90 lg:mt-5">
              <SplitLines lines={["Comece pela simulação."]} />
            </span>
          </h1>
          <p data-hero-fade className="lead mt-7 max-w-[30rem] text-white/75">
            Energia solar para sua casa ou empresa. Descubra como ela pode reduzir seus gastos com eletricidade e dar mais
            controle sobre o seu consumo.
          </p>
          <div data-hero-fade className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <button type="button" className="btn btn-sun !min-h-[58px] !px-8 text-[1.05rem]" onClick={() => goToSimulation()}>
              Quero simular minha economia <ArrowRight className="arrow size-5" aria-hidden="true" />
            </button>
            <a href="#solucoes" className="group inline-flex min-h-[48px] items-center justify-center gap-2 font-semibold whitespace-nowrap text-white/85 hover:text-white">
              <span className="link-underline">Conhecer as soluções</span>
            </a>
          </div>
        </div>

        {/* Fotografia (mobile e tablet): sangra até a borda direita */}
        <div className="-mr-5 sm:-mr-8 lg:hidden">
          <div data-hero-frame className="relative overflow-hidden rounded-l-[28px]">
            <div data-hero-img className="absolute inset-[-8%_0] will-change-transform">
              <Photo photo={photos.hero} sizes="(min-width: 1024px) 52vw, 100vw" className="h-full w-full" />
            </div>
            <div className="aspect-[4/5] sm:aspect-[16/11]" />
          </div>
        </div>

        {/* Formulário integrado à borda da fotografia */}
        <div className="relative z-10 -mt-40 sm:-mt-52 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:mt-0 lg:self-end">
          <div
            id="simulacao"
            data-hero-form
            className="rounded-[26px] bg-navy/92 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,.75)] ring-1 ring-white/10 backdrop-blur-xl sm:p-8 lg:max-w-[600px]"
          >
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
