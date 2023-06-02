import '../../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addResults } from '../../store/results'
import { addAudioBooks } from '../../store/audiobooks'
import axios from 'axios'

function AudioBooksSearch() {
    const [searchValue, setSearchValue] = useState("")
    const [emptyResults, setEmptyResults] = useState(false)
    const [searched, setSearched] = useState(false)
    const searchResults = useSelector((state) => state.results.results)
    const audiobooks = useSelector((state) => state.audiobooks.audiobooksArray)
    const media = useSelector((state) => state.media.media)
    const dispatch = useDispatch()
  
    async function getResults(searchValue) {
      
      // Function to ensure that search results derive from alphanumeric characters only (Spaces are also kept)
      function removeNonAlphaNum (searchValue) {
        return searchValue.replace(/[^a-zA-Z0-9 ]/g, "");
      }
  
      // Calling the function to remove non alpha/num characters
      const cleanSearchValue = removeNonAlphaNum(searchValue)
      console.log(media)
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
  
    const handleSearch = (e, searchValue) => {
      e.preventDefault()
      if (!searchValue || searchValue.length < 2) {
        alert("Please enter a valid search term.");
        return;
      }
      setSearched(true)
      getResults(searchValue)
    }
  
    const handleAddToFavourites = (e, id, track, artist) => {
      e.preventDefault()
  
      for (let i = 0; i < audiobooks.length; i++) {
        if (id === audiobooks[i].trackId) {
          alert("Item is already in favourites")
          return
        }
      }
  
      const data = {
        "trackId": id,
        "trackName": track,
        "artistName": artist
      }
      dispatch(addAudioBooks(data))
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

        {emptyResults ? <div>Found 0 results</div> : ''}
        {searchResults.map((result) => (
          <div
          className='grid grid-cols-3 gap-5 justify-evenly search-results pb-3'
          key={result.collectionId}
          >
            <h1 >
              Book Name: {result.collectionName}
            </h1>
            <p>
              Author: {result.artistName}
            </p>
            <button 
            className='btn btn-xs'
            onClick={(e) => handleAddToFavourites(e, result.collectionId, result.collectionName, result.artistName)}
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

export default AudioBooksSearch