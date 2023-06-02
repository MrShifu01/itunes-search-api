import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page", // The name of the slice

  initialState: {
    page: "search", // The initial state with the default page set to "search"
  },

  reducers: {
    // Reducer functions for updating the state
    changePage: (state, action) => {
      // Reducer function for changing the page
      state.page = action.payload; // Update the page with the payload data
    },

    resetPage: (state) => {
      // Reducer function for resetting the page to the default value
      state.page = "search"; // Reset the page to the default value "search"
    },
  },
});

// Extract the action creators from the slice
export const { changePage } = pageSlice.actions;

// Export the reducer function from the slice
export default pageSlice.reducer;
