import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeMedia } from '../store/media';
import { useEffect } from 'react';
import { resetResults } from '../store/results';
import MediaSearch from './MediaSearch';
import AllSearch from './AllSearch';
import { 
  addTvShows,
  addMusic,
  addAudioBooks,
  addMusicVideos,
  addEbooks,
  addPodcasts,
  addSoftware,
  addMovies
} from '../store/mediatype';

function Search() {
  // Retrieve the media value from the Redux store
  const media = useSelector((state) => state.media.media);
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset the search results when the media value changes
    dispatch(resetResults());
  }, [media]);

  // Event handlers for adding media to the Redux store
  const handleAddTvShows = (data) => {
    dispatch(addTvShows(data));
  };
  const handleAddMusic = (data) => {
    dispatch(addMusic(data));
  };
  const handleAddMovies = (data) => {
    dispatch(addMovies(data));
  };
  const handleAddPodcasts = (data) => {
    dispatch(addPodcasts(data));
  };
  const handleAddMusicVideos = (data) => {
    dispatch(addMusicVideos(data));
  };
  const handleAddSoftware = (data) => {
    dispatch(addSoftware(data));
  };
  const handleAddAudioBooks = (data) => {
    dispatch(addAudioBooks(data));
  };
  const handleAddEbooks = (data) => {
    dispatch(addEbooks(data));
  };

  return (
    <div>
      <div className="tabs justify-evenly">
        {/* ALL */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('all'));
          }}
          className={`tab tab-bordered ${media === 'all' ? 'tab-active' : ''}`}
        >
          All
        </div>

        {/* MUSIC */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('music'));
          }}
          className={`tab tab-bordered ${media === 'music' ? 'tab-active' : ''}`}
        >
          Music
        </div>

        {/* MOVIES */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('movie'));
          }}
          className={`tab tab-bordered ${media === 'movie' ? 'tab-active' : ''}`}
        >
          Movies
        </div>

        {/* PODCASTS */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('podcast'));
          }}
          className={`tab tab-bordered ${media === 'podcast' ? 'tab-active' : ''}`}
        >
          Podcasts
        </div>

        {/* MUSIC VIDEOS */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('musicVideo'));
          }}
          className={`tab tab-bordered ${media === 'musicVideo' ? 'tab-active' : ''}`}
        >
          Music Videos
        </div>

        {/* AUDIO BOOKS */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('audiobook'));
          }}
          className={`tab tab-bordered ${media === 'audiobook' ? 'tab-active' : ''}`}
        >
          Audio Books
        </div>

        {/* TV SHOWS */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('tvShow'));
          }}
          className={`tab tab-bordered ${media === 'tvShow' ? 'tab-active' : ''}`}
        >
          TV Shows
        </div>

        {/* SOFTWARE */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('software'));
          }}
          className={`tab tab-bordered ${media === 'software' ? 'tab-active' : ''}`}
        >
          Software
        </div>

        {/* EBOOKS */}
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(changeMedia('ebook'));
          }}
          className={`tab tab-bordered ${media === 'ebook' ? 'tab-active' : ''}`}
        >
          eBooks
        </div>
      </div>

      {/* Render different search components based on the selected media */}
      {media === 'all' && <AllSearch />}
      {media === 'music' && (
        <MediaSearch addMedia={handleAddMusic} mediaType="music" />
      )}
      {media === 'movie' && (
        <MediaSearch addMedia={handleAddMovies} mediaType="movies" />
      )}
      {media === 'podcast' && (
        <MediaSearch addMedia={handleAddPodcasts} mediaType="podcasts" />
      )}
      {media === 'musicVideo' && (
        <MediaSearch addMedia={handleAddMusicVideos} mediaType="musicvideos" />
      )}
      {media === 'audiobook' && (
        <MediaSearch addMedia={handleAddAudioBooks} mediaType="audiobooks" />
      )}
      {media === 'tvShow' && (
        <MediaSearch addMedia={handleAddTvShows} mediaType="tvshows" />
      )}
      {media === 'software' && (
        <MediaSearch addMedia={handleAddSoftware} mediaType="software" />
      )}
      {media === 'ebook' && (
        <MediaSearch addMedia={handleAddEbooks} mediaType="ebooks" />
      )}
    </div>
  );
}

export default Search;
