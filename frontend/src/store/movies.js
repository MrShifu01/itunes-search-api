import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",

    initialState: {
        moviesArray: []
    },

    reducers: {
        addMovies: (state, action) => {
            state.moviesArray.push(action.payload)
        },

        removeMovies: (state, action) => {
            state.moviesArray.splice(action.payload, 1) 
        },

        resetMovies: (state) => {
            state.moviesArray = []
        }
    }
})

export const {addMovies, removeMovies, resetMovies} = moviesSlice.actions

export default moviesSlice.reducer