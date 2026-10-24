import { AnimatedSections } from "@/components/AnimatedSections";
import { Button } from "@/components/ui/button";
import { Bot, Zap, MessageSquare, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

const automacoes = [
    {
        title: "Chatbots e triagem",
        icon: <Bot className="w-5 h-5 text-blue-600" />,
        textos: ["perguntar o nome", "identificar assunto", "escolher departamento", "encaminhar para um atendente"]
    },
    {
        title: "Automação por gatilhos",
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        textos: ["nova mensagem recebida", "palavra-chave", "mudança de etapa do CRM", "horário fora do expediente", "período sem resposta"],
    },
    {
        title: "Mensagens automáticas",
        icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
        textos: ["boas-vindas", "ausência", "lembretes", "acompanhamento de proposta", "pesquisa de satisfação"],
    },
    {
        title: "Exemplos por segmento",
        icon: <Briefcase className="w-5 h-5 text-purple-500" />,
        textos: ["confirmação de consultas", "recuperação de carrinho", "qualificação de leads", "atualização de pedidos"],
    }
];

export default function Automacao() {
    return (
        <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
            <AnimatedSections className="container mx-auto px-4 max-w-6xl space-y-24">
                
                {/* Fluxo estilp Workflow mockup. */}
                <div className="text-center space-y-12">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 rounded-full">
                            Automação Inteligente
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Automatize tarefas repetitivas sem perder o atendimento humano.
                        </h2>
                        <p className="text-lg text-slate-600">
                            Crie regras inteligentes para qualificar leads e direcionar conversas instantaneamente.
                        </p>
                    </div>

                    {/* Mockup visual do construtor de fluxo. */}
                    <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 max-w-4xl mx-auto">
                        <div className="absolute top-4 left-6 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                            <span className="text-xs text-slate-400 ml-2 font-mono">fluxo-atendimento.nimbo</span>
                        </div>

                        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 py-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 w-full md:w-60 text-left shadow-sm">
                                <div className="text-xs font-semibold text-blue-600 uppercase mb-1">Gatilho</div>
                                <div className="text-sm font-bold text-slate-900">Nova Mensagem Recebida</div>
                            </div>

                            <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 md:rotate-0 shrink-0" />
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 w-full md:w-60 text-left shadow-sm">
                                <div className="text-xs font-semibold text-blue-600 uppercase mb-1">Ação / Chatbot</div>
                                <div className="text-sm font-bold text-slate-900">Identificar Assunto & Setor</div>
                            </div>

                            <ArrowRight className="w-5 h-5 text-slate-400 rotate-90 md:rotate-0 shrink-0" />
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 w-full md:w-60 text-left shadow-sm">
                                <div className="text-xs font-semibold text-emerald-600 uppercase mb-1">Destino</div>
                                <div className="text-sm font-bold text-slate-900">Encaminhar para Atendente</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Serviços de Automação. */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Serviços de automação
                        </h2>
                        <p className="text-slate-600">
                            Tudo o que você precisa para escalar sua operação no WhatsApp com eficiência.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {automacoes.map((automacao, index) => (
                            <article 
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                        {automacao.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {automacao.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {automacao.textos.map((texto, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                                <span className="capitalize">{texto}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>  
                        ))}
                    </div>
                </div>

                {/* CTA. */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                        Crie sua primeira automação em minutos
                    </h2>
                    <p className="text-blue-100 max-w-xl mx-auto text-sm md:text-base">
                        Simplifique o atendimento da sua empresa sem precisar de códigos ou configurações complexas.
                    </p>
                    <div>
                        <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 shadow-md"
                            onClick={() => {}}
                        >
                            Começar agora gratuitamente
                        </Button>
                    </div>
                </div>

            </AnimatedSections>
        </section>
    );
}