import { useMemo, useState } from "react";
import {
  categories,
  contactEmail,
  faq,
  filamentColors,
  genericWhatsappLink,
  highlights,
  phoneNumber,
  products,
  serviceSteps,
} from "../data";
import ProductCard from "../components/ProductCard";
import ColorLightbox from "../components/ColorLightbox";
import Header from "../components/Header";

const NAV_LINKS = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Cores", href: "#cores" },
  { label: "Dúvidas", href: "#faq" },
];

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
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(
    null,
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
      <Header
        navigate={navigate}
        links={NAV_LINKS}
        ctaLabel="Falar no WhatsApp"
        ctaHref={genericWhatsappLink}
      />

      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />
        <svg
          className="hero__bridge"
          aria-hidden="true"
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroBridge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="55%" stopColor="#ec4899" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M480 230 C 600 150, 660 270, 780 190"
            stroke="url(#heroBridge)"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        <div className="hero__copy">
          <span className="pill hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2l9 5v10l-9 5-9-5V7l9-5Z"
                stroke="#fb923c"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M3 7l9 5 9-5" stroke="#fb923c" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            Impressão 3D sob encomenda
          </span>
          <h1>
            Peças em <span className="hero__jumbo">3D</span> que saem da tela
            <br />
            e viram <span className="text-gradient">presente</span>,<br />
            decoração ou solução prática.
          </h1>
          <p className="hero__lead">
            Chaveiros, decoração, suportes e peças sob medida — escolha a
            peça e fale direto comigo no WhatsApp.
          </p>
          <div className="hero__actions">
            <a className="hero__cta-primary" href="#catalogo">
              Ver catálogo completo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="hero__cta-secondary"
              href={genericWhatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
                <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.5 3.63 1.44 5.15L2 22l4.98-1.4A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.5-4.55-1.36l-.33-.2-3.02.85.84-2.95-.22-.34a8.08 8.08 0 0 1-1.24-4.1c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.47-3.64 8.1-8.11 8.1Z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
          <div className="hero__stat-strip">
            <div className="hero__stat-seg">
              <span className="hero__stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 8l-9-5-9 5 9 5 9-5Z"
                    stroke="#f4f1fb"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8v8l9 5 9-5V8"
                    stroke="#f4f1fb"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>{products.length}+</strong>
                <span>peças no catálogo</span>
              </div>
            </div>
            <div className="hero__stat-seg">
              <span className="hero__stat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="#f4f1fb"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <strong>100%</strong>
                <span>sob encomenda</span>
              </div>
            </div>
            <div className="hero__stat-seg">
              <span className="hero__stat-icon hero__stat-icon--whatsapp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
                  <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.5 3.63 1.44 5.15L2 22l4.98-1.4A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.5-4.55-1.36l-.33-.2-3.02.85.84-2.95-.22-.34a8.08 8.08 0 0 1-1.24-4.1c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.47-3.64 8.1-8.11 8.1Z" />
                </svg>
              </span>
              <div>
                <strong>Direto</strong>
                <span>no WhatsApp</span>
              </div>
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

      <section className="section" id="cores">
        <div className="section__heading">
          <p className="eyebrow">Cores disponíveis</p>
          <h2>Cores reais do filamento que uso pra imprimir.</h2>
          <p className="section__support">
            Fotos tiradas aqui, sem filtro — a cor da peça final pode variar
            um pouco conforme o brilho e a luz. Não achou a cor que queria?
            Chama no WhatsApp que eu confirmo a disponibilidade.
          </p>
        </div>

        <div className="color-grid">
          {filamentColors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              className="color-swatch"
              onClick={() => setActiveColorIndex(index)}
            >
              <img
                src={`/products/filamentos/${color.image}`}
                alt={`Filamento na cor ${color.name}`}
                loading="lazy"
              />
              <span>{color.name}</span>
            </button>
          ))}
        </div>
      </section>

      {activeColorIndex !== null && (
        <ColorLightbox
          activeIndex={activeColorIndex}
          onClose={() => setActiveColorIndex(null)}
          onNavigate={setActiveColorIndex}
        />
      )}

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
        <span>BruchezTech · Impressão 3D sob encomenda</span>
        <span>{phoneNumber}</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </footer>
    </main>
  );
}
