import './index.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import { useSelector } from 'react-redux';
import MediaFav from './components/MediaFav'


import { removeTvShows } from './store/tvshows';
import { removeMusic } from './store/music';
import { removeMovies } from './store/movies';
import { removePodcasts } from './store/podcasts';
import { removeMusicVideos } from './store/musicvideos';
import { removeAudioBooks } from './store/audiobooks';
import { removeSoftware } from './store/software';
import { removeEbooks } from './store/ebooks';


function App() {
  const page = useSelector((state) => state.page.page)
  return (
    <div>
      <Navigation/>

      {page === 'search' && <Search/>}
      
      {page === 'music' && <MediaFav 
      mediaType="music" 
      removeMedia={removeMusic} />}
      
      {page === 'movie' && <MediaFav 
      mediaType="movies" 
      removeMedia={removeMovies} />}
      
      {page === 'podcast' && <MediaFav 
      mediaType="podcasts" 
      removeMedia={removePodcasts} />}
      
      {page === 'musicVideo' && <MediaFav 
      mediaType="musicvideos" 
      removeMedia={removeMusicVideos} />}
      
      {page === 'audiobook' && <MediaFav 
      mediaType="audiobooks" 
      removeMedia={removeAudioBooks} />}
      
      {page === 'tvShow' && <MediaFav 
      mediaType="tvshows" 
      removeMedia={removeTvShows} />}

      {page === 'software' && <MediaFav 
      mediaType="software" 
      removeMedia={removeSoftware} />}
      
      {page === 'ebook' && <MediaFav 
      mediaType="ebooks" 
      removeMedia={removeEbooks} />}
      
    </div>
  );
}

export default App;
