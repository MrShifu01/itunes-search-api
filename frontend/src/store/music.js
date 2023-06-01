import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
    name: "music",

    initialState: {
        musicArray: []
    },

    reducers: {
        addMusic: (state, action) => {
            state.musicArray.push(action.payload)
        },

        removeMusic: (state, action) => {
            state.musicArray.splice(action.payload, 1) 
        },

        resetMusic: (state) => {
            state.musicArray = []
        }
    }
})

export const {addMusic, removeMusic, resetMusic} = musicSlice.actions

export default musicSlice.reducer