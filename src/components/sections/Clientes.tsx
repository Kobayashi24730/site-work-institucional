import { AnimatedSections } from '../AnimatedSections';

export function Clientes() {
    return (
        <section className="results-section" id="clientes">
          <AnimatedSections className="section-container">
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
          </AnimatedSections>
        </section>
    );
}