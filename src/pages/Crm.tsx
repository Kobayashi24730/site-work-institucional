import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  KanbanSquare,
  MessageSquareText,
  Tags,
  UserRoundCheck,
  UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {AnimatedSections} from "@/components/AnimatedSections";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

const benefits = [
  {
    icon: MessageSquareText,
    title: "Histórico completo",
    description:
      "Acesse conversas, anotações e informações do cliente em um só lugar.",
  },
  {
    icon: KanbanSquare,
    title: "Funil visual",
    description:
      "Acompanhe cada oportunidade desde o primeiro contato até o fechamento.",
  },
  {
    icon: UserRoundCheck,
    title: "Responsáveis definidos",
    description:
      "Distribua leads e saiba qual vendedor está cuidando de cada negociação.",
  },
  {
    icon: Tags,
    title: "Etiquetas personalizadas",
    description:
      "Organize contatos por interesse, prioridade, origem ou etapa comercial.",
  },
  {
    icon: Clock3,
    title: "Tarefas e lembretes",
    description:
      "Programe retornos e não deixe nenhuma oportunidade ser esquecida.",
  },
  {
    icon: BarChart3,
    title: "Relatórios de vendas",
    description:
      "Monitore conversão, desempenho da equipe e negócios em andamento.",
  },
];

const pipeline = [
  {
    title: "Novos leads",
    color: "bg-slate-400",
    opportunities: ["Mariana Costa", "Clínica Horizonte"],
  },
  {
    title: "Em atendimento",
    color: "bg-blue-400",
    opportunities: ["Ricardo Alves", "Studio Forma"],
  },
  {
    title: "Proposta enviada",
    color: "bg-violet-500",
    opportunities: ["Empresa Atlas"],
  },
  {
    title: "Venda concluída",
    color: "bg-emerald-500",
    opportunities: ["Grupo Nova"],
  },
];

const metrics = [
  {
    value: "+32%",
    label: "na conversão de leads",
  },
  {
    value: "-41%",
    label: "no tempo de resposta",
  },
  {
    value: "2,4x",
    label: "mais produtividade",
  },
];


function PipelinePreview() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl shadow-blue-950/10">
      <div className="rounded-2xl border border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
          <div>
            <p className="font-bold text-slate-900">Funil comercial</p>
            <p className="text-xs text-slate-500">Visão geral da equipe</p>
          </div>

          <span className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
            Nova oportunidade
          </span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {pipeline.map((column) => (
            <div
              key={column.title}
              className="rounded-xl border border-slate-200 bg-slate-100/70 p-3"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${column.color}`} />
                <span className="text-xs font-bold text-slate-700">
                  {column.title}
                </span>
                <span className="ml-auto text-xs text-slate-400">
                  {column.opportunities.length}
                </span>
              </div>

              <div className="space-y-2">
                {column.opportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      {opportunity}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Atendimento pelo WhatsApp
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-7">
      <span className="text-sm font-bold text-blue-600">{number}</span>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}


export function Crm() {
  return (
    <div className="bg-white text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 pb-20 pt-28">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl" />

        <AnimatedSections className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm">
              <Zap className="h-4 w-4" />
              CRM e Vendas
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Transforme conversas em{" "}
              <span className="text-blue-600">oportunidades de venda.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Organize contatos, acompanhe negociações e saiba exatamente qual
              é o próximo passo de cada lead atendido pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 px-6 text-white hover:bg-blue-700"
              >
                Conhecer o CRM
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 bg-white"
              >
                Ver como funciona
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Teste grátis
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Sem cartão
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Configuração rápida
              </span>
            </div>
          </div>

          <PipelinePreview />
        </AnimatedSections>
      </section>

      {/* Apresentação */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Gestão comercial
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Um processo de vendas mais simples e organizado
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Sua equipe visualiza todas as oportunidades e sabe quais ações
              precisa executar para avançar cada negociação.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProcessCard
              number="01"
              title="Capture os contatos"
              description="Transforme automaticamente os atendimentos recebidos pelo WhatsApp em contatos e oportunidades."
            />

            <ProcessCard
              number="02"
              title="Acompanhe os negócios"
              description="Mova oportunidades pelo funil, adicione informações e programe o próximo contato."
            />

            <ProcessCard
              number="03"
              title="Converta mais vendas"
              description="Identifique gargalos e ajude sua equipe a fechar negócios com mais agilidade."
            />
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="border-y border-slate-200 bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Recursos
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Tudo que sua equipe precisa para vender melhor
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BenefitIcon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{benefit.title}</h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 px-6 py-12 text-white md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <UsersRound className="h-9 w-9 text-blue-400" />

              <h2 className="mt-5 text-3xl font-bold tracking-tight">
                Decisões baseadas em dados, não em suposições
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Acompanhe os indicadores da operação e descubra onde estão as
                melhores oportunidades de crescimento.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <strong className="text-3xl font-bold text-blue-400">
                    {metric.value}
                  </strong>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-600 px-6 py-14 text-center text-white shadow-xl shadow-blue-600/20 md:px-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Organize suas vendas pelo WhatsApp
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Centralize contatos, acompanhe oportunidades e dê mais
            produtividade para sua equipe comercial.
          </p>

          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-white px-7 text-blue-700 hover:bg-blue-50"
          >
            Começar gratuitamente
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Crm;