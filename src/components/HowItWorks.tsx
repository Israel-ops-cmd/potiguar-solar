import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { energyFlow, process } from "../config/content";
import { goToSimulation } from "../lib/events";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-white py-24 sm:py-32" aria-labelledby="como-funciona-title">
      <div className="container-x">
        <p className="section-index" data-reveal>
          05 — Como funciona
        </p>
        <h2 id="como-funciona-title" className="display mt-5 max-w-4xl text-[clamp(2.1rem,4.6vw,3.6rem)] text-navy" data-reveal>
          Do sol à tomada, e da tomada para a sua conta.
        </h2>

        {/* Fluxo da energia */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-[0.85rem] font-semibold tracking-[0.18em] text-deep uppercase" data-reveal>
            O caminho da energia
          </h3>
          <ol className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5 lg:gap-6" data-stagger>
            <span data-draw-x className="absolute top-[11px] right-0 left-0 hidden h-px origin-left bg-navy/15 lg:block" aria-hidden="true" />
            {energyFlow.map((s, i) => (
              <li key={s.title} className="relative" data-reveal>
                <span className="relative z-10 grid size-[22px] place-items-center rounded-full bg-white ring-2 ring-sun">
                  <span className="size-2 rounded-full bg-sun" />
                </span>
                <p className="mt-5 text-sm font-semibold tabular-nums text-mist">0{i + 1}</p>
                <h4 className="mt-1 text-[1.25rem] font-semibold text-navy">{s.title}</h4>
                <p className="mt-2 text-mist">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Processo de instalação */}
        <div className="mt-28 grid gap-16 lg:mt-36 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h3 className="display text-[clamp(1.9rem,3.4vw,2.75rem)] text-navy" data-reveal>
                Seis etapas, um só acompanhamento.
              </h3>
              <p className="mt-5 max-w-md text-[1.08rem] text-mist" data-reveal>
                Você sabe em que ponto o projeto está do início ao fim. A primeira etapa leva poucos minutos.
              </p>
              <button type="button" className="btn btn-sun mt-8" onClick={() => goToSimulation()} data-reveal>
                Começar pela simulação <ArrowRight className="arrow size-5" aria-hidden="true" />
              </button>
              <div data-reveal-img className="mt-12 overflow-hidden rounded-[4px]">
                <Photo photo={photos.tecnico} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[3/2] w-full" />
              </div>
            </div>
          </div>

          <ol data-timeline className="relative lg:col-span-6 lg:col-start-7">
            <span className="absolute top-2 bottom-2 left-[15px] w-px bg-navy/12" aria-hidden="true" />
            <span data-timeline-line className="absolute top-2 bottom-2 left-[15px] w-px origin-top bg-sun" aria-hidden="true" />
            {process.map((p, i) => (
              <li key={p.title} data-timeline-item className="relative pb-12 pl-16 last:pb-0">
                <span className="absolute top-0 left-0 grid size-8 place-items-center rounded-full bg-navy text-[0.85rem] font-semibold tabular-nums text-sun">
                  {i + 1}
                </span>
                <h4 className="text-[1.3rem] font-semibold text-navy">{p.title}</h4>
                <p className="mt-2 max-w-lg text-[1.05rem] text-mist">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
