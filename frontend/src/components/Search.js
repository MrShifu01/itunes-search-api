import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import MusicSearch from './search/MusicSearch'
import MoviesSearch from './search/MoviesSearch'
import PodcastsSearch from './search/PodcastsSearch'
import { changeMedia} from '../store/media'
import { useEffect} from 'react'
import { resetResults } from '../store/results'
import MusicVideosSearch from './search/MusicVideosSearch'
import AudioBooksSearch from './search/AudioBooksSearch'

function Search() {
  const media = useSelector((state) => state.media.media)
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(resetResults())
  }, [media])

  return (
    <div>

      <div className="tabs">
        
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
          dispatch(changeMedia('audioBook'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'audioBook' ? "tab-active" : ""}`}
        >
          Audio Books
        </a>
        
        {/* SHORT FILMS */}
        <a
        onClick={(e) => {
          e.preventDefault()
          dispatch(changeMedia('shortFilm'))
        }} 
        href='/' 
        className={`tab tab-bordered ${media === 'shortFilm' ? "tab-active" : ""}`}
        >
          Short Films
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
      
      {media === "home" && <div>Testing Home</div>}
      {media === "music" && <MusicSearch/>}
      {media === "movie" && <MoviesSearch/>}
      {media === "podcast" && <PodcastsSearch/>}
      {media === "musicVideo" && <MusicVideosSearch/>}
      {media === "audioBook" && <AudioBooksSearch/>}
    </div>
  )
}

export default Search