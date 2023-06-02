// Import the Express framework
import express from 'express';

// Import the router module from './router.js'
import router from './router.js';

// Create an instance of the Express application
const app = express();

// Set the port to either the value specified in the environment variable "PORT" or 8000
const PORT = process.env.PORT || 8000;

// Use the router for handling routes starting with "/api"
app.use('/api', router);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
