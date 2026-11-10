import { benefits } from "../config/content";

export function BenefitsStrip() {
  return (
    <section id="beneficios" className="relative bg-paper py-24 sm:py-32" aria-labelledby="beneficios-title">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="section-index lg:col-span-2" data-reveal>
            01 — Benefícios
          </p>
          <h2 id="beneficios-title" className="display text-[clamp(2.1rem,4.6vw,3.6rem)] text-navy lg:col-span-8" data-reveal>
            O sol de Natal bate no seu telhado todos os dias. <em>Ele pode trabalhar para você.</em>
          </h2>
        </div>

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4" data-stagger>
          {benefits.map((b, i) => (
            <li key={b.title} className="relative pt-7" data-reveal>
              <span className="absolute top-0 left-0 h-px w-full origin-left bg-navy/15" aria-hidden="true" />
              <span className="absolute top-0 left-0 h-[2px] w-12 bg-sun" aria-hidden="true" />
              <span className="font-sans text-sm font-semibold tabular-nums text-deep">0{i + 1}</span>
              <h3 className="mt-3 text-[1.3rem] leading-snug font-semibold text-navy">{b.title}</h3>
              <p className="mt-3 text-mist">{b.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
