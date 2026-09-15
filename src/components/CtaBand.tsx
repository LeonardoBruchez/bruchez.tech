import Reveal from "./Reveal";
import { waLink } from "../config";

export default function CtaBand() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <div>
              <h2>Tem uma ideia? Vamos imprimir ela.</h2>
              <p>
                Manda uma foto, um link ou só a descrição pelo WhatsApp — eu
                te respondo com orçamento e prazo.
              </p>
            </div>
            <a
              href={waLink(
                "Olá! Quero fazer um orçamento de uma peça em impressão 3D 🙂"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
