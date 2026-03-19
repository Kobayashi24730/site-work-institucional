import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Ana Rodrigues",
    role: "CTO, FinanceUp",
    content: "A NexaTech transformou completamente nossa infraestrutura. A performance do sistema melhorou em 300% e os custos com cloud reduziram pela metade.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "CEO, LogiTrack",
    content: "Profissionalismo excepcional. Entregaram o projeto antes do prazo e com qualidade muito acima do esperado. Parceria que recomendo.",
    rating: 5,
  },
  {
    name: "Marina Silva",
    role: "Head de Produto, EduPlus",
    content: "A equipe da NexaTech entendeu perfeitamente nossas necessidades. O aplicativo que desenvolveram é intuitivo e nossos usuários adoram.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary/30" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <SectionHeading
          badge="Depoimentos"
          title="O que nossos clientes dizem"
          description="A satisfação dos nossos parceiros é o nosso maior indicador de sucesso."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed flex-1">"{t.content}"</p>
              <footer className="mt-4 pt-4 border-t">
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
