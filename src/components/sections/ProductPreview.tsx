import { useState, type ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { paths, Icon } from "@/components/layout/paths";

export function ProductPreview() {
  return (
    <div className="product-window">
      <div className="window-bar">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="window-url"><span className="lock-dot" /> app.nimbo.com.br/atendimentos</div>
        <div className="window-actions">•••</div>
      </div>
      <div className="product-app">
        <aside className="preview-nav">
          <Logo />
          <div className="preview-nav-item active"><Icon name="message" size={15} /><span>Atendimentos</span><b>3</b></div>
          <div className="preview-nav-item"><Icon name="inbox" size={15} /><span>Caixa de entrada</span></div>
          <div className="preview-nav-item"><Icon name="people" size={15} /><span>Contatos</span></div>
          <div className="preview-nav-item"><Icon name="report" size={15} /><span>Relatórios</span></div>
          <div className="preview-user"><span>JS</span><div><b>Júlia Souza</b><small>Online</small></div></div>
        </aside>
        <div className="preview-list">
          <div className="preview-title"><b>Conversas</b><span>12 em atendimento</span></div>
          <div className="preview-search">Buscar conversa...</div>
          {[
            ["MR", "Mariana Rocha", "Perfeito, muito obrigada!", "2", "rose"],
            ["LC", "Lucas Carvalho", "Vocês emitem nota fiscal?", "1", "blue"],
            ["AP", "Ana Paula", "Gostaria de conhecer o plano Pro", "", "violet"],
            ["RB", "Rafael Batista", "Enviou um documento", "", "amber"],
          ].map(([initials, name, message, unread, color], index) => (
            <div className={`preview-contact ${index === 0 ? "selected" : ""}`} key={name}>
              <span className={`mini-avatar ${color}`}>{initials}</span>
              <div><b>{name}</b><small>{message}</small></div>
              {unread && <i>{unread}</i>}
            </div>
          ))}
        </div>
        <div className="preview-chat">
          <div className="preview-chat-head"><span className="mini-avatar rose">MR</span><div><b>Mariana Rocha</b><small><i /> online agora</small></div><span className="head-dots">•••</span></div>
          <div className="preview-messages">
            <div className="preview-day">Hoje</div>
            <div className="bubble customer">Olá! Queria saber se meu pedido já foi enviado.<small>10:36</small></div>
            <div className="bubble agent">Oi, Mariana! Pode me informar o número do pedido?<small>10:38 ✓</small></div>
            <div className="bubble customer short">Claro! É o pedido #48291.<small>10:39</small></div>
            <div className="bubble agent">Encontrei! A entrega está prevista para amanhã.<small>10:41 ✓</small></div>
          </div>
          <div className="preview-composer"><span>Digite sua mensagem...</span><b><Icon name="arrow" size={13} /></b></div>
        </div>
        <div className="preview-detail">
          <b>Detalhes</b>
          <span className="detail-avatar">MR</span>
          <strong>Mariana Rocha</strong>
          <small>Casa & Cor</small>
          <div className="detail-line"><span>Telefone</span><b>+55 11 98765-4321</b></div>
          <div className="detail-line"><span>Etiqueta</span><em>Cliente ativo</em></div>
          <div className="detail-line"><span>Conversas anteriores</span><b>3 conversas</b></div>
        </div>
      </div>
    </div>
  );
}