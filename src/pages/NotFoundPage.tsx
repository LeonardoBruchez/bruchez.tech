import { genericWhatsappLink } from "../data";
import { makeLinkHandler } from "../router";
import Header from "../components/Header";

type NotFoundPageProps = {
  navigate: (to: string) => void;
};

export default function NotFoundPage({ navigate }: NotFoundPageProps) {
  return (
    <main className="page">
      <Header
        navigate={navigate}
        ctaLabel="Falar no WhatsApp"
        ctaHref={genericWhatsappLink}
      />

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
        <span>BruchezTech · Impressão 3D sob encomenda</span>
        <a href="/" onClick={makeLinkHandler(navigate, "/")}>
          Voltar para o início
        </a>
      </footer>
    </main>
  );
}
