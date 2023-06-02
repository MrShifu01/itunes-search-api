import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeMusic } from "../../store/music.js"

function MusicFav() {
    const music = useSelector((state => state.music.musicArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < music.length; i++) {
            if (trackId === music[i].trackId) {
                dispatch(removeMusic(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5 ${music.length > 0 ? '' : 'result-box'}`}>
      {music.map((result) => (
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

export default MusicFav