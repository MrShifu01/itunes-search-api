import { createSlice } from "@reduxjs/toolkit";

const tvshowsSlice = createSlice({
    name: "tvshows",

    initialState: {
        tvshowsArray: []
    },

    reducers: {
        addTvShows: (state, action) => {
            state.tvshowsArray.push(action.payload)
        },

        removeTvShows: (state, action) => {
            state.tvshowsArray.splice(action.payload, 1) 
        },

        resetTvShows: (state) => {
            state.tvshowsArray = []
        }
    }
})

export const {addTvShows, removeTvShows, resetTvShows} = tvshowsSlice.actions

export default tvshowsSlice.reducer