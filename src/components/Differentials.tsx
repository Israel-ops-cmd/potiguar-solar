import { Photo } from "./Photo";
import { photos } from "../config/photos";
import { differentials } from "../config/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-paper py-24 sm:py-32" aria-labelledby="diferenciais-title">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="section-index" data-reveal>
              04 — Diferenciais
            </p>
            <h2 id="diferenciais-title" className="display mt-5 text-[clamp(2.1rem,4.6vw,3.6rem)] text-navy" data-reveal>
              Clareza do primeiro contato até a <em>primeira geração.</em>
            </h2>
            <div data-reveal-img className="mt-10 hidden overflow-hidden rounded-[4px] lg:block">
              <Photo photo={photos.instalacao} sizes="40vw" className="aspect-[4/3] w-full" />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7" data-stagger>
          {differentials.map((d, i) => (
            <li key={d.title} className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-navy/12 py-9 last:border-b sm:gap-x-10" data-reveal>
              <span className="display text-[2.6rem] leading-none text-sun transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 sm:text-[3.4rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.35rem] leading-snug font-semibold text-navy">{d.title}</h3>
                <p className="mt-2.5 text-[1.05rem] text-mist">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div data-reveal-img className="overflow-hidden rounded-[4px] lg:hidden">
          <Photo photo={photos.instalacao} sizes="100vw" className="aspect-[4/3] w-full" />
        </div>
      </div>
    </section>
  );
}
