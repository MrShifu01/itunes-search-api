import { createSlice } from "@reduxjs/toolkit";

const ebooksSlice = createSlice({
    name: "ebooks",

    initialState: {
        ebooksArray: []
    },

    reducers: {
        addEbooks: (state, action) => {
            state.ebooksArray.push(action.payload)
        },

        removeEbooks: (state, action) => {
            state.ebooksArray.splice(action.payload, 1) 
        },

        resetEbooks: (state) => {
            state.ebooksArray = []
        }
    }
})

export const {addEbooks, removeEbooks, resetEbooks} = ebooksSlice.actions

export default ebooksSlice.reducer