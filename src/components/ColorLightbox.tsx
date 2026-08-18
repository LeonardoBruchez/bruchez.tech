import { useEffect } from "react";
import { colorWhatsappLink, filamentColors } from "../data";

type ColorLightboxProps = {
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ColorLightbox({
  activeIndex,
  onClose,
  onNavigate,
}: ColorLightboxProps) {
  const total = filamentColors.length;
  const color = filamentColors[activeIndex];

  const goPrev = () => onNavigate((activeIndex - 1 + total) % total);
  const goNext = () => onNavigate((activeIndex + 1) % total);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div
      className="color-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto da cor ${color.name}`}
      onClick={onClose}
    >
      <button
        className="color-lightbox__close"
        onClick={onClose}
        aria-label="Fechar"
      >
        ✕
      </button>

      <button
        className="color-lightbox__arrow color-lightbox__arrow--prev"
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
        aria-label="Cor anterior"
      >
        ‹
      </button>

      <div
        className="color-lightbox__content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={`/products/filamentos/${color.image}`}
          alt={`Filamento na cor ${color.name}`}
        />
        <div className="color-lightbox__info">
          <h3>{color.name}</h3>
          <span>
            {activeIndex + 1} de {total}
          </span>
          <a
            className="button button--whatsapp"
            href={colorWhatsappLink(color.name)}
            target="_blank"
            rel="noreferrer"
          >
            Quero um produto com esta cor
          </a>
        </div>
      </div>

      <button
        className="color-lightbox__arrow color-lightbox__arrow--next"
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
        aria-label="Próxima cor"
      >
        ›
      </button>
    </div>
  );
}
