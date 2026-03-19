import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="section-padding" aria-label="Chamada para ação">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-hero rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-[100px]" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Pronto para <span className="text-gradient-primary">transformar</span> seu negócio?
            </h2>
            <p className="text-hero-muted max-w-lg mx-auto mb-8">
              Entre em contato e descubra como nossas soluções podem impulsionar seus resultados.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">
                Falar com especialista
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
