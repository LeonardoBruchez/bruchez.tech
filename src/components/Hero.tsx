import { waLink, DEFAULT_WA_MESSAGE } from "../config";
import styles from "../styles/Hero.module.css";
import { useEffect, useState } from "react";

const TOTAL_LAYERS = 22;
const LAYER_MS = 90;

export default function Hero() {
  const [layer, setLayer] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (layer >= TOTAL_LAYERS) {
      const t = setTimeout(() => setDone(true), 300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLayer((l) => l + 1), LAYER_MS);
    return () => clearTimeout(t);
  }, [layer]);

  const progress = Math.min(100, Math.round((layer / TOTAL_LAYERS) * 100));
  const bedY = 300 - (layer / TOTAL_LAYERS) * 170;
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Florianópolis / SC · Sob encomenda</span>

          <h1 className="hero-title">
            <span className="print-line l1">Sua ideia, impressa</span>
            <span className="print-line l2">camada por camada.</span>
            <span className="print-line l3">Com precisão.</span>
          </h1>

          <div className="gantry-rail" aria-hidden="true" />

          <p className="lead">
            Bonecos e estátuas, capas e carcaças de bateria, peças para
            ferramentas e carros, chaveiros e projetos personalizados. Do
            arquivo 3D até a peça pronta na sua mão — com acabamento que você
            confere antes de fechar o pedido.
          </p>

          <div className="hero-actions">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Peça um orçamento agora
            </a>
            <a href="#categorias" className="btn btn-ghost">
              Ver o que eu faço
            </a>
          </div>

          <div className="hero-tags">
            <span className="hero-tag">PLA / PETG</span>
            <span className="hero-tag">Bambu Lab A1</span>
            <span className="hero-tag">Cores sob medida</span>
            <span className="hero-tag">Entrega Grande Florianópolis</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className={styles.printerBox} aria-hidden="true">
            <svg viewBox="0 0 320 320" className={styles.printerSvg}>
              <rect
                x="20"
                y="285"
                width="280"
                height="8"
                rx="2"
                className={styles.bedPlate}
              />
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={i}
                  x1={40 + i * 32}
                  y1="285"
                  x2={40 + i * 32}
                  y2="293"
                  className={styles.bedTick}
                />
              ))}
              <g>
                {Array.from({ length: layer }).map((_, i) => {
                  const t = i / TOTAL_LAYERS;
                  const width = 90 - Math.abs(t - 0.5) * 70;
                  const y = 283 - i * 7.7;
                  return (
                    <rect
                      key={i}
                      x={160 - width / 2}
                      y={y}
                      width={width}
                      height="7.5"
                      rx="1.5"
                      className={i % 2 === 0 ? styles.layerA : styles.layerB}
                    />
                  );
                })}
              </g>
              <g className={styles.nozzleMotion}>
                <g transform={`translate(160, ${bedY})`}>
                  <rect
                    x="-3"
                    y="-52"
                    width="6"
                    height="55"
                    className={styles.nozzleArm}
                  />
                  <path
                    d="M -14 -55 L 14 -55 L 6 -68 L -6 -68 Z"
                    className={styles.nozzleHead}
                  />
                  <circle cx="0" cy="-2" r="3" className={styles.nozzleTip} />
                </g>
              </g>
              <line
                x1="10"
                y1="20"
                x2="310"
                y2="20"
                className={styles.gantryRail}
              />
            </svg>
            <div className={`mono ${styles.progressRow}`}>
              <span>{done ? "impressão concluída" : "imprimindo..."}</span>
              <span>{progress}%</span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="float-badge">
            <span className="num">50+</span>
            <span className="label">
              peças de um único pedido, entregues no prazo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
