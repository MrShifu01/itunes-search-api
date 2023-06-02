import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removePodcasts } from "../../store/podcasts.js"

function PodcastsFav() {
    const podcasts = useSelector((state => state.podcasts.podcastsArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < podcasts.length; i++) {
            if (trackId === podcasts[i].trackId) {
                dispatch(removePodcasts(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5`}>

      {podcasts.length === 0 && 
        <div>Podcast Favourites is empty...</div>
      }

      {podcasts.map((result) => (
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

export default PodcastsFav