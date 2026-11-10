export type PropertyType = "residencial" | "comercial";

const EVT = "potiguar:simular";

/** Leva o visitante até o formulário e pré-seleciona o tipo de imóvel. */
export function goToSimulation(type?: PropertyType) {
  window.dispatchEvent(new CustomEvent<PropertyType | undefined>(EVT, { detail: type }));
  const el = document.getElementById("simulacao");
  if (!el) return;
  el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  window.setTimeout(() => el.querySelector<HTMLInputElement>("input[name=nome]")?.focus({ preventScroll: true }), 700);
}

export function onSimulationRequest(cb: (type?: PropertyType) => void) {
  const handler = (e: Event) => cb((e as CustomEvent<PropertyType | undefined>).detail);
  window.addEventListener(EVT, handler);
  return () => window.removeEventListener(EVT, handler);
}
