import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  { icon: Lightbulb, title: "Inovação", description: "Buscamos constantemente novas formas de resolver problemas complexos." },
  { icon: Users, title: "Colaboração", description: "Trabalhamos lado a lado com nossos clientes como verdadeiros parceiros." },
  { icon: Target, title: "Excelência", description: "Cada linha de código é escrita pensando em qualidade e performance." },
  { icon: Award, title: "Integridade", description: "Transparência e honestidade em todas as nossas relações." },
];

export default function Sobre() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre Nós — NexaTech</title>
        <meta name="description" content="Conheça a NexaTech: mais de 8 anos transformando empresas com tecnologia de ponta." />
      </Helmet>

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            badge="Sobre nós"
            title="Tecnologia com propósito"
            description="Somos uma empresa de tecnologia fundada com a missão de democratizar o acesso a soluções digitais de alto nível."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desde 2016, ajudamos empresas de todos os portes a se digitalizarem e escalarem seus negócios. Nossa equipe multidisciplinar combina expertise técnica com visão estratégica para entregar resultados mensuráveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que a tecnologia deve ser acessível, intuitiva e, acima de tudo, resolver problemas reais. Cada projeto que entregamos é uma prova desse compromisso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "50+", label: "Profissionais" },
                { value: "150+", label: "Projetos entregues" },
                { value: "8+", label: "Anos no mercado" },
                { value: "98%", label: "Taxa de satisfação" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <p className="font-display text-2xl font-bold text-gradient-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="section-container">
          <SectionHeading badge="Valores" title="O que nos move" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
