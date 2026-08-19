import { useEffect, useState } from "react";
import { makeLinkHandler } from "../router";

export type HeaderLink = {
  label: string;
  href: string;
  onClick?: (event: { preventDefault: () => void }) => void;
};

type HeaderProps = {
  navigate: (to: string) => void;
  links?: HeaderLink[];
  ctaLabel: string;
  ctaHref: string;
};

const WHATSAPP_ICON_PATH_1 =
  "M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z";
const WHATSAPP_ICON_PATH_2 =
  "M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.5 3.63 1.44 5.15L2 22l4.98-1.4A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.5-4.55-1.36l-.33-.2-3.02.85.84-2.95-.22-.34a8.08 8.08 0 0 1-1.24-4.1c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.47-3.64 8.1-8.11 8.1Z";

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={WHATSAPP_ICON_PATH_1} />
      <path d={WHATSAPP_ICON_PATH_2} />
    </svg>
  );
}

export default function Header({ navigate, links = [], ctaLabel, ctaHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="site-header__pill">
        <a
          href="/"
          className="site-header__brand"
          onClick={makeLinkHandler(navigate, "/")}
        >
          <span className="site-header__logo">
            <span className="site-header__logo-glow" aria-hidden="true" />
            <img src="/logo.jpeg" alt="BruchezTech" />
          </span>
          <span className="site-header__brand-text">
            Bruchez<span className="site-header__brand-accent">Tech</span>
          </span>
        </a>

        {links.length > 0 && (
          <nav className="site-header__links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="site-header__link"
                onClick={link.onClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <a
          className="site-header__cta"
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          aria-label={ctaLabel}
        >
          <span className="site-header__cta-ring" aria-hidden="true" />
          <WhatsAppIcon size={18} />
          <span className="site-header__cta-label">{ctaLabel}</span>
        </a>

        {links.length > 0 && (
          <button
            type="button"
            className={
              menuOpen
                ? "site-header__burger is-open"
                : "site-header__burger"
            }
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        )}
      </div>

      {links.length > 0 && (
        <div className={menuOpen ? "site-header__panel is-open" : "site-header__panel"}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="site-header__panel-link"
              onClick={(event) => {
                link.onClick?.(event);
                closeMenu();
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className="site-header__cta site-header__cta--panel"
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <WhatsAppIcon size={17} />
            {ctaLabel}
          </a>
        </div>
      )}
    </header>
  );
}
