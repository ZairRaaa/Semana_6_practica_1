import { useState } from 'react';
import HeroSection from './components/HeroSection.jsx';
import Navigation from './components/Navigation.jsx';
import MainSection from './components/MainSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [destination, setDestination] = useState('Luna');
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <div className="site-shell">
      <HeroSection />
      <Navigation />
      <MainSection destination={destination} onDestinationChange={setDestination} />
      <Footer />
    </div>
  </>;
}
