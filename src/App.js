import Root from './index';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';


function App() {
  const galleries = harvardArt;
  // console.log(galleries);
  return (
    <GalleryNavigation harvardArt={harvardArt} />
  );
}

export default App;
