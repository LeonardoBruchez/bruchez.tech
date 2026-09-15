import { useState } from "react";
import {
  getProductBySlug,
  PRODUCTS,
  type Product,
  type ProductMedia,
} from "../data/products";
import { productWhatsAppLink } from "../config";
import ConfieInGod3DViewer from "./ConfieInGod3DViewer";

const mediaPath = (media: ProductMedia) =>
  `/media/${media.kind === "video" ? "videos" : "images"}/${media.file}`;

function Media({
  media,
  product,
  thumbnail = false,
}: {
  media: ProductMedia;
  product: Product;
  thumbnail?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className="product-media-fallback">
        Imagem em atualização
        <br />
        <small>{media.file}</small>
      </div>
    );
  if (media.kind === "video")
    return (
      <video
        className="product-media-asset"
        controls={!thumbnail}
        muted={thumbnail}
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
      >
        <source src={mediaPath(media)} type="video/mp4" />
      </video>
    );
  return (
    <img
      className="product-media-asset"
      src={mediaPath(media)}
      alt={media.alt ?? product.name}
      loading={thumbnail ? "lazy" : "eager"}
      onError={() => setFailed(true)}
    />
  );
}

export default function ProductDetails({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  const [selected, setSelected] = useState(0);
  if (!product)
    return (
      <main className="product-page">
        <div className="container product-not-found">
          <span className="eyebrow">Peça não encontrada</span>
          <h1>Esta peça não está no catálogo.</h1>
          <a href="/#categorias" className="btn btn-primary">
            Voltar ao catálogo
          </a>
        </div>
      </main>
    );
  const selectedMedia = product.media[selected] ?? product.media[0];
  const related = PRODUCTS.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  ).slice(0, 3);
  return (
    <main className="product-page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Navegação estrutural">
          <a href="/">Início</a>
          <span>/</span>
          <a href="/#categorias">{product.category}</a>
          <span>/</span>
          <strong>{product.name}</strong>
        </nav>
        <section className="product-layout">
          <div className="product-gallery">
            <div className="product-main-media">
              <Media media={selectedMedia} product={product} />
            </div>
            {product.media.length > 1 && (
              <div
                className="product-thumbnails"
                aria-label="Mídias do produto"
              >
                {product.media.map((media, index) => (
                  <button
                    type="button"
                    className={index === selected ? "active" : ""}
                    onClick={() => setSelected(index)}
                    aria-label={`Exibir ${media.alt ?? `mídia ${index + 1}`}`}
                    key={`${media.file}-${index}`}
                  >
                    <Media media={media} product={product} thumbnail />
                    {media.kind === "video" && (
                      <span className="video-mark">Vídeo</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="product-info">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="product-short">{product.shortDescription}</p>
            <p>{product.description}</p>
            <a
              className="btn btn-primary product-whatsapp"
              href={productWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp sobre essa peça
            </a>
            <section className="product-specifications">
              <h2>Especificações</h2>
              <dl>
                {Object.entries(product.specifications).map(
                  ([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ),
                )}
              </dl>
            </section>
          </div>
        </section>
        {product.viewer?.kind === "two-layer-text" && <ConfieInGod3DViewer modelPath={product.viewer.model} scale={product.viewer.scale} />}
        {related.length > 0 && (
          <section className="related-products">
            <div className="section-head">
              <span className="eyebrow">Da mesma categoria</span>
              <h2>Você também pode gostar</h2>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <a
                  className="related-card"
                  href={`/peca/${item.slug}`}
                  key={item.slug}
                >
                  <div className="related-image">
                    <Media media={item.media[0]} product={item} thumbnail />
                  </div>
                  <span>{item.name}</span>
                  <small>{item.meta}</small>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
