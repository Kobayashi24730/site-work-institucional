import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 md:p-8 space-y-5 max-w-lg w-full"
      noValidate
    >
      <div>
        <Label htmlFor="name">Nome *</Label>
        <Input id="name" {...register("name")} className="mt-1.5" aria-invalid={!!errors.name} />
        {errors.name && <p className="text-destructive text-xs mt-1" role="alert">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email">E-mail *</Label>
        <Input id="email" type="email" {...register("email")} className="mt-1.5" aria-invalid={!!errors.email} />
        {errors.email && <p className="text-destructive text-xs mt-1" role="alert">{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" {...register("company")} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea id="message" {...register("message")} rows={4} className="mt-1.5 resize-none" aria-invalid={!!errors.message} />
        {errors.message && <p className="text-destructive text-xs mt-1" role="alert">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        {!isSubmitting && <Send size={14} />}
      </Button>
    </motion.form>
  );
}
