import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addResults } from '../store/results';
import axios from 'axios';

// Selector function to retrieve media array based on mediaType
function getMediaArray(state, mediaType) {
  return state['mediatype'][`${mediaType}`] || [];
}

function MediaSearch({ mediaType, addMedia }) {
  const [searchValue, setSearchValue] = useState('');
  const [emptyResults, setEmptyResults] = useState(false);
  const [searched, setSearched] = useState(false);
  const searchResults = useSelector((state) => state.results.results);

  // Dynamic Selector
  const currentMedia = useSelector((state) => getMediaArray(state, mediaType));

  const media = useSelector((state) => state.media.media);
  const dispatch = useDispatch();

  // Function to retrieve search results from the API
  async function getResults(searchValue) {
    // Function to ensure that search results derive from alphanumeric characters only (Spaces are also kept)
    function removeNonAlphaNum(searchValue) {
      return searchValue.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    // Calling the function to remove non alpha/num characters
    const cleanSearchValue = removeNonAlphaNum(searchValue);
    const response = await axios.get(`/api/?term=${cleanSearchValue}&media=${media}`);
    const data = response.data;
    const resultsArray = data.results;

    if (resultsArray.length === 0) {
      setEmptyResults(true);
    } else {
      setEmptyResults(false);
    }

    dispatch(addResults(resultsArray));
  }

  // Function to handle search submission
  const handleSearch = (e, searchValue) => {
    e.preventDefault();
    if (!searchValue || searchValue.length < 2) {
      alert('Please enter a valid search term of 2 or more characters');
      return;
    }
    setSearched(true);
    getResults(searchValue);
  };

  // Function to handle adding media to favorites
  const handleAddToFavourites = (e, id, track, artist) => {
    e.preventDefault();

    for (let i = 0; i < currentMedia.length; i++) {
      if (id === currentMedia[i].trackId) {
        alert('Item is already in favorites');
        return;
      }
    }
    alert('Item added to favorites');

    const data = {
      trackId: id,
      trackName: track,
      artistName: artist,
    };

    addMedia(data);
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-content">
          <form
            className="flex gap-3 m-3"
            action="submit"
            onSubmit={(e) => handleSearch(e, searchValue)}
          >
            <input
              type="text"
              placeholder="Search Content..."
              className="search-input bg-base-200 rounded-lg p-3"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button type="submit" className="btn">
              <i className="bx bx-search-alt"></i>
            </button>
          </form>
        </div>
      </div>
      <div className={`search-results-container mb-3 p-5 ${!searched ? 'result-box' : ''}`}>
        
        {/* If results array from apple is empty, tell user that 0 results were found */}
        {emptyResults ? <div>Found 0 results</div> : ''}
        
        {/* Display the search results */}
        {searchResults.map((result) => (
          <div
            className="grid grid-cols-3 gap-5 justify-evenly search-results pb-3"
            key={mediaType === 'audiobooks' ? result.collectionId : result.trackId}
          >
            {mediaType === 'music' && <h1>Song: {result.trackName}</h1>}
            {mediaType === 'movies' && <h1>Movie: {result.trackName}</h1>}
            {mediaType === 'podcasts' && <h1>Podcast: {result.trackName}</h1>}
            {mediaType === 'musicvideos' && <h1>Music Video: {result.trackName}</h1>}
            {mediaType === 'audiobooks' && <h1>Audio Book: {result.collectionName}</h1>}
            {mediaType === 'tvshows' && <h1>Episode: {result.trackName}</h1>}
            {mediaType === 'software' && <h1>Software: {result.trackName}</h1>}
            {mediaType === 'ebooks' && <h1>eBook: {result.trackName}</h1>}

            {mediaType === 'music' && <p>Artist: {result.artistName}</p>}
            {mediaType === 'movies' && <p>Director: {result.artistName}</p>}
            {mediaType === 'podcasts' && <p>Host: {result.artistName}</p>}
            {mediaType === 'musicvideos' && <p>Artist: {result.artistName}</p>}
            {mediaType === 'audiobooks' && <p>Author: {result.artistName}</p>}
            {mediaType === 'tvshows' && <p>Series: {result.artistName}</p>}
            {mediaType === 'software' && <p>Developer: {result.artistName}</p>}
            {mediaType === 'ebooks' && <p>Author: {result.artistName}</p>}

            <button
              className="btn btn-xs"
              onClick={(e) =>
                handleAddToFavourites(
                  e,
                  mediaType === 'audiobooks' ? result.collectionId : result.trackId,
                  mediaType === 'audiobooks' ? result.collectionName : result.trackName,
                  result.artistName
                )
              }
            >
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaSearch;
