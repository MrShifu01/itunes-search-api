const express = require('express')
const axios = require('axios')

// Create an instance of an Express Router
const router = express.Router();

// Async function to retrieve results from the iTunes API
async function getResults(term, media) {
  try {
    // Send a GET request to the iTunes API with the provided search term, media type, and limit
    const response = await axios.get(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=5`);
    const results = response.data;
    return results;
  } catch (error) {
    console.error("Error retrieving results:", error);
    throw error;
  }
}

// Handle the HTTP GET request to get all results
router.get('/', async (req, res) => {
  // Retrieve the search term and media type from the query parameters
  const term = req.query.term;
  const media = req.query.media;
  
  try {
    // Call the getResults function to retrieve the results from the iTunes API
    const results = await getResults(term, media);
    
    // Send the retrieved results as the response
    res.send(results);
  } catch (error) {
    // Handle errors by sending a 500 status code and an error message
    res.status(500).send("Error retrieving results");
  }
});

// Export the router module
module.exports = {
  router: router,
  getResults: getResults
};
