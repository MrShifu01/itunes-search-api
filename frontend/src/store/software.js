import { createSlice } from "@reduxjs/toolkit";

const softwareSlice = createSlice({
    name: "software",

    initialState: {
        softwareArray: []
    },

    reducers: {
        addSoftware: (state, action) => {
            state.softwareArray.push(action.payload)
        },

        removeSoftware: (state, action) => {
            state.softwareArray.splice(action.payload, 1) 
        },

        resetSoftware: (state) => {
            state.softwareArray = []
        }
    }
})

export const {addSoftware, removeSoftware, resetSoftware} = softwareSlice.actions

export default softwareSlice.reducer