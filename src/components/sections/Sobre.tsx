import {Icon} from "@/components/layout/paths";
import { useState } from "react";

export default function Sobre() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section className="steps-section" id="como-funciona">
      <div className="section-container steps-layout">
        <div className="steps-copy">
          <div className="section-kicker">COMECE EM MINUTOS</div>
          <h2>Simples desde o primeiro “olá”.</h2>
          <p>Sem projetos demorados ou configurações complexas. Conecte seu WhatsApp e comece a atender melhor hoje mesmo.</p>
          <div className="step-list">
            {[
              ["01", "Conecte seu WhatsApp", "Use o número que sua empresa já conhece."],
              ["02", "Convide sua equipe", "Defina times, permissões e horários."],
              ["03", "Atenda e acompanhe", "Tenha clareza de cada conversa e resultado."],
            ].map(([number, title, text]) => (
              <div className="step" key={number}><span>{number}</span><div><b>{title}</b><p>{text}</p></div></div>
            ))}
          </div>
          <button className="text-link" onClick={() => scrollTo("precos")}>Criar minha conta <Icon name="arrow" size={17} /></button>
        </div>
        <div className="steps-visual">
          <div className="phone-glow" />
          <div className="phone-card">
            <div className="phone-head"><span><Icon name="whatsapp" size={18} /></span><div><b>WhatsApp conectado</b><small>Pronto para receber mensagens</small></div><i /></div>
            <div className="setup-progress"><div><span>Configuração da conta</span><b>100%</b></div><i><span /></i></div>
            <div className="setup-check"><span><Icon name="check" size={16} /></span><div><b>Número conectado</b><small>+55 11 98765-4321</small></div></div>
            <div className="setup-check"><span><Icon name="check" size={16} /></span><div><b>Equipe convidada</b><small>4 atendentes ativos</small></div></div>
            <div className="setup-check"><span><Icon name="check" size={16} /></span><div><b>Horário configurado</b><small>Seg a sex, 08h às 18h</small></div></div>
            <button>Tudo pronto para começar <Icon name="arrow" size={16} /></button>
          </div>
          <div className="mini-float"><span><Icon name="message" size={17} /></span><div><b>Nova conversa</b><small>Mariana Rocha</small></div></div>
        </div>
      </div>
    </section>
  );
}
