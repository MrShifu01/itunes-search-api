import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeEbooks } from "../../store/ebooks.js"

function EbooksFav() {
    const ebooks = useSelector((state => state.ebooks.ebooksArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < ebooks.length; i++) {
            if (trackId === ebooks[i].trackId) {
                dispatch(removeEbooks(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5 ${ebooks.length > 0 ? '' : 'result-box'}`}>
      {ebooks.map((result) => (
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

export default EbooksFav