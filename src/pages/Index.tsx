import { useState, type ReactNode } from "react";
import {Navbar} from "@/components/layout/Navbar";
import {type IconName, Icon} from "@/components/layout/paths";
import {Footer} from "@/components/layout/Footer";
import {Hero} from "@/components/sections/Hero";
import Servicos from "@/components/sections/Servicos";
import Sobre from '@/components/sections/Sobre';
import { Clientes } from "@/components/sections/Clientes";
import { Precos } from "@/components/sections/Precos";
import { Faq } from "@/components/sections/Faq";
import {Cta} from "@/components/sections/Cta";



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
