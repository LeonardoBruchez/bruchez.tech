import { genericWhatsappLink } from "../data";
import { makeLinkHandler } from "../router";

type Props = { navigate: (to: string) => void };
const projectUrl = "https://jovial-paletas-1e7d73.netlify.app/";
const webWhatsapp = `${genericWhatsappLink.split("?text=")[0]}?text=${encodeURIComponent("Olá! Vim pelo site bruchez.tech e quero conversar sobre a criação de um site.")}`;

export default function WebDesignPage({ navigate }: Props) {
  const services = [
    ["01", "Landing pages", "Páginas objetivas para campanhas, lançamentos e captação de contatos.", "Foco em conversão", "Integração com WhatsApp", "Carregamento rápido"],
    ["02", "Sites institucionais", "Uma presença profissional para apresentar sua empresa, serviços e diferenciais.", "Design personalizado", "Responsivo em todos os dispositivos", "Estrutura otimizada para buscas"],
    ["03", "Redesign", "Uma nova experiência para sites desatualizados, lentos ou que não representam a marca.", "Nova identidade visual", "Melhor experiência de uso", "Performance aprimorada"],
  ];
  const steps = [
    ["01", "Descoberta", "Entendo seu negócio, público e objetivo."],
    ["02", "Estratégia e design", "Organizo o conteúdo e desenho a experiência."],
    ["03", "Desenvolvimento", "Transformo o projeto em um site rápido e responsivo."],
    ["04", "Publicação", "Reviso tudo e coloco sua nova presença no ar."],
  ];

  return <div className="web-page">
    <header className="web-header"><div className="container">
      <a href="/" className="brand" onClick={makeLinkHandler(navigate, "/")}><img className="brand-mark" src="/logo.jpeg" alt="" /><span>Bruchez<span className="brand-accent">.tech</span></span><span className="sub">CRIAÇÃO DE SITES</span></a>
      <nav><a href="#projetos-web">Projetos</a><a href="#servicos">Serviços</a><a href="#processo-web">Processo</a><a href="#contato-web">Contato</a></nav>
      <a href={webWhatsapp} target="_blank" rel="noreferrer" className="web-button">Solicitar orçamento ↗</a>
    </div></header>
    <main>
      <section className="web-hero"><div className="web-glow" /><div className="container web-hero-layout">
        <div><p className="web-kicker">DESIGN + DESENVOLVIMENTO</p><h1>Sites que trabalham<br />pelo seu <em>negócio.</em></h1><p>Criação de sites rápidos, responsivos e pensados para transformar visitas em novos clientes.</p><div className="web-actions"><a href={webWhatsapp} target="_blank" rel="noreferrer" className="web-button web-button--large">Quero criar meu site ↗</a><a href="#projetos-web">Ver projeto publicado ↓</a></div><div className="web-stack"><span>DESIGN EXCLUSIVO</span><span>MOBILE FIRST</span><span>SEO</span><span>PERFORMANCE</span></div></div>
        <div className="web-screen"><div className="web-screen-bar"><i /><i /><i /><span>seunegocio.com.br</span></div><div className="web-screen-content"><small>SUA MARCA</small><h3>Uma presença digital<br /><em>que gera resultado.</em></h3><p>Clareza, personalidade e estratégia em cada seção.</p><button>FALE CONOSCO ↗</button><div className="screen-card a" /><div className="screen-card b" /></div></div>
      </div></section>

      <section className="web-case" id="projetos-web"><div className="container">
        <div className="web-heading"><p className="web-kicker">01 / PROJETO PUBLICADO</p><h2>Trabalho real.<br /><em>Resultado no ar.</em></h2></div>
        <a className="case-card" href={projectUrl} target="_blank" rel="noreferrer">
          <div className="case-preview"><img src={`${projectUrl}og-cover.jpg`} alt="Prévia do site TIZÃO Burger Co." loading="lazy" /><div className="case-browser"><i /><i /><i /><span>jovial-paletas-1e7d73.netlify.app</span></div><span className="case-live"><b /> SITE PUBLICADO</span></div>
          <div className="case-info"><div><p>HAMBURGUERIA · SITE INSTITUCIONAL</p><h3>TIZÃO Burger Co.</h3><span>Uma presença digital de personalidade forte para uma hamburgueria artesanal, com apresentação da marca, cardápio e chamadas diretas para pedido.</span></div><ul><li>Identidade visual marcante</li><li>Experiência responsiva</li><li>Estrutura orientada à conversão</li><li>SEO e compartilhamento social</li></ul><strong>Visitar projeto publicado <b>↗</b></strong></div>
        </a>
      </div></section>

      <section className="web-services" id="servicos"><div className="container"><div className="web-heading"><p className="web-kicker">02 / SOLUÇÕES</p><h2>O site certo para o seu<br /><em>momento.</em></h2></div><div className="web-service-grid">{services.map((service) => <article key={service[0]}><span>{service[0]}</span><h3>{service[1]}</h3><p>{service[2]}</p><ul><li>{service[3]}</li><li>{service[4]}</li><li>{service[5]}</li></ul></article>)}</div></div></section>
      <section className="web-process" id="processo-web"><div className="container"><div className="web-heading"><p className="web-kicker">03 / COMO FUNCIONA</p><h2>Do briefing ao <em>online.</em></h2></div><div className="web-timeline">{steps.map((step) => <article key={step[0]}><b>{step[0]}</b><div><h3>{step[1]}</h3><p>{step[2]}</p></div></article>)}</div></div></section>
      <section className="web-cta" id="contato-web"><div className="container"><p className="web-kicker">VAMOS CONSTRUIR ALGO JUNTOS?</p><h2>Seu próximo cliente<br />pode estar a <em>um clique.</em></h2><a href={webWhatsapp} target="_blank" rel="noreferrer" className="web-button web-button--large">Começar meu projeto ↗</a></div></section>
    </main>
    <footer className="web-footer"><div className="container"><a href="/" onClick={makeLinkHandler(navigate, "/")}>← Escolher outra área</a><span>BRUCHEZ.TECH © {new Date().getFullYear()}</span></div></footer>
  </div>;
}
