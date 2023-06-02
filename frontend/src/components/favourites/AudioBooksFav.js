import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeAudioBooks } from "../../store/audiobooks.js"

function AudioBooksFav() {
    const audiobooks = useSelector((state => state.audiobooks.audiobooksArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < audiobooks.length; i++) {
            if (trackId === audiobooks[i].trackId) {
                dispatch(removeAudioBooks(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5`}>

      {audiobooks.length === 0 && 
        <div>Audio Book Favourites is empty...</div>
      }

      {audiobooks.map((result) => (
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

export default AudioBooksFav