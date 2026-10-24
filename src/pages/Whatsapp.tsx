import { Button } from "@/components/ui/button";
import { BatteryWarning, CheckIcon, XIcon } from "lucide-react";

const textSoluctionsCasosUso = [
    {
        titulo: "Múltiplos Atendentes no mesmo número",
        img: "Mockup da caixa de entrada dividida por atendentes",
        Texto: "Acabe com a bagunça de ter vários celulares. Toda a sua equipe responde usando o mesmo número oficial de WhatsApp."
    },
    {
        titulo: "Automação e Chatbots Inteligentes",
        img: "Exemplo de fluxo de triagem automática",
        Texto: "Responda instantaneamente mesmo fora do horário comercial. Qualifique leads e direcione o cliente para o setor certo em segundos."
    },
    {
        titulo: "Gestão e Distribuição de Mensagens",
        img: "Lista de filas (Financeiro, Suporte, Vendas)",
        Texto: "Distribuição automática de conversas por fila de atendimento, prioridade ou ordem de chegada."
    },
    {
        titulo: "Relatórios e Analytics de Atendimento",
        img: "Gráficos de tempo médio de espera e satisfação",
        Texto: "Métricas em tempo real: saiba quanto tempo sua equipe demora para responder e identifique gargalos de vendas."
    }
];

const Segmentos = [
    {
        titulo: "E-commerce & Vendas",
        texto: "Envio de código de rastreio automático, recuperação de carrinho abandonado e confirmação de pedido via WhatsApp.",
    },
    {
        titulo: "Clínicas & Saúde",
        texto: "Agendamento de consultas, lembretes automáticos para reduzir faltas e confirmação de presença.",
    },
    {
        titulo: "Serviços & B2B",
        texto: "Triagem de orçamento, distribuição de leads para vendedores e histórico centralizado de conversas.",
    }
];

const Diretrizes = [
    {
        titulo: "Selo API Oficial da Meta (Cloud API)", 
        texto: "O uso da API Oficial garante estabilidade, evita banimento de número e permite envio de mensagens em massa dentro das diretrizes da Meta."
    },
    {
        titulo: "Conformidade com LGPD",
        texto: "Controle de acesso rigoroso por permissões, criptografia de ponta a ponta e total proteção dos dados dos clientes.",
    },
    {
        titulo: "Integrações com Ferramentas",
        texto: "Conecte facilmente aos principais sistemas do mercado (CRMs, E-commerces, Webhooks, RD Station, HubSpot).",
    },
];

const comparacao = [
    {
        funcionalidade: "Vários atendentes no mesmo número",
        whatsappBusiness: "Limite baixo",
        isWpValid: false,
        myPlataform: "Ilimitado / Flexível"
    },
    {
        funcionalidade: "Relatórios de desempenho da equipe",
        whatsappBusiness: "Não possui",
        isWpValid: false,
        myPlataform: "Dashboards completos"
    },
    {
        funcionalidade: "Fila de atendimento por departamento",
        whatsappBusiness: "Não possui",
        isWpValid: false,
        myPlataform: "Sim (Automático)"
    },
    {
        funcionalidade: "Respostas automáticas avançadas",
        whatsappBusiness: "Básicas",
        isWpValid: "warning",
        myPlataform: "Automação complexa"
    }
];

export function Whatsapp() {
    return (
        <section className="py-16 md:py-24 bg-slate-50/50">
            <div className="container mx-auto px-4 max-w-6xl space-y-24">
                
                {/* 1. Topo / Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

                    <div className="relative rounded-2xl bg-white p-4 shadow-xl border border-slate-100 flex items-center justify-center min-h-[320px]">
                        <div className="w-full h-72 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200 p-6 text-center text-slate-400 text-sm">
                            [ Mockup da Plataforma Nimbo ]
                        </div>
                    </div>
                </div>

                {/* 2. Casos Práticos (Grid de Cards) */}
                <div className="pt-12 border-t border-slate-200/60">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Soluções por Casos de Uso
                        </h2>
                        <p className="text-slate-600">
                            Veja como o Nimbo transforma o seu atendimento diário em resultados reais.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {textSoluctionsCasosUso.map((item) => (
                            <li 
                                key={item.titulo}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {item.Texto}
                                    </p>
                                </div>
                                <div className="w-full h-28 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-4 text-xs text-slate-400 text-center font-medium">
                                    {item.img}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Soluções por Segmento */}
                <div className="pt-12 border-t border-slate-200/60">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Soluções por Segmento de Mercado
                        </h2>
                        <p className="text-slate-600">
                            Ferramentas desenhadas sob medida para o seu nicho de atuação.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Segmentos.map((seg) => (
                            <div key={seg.titulo} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                                <h3 className="font-bold text-lg text-slate-900">{seg.titulo}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{seg.texto}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Tabela Comparativa: WhatsApp Padrão vs Nimbo */}
                <div className="pt-12 border-t border-slate-200/60">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            Por que migrar para o nível profissional?
                        </h2>
                        <p className="text-slate-600">
                            Veja a diferença clara entre usar o aplicativo comum e a nossa plataforma.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-100">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/70 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                    <th className="p-4 sm:p-5">Funcionalidade</th>
                                    <th className="p-4 sm:p-5 text-center">WhatsApp Business App</th>
                                    <th className="p-4 sm:p-5 text-center text-blue-600">Nimbo Platform</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-slate-700 font-medium">
                                {comparacao.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 sm:p-5 text-slate-900 font-semibold grid-1">{row.funcionalidade}</td>
                                        <td className="p-4 sm:p-5 text-center text-slate-500 flex items-center justify-center gap-2">
                                            {row.isWpValid === false && <XIcon className="w-4 h-4 text-red-500 shrink-0" />}
                                            {row.isWpValid === "warning" && <BatteryWarning className="w-4 h-4 text-amber-500 shrink-0" />}
                                            <span>{row.whatsappBusiness}</span>
                                        </td>
                                        <td className="p-4 sm:p-5 text-center text-blue-600 font-bold bg-blue-50/20">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckIcon className="w-4 h-4 text-blue-600 shrink-0" />
                                                <span>{row.myPlataform}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 5. Diretrizes, Segurança e LGPD */}
                <div className="pt-12 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Diretrizes.map((dir, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                            <h3 className="text-lg font-bold text-slate-900">{dir.titulo}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{dir.texto}</p>
                        </div>
                    ))}
                </div>

                {/* 6. Call to Action Final */}
                <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                        Pronto para profissionalizar o WhatsApp da sua empresa?
                    </h3>
                    <div>
                        <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 shadow-md"
                            onClick={() => {}}
                        >
                            Fale com nossos especialistas
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}