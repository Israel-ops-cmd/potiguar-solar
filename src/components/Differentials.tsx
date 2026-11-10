import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { differentials } from "../config/content";

/** Diferenciais: fotografia panorâmica e texto em composição editorial, sem grade de cards. */
export function Differentials() {
  const [first, ...rest] = differentials;
  return (
    <section id="diferenciais" className="relative bg-paper py-24 sm:py-32" aria-labelledby="diferenciais-title">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="diferenciais-title" className="t-xl text-navy lg:col-span-7" data-reveal>
            Clareza do primeiro contato até a <em className="text-deep">primeira geração.</em>
          </h2>
          <div className="lg:col-span-4 lg:col-start-9" data-reveal>
            <h3 className="text-[1.3rem] font-semibold text-navy">{first.title}</h3>
            <p className="mt-2 text-[1.06rem] text-mist">{first.text}</p>
          </div>
        </div>
      </div>

      {/* Fotografia panorâmica, sangrando à esquerda */}
      <div className="mt-14 pr-5 sm:pr-8 lg:mt-20 lg:pr-[max(3rem,calc((100vw-1320px)/2+3rem))]">
        <div data-reveal-img className="overflow-hidden rounded-r-[28px] lg:rounded-r-[40px]">
          <div data-parallax-inner className="will-change-transform">
            <Photo photo={photos.instalacao} sizes="100vw" className="aspect-[4/3] w-full sm:aspect-[21/9]" />
          </div>
        </div>
      </div>

      <div className="container-x">
        <ol className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12" data-stagger>
          {rest.map((d, i) => (
            <li
              key={d.title}
              className={`border-t border-navy/15 pt-6 lg:col-span-3 ${i === 0 ? "lg:col-start-1" : ""}`}
              data-reveal
            >
              <h3 className="text-[1.22rem] leading-snug font-semibold text-navy">{d.title}</h3>
              <p className="mt-2.5 text-mist">{d.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
