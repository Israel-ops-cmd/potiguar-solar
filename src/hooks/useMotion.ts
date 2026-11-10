import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Envolve cada palavra de um título em uma máscara, preservando <em> e outros elementos. */
function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = "1";
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return void frag.appendChild(document.createTextNode(part));
          const mask = document.createElement("span");
          mask.className = "word-mask";
          const inner = document.createElement("span");
          inner.className = "word-inner";
          inner.textContent = part;
          mask.appendChild(inner);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(el);
}

/**
 * Animações da página (GSAP + ScrollTrigger).
 * - Só roda com prefers-reduced-motion: no-preference; caso contrário, nada é escondido.
 * - Não altera a rolagem nativa do navegador (sem smooth scroll artificial).
 */
export function useMotion() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      root.classList.add("js-motion");
      const ease = "expo.out";

      // Navegação entra junto com a hero
      gsap.fromTo("header nav", { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 1.2, ease, delay: 0.15, clearProps: "transform" });

      // Barra de progresso de leitura
      gsap.to("[data-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      // HERO: profundidade da imagem + sol + entrada do título por linhas
      const intro = gsap.timeline({ defaults: { ease } });
      intro
        .fromTo("[data-hero-img]", { scale: 1.16 }, { scale: 1.03, duration: 2.6 }, 0)
        .fromTo("[data-hero-sun]", { opacity: 0, yPercent: 25, scale: 0.8 }, { opacity: 0.6, yPercent: 0, scale: 1, duration: 2.6 }, 0.1)
        .to("#hero-title .split-line > span", { y: 0, duration: 1.3, stagger: 0.12 }, 0.25)
        .fromTo("[data-hero-fade]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 }, 0.55)
        .fromTo("[data-hero-form]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.3, clearProps: "transform" }, 0.8)
        .fromTo("[data-hero-form] form > *, [data-hero-form] form > div > div, [data-hero-form] fieldset", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.06, clearProps: "transform" }, 1.0);

      gsap.to("[data-hero-sun]", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: { trigger: "#topo", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-img]", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: { trigger: "#topo", start: "top top", end: "bottom top", scrub: true },
      });

      // Títulos de seção: palavras surgindo de dentro de uma máscara
      gsap.utils.toArray<HTMLElement>("main section:not(#topo) h2, [data-split]").forEach((h) => {
        splitWords(h);
        h.removeAttribute("data-reveal");
        gsap.set(h, { opacity: 1, y: 0 });
        gsap.fromTo(h.querySelectorAll(".word-inner"), { yPercent: 110 }, {
          yPercent: 0,
          duration: 1.15,
          ease,
          stagger: 0.035,
          scrollTrigger: { trigger: h, start: "top 86%", once: true },
        });
      });

      // Seções escuras entram como uma "cortina": cantos arredondados e leve recuo que se abrem com a rolagem
      gsap.utils.toArray<HTMLElement>("[data-curtain]").forEach((sec) => {
        gsap.fromTo(
          sec,
          { clipPath: "inset(0% 2.5% 0% 2.5% round 48px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: sec, start: "top bottom", end: "top 35%", scrub: 0.4 },
          },
        );
      });

      // Linhas de listas que se desenham (fatores de economia, diferenciais, FAQ)
      gsap.utils.toArray<HTMLElement>("[data-rows]").forEach((list) => {
        gsap.fromTo(
          list.children,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0, duration: 1, ease, stagger: 0.1, scrollTrigger: { trigger: list, start: "top 82%", once: true } },
        );
      });

      // Entradas progressivas em cascata
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.closest("[data-stagger]")) return;
        gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const items = group.querySelectorAll("[data-reveal]");
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease,
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: "top 85%", once: true },
        });
      });

      // Revelação de imagens por máscara
      gsap.utils.toArray<HTMLElement>("[data-reveal-img]").forEach((wrap) => {
        const img = wrap.querySelector("img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top 85%", once: true } });
        tl.to(wrap, {
          clipPath: "inset(0% 0 0% 0 round 4px)",
          duration: 1.4,
          ease,
          onComplete: () => void (wrap.style.clipPath = "none"),
        });
        if (img) tl.to(img, { scale: 1, duration: 1.8, ease }, 0);
      });

      // Parallax suave no CTA final
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -6 }, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Parallax leve dentro de molduras de imagem
      gsap.utils.toArray<HTMLElement>("[data-parallax-inner]").forEach((el) => {
        gsap.set(el, { scale: 1.12 });
        gsap.fromTo(el, { yPercent: -4 }, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Linha do fluxo de energia
      gsap.utils.toArray<HTMLElement>("[data-draw-x]").forEach((el) => {
        gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });

      // Linha do tempo que se desenha com a rolagem
      const timeline = document.querySelector<HTMLElement>("[data-timeline]");
      if (timeline) {
        gsap.fromTo("[data-timeline-line]", { scaleY: 0 }, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: timeline, start: "top 70%", end: "bottom 70%", scrub: 0.6 },
        });
        gsap.utils.toArray<HTMLElement>("[data-timeline-item]").forEach((item) => {
          gsap.fromTo(item, { opacity: 0.4 }, {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: { trigger: item, start: "top 72%", toggleActions: "play none none none" },
          });
        });
      }

      return () => root.classList.remove("js-motion");
    });

    // Recalcula posições quando as fontes terminam de carregar
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  }, []);
}
