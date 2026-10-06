export default function Component4({ explorador }) {
  return <div className="explorer-card">
    <div className="card-header"><span>04 · CREDENCIAL DE EXPLORADOR</span><span className="verified">✓ VERIFICADO</span></div>
    <div className="identity"><div className="avatar" aria-hidden="true">{explorador.nombre.charAt(0)}<span>✦</span></div><div><p className="identity-caption">EL UNIVERSO TE DA LA BIENVENIDA</p><h3>{explorador.nombre}<span>↗</span></h3><p className="explorer-rank">Explorador · Generación 01</p></div></div>
    <dl className="identity-details"><div><dt>BASE TERRESTRE</dt><dd>{explorador.direccion}</dd></div><div><dt>CIUDAD DE ORIGEN</dt><dd>{explorador.ciudad}</dd></div></dl>
    <div className="card-bottom"><span>ÓRBITA ACADEMY / EX–001</span><span className="barcode" aria-hidden="true" /></div>
  </div>;
}
