import {useState} from "react";
import { Icon } from "@/components/layout/paths";

const faqs = [
  ["Preciso trocar meu número de WhatsApp?", "Não. Você pode conectar o número que sua empresa já utiliza e manter seus contatos e sua identidade atual."],
  ["Quantos atendentes posso adicionar?", "O número de atendentes depende do plano escolhido. No plano Escala, sua equipe pode crescer sem limite de usuários."],
  ["É possível integrar com outros sistemas?", "Sim. Disponibilizamos API e integrações com as principais ferramentas de CRM, e-commerce e automação do mercado."],
  ["Meus dados e conversas estão seguros?", "Sim. Aplicamos criptografia, controle de acesso e boas práticas de segurança em toda a plataforma."],
  ["Vocês ajudam na configuração inicial?", "Sim. Todos os planos incluem uma jornada guiada de implantação. Os planos Pro e Escala também contam com acompanhamento especializado."],
];

export function Faq() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <section className="faq-section">
          <div className="section-container faq-layout">
            <div><div className="section-kicker">DÚVIDAS FREQUENTES</div><h2>Tudo o que você precisa saber.</h2><p>Ainda tem dúvidas? Nosso time está pronto para conversar.</p><button className="text-link">Falar com um especialista <Icon name="arrow" size={17} /></button></div>
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <article className={openFaq === index ? "open" : ""} key={question}>
                  <button 
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span>{question}</span><Icon name="chevron" />
                  </button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>
    )
}