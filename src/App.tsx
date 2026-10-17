import { useState, type ReactNode } from "react";
import {ProductPreview} from "@/components/sections/ProductPreview";
import {Logo} from "@/components/layout/Logo";
import {type IconName, Icon} from "@/components/layout/paths";
import {Footer} from "@/components/layout/Footer";


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

const faqs = [
  ["Preciso trocar meu número de WhatsApp?", "Não. Você pode conectar o número que sua empresa já utiliza e manter seus contatos e sua identidade atual."],
  ["Quantos atendentes posso adicionar?", "O número de atendentes depende do plano escolhido. No plano Escala, sua equipe pode crescer sem limite de usuários."],
  ["É possível integrar com outros sistemas?", "Sim. Disponibilizamos API e integrações com as principais ferramentas de CRM, e-commerce e automação do mercado."],
  ["Meus dados e conversas estão seguros?", "Sim. Aplicamos criptografia, controle de acesso e boas práticas de segurança em toda a plataforma."],
  ["Vocês ajudam na configuração inicial?", "Sim. Todos os planos incluem uma jornada guiada de implantação. Os planos Pro e Escala também contam com acompanhamento especializado."],
];



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            <button onClick={() => scrollTo("recursos")}>Recursos</button>
            <button onClick={() => scrollTo("como-funciona")}>Como funciona</button>
            <button onClick={() => scrollTo("precos")}>Preços</button>
            <button onClick={() => scrollTo("clientes")}>Clientes</button>
          </nav>
          <div className="header-actions">
            <button className="login-button">Entrar</button>
            <button className="trial-button" onClick={() => scrollTo("precos")}>Começar grátis <Icon name="arrow" size={16} /></button>
          </div>
          <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="hero-grid" />
          <div className="section-container hero-content">
            <div className="eyebrow"><Icon name="sparkle" size={15} /> Atendimento que transforma conversas em vendas</div>
            <h1>Seu WhatsApp virou o melhor canal de <span>crescimento.</span></h1>
            <p>Organize sua equipe, automatize conversas e encante seus clientes com uma plataforma de atendimento feita para empresas que querem ir além.</p>
            <div className="hero-actions">
              <button className="hero-primary" onClick={() => scrollTo("precos")}>Testar grátis por 14 dias <Icon name="arrow" size={18} /></button>
              <button className="hero-secondary" onClick={() => scrollTo("produto")}><span><Icon name="play" size={15} /></span> Ver como funciona</button>
            </div>
            <div className="hero-note"><span><Icon name="check" size={13} /></span> Sem cartão de crédito <i /> Configuração em poucos minutos</div>
            <div className="hero-product" id="produto">
              <div className="floating-card card-response"><span><Icon name="clock" size={17} /></span><div><small>Tempo de resposta</small><b>−42% este mês</b></div></div>
              <ProductPreview />
              <div className="floating-card card-satisfaction"><span><Icon name="sparkle" size={17} /></span><div><small>Satisfação</small><b>98% dos clientes</b></div></div>
            </div>
          </div>
        </section>

        <section className="trusted">
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
        </section>

        <section className="features-section" id="recursos">
          <div className="section-container">
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
          </div>
        </section>

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

        <section className="results-section" id="clientes">
          <div className="section-container">
            <div className="results-card">
              <div className="quote-mark">“</div>
              <blockquote>A Nimbo organizou nosso atendimento sem tirar o lado humano. Hoje respondemos mais rápido, vendemos mais e sabemos exatamente onde podemos melhorar.</blockquote>
              <div className="quote-author"><span>FM</span><div><b>Felipe Martins</b><small>Diretor de Operações, Nexo</small></div></div>
              <div className="results-numbers">
                <div><b>3,2×</b><span>mais conversas atendidas</span></div>
                <div><b>−42%</b><span>no tempo de resposta</span></div>
                <div><b>98%</b><span>de satisfação dos clientes</span></div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="faq-section">
          <div className="section-container faq-layout">
            <div><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Tudo o que você precisa saber.</h2><p>Ainda tem dúvidas? Nosso time está pronto para conversar.</p><button className="text-link">Falar com um especialista <Icon name="arrow" size={17} /></button></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <article className={openFaq === index ? "open" : ""} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><Icon name="chevron" /></button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-orb one" /><div className="cta-orb two" />
          <div className="section-container">
            <span className="cta-icon"><Icon name="headset" size={27} /></span>
            <h2>Seu próximo grande atendimento começa agora.</h2>
            <p>Junte-se a empresas que estão transformando conversas em relacionamentos duradouros.</p>
            <button onClick={() => scrollTo("precos")}>Começar meus 14 dias grátis <Icon name="arrow" size={18} /></button>
            <small>Sem cartão de crédito. Cancele quando quiser.</small>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}
