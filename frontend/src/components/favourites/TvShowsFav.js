import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeTvShows } from "../../store/tvshows.js"

function TvShowsFav() {
    const tvshows = useSelector((state => state.tvshows.tvshowsArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < tvshows.length; i++) {
            if (trackId === tvshows[i].trackId) {
                dispatch(removeTvShows(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5 ${tvshows.length > 0 ? '' : 'result-box'}`}>
      {tvshows.map((result) => (
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

export default TvShowsFav