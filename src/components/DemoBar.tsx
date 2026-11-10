import { Info } from "lucide-react";

export function DemoBar() {
  return (
    <div className="relative z-50 bg-graphite text-white/80">
      <p className="container-x flex items-center justify-center gap-2 py-2 text-center text-[0.8125rem] leading-snug">
        <Info className="size-3.5 shrink-0 text-sun" aria-hidden="true" />
        <span>
          <strong className="font-semibold text-white">Projeto demonstrativo de web design.</strong> Potiguar Solar é uma marca fictícia.
        </span>
      </p>
    </div>
  );
}
