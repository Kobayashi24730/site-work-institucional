import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>NexTech — Soluções Digitais que Transformam Negócios</title>
        <meta name="description" content="Desenvolvemos software de alta performance, consultoria tecnológica e soluções em nuvem para empresas que querem liderar o futuro." />
        <link rel="canonical" href="https://nexatech.com.br" />
      </Helmet>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
