import type { Product } from "../data";
import { makeLinkHandler } from "../router";

type ProductCardProps = {
  product: Product;
  navigate: (to: string) => void;
};

export default function ProductCard({ product, navigate }: ProductCardProps) {
  const href = `/produto/${product.slug}`;

  return (
    <a
      href={href}
      className="product-card"
      onClick={makeLinkHandler(navigate, href)}
    >
      <div className="product-card__media">
        <img
          src={`/products/${product.images[0]}`}
          alt={product.name}
          loading="lazy"
          className="product-card__img product-card__img--front"
        />
        {product.images[1] && (
          <img
            src={`/products/${product.images[1]}`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="product-card__img product-card__img--back"
          />
        )}
        {product.images.length > 1 && (
          <span className="product-card__count">
            {product.images.length} fotos
          </span>
        )}
        <span className="product-card__category">{product.category}</span>
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <span className="product-card__cta">
          Ver detalhes
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
