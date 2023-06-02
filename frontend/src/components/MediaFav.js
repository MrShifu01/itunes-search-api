import "../index.css"
import { useSelector, useDispatch } from "react-redux"

// Selector function
function getMediaArray(state, mediaType) {
  return state[mediaType]?.[`${mediaType}Array`] || [];
}

function MediaFav({mediaType, removeMedia}) {
    // Dynamic Selector
    const currentMedia = useSelector((state) => getMediaArray(state, mediaType));
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < currentMedia.length; i++) {
            if (trackId === currentMedia[i].trackId) {
                dispatch(removeMedia(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5`}>

      {currentMedia.length === 0 && 
        <div>TV Show Favourites is empty...</div>
      }

      {currentMedia.map((result) => (
        <div
        className='grid grid-cols-3 gap-5 justify-evenly search-results pb-3'
        key={result.trackId}
        >
          <h1>
            Track Name: {result.trackName}
          </h1>
          <p>
            Artist: {result.artistName}
          </p>
          <button 
                  className="btn btn-xs"
                  onClick={(e) => handleDelete(e, result.trackId)}
                  >
                      Remove
                  </button>
        </div>
      )
      )}
    </div>
  )
}

export default MediaFav