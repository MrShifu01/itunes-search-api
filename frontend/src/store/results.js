import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name: "results",

    initialState: {
        results:[]
    },

    reducers: {
        addResults: (state, action) => {
            state.results = action.payload
        },

        resetResults: (state) => {
            state.results = []
        }
    }
})

export const { addResults, resetResults } = resultsSlice.actions

export default resultsSlice.reducer