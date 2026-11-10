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
            <p className="section-index" data-reveal>
              02 — Soluções
            </p>
            <h2 id="solucoes-title" className="display mt-5 text-[clamp(2.1rem,4.6vw,3.6rem)] text-navy" data-reveal>
              Um projeto para cada tipo de consumo.
            </h2>
          </div>
          <p className="max-w-md text-[1.1rem] text-mist" data-reveal>
            Casa e empresa usam energia de jeitos diferentes. Por isso o caminho começa no mesmo lugar, a sua conta, mas
            o projeto é pensado para a sua rotina.
          </p>
        </div>

        <div className="mt-20 space-y-28 lg:mt-28 lg:space-y-40">
          {solutions.map((s, i) => {
            const reverse = i % 2 === 1;
            const photo = s.key === "residencial" ? photos.residencial : photos.comercial;
            return (
              <article key={s.key} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`relative lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <div data-reveal-img className="overflow-hidden rounded-[4px]">
                    <Photo
                      photo={photo}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="aspect-[4/3] w-full lg:aspect-[5/4]"
                      imgClassName="will-change-transform"
                    />
                  </div>
                  <span
                    className={`display pointer-events-none absolute -bottom-10 hidden lg:block text-[clamp(5rem,14vw,11rem)] leading-none text-navy/[0.06] select-none ${
                      reverse ? "left-0 lg:-left-6" : "right-0 lg:-right-6"
                    }`}
                    aria-hidden="true"
                  >
                    {s.index}
                  </span>
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="eyebrow text-deep" data-reveal>
                    {s.label}
                  </p>
                  <h3 className="display mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] text-navy" data-reveal>
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
