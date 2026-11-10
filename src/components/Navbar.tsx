import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "../config/site";
import { goToSimulation } from "../lib/events";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid ? "bg-navy/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,.6)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-6" aria-label="Principal">
        <a href="#topo" aria-label="Potiguar Solar, voltar ao início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 text-[0.95rem] font-medium text-white/85 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a className="link-underline py-1 hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" className="btn btn-sun hidden !min-h-[44px] !px-5 text-[0.95rem] sm:inline-flex" onClick={() => goToSimulation()}>
            Simular economia <ArrowRight className="arrow size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full text-white ring-1 ring-white/25 ring-inset lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-navy transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="container-x flex flex-col pt-6">
          {nav.map((item, i) => (
            <li key={item.href} className="border-b border-white/10">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex items-baseline justify-between py-5 text-[2rem] text-white"
              >
                {item.label}
                <span className="font-sans text-sm text-white/40 tabular-nums">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="container-x mt-8">
          <button
            type="button"
            className="btn btn-sun w-full"
            onClick={() => {
              setOpen(false);
              goToSimulation();
            }}
          >
            Quero simular minha economia <ArrowRight className="arrow size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
