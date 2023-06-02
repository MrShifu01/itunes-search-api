import './index.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import { useSelector } from 'react-redux';
import MusicFav from './components/favourites/MusicFav'
import MoviesFav from './components/favourites/MoviesFav'
import PodcastsFav from './components/favourites/PodcastsFav'
import MusicVideosFav from './components/favourites/MusicVideosFav'
import AudioBooksFav from './components/favourites/AudioBooksFav'
import SoftwareFav from './components/favourites/SoftwareFav'
import TvShowsFav from './components/favourites/TvShowsFav'
import EbooksFav from './components/favourites/EbooksFav'


function App() {
  const page = useSelector((state) => state.page.page)
  return (
    <div>
      <Navigation/>

      {page === 'search' && <Search/>}
      {page === 'music' && <MusicFav/>}
      {page === 'movie' && <MoviesFav/>}
      {page === 'podcast' && <PodcastsFav/>}
      {page === 'musicVideo' && <MusicVideosFav/>}
      {page === 'audiobook' && <AudioBooksFav/>}
      {page === 'tvShow' && <TvShowsFav/>}
      {page === 'software' && <SoftwareFav/>}
      {page === 'ebook' && <EbooksFav/>}
      
    </div>
  );
}

export default App;
