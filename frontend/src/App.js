import React from 'react';
import './index.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import { useSelector } from 'react-redux';
import MediaFav from './components/MediaFav';

import {
  removeTvShows,
  removeMusic,
  removeMovies,
  removePodcasts,
  removeMusicVideos,
  removeAudioBooks,
  removeSoftware,
  removeEbooks,
} from './store/mediatype';
import Footer from './components/Footer';

function App() {
  const page = useSelector((state) => state.page.page);

  return (
    <div className="app-wrapper">
      <div className="content-wrapper">
        <Navigation />

        {page === 'search' && <Search />}

        {page === 'music' && <MediaFav mediaType="music" removeMedia={removeMusic} />}

        {page === 'movie' && <MediaFav mediaType="movies" removeMedia={removeMovies} />}

        {page === 'podcast' && <MediaFav mediaType="podcasts" removeMedia={removePodcasts} />}

        {page === 'musicVideo' && <MediaFav mediaType="musicvideos" removeMedia={removeMusicVideos} />}

        {page === 'audiobook' && <MediaFav mediaType="audiobooks" removeMedia={removeAudioBooks} />}

        {page === 'tvShow' && <MediaFav mediaType="tvshows" removeMedia={removeTvShows} />}

        {page === 'software' && <MediaFav mediaType="software" removeMedia={removeSoftware} />}

        {page === 'ebook' && <MediaFav mediaType="ebooks" removeMedia={removeEbooks} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
