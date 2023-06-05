import '../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addResults } from '../store/results'
import { 
  addTvShows,
  addMusic,
  addAudioBooks,
  addMusicVideos,
  addEbooks,
  addPodcasts,
  addSoftware,
  addMovies
} from '../store/mediatype'

import axios from 'axios'

function AllSearch() {
  // State variables
    const [searchValue, setSearchValue] = useState("")
    const searchResults = useSelector((state) => state.results.results)
    const [emptyResults, setEmptyResults] = useState(false)
    const [searched, setSearched] = useState(false)
    const movies = useSelector((state) => state.mediatype.movies)
    const music = useSelector((state) => state.mediatype.music)
    const podcasts = useSelector((state) => state.mediatype.podcasts)
    const tvshows = useSelector((state) => state.mediatype.tvshows)
    const audiobooks = useSelector((state) => state.mediatype.audiobooks)
    const ebooks = useSelector((state) => state.mediatype.ebooks)
    const software = useSelector((state) => state.mediatype.software)
    const musicvideos = useSelector((state) => state.mediatype.musicvideos)


    const media = useSelector((state) => state.media.media)


    const dispatch = useDispatch()
  
    async function getResults(searchValue) {
      
      // Function to ensure that search results derive from alphanumeric characters only (Spaces are also kept)
      function removeNonAlphaNum (searchValue) {
        return searchValue.replace(/[^a-zA-Z0-9 ]/g, "");
      }
  
      // Calling the function to remove non alpha/num characters
      const cleanSearchValue = removeNonAlphaNum(searchValue)
  
      const response = await axios.get(`/api/?term=${cleanSearchValue}&media=${media}`)
      const data = response.data
      const resultsArray = data.results
      if (resultsArray.length === 0) {
        setEmptyResults(true)
      } else {
        setEmptyResults(false)
      }
  
      dispatch(addResults(resultsArray))
    }
  
    // Function to handle the search data from user
    const handleSearch = (e, searchValue) => {
      e.preventDefault()
      if (!searchValue || searchValue.length < 2) {
        alert("Please enter a valid search term of 2 or more characters");
        return;
      }
      setSearched(true)
      getResults(searchValue)
    }
  
    // handle the adding of an item to favourites
    const handleAddToFavourites = (e, kind, id, track, artist) => {
      e.preventDefault()

      // making sure the right media content gets saved to the correct favourites list
      let data
      switch (kind) {
        
          case "song":

            for (let i = 0; i < music.length; i++) {
              if (id === music[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addMusic(data))
            break
        
          case "tv-episode":

            for (let i = 0; i < tvshows.length; i++) {
              if (id === tvshows[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addTvShows(data))

            break
        
          case "feature-movie":

            for (let i = 0; i < movies.length; i++) {
              if (id === movies[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addMovies(data))

            break
        
          case "ebook":

            for (let i = 0; i < ebooks.length; i++) {
              if (id === ebooks[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addEbooks(data))

            break
        
          case "software":

            for (let i = 0; i < software.length; i++) {
              if (id === software[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addSoftware(data))

            break
        
          case "audiobook":

            for (let i = 0; i < audiobooks.length; i++) {
              if (id === audiobooks[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addAudioBooks(data))

            break
        
          case "music-video":

            for (let i = 0; i < musicvideos.length; i++) {
              if (id === musicvideos[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addMusicVideos(data))

            break
        
          case "podcast":

            for (let i = 0; i < podcasts.length; i++) {
              if (id === podcasts[i].trackId) {
                alert("Item is already in favourites")
                return
              }
            }
        
            data = {
              "trackId": id,
              "trackName": track,
              "artistName": artist
            }
            dispatch(addPodcasts(data))

            break
        
          default:
            break

      }
  

    }
  return (
    <div>
      <div className="search-container">
        <div className='search-content'>
          <form 
          className=' flex gap-3 m-3'
          action="submit"
          onSubmit={(e) => handleSearch(e, searchValue)}
          >
          
            <input
            type="text"
            placeholder="Search Content..." className="search-input bg-base-200 rounded-lg p-3"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            />
            <button
            type='submit'
            className='btn'
            >
              <i className='bx bx-search-alt'></i>
            </button>
          </form>
        </div>
      </div>
      <div className={`search-results-container p-5 ${!searched ? 'result-box' : ''}`}>
        
        {/* If results array from apple is empty, tell user that 0 results were found */}
        {emptyResults ? <div>Found 0 results</div> : ''}
        {searchResults.map((result) => (
          <div
          className='grid grid-cols-4 gap-5 justify-evenly search-results pb-3'
          key={result.trackId}
          >
            <h1 >
              Name: {result.collectionName}
            </h1>
            <p>
              Artist: {result.artistName}
            </p>
            <div>
              {result.wrapperType === "audiobook" ? <p>Type: {result.wrapperType}</p> : <p>Type: {result.kind}</p>}
            </div>
            <button 
            className='btn btn-sm'
            onClick={(e) =>
              handleAddToFavourites(
                e,
                result.wrapperType === "audiobook" ? result.wrapperType : result.kind,
                result.trackId,
                result.collectionName,
                result.artistName
              )
            }
            
            >
              Add to Favourites
            </button>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default AllSearch