import { motion } from "framer-motion";
import { Code2, Cloud, Shield, Zap, BarChart3, Headphones } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    icon: Code2,
    title: "Desenvolvimento Custom",
    description: "Aplicações web e mobile sob medida com as tecnologias mais modernas do mercado.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infraestrutura escalável na nuvem com CI/CD, containers e monitoramento contínuo.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteção avançada dos seus dados com práticas de segurança de nível enterprise.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sistemas otimizados para máxima velocidade e eficiência operacional.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Inteligência de dados para decisões estratégicas e insights acionáveis.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe especializada disponível para garantir a continuidade do seu negócio.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Features() {
  return (
    <section className="section-padding" aria-labelledby="features-heading">
      <div className="section-container">
        <SectionHeading
          badge="Serviços"
          title="Tudo que sua empresa precisa para crescer"
          description="Soluções completas de tecnologia, do planejamento à execução."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card hover-lift p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={20} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
