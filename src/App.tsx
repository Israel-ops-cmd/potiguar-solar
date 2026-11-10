import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BenefitsStrip } from "./components/BenefitsStrip";
import { Solutions } from "./components/Solutions";
import { Savings } from "./components/Savings";
import { Differentials } from "./components/Differentials";
import { HowItWorks } from "./components/HowItWorks";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { Toast } from "./components/Toast";
import { useMotion } from "./hooks/useMotion";

export default function App() {
  useMotion();
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-sun focus:px-5 focus:py-3 focus:font-semibold focus:text-navy">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <BenefitsStrip />
        <Solutions />
        <Savings />
        <Differentials />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toast />
    </>
  );
}
