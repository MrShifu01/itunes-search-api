import "../../index.css"
import { useSelector, useDispatch } from "react-redux"
import { removeMovies } from "../../store/movies.js"

function MoviesFav() {
    const movies = useSelector((state => state.movies.moviesArray))
    const dispatch = useDispatch()

    function handleDelete(e, trackId) {
        e.preventDefault()

        for (let i = 0; i < movies.length; i++) {
            if (trackId === movies[i].trackId) {
                dispatch(removeMovies(i))
            }
        }
    }

  return (
    <div className={`search-results-container p-5 ${movies.length > 0 ? '' : 'result-box'}`}>
      {movies.map((result) => (
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

export default MoviesFav