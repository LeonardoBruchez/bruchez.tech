import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Você envia a ideia",
    text: "Uma foto de referência, um link, um desenho ou só a descrição do que precisa — pelo WhatsApp mesmo.",
  },
  {
    n: "02",
    title: "Orçamento e prazo",
    text: "Eu avalio o modelo, material e tempo de impressão e te passo valor e prazo antes de começar qualquer coisa.",
  },
  {
    n: "03",
    title: "Impressão e conferência",
    text: "A peça é impressa e revisada aqui na bancada — acabamento, encaixe e cor conferidos antes de embalar.",
  },
  {
    n: "04",
    title: "Entrega combinada",
    text: "Retirada, entrega na Grande Florianópolis ou envio — você escolhe o que for melhor.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="processo">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Processo</span>
            <h2>Do pedido até a peça na sua mão</h2>
            <p>
              Sem letras miúdas: você acompanha cada etapa e sabe exatamente
              o que está pagando.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="index">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
