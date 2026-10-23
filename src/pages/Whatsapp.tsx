import { Button } from "react-day-picker";

const textSoluctionsCasosUso = [
    {
        titulo: "Múltiplos Atendentes no mesmo número",
        img: "O que mostrar: Imagem/mockup da caixa de entrada dividida por atendentes",
        Texto: "Acabe com a bagunça de ter vários celulares. Toda a sua equipe responde usando o mesmo número oficial de WhatsApp."
    },
    {
        titulo: "Automação e Chatbots Inteligentes",
        img: "O que mostrar: Exemplo de fluxo de triagem automática.",
        Texto: "Responda instantaneamente mesmo fora do horário comercial. Qualifique leads e direcione o cliente para o setor certo em segundos."
    },
    {
        titulo: "Gestão e Distribuição de Mensagens",
        img: "O que mostrar: Lista de filas (Financeiro, Suporte, Vendas).",
        Texto: "Distribuição automática de conversas por fila de atendimento, prioridade ou ordem de chegada."
    },
    {
        titulo: "Relatórios e Analytics de Atendimento",
        img: "O que mostrar: Gráficos de tempo médio de espera e satisfação.",
        Texto: "Métricas em tempo real: saiba quanto tempo sua equipe demora para responder e identifique gargalos de vendas."
    }
];

export function Whatsapp() {
    return (
        <section>
            {/* Topo */}
            <div className="section-container">
                {/* Conteudo lado esquerdo */}
                <div>   
                    <h1>Conecte sua equipe ao WhatsApp e converta atendimentos em vendas.</h1>
                    <p>Centralize conversas, automatize respostas frequentes e tenha controle total da sua operação no WhatsApp em uma só plataforma.</p>
                    <div>
                        <Button type="button" onClick={() => {}}>Fale com nossos especialistas.</Button>
                    </div>
                </div>
                {/* Conteudo lado direito */}
                <div>
                    <img src="" alt="img ainda não pensada." />
                </div>
            </div>

            {/* Conteúdo abaixo do topo */}
            <div className="section-container">
                <div>
                    <div>
                        <img src="" alt="img de background ainda não pensada." />
                        <h2>Soluções por Casos de Uso (Casos Práticos)</h2>
                    </div>
                    <ul>
                        {textSoluctionsCasosUso.map((item) => (
                            <li key={item.titulo}>
                                <p>{item.titulo}</p>
                                <div>
                                    <img src="" alt={item.img} />
                                    {item.Texto}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </section>
    );
}