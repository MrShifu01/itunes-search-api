import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results", // The name of the slice

  initialState: {
    results: [], // The initial state with an empty results array
  },

  reducers: {
    // Reducer functions for updating the state
    addResults: (state, action) => {
      // Reducer function for adding results to the state
      state.results = action.payload; // Update the results array with the payload data
    },

    resetResults: (state) => {
      // Reducer function for resetting results to an empty array
      state.results = []; // Reset the results array to an empty array
    },
  },
});

// Extract the action creators from the slice
export const { addResults, resetResults } = resultsSlice.actions;

// Export the reducer function from the slice
export default resultsSlice.reducer;
