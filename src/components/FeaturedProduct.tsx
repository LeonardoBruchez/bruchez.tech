import Reveal from "./Reveal";
import { waLink } from "../config";
import redLipsKeychain from "../assets/Projetos/produçãoLabio.jpg";

export default function FeaturedProduct() {
  return (
    <section className="featured section" id="ultimo-pedido">
      <div className="container featured-grid">
        <Reveal>
          <div className="featured-media">
            <div className="featured-image-frame">
              <span className="play-chip">FOTO REAL · ACABAMENTO</span>
              <img
                src={redLipsKeychain}
                alt="Chaveiro de lábios vermelhos em close"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="featured-copy">
            <span className="eyebrow">Último pedido entregue</span>
            <h2>50 chaveiros de lábios vermelhos, um a um, sem erro.</h2>
            <p>
              Esse foi o último lote que saiu daqui: 50 unidades idênticas, com
              o mesmo acabamento em brilho e a mesma cor do início ao fim —
              porque pedido em lote não pode ter peça "mais ou menos boa".
            </p>
            <p>
              Visão real da nossa bancada em produção: 12 unidades sendo
              impressas simultaneamente com alinhamento perfeito e camadas
              imperceptíveis. Mostramos o processo de perto para que você
              confira a vivacidade da cor, a precisão das bordas e a
              consistência técnica antes de fechar sua encomenda de grande
              volume.
            </p>

            <ul className="featured-checklist">
              <li>
                <span className="ck">✓</span>
                Consistência garantida entre todas as peças do lote
              </li>
              <li>
                <span className="ck">✓</span>
                Acabamento conferido peça por peça antes da embalagem
              </li>
              <li>
                <span className="ck">✓</span>
                Prazo combinado e cumprido — do orçamento à entrega
              </li>
            </ul>

            <a
              href={waLink(
                "Olá! Vi o vídeo dos 50 chaveiros de lábios e quero fazer um pedido em lote também 🙂",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero um pedido em lote assim
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
