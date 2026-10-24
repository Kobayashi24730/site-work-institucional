import { useState } from "react";
import { Icon } from "@/components/layout/paths";
import {AnimatedSections} from "@/components/AnimatedSections";

export function Cta() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };
    return (  
        <section className="final-cta">
          <AnimatedSections className="final-cta">
            <div className="cta-orb one" /><div className="cta-orb two" />
            <div className="section-container">
              <span className="cta-icon"><Icon name="headset" size={27} /></span>
              <h2>Seu próximo grande atendimento começa agora.</h2>
              <p>Junte-se a empresas que estão transformando conversas em relacionamentos duradouros.</p>
              <button onClick={() => scrollTo("precos")}>Começar meus 14 dias grátis <Icon name="arrow" size={18} /></button>
              <small>Sem cartão de crédito. Cancele quando quiser.</small>
            </div>
          </AnimatedSections>
        </section>
    );
}