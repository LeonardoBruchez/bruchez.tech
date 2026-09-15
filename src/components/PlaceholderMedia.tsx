import { useEffect, useState } from "react";

type Props = {
  file: string;
  label: string;
  icon?: string;
  kind?: "image" | "video";
};

/**
 * Mostra a mídia real quando o arquivo existe e cai para um bloco de apoio
 * quando a imagem/vídeo ainda não foi colocado em /public/media.
 */
export default function PlaceholderMedia({
  file,
  label,
  icon = "📷",
  kind = "image",
}: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [file, kind]);

  if (failed) {
    return (
      <div className="placeholder-media">
        <span className="ph-icon">{icon}</span>
        <span className="ph-label">{label}</span>
        <span className="ph-file">{file}</span>
      </div>
    );
  }

  if (kind === "video") {
    return (
      <div className="placeholder-media media-shell">
        <video
          className="media-asset"
          controls
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
        >
          <source src={`/media/videos/${file}`} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div className="placeholder-media media-shell">
      <img
        className="media-asset"
        src={`/media/images/${file}`}
        alt={label}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
