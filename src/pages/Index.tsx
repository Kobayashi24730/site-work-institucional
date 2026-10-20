import { useState, type ReactNode } from "react";
import {Navbar} from "@/components/layout/Navbar";
import {type IconName, Icon} from "@/components/layout/paths";
import {Footer} from "@/components/layout/Footer";
import {Hero} from "@/components/sections/Hero";
import {Servicos} from "@/pages/Servicos";
import { Sobre } from '@/pages/Sobre';
import { Clientes } from "@/pages/Clientes";
import { Precos } from "@/pages/Precos";
import { Faq } from "@/pages/Faq";
import {Cta} from "@/pages/Cta";



export default function App() {
  return (
    <div className="site-shell">

      <Navbar/>

      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Clientes />
        <Precos />
        <Faq />
        <Cta />
      </main>

      <Footer />
      
    </div>
  );
}
