import { useMemo, useState } from "react";
import {
  categories,
  contactEmail,
  faq,
  genericWhatsappLink,
  highlights,
  phoneNumber,
  products,
  serviceSteps,
} from "../data";
import ProductCard from "../components/ProductCard";
import { makeLinkHandler } from "../router";

const showcaseSlugs = [
  "vaso-espiral",
  "modelo-dental",
  "suporte-celular-qrcode",
  "placa-confie-em-deus",
];

type HomePageProps = {
  navigate: (to: string) => void;
};

function getCategoryFromUrl(): string {
  const value = new URLSearchParams(window.location.search).get("categoria");
  return value && (categories as readonly string[]).includes(value)
    ? value
    : "Todos";
}

export default function HomePage({ navigate }: HomePageProps) {
  const [activeCategory, setActiveCategoryState] = useState<string>(
    getCategoryFromUrl,
  );

  const setActiveCategory = (category: string) => {
    setActiveCategoryState(category);
    const params = new URLSearchParams(window.location.search);
    if (category === "Todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", category);
    }
    const query = params.toString();
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}`,
    );
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const showcase = showcaseSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

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
        <nav className="nav__links">
          <a href="#catalogo">Catálogo</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a
          className="button button--whatsapp"
          href={genericWhatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Falar no WhatsApp
        </a>
      </header>

      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />

        <div className="hero__copy">
          <span className="pill">Impressão 3D sob encomenda</span>
          <h1>
            Peças em <span className="text-gradient">3D</span> que saem da
            tela e viram <span className="text-gradient">presente</span>,
            <br />
            decoração ou solução prática.
          </h1>
          <p className="hero__lead">
            Chaveiros, decoração, suportes, ferramentas e peças
            personalizadas. Escolha a peça, clique em "Tenho interesse!" e
            fale direto comigo no WhatsApp.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#catalogo">
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
          <div className="hero__stats">
            <div>
              <strong>{products.length}+</strong>
              <span>peças no catálogo</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>sob encomenda</span>
            </div>
            <div>
              <strong>Direto</strong>
              <span>no WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="hero__showcase" aria-hidden="true">
          {showcase.map((product, index) => (
            <div
              key={product.slug}
              className={`hero__showcase-card hero__showcase-card--${index + 1}`}
            >
              <img src={`/products/${product.images[0]}`} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="marquee-band" aria-hidden="true">
        <div className="marquee-band__track">
          {categories
            .concat(categories)
            .filter((category) => category !== "Todos")
            .map((category, index) => (
              <span key={`${category}-${index}`}>{category}</span>
            ))}
        </div>
      </section>

      <section className="section" id="catalogo">
        <div className="section__heading">
          <p className="eyebrow">Catálogo</p>
          <h2>Escolha a peça e já sai falando comigo no WhatsApp.</h2>
          <p className="section__support">
            Clique em qualquer peça para ver todas as fotos, os detalhes e o
            botão de interesse direto para o WhatsApp.
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                category === activeCategory
                  ? "category-chip is-active"
                  : "category-chip"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              navigate={navigate}
            />
          ))}
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="section__heading">
          <p className="eyebrow">Como funciona</p>
          <h2>Do clique até o combinado, em três passos.</h2>
        </div>

        <div className="steps-grid">
          {serviceSteps.map((step, index) => (
            <article key={step} className="step-card">
              <span className="step-card__number">{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="highlight-card">
              <span>{highlight.accent}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section__heading">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>Ainda com dúvida? Provavelmente já respondi aqui.</h2>
        </div>

        <div className="faq-list">
          {faq.map((entry) => (
            <details key={entry.question} className="faq-item">
              <summary>{entry.question}</summary>
              <p>{entry.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta__glow" aria-hidden="true" />
        <div>
          <p className="eyebrow">Bora fechar?</p>
          <h2>Escolhe a peça, chama no WhatsApp e combina os detalhes comigo.</h2>
        </div>
        <a
          className="button button--whatsapp button--lg"
          href={genericWhatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Chamar no WhatsApp · {phoneNumber}
        </a>
      </section>

      <footer className="footer">
        <span>Bruchez 3D · Impressão 3D sob encomenda</span>
        <span>{phoneNumber}</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </footer>
    </main>
  );
}
