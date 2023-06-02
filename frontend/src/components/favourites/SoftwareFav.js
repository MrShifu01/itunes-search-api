import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeSoftware } from "../../store/software.js"

function SoftwareFav() {
    const software = useSelector((state => state.software.softwareArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < software.length; i++) {
            if (trackId === software[i].trackId) {
                dispatch(removeSoftware(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5`}>

      {software.length === 0 && 
        <div>Software Favourites is empty...</div>
      }

      {software.map((result) => (
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

export default SoftwareFav