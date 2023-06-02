import { createSlice } from "@reduxjs/toolkit";

const mediaTypeSlice = createSlice({
  name: "mediatype", // The name of the slice

  initialState: {
    tvshows: [], // Array to store TV shows
    music: [], // Array to store music
    movies: [], // Array to store movies
    podcasts: [], // Array to store podcasts
    musicvideos: [], // Array to store music videos
    audiobooks: [], // Array to store audiobooks
    software: [], // Array to store software
    ebooks: [], // Array to store ebooks
  },

  reducers: {
    // Reducer functions for adding media to the corresponding arrays
    addTvShows: (state, action) => {
      state.tvshows.push(action.payload);
    },
    addMusic: (state, action) => {
      state.music.push(action.payload);
    },
    addMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    addPodcasts: (state, action) => {
      state.podcasts.push(action.payload);
    },
    addMusicVideos: (state, action) => {
      state.musicvideos.push(action.payload);
    },
    addAudioBooks: (state, action) => {
      state.audiobooks.push(action.payload);
    },
    addSoftware: (state, action) => {
      state.software.push(action.payload);
    },
    addEbooks: (state, action) => {
      state.ebooks.push(action.payload);
    },

    // Reducer functions for removing media from the corresponding arrays
    removeTvShows: (state, action) => {
      state.tvshows.splice(action.payload, 1);
    },
    removeMusic: (state, action) => {
      state.music.splice(action.payload, 1);
    },
    removeMovies: (state, action) => {
      state.movies.splice(action.payload, 1);
    },
    removePodcasts: (state, action) => {
      state.podcasts.splice(action.payload, 1);
    },
    removeMusicVideos: (state, action) => {
      state.musicvideos.splice(action.payload, 1);
    },
    removeAudioBooks: (state, action) => {
      state.audiobooks.splice(action.payload, 1);
    },
    removeSoftware: (state, action) => {
      state.software.splice(action.payload, 1);
    },
    removeEbooks: (state, action) => {
      state.ebooks.splice(action.payload, 1);
    },
  },
});

// Extract the action creators from the slice
export const {
  addTvShows,
  addMusic,
  addMovies,
  addPodcasts,
  addMusicVideos,
  addAudioBooks,
  addSoftware,
  addEbooks,
  removeTvShows,
  removeMusic,
  removeMovies,
  removePodcasts,
  removeMusicVideos,
  removeAudioBooks,
  removeSoftware,
  removeEbooks,
} = mediaTypeSlice.actions;

// Export the reducer function from the slice
export default mediaTypeSlice.reducer;
