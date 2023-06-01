import { createSlice } from "@reduxjs/toolkit";

const musicvideosSlice = createSlice({
    name: "musicvideos",

    initialState: {
        musicvideosArray: []
    },

    reducers: {
        addMusicVideos: (state, action) => {
            state.musicvideosArray.push(action.payload)
        },

        removeMusicvideos: (state, action) => {
            state.musicvideosArray.splice(action.payload, 1) 
        },

        resetMusicVideos: (state) => {
            state.musicvideosArray = []
        }
    }
})

export const {addMusicVideos, removeMusicVideos, resetMusicVideos} = musicvideosSlice.actions

export default musicvideosSlice.reducer