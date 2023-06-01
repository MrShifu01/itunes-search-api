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
    <div>
        {movies.map((track) => (
            <div key={track.trackId}>
                <h1>{track.trackId}</h1>
                <p>{track.trackName}</p>
                <p>{track.artistName}</p>
                <button 
                className="btn"
                onClick={(e) => handleDelete(e, track.trackId)}
                >
                    Remove
                </button>

            </div>
        ))}
    </div>
  )
}

export default MoviesFav