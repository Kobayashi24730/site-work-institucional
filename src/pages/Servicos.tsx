import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Code2, Cloud, Shield, Zap, BarChart3, Headphones } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import CTA from "@/components/sections/CTA";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento de Software",
    description: "Aplicações web e mobile customizadas com React, React Native, Node.js e arquiteturas modernas como microserviços.",
    features: ["Apps web responsivos", "Aplicativos mobile", "APIs RESTful e GraphQL", "Integração de sistemas"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Migração, otimização e gestão de infraestrutura em nuvem com as melhores práticas de DevOps.",
    features: ["AWS, Azure, GCP", "CI/CD pipelines", "Containerização", "Monitoramento 24/7"],
  },
  {
    icon: Shield,
    title: "Segurança Cibernética",
    description: "Proteja seus ativos digitais com auditorias de segurança, pentest e implementação de políticas de proteção.",
    features: ["Auditoria de segurança", "Testes de penetração", "Compliance LGPD", "Gestão de identidade"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transforme dados em insights acionáveis com dashboards, BI e modelos de machine learning.",
    features: ["Business Intelligence", "Data warehousing", "Machine Learning", "Dashboards em tempo real"],
  },
  {
    icon: Zap,
    title: "Consultoria Tecnológica",
    description: "Orientação estratégica para decisões tecnológicas, arquitetura de sistemas e roadmap de produto.",
    features: ["Arquitetura de soluções", "Roadmap de produto", "Code review", "Mentoria técnica"],
  },
  {
    icon: Headphones,
    title: "Suporte & Manutenção",
    description: "Serviços contínuos de suporte, manutenção evolutiva e monitoramento para suas aplicações.",
    features: ["SLA garantido", "Manutenção preventiva", "Atualizações contínuas", "Suporte dedicado"],
  },
];

export default function Servicos() {
  return (
    <Layout>
      <Helmet>
        <title>Serviços — NexaTech</title>
        <meta name="description" content="Conheça nossos serviços: desenvolvimento de software, cloud, segurança, data analytics e consultoria tecnológica." />
      </Helmet>

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            badge="Serviços"
            title="Soluções completas para seu negócio"
            description="Oferecemos um portfólio abrangente de serviços tecnológicos para atender todas as necessidades da sua empresa."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card hover-lift p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={22} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
}
