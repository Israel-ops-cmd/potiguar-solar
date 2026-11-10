import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, CircleAlert, LoaderCircle, Info } from "lucide-react";
import { hasLeadEndpoint, integrations } from "../config/site";
import { onSimulationRequest, type PropertyType } from "../lib/events";
import { formatPhone, isValidPhone } from "../lib/validation";

type Status = "idle" | "loading" | "success" | "pending" | "error";
type Fields = { nome: string; whatsapp: string; tipo: PropertyType | ""; conta: string };
type Errors = Partial<Record<keyof Fields, string>>;

const BILL_RANGES = [
  "Até R$ 300",
  "De R$ 300 a R$ 600",
  "De R$ 600 a R$ 1.000",
  "De R$ 1.000 a R$ 3.000",
  "Acima de R$ 3.000",
];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.nome.trim().length < 2) e.nome = "Informe seu nome.";
  if (!isValidPhone(f.whatsapp)) e.whatsapp = "Informe um WhatsApp com DDD.";
  if (!f.tipo) e.tipo = "Escolha o tipo de imóvel.";
  if (!f.conta) e.conta = "Selecione a média da sua conta.";
  return e;
}

/**
 * Formulário de simulação.
 * INTEGRAÇÃO PENDENTE: enquanto VITE_LEAD_ENDPOINT não estiver configurado,
 * nenhum dado é enviado. O visitante vê um aviso claro de projeto demonstrativo.
 */
export function LeadForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState<Fields>({ nome: "", whatsapp: "", tipo: "", conta: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => onSimulationRequest((tipo) => tipo && setFields((f) => ({ ...f, tipo }))), []);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(fields);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("loading");

    if (!hasLeadEndpoint) {
      // Projeto demonstrativo: não enviamos dados a lugar nenhum.
      await new Promise((r) => setTimeout(r, 700));
      setStatus("pending");
      return;
    }

    try {
      const res = await fetch(integrations.leadEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          whatsapp: fields.whatsapp.replace(/\D/g, ""),
          origem: "landing-potiguar-solar",
          enviadoEm: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Fields) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${uid}-${k}-err` } : {});
  const msg = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${uid}-${k}-err`} className="mt-1.5 text-[0.85rem] text-[#ffb4ab]">
        {errors[k]}
      </p>
    ) : null;

  if (status === "pending" || status === "success") {
    return (
      <div className="flex min-h-[300px] flex-col justify-center" role="status" aria-live="polite">
        {status === "success" ? (
          <>
            <CircleCheck className="size-10 text-sun" aria-hidden="true" />
            <h3 className="display mt-5 text-[2rem] text-white">Recebemos seu pedido.</h3>
            <p className="mt-3 text-white/75">
              Em breve você recebe o contato pelo WhatsApp informado para dar sequência à sua simulação.
            </p>
          </>
        ) : (
          <>
            <Info className="size-10 text-sun" aria-hidden="true" />
            <h3 className="display mt-5 text-[1.9rem] leading-tight font-[380] text-white">
              Obrigado, {fields.nome.trim().split(" ")[0]}.
            </h3>
            <p className="mt-3 text-white/75">
              O envio de simulações está em configuração para esta demonstração, então seus dados não foram enviados e
              ficaram apenas no seu navegador.
            </p>
          </>
        )}
        <button
          type="button"
          className="btn btn-ghost-light mt-8 self-start"
          onClick={() => {
            setStatus("idle");
            setErrors({});
            setFields({ nome: "", whatsapp: "", tipo: "", conta: "" });
          }}
        >
          Voltar ao formulário
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby={`${uid}-title`}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id={`${uid}-title`} className="display text-[1.7rem] leading-[1.05] font-[380] text-white sm:text-[1.95rem]">
          Descubra seu potencial <span className="whitespace-nowrap">de economia.</span>
        </h2>
        <span className="hidden shrink-0 rounded-full bg-sun/15 px-3 py-1 text-[0.82rem] font-semibold text-sun sm:inline">Gratuito</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${uid}-nome`} className="mb-1.5 block text-[0.92rem] font-medium text-white/85">
          Nome
        </label>
        <input
          id={`${uid}-nome`}
          name="nome"
          autoComplete="name"
          className="field"
          placeholder="Como podemos te chamar?"
          value={fields.nome}
          onChange={(e) => set("nome", e.target.value)}
          {...err("nome")}
        />
        {msg("nome")}
      </div>

      <div>
        <label htmlFor={`${uid}-whatsapp`} className="mb-1.5 block text-[0.92rem] font-medium text-white/85">
          WhatsApp
        </label>
        <input
          id={`${uid}-whatsapp`}
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          className="field"
          placeholder="(84) 9 0000-0000"
          value={fields.whatsapp}
          onChange={(e) => set("whatsapp", formatPhone(e.target.value))}
          {...err("whatsapp")}
        />
        {msg("whatsapp")}
      </div>

      <fieldset>
        <legend className="mb-1.5 block text-[0.92rem] font-medium text-white/85">Tipo de imóvel</legend>
        <div className="grid grid-cols-2 gap-2" {...(errors.tipo ? { "aria-describedby": `${uid}-tipo-err` } : {})}>
          {(["residencial", "comercial"] as const).map((t) => (
            <label
              key={t}
              className={`flex min-h-[52px] cursor-pointer items-center justify-center rounded-xl border px-3 text-[0.98rem] font-medium capitalize transition-colors duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-sun ${
                fields.tipo === t
                  ? "border-sun bg-sun text-navy"
                  : "border-white/15 bg-white/[0.07] text-white hover:border-white/35"
              }`}
            >
              <input
                type="radio"
                name="tipo"
                value={t}
                className="sr-only"
                checked={fields.tipo === t}
                onChange={() => set("tipo", t)}
              />
              {t}
            </label>
          ))}
        </div>
        {msg("tipo")}
      </fieldset>

      <div>
        <label htmlFor={`${uid}-conta`} className="mb-1.5 block text-[0.92rem] font-medium text-white/85">
          Média da conta de energia
        </label>
        <select
          id={`${uid}-conta`}
          name="conta"
          className="field"
          value={fields.conta}
          onChange={(e) => set("conta", e.target.value)}
          {...err("conta")}
        >
          <option value="" disabled>
            Selecione a faixa
          </option>
          {BILL_RANGES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {msg("conta")}
      </div>
      </div>

      <button type="submit" className="btn btn-sun mt-6 w-full" disabled={status === "loading"} aria-busy={status === "loading"}>
        {status === "loading" ? (
          <>
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" /> Enviando…
          </>
        ) : (
          <>
            Solicitar minha simulação <ArrowRight className="arrow size-5" aria-hidden="true" />
          </>
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-[#ff8a80]/15 p-3 text-[0.92rem] text-[#ffd2cc]">
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Não conseguimos enviar agora. Verifique sua conexão e tente de novo em instantes.
        </p>
      )}

      <p className="mt-4 text-[0.88rem] leading-snug text-white/60">
        Toda simulação é uma estimativa e depende de avaliação técnica do imóvel. Seus dados são usados apenas para
        retornar o contato.
      </p>
    </form>
  );
}
