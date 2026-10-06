import MissionArticle from './MissionArticle.jsx';
import ExplorerArticle from './ExplorerArticle.jsx';
import MissionAside from './MissionAside.jsx';

export default function MainSection({ destination, onDestinationChange }) {
  return <section className="main-section" id="contenido" aria-label="Centro de exploración">
    <div className="article-column">
      <MissionArticle destination={destination} onDestinationChange={onDestinationChange} />
      <ExplorerArticle />
    </div>
    <MissionAside destination={destination} />
  </section>;
}
