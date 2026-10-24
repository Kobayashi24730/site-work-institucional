import { useState } from "react";
import {ProductPreview} from "@/components/sections/ProductPreview";
import { Icon } from "@/components/layout/paths";
import { AnimatedSections } from '@/components/AnimatedSections';
import { motion } from "framer-motion";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };


  return (
    <section>
      <div className="hero">

        <div className="hero-glow" />
        <div className="hero-grid" />

        <AnimatedSections className="section-container hero-content">
          <div className="eyebrow">
            <Icon name="sparkle" size={15} /> Atendimento que transforma conversas em vendas
          </div>

          <h1>Seu WhatsApp virou o melhor canal de <span>crescimento.</span></h1>
          <p>Organize sua equipe, automatize conversas e encante seus clientes com uma plataforma de atendimento feita para empresas que querem ir além.</p>

          <div className="hero-actions">
            <button className="hero-primary" onClick={() => scrollTo("precos")}>Testar grátis por 14 dias <Icon name="arrow" size={18} /></button>
            <button className="hero-secondary" onClick={() => scrollTo("produto")}><span><Icon name="play" size={15} /></span> Ver como funciona</button>
          </div>

          <div className="hero-note">
            <span><Icon name="check" size={13} /></span> Sem cartão de crédito <i /> Configuração em poucos minutos
          </div>

          <div className="hero-product" id="produto">
            <div className="floating-card card-response"><span><Icon name="clock" size={17} /></span><div><small>Tempo de resposta</small><b>−42% este mês</b></div></div>
            <ProductPreview />
            <div className="floating-card card-satisfaction"><span><Icon name="sparkle" size={17} /></span><div><small>Satisfação</small><b>98% dos clientes</b></div></div>
          </div>
        </AnimatedSections>
      </div>

      <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1 }} className="trusted">
          <div className="section-container">
            <p>Empresas que já transformaram seu atendimento com a Nimbo</p>
            <div className="logo-cloud">
              <span><b>○</b> aurora</span>
              <span><b>△</b> NEXO</span>
              <span><b>∞</b> movi</span>
              <span><b>□</b> Casa&Cor</span>
              <span><b>◇</b> VÉRTICE</span>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
