import { useState } from "react";
import {Icon} from "@/components/layout/paths";
export function Precos() {
    const [annual, setAnnual] = useState(true);

    return (
        <section className="pricing-section" id="precos">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-kicker">PLANOS TRANSPARENTES</div>
              <h2>Comece pequeno. Cresça sem limites.</h2>
              <p>Escolha o plano ideal para o momento da sua empresa. Todos incluem 14 dias grátis.</p>
              <div className="billing-toggle">
                <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>Mensal</button>
                <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>Anual <span>Economize 20%</span></button>
              </div>
            </div>
            <div className="pricing-grid">
              <article className="price-card">
                <span className="plan-name">Essencial</span>
                <h3>Para começar a organizar</h3>
                <div className="price"><sup>R$</sup><b>{annual ? "79" : "99"}</b><span>/usuário<br />por mês</span></div>
                <button>Começar grátis</button>
                <ul>
                  <li><Icon name="check" size={15} /> Caixa de entrada compartilhada</li>
                  <li><Icon name="check" size={15} /> Até 5 atendentes</li>
                  <li><Icon name="check" size={15} /> Respostas rápidas</li>
                  <li><Icon name="check" size={15} /> Relatórios essenciais</li>
                </ul>
              </article>
              <article className="price-card featured">
                <div className="popular-label">MAIS ESCOLHIDO</div>
                <span className="plan-name">Profissional</span>
                <h3>Para equipes em crescimento</h3>
                <div className="price"><sup>R$</sup><b>{annual ? "119" : "149"}</b><span>/usuário<br />por mês</span></div>
                <button>Testar o Profissional</button>
                <ul>
                  <li><Icon name="check" size={15} /> Tudo do Essencial</li>
                  <li><Icon name="check" size={15} /> Até 20 atendentes</li>
                  <li><Icon name="check" size={15} /> Automações e chatbot</li>
                  <li><Icon name="check" size={15} /> Relatórios avançados</li>
                  <li><Icon name="check" size={15} /> Integrações e API</li>
                </ul>
              </article>
              <article className="price-card">
                <span className="plan-name">Escala</span>
                <h3>Para operações complexas</h3>
                <div className="custom-price">Sob medida</div>
                <p className="custom-copy">Uma solução desenhada para sua operação.</p>
                <button>Falar com especialista</button>
                <ul>
                  <li><Icon name="check" size={15} /> Tudo do Profissional</li>
                  <li><Icon name="check" size={15} /> Atendentes ilimitados</li>
                  <li><Icon name="check" size={15} /> Gerente de conta dedicado</li>
                  <li><Icon name="check" size={15} /> SLA personalizado</li>
                </ul>
              </article>
            </div>
            <div className="security-note"><Icon name="shield" size={18} /> Seus dados protegidos com segurança de nível empresarial.</div>
          </div>
        </section>
    );
}