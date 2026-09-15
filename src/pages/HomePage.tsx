import { useEffect, useMemo, useState } from "react";
import {
  categories,
  faq,
  filamentColors,
  genericWhatsappLink,
  phoneNumber,
  products,
  whatsappLinkForColor,
} from "../data";
import ProductCard from "../components/ProductCard";
import { makeLinkHandler } from "../router";
import heroStyles from "../styles/Hero.module.css";

const TOTAL_LAYERS = 22;

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.96 9.96 0 0 0-8.62 14.96L2 22l5.2-1.36A9.96 9.96 0 1 0 12.04 2Zm5.83 14.24c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.02.27-3.42-.71-2.88-1.18-4.74-4.08-4.88-4.27-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.38 0 .55.01.72.51.24.58.82 2 .89 2.14.07.14.12.31.02.5-.16.3-.47.64-.7.9-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.66.78 1.94.93.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

function PrinterVisual() {
  const [layer, setLayer] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setLayer((value) => (value >= TOTAL_LAYERS ? 0 : value + 1)),
      110,
    );
    return () => window.clearInterval(timer);
  }, []);
  const progress = Math.round((layer / TOTAL_LAYERS) * 100);
  const bedY = 300 - (layer / TOTAL_LAYERS) * 170;
  return (
    <div
      className={heroStyles.printerBox}
      aria-label={`Simulação de impressão 3D: ${progress}%`}
    >
      <div className="printer-topline">
        <span>BRUCHEZ.OS</span>
        <span className="status-dot">ONLINE</span>
      </div>
      <svg
        viewBox="0 0 320 320"
        className={heroStyles.printerSvg}
        aria-hidden="true"
      >
        <rect
          x="20"
          y="285"
          width="280"
          height="8"
          rx="2"
          className={heroStyles.bedPlate}
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={40 + i * 32}
            y1="285"
            x2={40 + i * 32}
            y2="293"
            className={heroStyles.bedTick}
          />
        ))}
        {Array.from({ length: layer }).map((_, i) => {
          const t = i / TOTAL_LAYERS;
          const width = 90 - Math.abs(t - 0.5) * 70;
          return (
            <rect
              key={i}
              x={160 - width / 2}
              y={283 - i * 7.7}
              width={width}
              height="7.5"
              rx="1.5"
              className={i % 2 ? heroStyles.layerA : heroStyles.layerB}
            />
          );
        })}
        <g
          className={heroStyles.nozzleMotion}
          transform={`translate(160, ${bedY})`}
        >
          <rect
            x="-3"
            y="-52"
            width="6"
            height="55"
            className={heroStyles.nozzleArm}
          />
          <path
            d="M -14 -55 L 14 -55 L 6 -68 L -6 -68 Z"
            className={heroStyles.nozzleHead}
          />
          <circle cx="0" cy="-2" r="3" className={heroStyles.nozzleTip} />
        </g>
        <line
          x1="10"
          y1="20"
          x2="310"
          y2="20"
          className={heroStyles.gantryRail}
        />
      </svg>
      <div className={`mono ${heroStyles.progressRow}`}>
        <span>
          {progress === 100 ? "impressão concluída" : "imprimindo projeto..."}
        </span>
        <span>{progress}%</span>
      </div>
      <div className={heroStyles.progressTrack}>
        <div
          className={heroStyles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

type Props = { navigate: (to: string) => void };

export default function HomePage({ navigate }: Props) {
  const [category, setCategory] = useState<string>("Todos");
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 16);
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    document.body.style.overflow = activeColor === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeColor]);
  const shown = useMemo(
    () =>
      category === "Todos"
        ? products
        : products.filter((p) => p.category === category),
    [category],
  );

  return (
    <>
      <header
        className={`site-header studio-header${scrolled ? " scrolled" : ""}`}
      >
        <div className="container">
          <a
            href="/"
            className="brand"
            onClick={makeLinkHandler(navigate, "/")}
          >
            <img className="brand-mark" src="/logo.jpeg" alt="" />
            <span>
              Bruchez<span className="brand-accent">.tech</span>
            </span>
            <span className="sub">IMPRESSÃO 3D</span>
          </a>
          <nav className={`nav-links${menu ? " is-open" : ""}`}>
            <a href="#projetos" onClick={() => setMenu(false)}>
              Projetos
            </a>
            <a href="#processo" onClick={() => setMenu(false)}>
              Processo
            </a>
            <a href="#materiais" onClick={() => setMenu(false)}>
              Materiais
            </a>
            <a href="#duvidas" onClick={() => setMenu(false)}>
              Dúvidas
            </a>
          </nav>
          <div className="header-actions">
            <a
              href={genericWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp header-whatsapp"
            >
              <WhatsAppIcon /> Orçamento
            </a>
            <button
              className="nav-toggle"
              aria-label="Abrir menu"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero studio-hero" id="inicio">
          <div className="hero-grid" />
          <div className="hero-orb" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">
                Florianópolis / SC · Projetos sob encomenda
              </span>
              <h1>
                Da sua ideia
                <br />
                para o <em>mundo real.</em>
              </h1>
              <p className="lead">
                Impressão 3D para protótipos, peças funcionais, presentes e
                projetos personalizados — produzidos camada por camada, com
                atenção a cada detalhe.
              </p>
              <div className="hero-actions">
                <a
                  href={genericWhatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Tirar minha ideia do papel <span>↗</span>
                </a>
                <a href="#projetos" className="btn btn-ghost">
                  Explorar projetos
                </a>
              </div>
              <div className="hero-proof">
                <div>
                  <strong>
                    {products.length}
                    <small>+</small>
                  </strong>
                  <span>modelos disponíveis</span>
                </div>
                <div>
                  <strong>
                    0,2<small>mm</small>
                  </strong>
                  <span>precisão de camada</span>
                </div>
                <div>
                  <strong>
                    100<small>%</small>
                  </strong>
                  <span>feito sob demanda</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <PrinterVisual />
              <div className="visual-note">
                <span>●</span> Impressão em andamento
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#projetos">
            <span>SCROLL</span>
            <i />
          </a>
        </section>

        <section className="ticker" aria-hidden="true">
          <div>
            {[
              "PROTOTIPAGEM",
              "PEÇAS FUNCIONAIS",
              "DECORAÇÃO",
              "PERSONALIZADOS",
              "MODELAGEM 3D",
              "PLA & PETG",
              "PROTOTIPAGEM",
            ].map((x, i) => (
              <span key={`${x}-${i}`}>
                {x}
                <b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section className="studio-section projects-section" id="projetos">
          <div className="container">
            <SectionTop
              number="01"
              label="PROJETOS"
              title={
                <>
                  Impressões que já
                  <br />
                  <em>ganharam forma.</em>
                </>
              }
              text="Conheça algumas possibilidades e escolha um modelo para personalizar. Precisa de algo único? Envie sua ideia."
            />
            <div className="category-filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={
                    c === category ? "category-chip is-active" : "category-chip"
                  }
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="product-grid">
              {shown.map((p) => (
                <ProductCard key={p.slug} product={p} navigate={navigate} />
              ))}
            </div>
          </div>
        </section>

        <section className="studio-section process-section" id="processo">
          <div className="container">
            <SectionTop
              number="02"
              label="PROCESSO"
              title={
                <>
                  Você imagina.
                  <br />
                  <em>A gente materializa.</em>
                </>
              }
              text="Um processo claro, do primeiro contato até a peça pronta para uso."
            />
            <div className="process-grid">
              {[
                [
                  "⌁",
                  "Conte a sua ideia",
                  "Envie uma foto, desenho, arquivo 3D ou explique o que precisa.",
                ],
                [
                  "◇",
                  "Análise e orçamento",
                  "Avaliamos medidas, material, cor, resistência e acabamento.",
                ],
                [
                  "≋",
                  "Impressão precisa",
                  "Seu projeto ganha forma com cuidado em cada camada.",
                ],
                [
                  "✓",
                  "Pronto para você",
                  "Revisamos a peça e combinamos retirada ou envio.",
                ],
              ].map((step, i) => (
                <article key={step[1]}>
                  <span>0{i + 1}</span>
                  <div className="process-icon">{step[0]}</div>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-section materials-section" id="materiais">
          <div className="container materials-layout">
            <div className="materials-copy">
              <p className="section-kicker">03 / MATERIAIS</p>
              <h2>
                A cor também faz
                <br />
                parte do <em>projeto.</em>
              </h2>
              <p>
                Trabalhamos principalmente com PLA e PETG. Clique para ver a cor
                real do filamento.
              </p>
              <div className="material-specs">
                <span>
                  <b>PLA</b> detalhamento e acabamento
                </span>
                <span>
                  <b>PETG</b> resistência e durabilidade
                </span>
              </div>
            </div>
            <div className="filament-grid">
              {filamentColors.map((color, i) => (
                <button
                  key={color.name}
                  className="filament-item"
                  onClick={() => setActiveColor(i)}
                >
                  <img
                    src={`/filamentos/${color.image}`}
                    alt={`Filamento ${color.name}`}
                    loading="lazy"
                  />
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-section faq-section" id="duvidas">
          <div className="container faq-layout">
            <div>
              <p className="section-kicker">04 / DÚVIDAS</p>
              <h2>
                Perguntas
                <br />
                <em>frequentes.</em>
              </h2>
              <p className="faq-intro">
                Não encontrou a resposta? Chame no WhatsApp e conte o que
                precisa.
              </p>
            </div>
            <div className="faq-list">
              {faq.map((item, i) => (
                <details key={item.question} className="faq-item">
                  <summary>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {item.question}
                    <i>+</i>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-band">
          <div className="contact-grid" />
          <div className="container">
            <p className="section-kicker">SEU PROJETO COMEÇA AQUI</p>
            <h2>
              Tem uma ideia?
              <br />
              <em>Vamos imprimir.</em>
            </h2>
            <p>
              Conte o que você precisa e receba uma avaliação personalizada.
            </p>
            <a
              href={genericWhatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon /> Conversar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="studio-footer">
        <div className="container">
          <div className="footer-brand">
            <a href="#inicio" className="brand">
              <img className="brand-mark" src="/logo.jpeg" alt="" />
              Bruchez<span className="brand-accent">3D</span>
            </a>
            <p>Ideias reais, camada por camada.</p>
          </div>
          <div>
            <span>CONTATO</span>
            <a href={genericWhatsappLink} target="_blank" rel="noreferrer">
              {phoneNumber}
            </a>
            <small>Florianópolis · SC</small>
          </div>
          <div>
            <span>NAVEGAÇÃO</span>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Processo</a>
            <a href="#materiais">Materiais</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Bruchez Tech</span>
          <br />
        </div>
      </footer>

      {activeColor !== null && (
        <div
          className="color-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveColor(null)}
        >
          <button
            className="color-close"
            onClick={() => setActiveColor(null)}
            aria-label="Fechar"
          >
            ×
          </button>
          <div className="color-card" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/filamentos/${filamentColors[activeColor].image}`}
              alt={`Filamento ${filamentColors[activeColor].name}`}
            />
            <div>
              <span className="section-kicker">COR SELECIONADA</span>
              <h3>{filamentColors[activeColor].name}</h3>
              <a
                href={whatsappLinkForColor(filamentColors[activeColor].name)}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon /> Quero esta cor
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SectionTop({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <div className="section-top">
      <div>
        <p className="section-kicker">
          {number} / {label}
        </p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
