import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({ badge, title, description, centered = true, gradient = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center max-w-2xl mx-auto mb-12 md:mb-16" : "max-w-2xl mb-12 md:mb-16"}
    >
      {badge && (
        <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold tracking-tight ${gradient ? "text-gradient-primary" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg">{description}</p>
      )}
    </motion.div>
  );
}
