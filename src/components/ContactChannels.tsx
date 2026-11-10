import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { demoContacts, whatsappLink } from "../config/site";
import { showToast } from "../lib/toast";

type Props = { tone?: "light" | "dark"; className?: string };

/** WhatsApp e Instagram ilustrativos. Sem link ativo enquanto os canais não forem definidos. */
export function ContactChannels({ tone = "light", className = "" }: Props) {
  const text = tone === "light" ? "text-white" : "text-navy";
  const wa = whatsappLink("Olá! Vim pelo site da Potiguar Solar.");
  const item = `group inline-flex min-h-[44px] items-center gap-3 ${text} text-left`;

  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      <li>
        {wa ? (
          <a href={wa} target="_blank" rel="noopener noreferrer" className={item}>
            <WaBadge /> <span className="link-underline">{demoContacts.whatsapp}</span>
          </a>
        ) : (
          <button type="button" className={item} onClick={() => showToast(demoContacts.notice)}>
            <WaBadge /> <span className="link-underline">{demoContacts.whatsapp}</span>
          </button>
        )}
      </li>
      <li>
        <button type="button" className={item} onClick={() => showToast(demoContacts.notice)}>
          <span className="grid size-9 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white">
            <FaInstagram className="size-[18px]" aria-hidden="true" />
          </span>
          <span className="link-underline">{demoContacts.instagram}</span>
        </button>
      </li>
    </ul>
  );
}

function WaBadge() {
  return (
    <span className="grid size-9 place-items-center rounded-full bg-[#25D366] text-white">
      <FaWhatsapp className="size-[20px]" aria-hidden="true" />
    </span>
  );
}
