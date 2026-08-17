import { genericWhatsappLink } from "../data";
import { makeLinkHandler } from "../router";

type NotFoundPageProps = {
  navigate: (to: string) => void;
};

export default function NotFoundPage({ navigate }: NotFoundPageProps) {
  return (
    <main className="page">
      <header className="nav">
        <a
          href="/"
          className="nav__brand"
          onClick={makeLinkHandler(navigate, "/")}
        >
          <img className="nav__brand-mark" src="/logo.jpeg" alt="Bruchez3D" />
          <span>
            Bruchez<strong>3D</strong>
          </span>
        </a>
        <a
          className="button button--whatsapp"
          href={genericWhatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp
        </a>
      </header>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Ops</p>
          <h1>Essa peça não existe mais no catálogo.</h1>
          <p className="section__support">
            Ela pode ter saído de linha ou o link que você clicou está
            desatualizado. Dá uma olhada no catálogo completo — ou, se você
            tinha algo específico em mente, me chama no WhatsApp.
          </p>
        </div>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href="/#catalogo"
            onClick={makeLinkHandler(navigate, "/#catalogo")}
          >
            Ver catálogo completo
          </a>
          <a
            className="button button--ghost"
            href={genericWhatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>Bruchez 3D · Impressão 3D sob encomenda</span>
        <a href="/" onClick={makeLinkHandler(navigate, "/")}>
          Voltar para o início
        </a>
      </footer>
    </main>
  );
}
