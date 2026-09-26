import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "contato@nextech.com.br" },
  { icon: Phone, label: "Telefone", value: "+55 (11) 9999-0000" },
  { icon: MapPin, label: "Endereço", value: "São Paulo, SP — Brasil" },
];

export default function Contato() {
  return (
    <Layout>
      <Helmet>
        <title>Contato — NexaTech</title>
        <meta name="description" content="Entre em contato com a NexaTech. Estamos prontos para ajudar sua empresa a alcançar o próximo nível." />
      </Helmet>

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            badge="Contato"
            title="Vamos conversar?"
            description="Preencha o formulário ou use um dos nossos canais de contato."
          />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 mt-8"
              >
                <h3 className="font-display font-semibold mb-2">Horário de Atendimento</h3>
                <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                <p className="text-sm text-muted-foreground">Sábado: 9h às 13h</p>
              </motion.div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
