import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-hero relative overflow-hidden" aria-label="Seção principal">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(220 20% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" aria-hidden="true" />

      <div className="section-container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 mb-6 px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary-foreground/80 border border-primary/20">
              <Sparkles size={12} />
              Inovação em cada linha de código
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Soluções digitais que{" "}
            <span className="text-gradient-primary">transformam</span> negócios
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-hero-muted max-w-xl mx-auto"
          >
            Desenvolvemos software de alta performance, consultoria tecnológica e soluções em nuvem para empresas que querem liderar o futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">
                Solicitar proposta
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/sobre">Conheça a empresa</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "150+", label: "Projetos" },
              { value: "98%", label: "Satisfação" },
              { value: "8+", label: "Anos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient-primary">{stat.value}</p>
                <p className="text-xs text-hero-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
