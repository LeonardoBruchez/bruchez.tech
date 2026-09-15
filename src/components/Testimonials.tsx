import Reveal from "./Reveal";

// Placeholders — troque pelos comentários reais dos seus clientes
// (print de conversa do WhatsApp, avaliação do Mercado Livre/Shopee, etc.)
const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "Escreva aqui um comentário real de cliente sobre prazo, acabamento ou atendimento.",
    who: "Nome do cliente · Produto comprado",
  },
  {
    quote:
      "Escreva aqui outro comentário real, por exemplo sobre um pedido em lote ou peça personalizada.",
    who: "Nome do cliente · Produto comprado",
  },
  {
    quote:
      "Escreva aqui um terceiro comentário real, por exemplo destacando a qualidade do material.",
    who: "Nome do cliente · Produto comprado",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Depoimentos</span>
            <h2>O que dizem os clientes</h2>
            <p>
              Espaço pronto para os seus depoimentos reais — troque os textos
              abaixo por avaliações de clientes (WhatsApp, Mercado Livre ou
              Shopee).
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="testimonial-track">
            {PLACEHOLDER_REVIEWS.map((r, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="quote">"{r.quote}"</p>
                <div className="who">{r.who}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
