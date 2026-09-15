const STATS = [
  { value: "50", unit: "un", caption: "chaveiros no último lote entregue" },
  { value: "5+", unit: "", caption: "categorias de produtos diferentes" },
  { value: "0.16", unit: "mm", caption: "precisão de camada padrão" },
  { value: "100", unit: "%", caption: "peças conferidas antes do envio" },
];

export default function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="container">
        {STATS.map((s) => (
          <div className="stat-cell" key={s.caption}>
            <div className="value">
              {s.value}
              {s.unit && <span className="unit"> {s.unit}</span>}
            </div>
            <div className="caption">{s.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
