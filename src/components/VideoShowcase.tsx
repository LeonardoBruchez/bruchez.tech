import Reveal from "./Reveal";
import PlaceholderMedia from "./PlaceholderMedia";

const VIDEOS = [
  {
    file: "timelapse-impressao.mp4",
    name: "Timelapse de impressão",
    meta: "Do primeiro filamento à peça pronta",
  },
  {
    file: "chaveiros-labios-50un.mp4",
    name: "Embalagem do lote de 50",
    meta: "Chaveiros de lábios, um a um",
  },
  {
    file: "bastidores-bancada.mp4",
    name: "Bastidores da bancada",
    meta: "Como funciona o dia a dia de produção",
  },
];

export default function VideoShowcase() {
  return (
    <section className="section" id="videos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Vídeos</span>
            <h2>Veja o processo, não só o resultado</h2>
            <p>
              Timelapses de impressão e vídeos reais de embalagem — a melhor
              forma de mostrar que existe cuidado por trás de cada peça.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="video-grid">
            {VIDEOS.map((v) => (
              <div className="video-card" key={v.file}>
                <div className="frame">
                  <PlaceholderMedia
                    file={v.file}
                    label={v.name}
                    icon="🎬"
                    kind="video"
                  />
                </div>
                <div className="info">
                  <div className="name">{v.name}</div>
                  <div className="meta">{v.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
