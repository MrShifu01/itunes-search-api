import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeMusicVideos } from "../../store/musicvideos.js"

function MusicVideosFav() {
    const musicvideos = useSelector((state => state.musicvideos.musicvideosArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < musicvideos.length; i++) {
            if (trackId === musicvideos[i].trackId) {
                dispatch(removeMusicVideos(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5`}>

      {musicvideos.length === 0 && 
        <div>Music Video Favourites is empty...</div>
      }

      {musicvideos.map((result) => (
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

export default MusicVideosFav