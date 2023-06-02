import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media", // The name of the slice

  initialState: {
    media: "all", // The initial media value
  },

  reducers: {
    // Reducer function for changing the media value
    changeMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

// Extract the action creator from the slice
export const { changeMedia } = mediaSlice.actions;

// Export the reducer function from the slice
export default mediaSlice.reducer;
