import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { benefits } from "../config/content";

/** Benefícios em composição assimétrica: uma imagem dominante e blocos de proporções diferentes. */
export function BenefitsStrip() {
  const [a, b, c, d] = benefits;
  return (
    <section id="beneficios" className="relative bg-paper pt-28 pb-24 sm:pt-36 sm:pb-32" aria-labelledby="beneficios-title">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 id="beneficios-title" className="t-xl text-navy lg:col-span-8" data-reveal>
            O sol de Natal bate no seu telhado todos os dias. <em className="text-deep">Ele pode trabalhar para você.</em>
          </h2>
          <p className="max-w-sm text-[1.08rem] text-mist lg:col-span-4 lg:justify-self-end" data-reveal>
            Energia gerada no próprio imóvel, abatida na conta e acompanhada de perto. Sem complicação para quem só quer
            pagar menos pela energia que usa.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:gap-5 lg:mt-24 lg:grid-cols-12 lg:grid-rows-[auto_auto]" data-stagger>
          {/* Bloco dominante: fotografia com o benefício principal */}
          <article className="relative min-h-[440px] overflow-hidden rounded-[28px] bg-navy text-white lg:col-span-7 lg:row-span-2 lg:min-h-[600px]" data-reveal>
            <div data-reveal-img className="absolute inset-0">
              <Photo photo={photos.paineis} sizes="(min-width: 1024px) 58vw, 100vw" className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,64,0)_30%,rgba(7,29,64,.92)_100%)]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <h3 className="t-lg max-w-md">{a.title}</h3>
              <p className="mt-4 max-w-md text-[1.08rem] text-white/80">{a.text}</p>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-10 rounded-[28px] bg-navy p-7 text-white sm:p-10 lg:col-span-5" data-reveal>
            <span className="h-[3px] w-12 rounded-full bg-sun" aria-hidden="true" />
            <div>
              <h3 className="t-md">{b.title}</h3>
              <p className="mt-3 max-w-md text-white/75">{b.text}</p>
            </div>
          </article>

          <article className="flex flex-col justify-end rounded-[28px] bg-white p-7 sm:p-10 lg:col-span-5" data-reveal>
            <h3 className="t-md text-navy">{c.title}</h3>
            <p className="mt-3 max-w-md text-mist">{c.text}</p>
          </article>
        </div>

        <div className="mt-14 grid gap-6 border-t border-navy/15 pt-10 lg:mt-20 lg:grid-cols-12" data-reveal>
          <h3 className="t-md text-navy lg:col-span-5">{d.title}</h3>
          <p className="max-w-xl text-[1.1rem] text-mist lg:col-span-6 lg:col-start-7">{d.text}</p>
        </div>
      </div>
    </section>
  );
}
