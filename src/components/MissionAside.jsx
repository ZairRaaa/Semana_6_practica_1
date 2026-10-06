const missions = {
  Luna: { title: 'Volver a la Luna.', description: 'Explora cráteres, descubre los mares lunares y conoce nuestro satélite desde una nueva perspectiva.', duration: '3 días', level: 'Inicial', number: '01', fact: 'En la Luna, las huellas pueden permanecer durante millones de años: no hay viento que las borre.' },
  Marte: { title: 'Un nuevo mundo.', description: 'Recorre el planeta rojo y descubre qué nos cuentan sus valles y volcanes sobre el pasado del sistema solar.', duration: '7 días', level: 'Intermedio', number: '02', fact: 'Un día en Marte dura aproximadamente 24 horas y 37 minutos. Un poco más de tiempo para explorar.' },
  Saturno: { title: 'Entre los anillos.', description: 'Acércate al gigante de los anillos y descubre un fascinante sistema de hielo, lunas y nubes.', duration: '12 días', level: 'Avanzado', number: '03', fact: 'Los anillos de Saturno están formados principalmente por innumerables partículas de hielo.' },
};

export default function MissionAside({ destination }) {
  const mission = missions[destination];
  return <aside className="panel mission-aside" id="bitacora" aria-labelledby="log-title">
    <div className="aside-top"><span className="eyebrow">BITÁCORA DE VUELO</span><span aria-hidden="true">✳</span></div>
    <div aria-live="polite" aria-atomic="true">
      <div className="radar" aria-hidden="true"><div /><span>+</span><i /></div>
      <span className="mission-badge">MISIÓN {mission.number} · {destination.toUpperCase()}</span>
      <h2 id="log-title">{mission.title}</h2>
      <p className="muted aside-description">{mission.description}</p>
      <dl className="mission-details"><div><dt>Duración del recorrido</dt><dd>{mission.duration}</dd></div><div><dt>Nivel de exploración</dt><dd>{mission.level}</dd></div><div><dt>Estado</dt><dd className="available">Disponible <span>●</span></dd></div></dl>
    </div>
    <a className="button secondary" href="#explorador">Ver mi credencial <span>↗</span></a>
    <div className="fact"><span className="eyebrow">✧ ¿LO SABÍAS?</span><p>{mission.fact}</p></div>
    <div className="aside-bottom"><span className="signal">▂▄▆█</span> CONECTADOS CON LO EXTRAORDINARIO</div>
  </aside>;
}
