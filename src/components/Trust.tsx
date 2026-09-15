import Reveal from "./Reveal";

const CARDS = [
  {
    icon: "◆",
    title: "Materiais certos para cada uso",
    text: "PLA para peças decorativas, PETG e TPU para peças que precisam de resistência ou flexibilidade — o material é escolhido pensando no seu uso, não no mais barato.",
  },
  {
    icon: "✓",
    title: "Conferência peça por peça",
    text: "Nada sai daqui sem passar pelos meus olhos: acabamento, encaixe e cor são revisados antes de qualquer entrega, mesmo em lotes grandes.",
  },
  {
    icon: "⏱",
    title: "Prazo combinado, prazo cumprido",
    text: "Você recebe uma data real na hora do orçamento, considerando o tempo de impressão de cada peça — sem promessa que eu não vou conseguir cumprir.",
  },
];

export default function Trust() {
  return (
    <section className="section" id="confianca">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Por que confiar</span>
            <h2>Impressão 3D não é só apertar "imprimir"</h2>
            <p>
              Cada pedido passa por escolha de material, ajuste de
              configurações e revisão manual antes de chegar até você.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="trust-grid">
            {CARDS.map((c) => (
              <div className="trust-card" key={c.title}>
                <div className="icon-box">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
