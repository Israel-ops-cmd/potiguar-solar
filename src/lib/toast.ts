const EVT = "potiguar:toast";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(EVT, { detail: message }));
}

export function onToast(cb: (message: string) => void) {
  const h = (e: Event) => cb((e as CustomEvent<string>).detail);
  window.addEventListener(EVT, h);
  return () => window.removeEventListener(EVT, h);
}
