export default function HeroSection() {
  return <section className="hero" aria-labelledby="hero-title" id="inicio">
    <div className="brand-row">
      <a className="brand" href="#inicio" aria-label="Órbita, inicio"><span className="brand-symbol" aria-hidden="true">◎</span> órbita<span className="brand-dot">.</span></a>
      <span className="brand-caption">ACADEMIA DE EXPLORACIÓN ESPACIAL</span>
      <span className="live-badge"><i /> SISTEMAS EN LÍNEA</span>
    </div>
    <div className="hero-copy">
      <p className="eyebrow"><span /> TU PRÓXIMO GRAN SALTO</p>
      <h1 id="hero-title">La curiosidad no<br />tiene <em>gravedad.</em></h1>
      <p>Hay un universo por descubrir. Aprende, conecta y<br className="desktop-break" /> comienza tu viaje más allá de lo conocido.</p>
      <a className="button primary" href="#misiones">Explorar misiones <span aria-hidden="true">↗</span></a>
      <div className="hero-footnote"><span className="tiny-star">✦</span> Para mentes que nunca dejan de mirar arriba.</div>
    </div>
    <div className="space-art" role="img" aria-label="Planeta violeta rodeado por anillos orbitales y estrellas">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="planet" /><div className="moon" />
      <span className="art-star star-one">✦</span><span className="art-star star-two">+</span>
      <span className="planet-label">ÓRBITA 001 <span>·</span> EL INICIO DE TODO</span>
      <span className="coordinate">RA 23h 18m · DEC +61°</span>
    </div>
    <span className="hero-index">01 / EL UNIVERSO TE ESPERA</span>
  </section>;
}
