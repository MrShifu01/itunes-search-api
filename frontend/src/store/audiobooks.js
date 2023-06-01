import { createSlice } from "@reduxjs/toolkit";

const audiobooksSlice = createSlice({
    name: "audiobooks",

    initialState: {
        audiobooksArray: []
    },

    reducers: {
        addAudioBooks: (state, action) => {
            state.audiobooksArray.push(action.payload)
        },

        removeAudioBooks: (state, action) => {
            state.audiobooksArray.splice(action.payload, 1) 
        },

        resetAudioBooks: (state) => {
            state.audiobooksArray = []
        }
    }
})

export const {addAudioBooks, removeAudioBooks, resetAudioBooks} = audiobooksSlice.actions

export default audiobooksSlice.reducer