import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  // Detecta rolagem da página para ajustar a transparência se desejado
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/40 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
      role="banner"
    >
      <nav
        className="section-container flex h-16 items-center justify-between px-4 md:px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground transition-transform hover:scale-105"
          aria-label="NexaTech - Página inicial"
        >
          Nex<span className="text-gradient-primary">Tech</span>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex items-center gap-1 relative"
          role="list"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  to={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 block ${
                    isActive ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.label}

                  {/* Indicador de link ativo abaixo do texto */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Efeito visual ao passar o mouse (Hover background) */}
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-full z-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="hover:bg-white/10">
            <Link to="/contato">Fale conosco</Link>
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" asChild className="shadow-md">
              <Link to="/contato">Começar agora</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-background/60 backdrop-blur-xl overflow-hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="section-container flex flex-col gap-2 py-6 px-6"
              role="list"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: -10, opacity: 0 },
                    }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 text-base font-medium transition-colors ${
                        isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: -10, opacity: 0 },
                }}
                className="pt-4 flex flex-col gap-2"
              >
                <Button className="w-full" size="sm" asChild>
                  <Link to="/contato" onClick={() => setMobileOpen(false)}>
                    Começar agora
                  </Link>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}