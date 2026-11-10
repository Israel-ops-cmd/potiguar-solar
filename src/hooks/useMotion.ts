import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

      // HERO: profundidade da imagem + sol + entrada do título por linhas
      const intro = gsap.timeline({ defaults: { ease } });
      intro
        .fromTo("[data-hero-img]", { scale: 1.18 }, { scale: 1.04, duration: 2.4 }, 0)
        .fromTo("[data-hero-sun]", { opacity: 0, yPercent: 25, scale: 0.8 }, { opacity: 0.7, yPercent: 0, scale: 1, duration: 2.6 }, 0.1)
        .to("#hero-title .split-line > span", { y: 0, duration: 1.3, stagger: 0.12 }, 0.25)
        .fromTo("[data-hero-fade]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 }, 0.55)
        .fromTo("[data-hero-form]", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.3 }, 0.7);

      gsap.to("[data-hero-img]", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: { trigger: "#topo", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-sun]", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: { trigger: "#topo", start: "top top", end: "bottom top", scrub: true },
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
        tl.to(wrap, { clipPath: "inset(0% 0 0% 0 round 4px)", duration: 1.4, ease });
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
          gsap.fromTo(item, { opacity: 0.25 }, {
            opacity: 1,
            duration: 0.6,
            scrollTrigger: { trigger: item, start: "top 72%", toggleActions: "play none none reverse" },
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
