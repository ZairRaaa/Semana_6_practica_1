import { useState } from 'react';

export default function Navigation() {
  const [active, setActive] = useState('misiones');
  return <nav className="navigation" aria-label="Navegación principal">
    <div className="nav-links">
      {[['misiones', '01', 'Misiones'], ['explorador', '02', 'Mi credencial'], ['bitacora', '03', 'Bitácora']].map(([id, number, label]) =>
        <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setActive(id)} aria-current={active === id ? 'location' : undefined}><span>{number}</span>{label}</a>
      )}
    </div>
    <span className="nav-note">ESTACIÓN TIERRA <span>↗</span></span>
  </nav>;
}
