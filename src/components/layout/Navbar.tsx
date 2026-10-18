import {Logo} from "./Logo";
import { useState } from "react";
import { Icon } from "./paths";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  
  return (
    <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={`site-nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">
            <button onClick={() => scrollTo("recursos")}>Recursos</button>
            <button onClick={() => scrollTo("como-funciona")}>Como funciona</button>
            <button onClick={() => scrollTo("precos")}>Preços</button>
            <button onClick={() => scrollTo("clientes")}>Clientes</button>
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