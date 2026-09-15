import Reveal from "./Reveal";
import ProductCarousel from "./ProductCarousel";
import { BONECOS, Chaveiros, DIVERSOS } from "../data/products";

export default function Categories() {
  return (
    <section className="section" id="categorias">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Catálogo</span>
            <h2>Faço muito mais do que você imagina</h2>
            <p>
              Cada categoria abaixo já saiu impressa da minha bancada — passe o
              mouse para pausar e ver com calma. Não achou o que precisa? Me
              chama no WhatsApp, praticamente qualquer peça pode ser modelada
              sob medida.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={80}>
        <ProductCarousel
          title="Chaveiros e acessórios"
          items={Chaveiros}
          reverse
          speed={26}
        />
      </Reveal>

      <Reveal>
        <ProductCarousel
          title="Bonecos & Estátuas"
          items={BONECOS}
          speed={30}
        />
      </Reveal>

      <Reveal delay={200}>
        <ProductCarousel title="DIVERSOS" items={DIVERSOS} speed={24} />
      </Reveal>
    </section>
  );
}
