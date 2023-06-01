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
import TvShowsSearch from './search/TvShowsSearch'
import SoftwareSearch from './search/SoftwareSearch'
import EbooksSearch from './search/EbooksSearch'
import AllSearch from './search/AllSearch'

function Search() {
  const media = useSelector((state) => state.media.media)
  
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(resetResults())
  }, [media])

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
      
      {media === "home" && <div>Testing Home</div>}
      {media === "all" && <AllSearch/>}
      {media === "music" && <MusicSearch/>}
      {media === "movie" && <MoviesSearch/>}
      {media === "podcast" && <PodcastsSearch/>}
      {media === "musicVideo" && <MusicVideosSearch/>}
      {media === "audiobook" && <AudioBooksSearch/>}
      {media === "tvShow" && <TvShowsSearch/>}
      {media === "software" && <SoftwareSearch/>}
      {media === "ebook" && <EbooksSearch/>}
    </div>
  )
}

export default Search