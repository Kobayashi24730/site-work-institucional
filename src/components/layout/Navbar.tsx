import { useState, useEffect, useRef } from "react";
import {Logo} from "./Logo";
import { Icon } from "./paths";
import { ChevronDown, ChevronUp } from "lucide-react";


export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soluctionsOpen, setSoluctionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSoluctionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setSoluctionsOpen(false);
  };

  const soluctionsItens = [
    {
      title: "WhatsApp Business",
      description: "Centralize o atendimento da sua empresa.",
      id: "whatsapp",
    },
    {
      title: "CRM e Vendas",
      description: "Organize contatos e oportunidades.",
      id: "crm",
    },
    {
      title: "Automação",
      description: "Automatize tarefas e mensagens.",
      id: "automacao",
    },
    {
      title: "Integrações",
      description: "Conecte suas ferramentas favoritas.",
      id: "integracoes",
    },
  ];
  

  return (
    <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            <button onClick={() => scrollTo("recursos")}>Recursos</button>
            <div className="nav-dropdown" ref={dropdownRef}>
              <button 
                type="button"
                className="dropdown-trigger"
                aria-expanded={soluctionsOpen}
                aria-haspopup="true"
                onClick={() => setSoluctionsOpen(!soluctionsOpen)}
              >
                Soluções {soluctionsOpen ? (<ChevronUp size={16} />) : (<ChevronDown size={16} />)}
              </button>

              {soluctionsOpen && (
                <div className="dropdown-menu">
                  {soluctionsItens.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className="dropdown-item"
                      onClick={() => scrollTo(item.id)}
                    >
                      <span>{item.title}</span>
                      <span>{item.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => scrollTo("como-funciona")}>Como funciona</button>
            <button onClick={() => scrollTo("precos")}>Preços</button>
            <button onClick={() => scrollTo("clientes")}>Clientes</button>
            <button onClick={() => scrollTo("sobre")}>Sobre nós</button>
          </nav>
          <div className="header-actions">
            <button className="login-button">Entrar</button>
            <button className="trial-button" onClick={() => scrollTo("precos")}>Começar grátis <Icon name="arrow" size={16} /></button>
          </div>
          <button className="menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
      </header>
  )
}