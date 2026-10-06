export default function MissionArticle({ destination, onDestinationChange }) {
  return <article className="panel mission-article" id="misiones">
    <div className="section-heading"><p className="eyebrow">ELIGE TU HORIZONTE</p><span className="section-number">01 — MISIONES</span></div>
    <h2>Todo comienza con un destino.</h2>
    <p className="muted">Pequeños pasos. Descubrimientos extraordinarios.</p>
    <div className="destinations" role="group" aria-label="Seleccionar destino de misión">
      {[['Luna', '01', 'A un salto de casa', '384.400 km'], ['Marte', '02', 'El siguiente capítulo', '225 M km'], ['Saturno', '03', 'Más allá de los anillos', '1.400 M km']].map(([name, number, tagline, distance]) =>
        <button key={name} className={`destination ${name.toLowerCase()} ${destination === name ? 'selected' : ''}`} onClick={() => onDestinationChange(name)} aria-pressed={destination === name}>
          <span className="destination-top">MISIÓN {number}<span>{destination === name ? '●' : '↗'}</span></span>
          <span className="mini-world" aria-hidden="true" />
          <strong>{name}</strong><span className="tagline">{tagline}</span><span className="distance">{distance} <span>↗</span></span>
        </button>
      )}
    </div>
    <p className="panel-note"><span>✧</span> Selecciona un destino y descubre tu próxima misión en la bitácora.</p>
  </article>;
}
