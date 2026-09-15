import { useEffect, useState } from "react";
import { SITE, waLink, DEFAULT_WA_MESSAGE } from "../config";

const NAV = [
  { href: "/#categorias", label: "Categorias" },
  { href: "/#processo", label: "Como funciona" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#videos", label: "Vídeos" },
  { href: "/#depoimentos", label: "Depoimentos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="/" className="brand">
          <span className="dot" />
          {SITE.brand}
          <span style={{ color: "var(--nozzle)" }}>{SITE.brandSuffix}</span>
          <span className="sub">IMPRESSÃO 3D</span>
        </a>

        <nav className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            Falar no WhatsApp
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            paddingTop: 20,
          }}
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
