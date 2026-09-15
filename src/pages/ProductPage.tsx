import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product, products, whatsappLinkFor, formatPrice } from "../data";
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
    <>
      <header className="site-header scrolled">
        <div className="container">
          <a
            href="/impressao-3d"
            className="brand"
            onClick={makeLinkHandler(navigate, "/impressao-3d")}
          >
            <img className="brand-mark" src="/logo.jpeg" alt="Bruchez3D" />
            Bruchez.tech
            <span className="sub">IMPRESSÃO 3D</span>
          </a>

          <nav className="nav-links">
            <a href="/impressao-3d#projetos" onClick={makeLinkHandler(navigate, "/impressao-3d#projetos")}>
              Catálogo
            </a>
          </nav>

          <div className="header-actions">
            <a
              href={whatsappLinkFor(product)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: "10px 20px", fontSize: 13 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.27-3.42-.71-2.88-1.18-4.74-4.08-4.88-4.27-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.66.78 1.94.93.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
              </svg>
              Tenho interesse!
            </a>
          </div>
        </div>
      </header>

    <main className="page" style={{ paddingTop: 112 }}>
      <nav className="breadcrumb">
        <a href="/impressao-3d" onClick={makeLinkHandler(navigate, "/impressao-3d")}>
          Início
        </a>
        <span>/</span>
        <a href="/impressao-3d#projetos" onClick={makeLinkHandler(navigate, "/impressao-3d#projetos")}>
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
          <p className="product-detail__price">
            A partir de {formatPrice(product.priceFrom)}
          </p>
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
              href="/impressao-3d#projetos"
              onClick={makeLinkHandler(navigate, "/impressao-3d#projetos")}
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
    </>
  );
}
