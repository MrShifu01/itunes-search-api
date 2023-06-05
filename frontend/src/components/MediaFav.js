import "../index.css"
import { useSelector, useDispatch } from "react-redux"

// Selector function to retrieve media array based on mediaType
function getMediaArray(state, mediaType) {
  return state['mediatype'][`${mediaType}`] || [];
}

function MediaFav({mediaType, removeMedia}) {
  // Dynamic Selector
  const currentMedia = useSelector((state) => getMediaArray(state, mediaType));
  const dispatch = useDispatch()

  // Function to handle deletion of media from favorites
  function handleDelete(e, trackId) {
    e.preventDefault();
  
    // Find the index of the media item to remove
    const index = currentMedia.findIndex((item) => item.collectionId === trackId);
    if (index !== -1) {
      dispatch(removeMedia(index));
    }
  }

  return (
    <div className={`search-results-container p-5`}>

      {currentMedia.length === 0 && 
        <div>{mediaType} favorites is empty...</div>
      }

      {currentMedia.map((result) => (
        <div
          className='grid grid-cols-3 gap-5 justify-evenly search-results pb-3'
          key={result.trackId}
        >
          {mediaType === "music" && <h1>Song: {result.trackName}</h1>}
          {mediaType === "movies" && <h1>Movie: {result.trackName}</h1>}
          {mediaType === "podcasts" && <h1>Podcast: {result.trackName}</h1>}
          {mediaType === "musicvideos" && <h1>Music Video: {result.trackName}</h1>}
          {mediaType === "audiobooks" && <h1>Audio Book: {result.trackName}</h1>}
          {mediaType === "tvshows" && <h1>Episode: {result.trackName}</h1>}
          {mediaType === "software" && <h1>Software: {result.trackName}</h1>}
          {mediaType === "ebooks" && <h1>eBook: {result.trackName}</h1>}

          {mediaType === "music" && <p>Artist: {result.artistName}</p>}
          {mediaType === "movies" && <p>Director: {result.artistName}</p>}
          {mediaType === "podcasts" && <p>Host: {result.artistName}</p>}
          {mediaType === "musicvideos" && <p>Artist: {result.artistName}</p>}
          {mediaType === "audiobooks" && <p>Author: {result.artistName}</p>}
          {mediaType === "tvshows" && <p>Series: {result.artistName}</p>}
          {mediaType === "software" && <p>Developer: {result.artistName}</p>}
          {mediaType === "ebooks" && <p>Author: {result.artistName}</p>}

          <button 
            className="btn btn-xs"
            onClick={(e) => handleDelete(e, result.collectionId)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default MediaFav;
