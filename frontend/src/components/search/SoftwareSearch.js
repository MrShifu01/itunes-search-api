import '../../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addResults } from '../../store/results'
import { addSoftware } from '../../store/software'
import axios from 'axios'

function SoftwareSearch() {
    const [searchValue, setSearchValue] = useState("")
    const searchResults = useSelector((state) => state.results.results)
    const software = useSelector((state) => state.software.softwareArray)
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
  
      const nameArray = resultsArray.map((name) => {
        return name.collectionName
      })
      console.log(nameArray)
      console.log(resultsArray)
      dispatch(addResults(resultsArray))
    }
  
    const handleSearch = (e, searchValue) => {
      e.preventDefault()
      getResults(searchValue)
    }
  
    const handleAddToFavourites = (e, id, track, artist) => {
      e.preventDefault()
  
      for (let i = 0; i < software.length; i++) {
        if (id === software[i].trackId) {
          alert("Item is already in favourites")
          return
        }
      }
  
      const data = {
        "trackId": id,
        "trackName": track,
        "artistName": artist
      }
      dispatch(addSoftware(data))
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
            placeholder="Search Content..." className="input input-bordered w-full max-w-xs"
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
      <div className={`search-results-container p-5 ${searchResults.length > 0 ? '' : 'result-box'}`}>
        {searchResults.map((result) => (
          <div
          className='grid grid-cols-3 gap-5 justify-evenly search-results pb-3'
          key={result.trackId}
          >
            <h1 >
              Software Name: {result.trackName}
            </h1>
            <p>
              Developer: {result.artistName}
            </p>
            <button 
            className='btn btn-xs'
            onClick={(e) => handleAddToFavourites(e, result.trackId, result.trackName, result.artistName)}
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

export default SoftwareSearch