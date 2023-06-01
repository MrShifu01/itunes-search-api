import { createSlice } from "@reduxjs/toolkit";

const shortfilmsSlice = createSlice({
    name: "shortfilms",

    initialState: {
        shortfilmsArray: []
    },

    reducers: {
        addShortFilms: (state, action) => {
            state.shortfilmsArray.push(action.payload)
        },

        removeShortFilms: (state, action) => {
            state.shortfilmsArray.splice(action.payload, 1) 
        },

        resetShortFilms: (state) => {
            state.shortfilmsArray = []
        }
    }
})

export const {addShortFilms, removeShortFilms, resetShortFilms} = shortfilmsSlice.actions

export default shortfilmsSlice.reducer