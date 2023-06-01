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
    <div>
        {music.map((track) => (
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

export default MusicFav