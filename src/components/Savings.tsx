import { ArrowRight } from "lucide-react";
import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { savingsFactors } from "../config/content";
import { goToSimulation } from "../lib/events";

export function Savings() {
  return (
    <section id="economia" className="grain relative overflow-hidden bg-navy py-24 text-white sm:py-32" aria-labelledby="economia-title">
      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <h2 id="economia-title" className="t-xl" data-reveal>
            Quanto você economiza não é chute. <em className="text-sun">É cálculo.</em>
          </h2>
          <p className="mt-7 max-w-xl text-[1.1rem] text-white/75" data-reveal>
            Desconfie de quem promete um percentual antes de olhar a sua conta. A economia real depende de quatro fatores,
            e a simulação é o primeiro passo para entender cada um deles no seu caso.
          </p>

          <dl className="mt-12 divide-y divide-white/10 border-y border-white/10" data-stagger>
            {savingsFactors.map((f, i) => (
              <div key={f.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-6" data-reveal>
                <span className="text-sm font-semibold tabular-nums text-sun">0{i + 1}</span>
                <dt className="text-[1.15rem] font-semibold">{f.title}</dt>
                <dd className="text-white/70">{f.text}</dd>
              </div>
            ))}
          </dl>

          <button type="button" className="btn btn-sun mt-12" onClick={() => goToSimulation()} data-reveal>
            Quero simular minha economia <ArrowRight className="arrow size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <div className="lg:sticky lg:top-28">
            <div data-reveal-img className="overflow-hidden rounded-[28px]">
              <Photo photo={photos.detalhe} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full" />
            </div>
            <figure className="relative -mt-16 ml-6 rounded-2xl bg-white p-6 text-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:ml-12 sm:p-7" data-reveal>
              <blockquote className="t-md !text-[1.45rem] !leading-snug text-navy">
                “A conta de luz traz o seu histórico de consumo. É dele que sai o tamanho certo do sistema.”
              </blockquote>
              <figcaption className="mt-4 text-[0.92rem] text-mist">Por isso a simulação começa pela média da sua conta.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
