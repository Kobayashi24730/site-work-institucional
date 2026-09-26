import { Link } from "react-router-dom";

const footerLinks = {
  Empresa: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Serviços: [
    { label: "Consultoria", href: "/servicos" },
    { label: "Desenvolvimento", href: "/servicos" },
    { label: "Cloud & DevOps", href: "/servicos" },
  ],
  Suporte: [
    { label: "Contato", href: "/contato" },
    { label: "FAQ", href: "#" },
    { label: "Documentação", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50" role="contentinfo">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              Nex<span className="text-gradient-primary">Tech</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Transformando negócios com tecnologia de ponta e soluções digitais inovadoras.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-sm mb-3">{title}</h3>
              <ul className="space-y-2" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NexaTech. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacidade</Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
