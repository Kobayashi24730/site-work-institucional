import { Button } from "@/components/ui/button";

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
        <section className="py-16 md:py-24 bg-slate-50/50">
            {/* Topos */}
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Conteúdo lado esquerdo */}
                    <div className="space-y-6 text-left">
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 rounded-full">
                            Solução para WhatsApp
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Conecte sua equipe ao WhatsApp e converta atendimentos em vendas.
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Centralize conversas, automatize respostas frequentes e tenha controle total da sua operação no WhatsApp em uma só plataforma.
                        </p>
                        <div>
                            <Button 
                                type="button" 
                                size="lg" 
                                className="bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all font-medium px-8"
                                onClick={() => {}}
                            >
                                Fale com nossos especialistas
                            </Button>
                        </div>
                    </div>

                    {/* Conteúdo lado direito */}
                    <div className="relative rounded-2xl bg-white p-4 shadow-xl border border-slate-100 flex items-center justify-center min-h-[300px]">
                        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-200 p-6 text-center text-slate-400 text-sm">
                            [ Imagem ou Mockup da Plataforma ]
                        </div>
                    </div>
                </div>

                {/* Seção abaixo do topo */}
                <div className="pt-12 border-t border-slate-200/60">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Soluções por Casos de Uso (Casos Práticos)
                        </h2>
                        <p className="text-slate-600">
                            Veja como o Nimbo transforma o seu atendimento diário em resultados reais.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {textSoluctionsCasosUso.map((item) => (
                            <li 
                                key={item.titulo}
                                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {item.Texto}
                                    </p>
                                </div>

                                <div className="w-full h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center p-4 text-xs text-slate-400 text-center">
                                    {item.img}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-12 border-t border-slate-200/60">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Soluções por Casos de Uso (Casos Práticos)
                        </h2>
                        <p className="text-slate-600">
                            Veja como o Nimbo transforma o seu atendimento diário em resultados reais.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <table>
                            <caption>Lista de Casos de Uso</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Casos de Uso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">dh</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}