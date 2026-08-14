import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product, products, whatsappLinkFor } from "../data";
import { makeLinkHandler } from "../router";

type ProductPageProps = {
  product: Product;
  navigate: (to: string) => void;
};

export default function ProductPage({ product, navigate }: ProductPageProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [product.slug]);

  const related = products
    .filter(
      (item) => item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 3);

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
          <a href="/#catalogo" onClick={makeLinkHandler(navigate, "/#catalogo")}>
            Catálogo
          </a>
        </nav>
        <a
          className="button button--whatsapp"
          href={whatsappLinkFor(product)}
          target="_blank"
          rel="noreferrer"
        >
          Tenho interesse!
        </a>
      </header>

      <nav className="breadcrumb">
        <a href="/" onClick={makeLinkHandler(navigate, "/")}>
          Início
        </a>
        <span>/</span>
        <a href="/#catalogo" onClick={makeLinkHandler(navigate, "/#catalogo")}>
          Catálogo
        </a>
        <span>/</span>
        <strong>{product.name}</strong>
      </nav>

      <section className="product-detail">
        <div className="product-detail__gallery">
          <div className="product-detail__main">
            <img
              src={`/products/${product.images[activeImage]}`}
              alt={product.name}
            />
          </div>
          {product.images.length > 1 && (
            <div className="product-detail__thumbs">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  className={
                    index === activeImage
                      ? "product-detail__thumb is-active"
                      : "product-detail__thumb"
                  }
                  onClick={() => setActiveImage(index)}
                  aria-label={`Ver foto ${index + 1} de ${product.name}`}
                >
                  <img src={`/products/${image}`} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-detail__info">
          <span className="pill">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-detail__tagline">{product.tagline}</p>
          <p className="product-detail__description">{product.description}</p>

          <ul className="product-detail__features">
            {product.features.map((feature) => (
              <li key={feature}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <div className="product-detail__actions">
            <a
              className="button button--whatsapp button--lg"
              href={whatsappLinkFor(product)}
              target="_blank"
              rel="noreferrer"
            >
              Tenho interesse!
            </a>
            <a
              className="button button--ghost"
              href="/#catalogo"
              onClick={makeLinkHandler(navigate, "/#catalogo")}
            >
              Ver outras peças
            </a>
          </div>
          <p className="product-detail__note">
            Ao clicar, você vai direto para o WhatsApp com a peça já
            identificada na mensagem — é só combinar cor, prazo e entrega.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section__heading">
            <p className="eyebrow">Você também pode gostar</p>
            <h2>Outras peças de {product.category.toLowerCase()}</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} navigate={navigate} />
            ))}
          </div>
        </section>
      )}

      <footer className="footer">
        <span>Bruchez 3D · Impressão 3D sob encomenda</span>
        <a href="/" onClick={makeLinkHandler(navigate, "/")}>
          Voltar para o início
        </a>
      </footer>
    </main>
  );
}
