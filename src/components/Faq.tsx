import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../config/content";

export function Faq() {
  const uid = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative bg-paper py-24 sm:py-32" aria-labelledby="duvidas-title">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="section-index" data-reveal>
            06 — Dúvidas
          </p>
          <h2 id="duvidas-title" className="display mt-5 text-[clamp(2.1rem,4.6vw,3.4rem)] text-navy" data-reveal>
            Perguntas que todo mundo faz antes de decidir.
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6" data-stagger>
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-navy/12 last:border-b" data-reveal>
                <h3>
                  <button
                    type="button"
                    id={`${uid}-q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${uid}-a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[1.15rem] font-semibold text-navy sm:text-[1.25rem]"
                  >
                    {item.q}
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-500 ease-out-expo ${
                        isOpen ? "rotate-45 bg-navy text-sun" : "bg-white text-navy ring-1 ring-navy/10"
                      }`}
                    >
                      <Plus className="size-5" aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`${uid}-a${i}`}
                  role="region"
                  aria-labelledby={`${uid}-q${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className={`overflow-hidden transition-[visibility] duration-500 ${isOpen ? "visible" : "invisible"}`}>
                    <p className="max-w-2xl pb-7 text-[1.05rem] text-mist">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
