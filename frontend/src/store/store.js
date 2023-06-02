import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from './results';
import mediaTypeReducer from './mediatype';
import mediaReducer from './media';
import pageReducer from './page';

export default configureStore({
  reducer: {
    // Set up the root reducer with multiple reducers
    results: resultsReducer, // Reducer for managing search results
    page: pageReducer, // Reducer for managing the current page
    media: mediaReducer, // Reducer for managing media favorites
    mediatype: mediaTypeReducer, // Reducer for managing media types
  }
});
