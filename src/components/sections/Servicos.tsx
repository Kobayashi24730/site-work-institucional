import React from "react";
import {Icon, IconName} from "@/components/layout/paths";
import {AnimatedSections} from "@/components/AnimatedSections";

const featureCards = [
  {
    icon: "inbox" as IconName,
    title: "Todos os atendimentos, um só lugar",
    text: "Reúna conversas de múltiplos números e distribua automaticamente entre sua equipe.",
    className: "feature-main",
  },
  {
    icon: "automation" as IconName,
    title: "Automação inteligente",
    text: "Crie fluxos, respostas automáticas e triagens sem complicação.",
    className: "feature-automation",
  },
  {
    icon: "people" as IconName,
    title: "Contexto completo do cliente",
    text: "Histórico, etiquetas e informações sempre ao alcance do atendente.",
    className: "feature-customer",
  },
  {
    icon: "report" as IconName,
    title: "Decisões com dados reais",
    text: "Acompanhe tempo de resposta, satisfação e desempenho da operação.",
    className: "feature-report",
  },
];


export default function Servicos() {
  return (
    <section className="features-section" id="recursos">
      <AnimatedSections className="section-container">
        <div className="section-heading">
          <div className="section-kicker">FEITO PARA SIMPLIFICAR</div>
          <h2>Menos caos. Mais conversas que importam.</h2>
          <p>Tudo o que sua equipe precisa para atender com agilidade, manter o contexto e entregar uma experiência memorável.</p>
        </div>
        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article className={`feature-card ${feature.className}`} key={feature.title}>
              <div className="feature-icon"><Icon name={feature.icon} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              {feature.className === "feature-main" && (
                <div className="feature-visual inbox-visual">
                  <div className="inbox-person active"><span className="mini-avatar rose">MR</span><div><b>Mariana Rocha</b><small>Pedido #48291</small></div><i>2</i></div>
                  <div className="inbox-person"><span className="mini-avatar blue">LC</span><div><b>Lucas Carvalho</b><small>Dúvida sobre o plano</small></div></div>
                  <div className="inbox-person"><span className="mini-avatar violet">AP</span><div><b>Ana Paula</b><small>Quero saber mais</small></div></div>
                </div>
              )}
              {feature.className === "feature-automation" && (
                <div className="automation-visual"><span>Nova mensagem recebida</span><i /><span><Icon name="automation" size={14} /> Identificar assunto</span><i /><span><Icon name="people" size={14} /> Direcionar equipe</span></div>
              )}
              {feature.className === "feature-customer" && (
                <div className="customer-visual"><span className="detail-avatar">MR</span><div><b>Mariana Rocha</b><small>Cliente desde 2023</small></div><em>Cliente ativo</em></div>
              )}
              {feature.className === "feature-report" && (
                <div className="chart-visual"><div><span style={{ height: "42%" }} /><span style={{ height: "62%" }} /><span style={{ height: "48%" }} /><span style={{ height: "78%" }} /><span style={{ height: "88%" }} /><span style={{ height: "70%" }} /></div><small>+24% de produtividade</small></div>
              )}
            </article>
          ))}
        </div>
      </AnimatedSections>
    </section>
  );
}
