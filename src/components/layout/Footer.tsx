import { useState } from "react";
import {Logo} from "@/components/layout/Logo";

export function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <footer>
      <div className="section-container footer-grid">
        <div className="footer-brand"><Logo /><p>Atendimento que aproxima empresas e pessoas.</p><span>© 2026 Nimbo Tecnologia. Todos os direitos reservados.</span></div>
        <div><b>Produto</b><button onClick={() => scrollTo("recursos")}>Recursos</button><button onClick={() => scrollTo("precos")}>Preços</button><button>Integrações</button><button>Atualizações</button></div>
        <div><b>Empresa</b><button>Sobre nós</button><button>Carreiras</button><button>Parceiros</button><button>Contato</button></div>
        <div><b>Conteúdo</b><button>Central de ajuda</button><button>Blog</button><button>Materiais</button><button>Status</button></div>
        <div><b>Legal</b><button>Privacidade</button><button>Termos de uso</button><button>Segurança</button></div>
      </div>
    </footer>
  );
}
