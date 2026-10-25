import { AnimatedSections } from "@/components/AnimatedSections";
import { Bot, Zap, MessageSquare, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntegracoesCards = [
    {
        title: "CRMs e Gestão de Leads",
        apps: ["RD Station", "HubSpot", "Pipedrive", "Salesforce"],
        icon: <Bot className="w-5 h-5 text-blue-600" />,
        texto: "Envie leads capturados no WhatsApp direto para o seu CRM e atualize etapas de vendas automaticamente." 
    },
    {
        title: "E-commerce",
        apps: ["Shopify", "Nuvemshop", "WooCommerce", "VTEX"],
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        texto: "Dispare status de pedidos, códigos de rastreio e recupere carrinhos abandonados via WhatsApp."
    },
    {
        title: "Pagamentos & Faturamento",
        apps: ["Stripe", "Asaas", "Mercado Pago", "Pix"],
        icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
        texto: "Envie cobranças, links de pagamento e confirme assinaturas direto no chat."
    },
    {
        title: "Webhooks e APIs",
        apps: ["Zapier", "Make", "Webhooks Customizados", "API REST"],
        icon: <Code2 className="w-5 h-5 text-purple-500" />,
        texto: "Conecte com mais de 3.000 aplicativos usando o Zapier ou crie automações personalizadas via Webhooks."
    },
];

export default function Integracoes() {
    return (
        <section className="py-20 md:py-28 bg-slate-50/50 overflow-hidden">
            <AnimatedSections className="container mx-auto px-4 max-w-6xl space-y-24">
                {/* Hero */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100/60 rounded-full">
                        Ecossistema de Integrações
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Conecte o Nimbo às ferramentas que sua empresa já ama.
                    </h2>
                    <p className="text-lg text-slate-600">
                        Centralize seus dados e automatize fluxos de ponta a ponta sem precisar de códigos complexos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {IntegracoesCards.map((card, index) => (
                        <article 
                            key={index} 
                            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
                        >
                            <div className="space-y-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                    {card.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{card.texto}</p>
                            </div>

                            {/* Tags simulando os sistemas integrados */}
                            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                                {card.apps.map((app, idx) => (
                                    <span key={idx} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Caixa de Exemplo */}
                <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-xl text-left">
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-wider">
                            <Terminal className="w-4 h-4" />
                            <span>API & Webhooks</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">Desenvolvido para escalar com o seu negócio</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Nossa infraestrutura conta com documentação completa em API RESTful e disparos via Webhook em tempo real para sincronização com sistemas legados ou internos.
                        </p>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 p-5 rounded-2xl font-mono text-xs text-slate-300 w-full md:w-auto shadow-inner space-y-2">
                        <div className="text-slate-500">// Exemplo de payload webhook</div>
                        <div><span className="text-purple-400">POST</span> /api/v1/webhook/lead</div>
                        <div className="text-emerald-400">{`{ "status": "connected", "event": "chat.new" }`}</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                        Pronto para transformar seu atendimento?
                    </h2>
                    <p className="text-blue-100 max-w-md mx-auto text-sm md:text-base">
                        Crie sua conta agora e comece a integrar suas ferramentas em poucos minutos.
                    </p>
                    <div>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 shadow-md"
                            onClick={() => {}}
                        >
                            Comece gratuitamente agora
                        </Button>
                    </div>
                </div>
            </AnimatedSections>
        </section>
    );
}