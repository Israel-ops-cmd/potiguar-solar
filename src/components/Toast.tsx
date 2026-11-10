import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import { onToast } from "../lib/toast";

/** Mensagem discreta no rodapé da tela (ex.: canais em configuração). */
export function Toast() {
  const [msg, setMsg] = useState<string | null>(null);
  const timer = useRef<number>();

  useEffect(
    () =>
      onToast((m) => {
        setMsg(m);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setMsg(null), 3800);
      }),
    [],
  );

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-24 left-1/2 z-50 w-[min(92vw,420px)] -translate-x-1/2 transition-[opacity,transform] duration-500 ease-out-expo sm:bottom-8 ${
        msg ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <p className="flex items-start gap-3 rounded-2xl bg-graphite/95 px-5 py-4 text-[0.95rem] leading-snug text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)] backdrop-blur">
        <Info className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
        {msg}
      </p>
    </div>
  );
}
