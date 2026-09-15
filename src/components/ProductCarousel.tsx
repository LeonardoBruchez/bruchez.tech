import PlaceholderMedia from "./PlaceholderMedia";
import type { Product } from "../data/products";

export type { Product } from "../data/products";

type Props = {
  title: string;
  items: Product[];
  reverse?: boolean;
  speed?: number; // segundos para uma volta completa
};

export default function ProductCarousel({
  title,
  items,
  reverse = false,
  speed = 32,
}: Props) {
  // Duplicamos a lista para criar o efeito de loop infinito sem "pulo".
  const looped = [...items, ...items];

  return (
    <div className="carousel-block">
      <div className="carousel-heading">
        <h3>{title}</h3>
        <span className="count">{items.length} peças em destaque</span>
      </div>
      <div className="marquee-viewport">
        <div
          className={`marquee-track ${reverse ? "reverse" : ""}`}
          style={{ ["--marquee-duration" as string]: `${speed}s` }}
        >
          {looped.map((p, i) => (
            <a className="product-card" href={`/peca/${p.slug}`} key={`${p.slug}-${i}`} aria-label={`Ver detalhes de ${p.name}`}>
              <div className="thumb">
                <PlaceholderMedia
                  file={p.media[0].file}
                  label={p.name}
                  kind={p.media[0].kind}
                />
              </div>
              <div className="info">
                <div className="name">{p.name}</div>
                <div className="meta">{p.meta}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
