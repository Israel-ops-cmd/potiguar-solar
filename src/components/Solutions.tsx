import { ArrowRight, Check } from "lucide-react";
import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { solutions } from "../config/content";
import { goToSimulation } from "../lib/events";

export function Solutions() {
  return (
    <section id="solucoes" className="relative bg-white py-24 sm:py-32" aria-labelledby="solucoes-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="solucoes-title" className="t-xl text-navy" data-reveal>
              Um projeto para cada tipo de consumo.
            </h2>
          </div>
          <p className="max-w-sm text-[1.08rem] text-mist lg:pb-3" data-reveal>
            Casa e empresa usam energia de jeitos diferentes. Por isso o caminho começa no mesmo lugar, a sua conta, mas
            o projeto é pensado para a sua rotina.
          </p>
        </div>

        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-36">
          {solutions.map((s, i) => {
            const reverse = i % 2 === 1;
            const photo = s.key === "residencial" ? photos.residencial : photos.comercial;
            return (
              <article key={s.key} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`relative ${reverse ? "lg:order-2 lg:col-span-7 lg:col-start-6" : "lg:col-span-6"}`}>
                  <div data-reveal-img className="overflow-hidden rounded-[28px]">
                    <Photo
                      photo={photo}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className={`w-full ${reverse ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[4/3] lg:aspect-[4/5]"}`}
                      imgClassName="will-change-transform"
                    />
                  </div>
                  <span className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[0.92rem] font-semibold text-navy backdrop-blur sm:top-6 sm:left-6">
                    {s.label}
                  </span>
                </div>

                <div className={`${reverse ? "lg:order-1 lg:col-span-4 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"}`}>
                  <h3 className="t-lg text-navy" data-reveal>
                    {s.title}
                  </h3>
                  <p className="mt-6 text-[1.08rem] text-mist" data-reveal>
                    {s.text}
                  </p>
                  <ul className="mt-8 space-y-3.5" data-stagger>
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-ink" data-reveal>
                        <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-sun/20 text-[#a76400]">
                          <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn-ghost-dark mt-10" onClick={() => goToSimulation(s.type)} data-reveal>
                    {s.cta} <ArrowRight className="arrow size-5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
