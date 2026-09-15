import { makeLinkHandler } from "../router";

type Props = { navigate: (to: string) => void };

export default function LandingPage({ navigate }: Props) {
  return <main className="portal-page">
    <div className="portal-grid" aria-hidden="true" />
    <header className="portal-header"><a href="/" className="brand"><img className="brand-mark" src="/logo.jpeg" alt="" /><span>Bruchez<span className="brand-accent">.tech</span></span></a><span>FLORIANÓPOLIS · SC</span></header>
    <section className="portal-intro"><p className="section-kicker">ESCOLHA O SEU CAMINHO</p><h1>Ideias digitais.<br />Objetos <em>reais.</em></h1><p>Um estúdio, duas formas de transformar o que você imaginou em algo concreto.</p></section>
    <section className="portal-options">
      <a href="/impressao-3d" onClick={makeLinkHandler(navigate, "/impressao-3d")} className="portal-card portal-card--3d">
        <span className="portal-number">01</span><div className="portal-card-art"><div className="mini-print"><i /><i /><i /><i /><i /><i /><i /></div></div><p>DO ARQUIVO AO OBJETO</p><h2>Impressão <em>3D</em></h2><div className="portal-tags"><span>Protótipos</span><span>Peças funcionais</span><span>Personalizados</span></div><strong>Explorar impressão 3D <b>↗</b></strong>
      </a>
      <a href="/criacao-de-sites" onClick={makeLinkHandler(navigate, "/criacao-de-sites")} className="portal-card portal-card--web">
        <span className="portal-number">02</span><div className="portal-card-art"><div className="browser-art"><header><i /><i /><i /></header><div><span /><span /><button /></div></div></div><p>DA IDEIA PARA A INTERNET</p><h2>Criação de <em>sites</em></h2><div className="portal-tags"><span>Landing pages</span><span>Sites institucionais</span><span>Responsivo</span></div><strong>Explorar criação de sites <b>↗</b></strong>
      </a>
    </section>
    <footer className="portal-footer"><span>BRUCHEZ.TECH © {new Date().getFullYear()}</span><span>TECNOLOGIA PARA TIRAR IDEIAS DO PAPEL</span></footer>
  </main>;
}
