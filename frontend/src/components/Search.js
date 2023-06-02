import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeMedia} from '../store/media'
import { useEffect} from 'react'
import { resetResults } from '../store/results'
import MediaSearch from './MediaSearch'
import AllSearch from './AllSearch'

import { addTvShows } from '../store/tvshows'
import { addMusic } from '../store/music'
import { addMovies } from '../store/movies'
import { addPodcasts } from '../store/podcasts'
import { addMusicVideos } from '../store/musicvideos'
import { addAudioBooks } from '../store/audiobooks'
import { addSoftware } from '../store/software'
import { addEbooks } from '../store/ebooks'

function Search() {
  const media = useSelector((state) => state.media.media)
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(resetResults())
  }, [media])

  const handleAddTvShows = (data) => {
    dispatch(addTvShows(data))
  }
  const handleAddMusic = (data) => {
    dispatch(addMusic(data))
  }
  const handleAddMovies = (data) => {
    dispatch(addMovies(data))
  }
  const handleAddPodcasts = (data) => {
    dispatch(addPodcasts(data))
  }
  const handleAddMusicVideos = (data) => {
    dispatch(addMusicVideos(data))
  }
  const handleAddSoftware = (data) => {
    dispatch(addSoftware(data))
  }
  const handleAddAudioBooks = (data) => {
    dispatch(addAudioBooks(data))
  }
  const handleAddEbooks = (data) => {
    dispatch(addEbooks(data))
  }



  return (
    <div>



      <div className="tabs justify-evenly">
        
        {/* ALL */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('all'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'all' ? "tab-active" : ""}`}
        >
          All
        </a>

        {/* MUSIC */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('music'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'music' ? "tab-active" : ""}`}
        >
          Music
        </a>
        
        {/* MOVIES */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('movie'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'movie' ? "tab-active" : ""}`}
        >
          Movies
        </a>
        
        {/* PODCASTS */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('podcast'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'podcast' ? "tab-active" : ""}`}
        >
          Podcasts
        </a>
        
        {/* MUSIC VIDEOS */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('musicVideo'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'musicVideo' ? "tab-active" : ""}`}
        >
          Music Videos
        </a>
        
        {/* AUDIO BOOKS */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('audiobook'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'audiobook' ? "tab-active" : ""}`}
        >
          Audio Books
        </a>
        
        {/* TV SHOWS*/}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('tvShow'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'tvShow' ? "tab-active" : ""}`}
        >
          TV Shows
        </a>
        
        {/* SOFTWARE */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('software'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'software' ? "tab-active" : ""}`}
        >
          Software
        </a>
        
        {/* EBOOKS */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('ebook'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'ebook' ? "tab-active" : ""}`}
        >
          eBooks
        </a>

      </div>
      
      {media === "all" && <AllSearch />}
      {media === "music" && (
        <MediaSearch addMedia={handleAddMusic} mediaType="music" />
      )}
      {media === "movie" && (
        <MediaSearch addMedia={handleAddMovies} mediaType="movies" />
      )}
      {media === "podcast" && (
        <MediaSearch addMedia={handleAddPodcasts} mediaType="podcasts" />
      )}
      {media === "musicVideo" && (
        <MediaSearch addMedia={handleAddMusicVideos} mediaType="musicvideos" />
      )}
      {media === "audiobook" && (
        <MediaSearch addMedia={handleAddAudioBooks} mediaType="audiobooks" />
      )}
      {media === "tvShow" && (
        <MediaSearch addMedia={handleAddTvShows} mediaType="tvshows" />
      )}
      {media === "software" && (
        <MediaSearch addMedia={handleAddSoftware} mediaType="software" />
      )}
      {media === "ebook" && (
        <MediaSearch addMedia={handleAddEbooks} mediaType="ebooks" />
      )}
    </div>
  )
}

export default Search