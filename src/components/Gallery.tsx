import Reveal from "./Reveal";
import blueSneakerKeychain from "../assets/Projetos/Tenis.jpg";
import redLipsKeychain from "../assets/Projetos/keychanLabio.jpg";
import penStand from "../assets/Projetos/portaCaneta.jpg";
import detailedCar from "../assets/Projetos/A380NaMesa.jpg";
import wolfBlack from "../assets/Projetos/KatanaPretaEscondida.png";
import blackBatteryPart from "../assets/Projetos/QrCode.jpg";
import SensoryToy from "../assets/Projetos/SensoryToy.jpg";
import BatteryDewalt from "../assets/Projetos/capaBateriaDewalt.jpg";
import keychainYeshua from "../assets/Projetos/keychanYeshua.jpg";

const TILES = [
  {
    src: detailedCar,
    tag: "Miniatura Airbus a380",
    cls: "big",
    objectPosition: "50% 77%",
  },
  { src: penStand, tag: "Porta canetas", cls: "tall" },
  { src: redLipsKeychain, tag: "Chaveiro lábios", cls: "" },
  { src: blueSneakerKeychain, tag: "Chaveiro tênis", cls: "tall" },
  { src: wolfBlack, tag: "Katana de brinquedo", cls: "tall" },
  { src: blackBatteryPart, tag: "Suporte QR Code", cls: "" },
  { src: BatteryDewalt, tag: "Capa de Bateria Dewalt", cls: "" },
  { src: SensoryToy, tag: "Brinquedo sensorial", cls: "tall" },
  { src: keychainYeshua, tag: "Chaveiro cristão", cls: "big" },
];

export default function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Galeria</span>
            <h2>Amostras reais, e personalizadas</h2>
            <p>
              Uma amostra do que já saiu da impressora. Estas são fotos reais da
              pasta Projetos, já prontas para aparecer no site.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="gallery-grid">
            {TILES.map((t) => (
              <div className={`gallery-item ${t.cls}`} key={t.tag}>
                <img
                  src={t.src}
                  alt={t.tag}
                  loading="lazy"
                  style={
                    t.objectPosition
                      ? { objectPosition: t.objectPosition }
                      : undefined
                  }
                />
                <span className="gallery-tag">{t.tag}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
