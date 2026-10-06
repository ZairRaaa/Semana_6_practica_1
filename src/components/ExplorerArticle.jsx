import Component1 from './explorer/Component1.jsx';

export default function ExplorerArticle() {
  return <article className="panel explorer-article" id="explorador">
    <div className="section-heading"><p className="eyebrow">LA TRIPULACIÓN EMPIEZA CONTIGO</p><span className="section-number">02 — EXPLORADOR</span></div>
    <h2>Tu lugar en el universo.</h2>
    <p className="muted">Cada gran viaje comienza con alguien que se atreve.</p>
    <Component1 />
  </article>;
}
