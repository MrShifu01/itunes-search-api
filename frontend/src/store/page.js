import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",

    initialState: {
        page: "search"
    },

    reducers: {
        changePage: (state, action) => {
            state.page = action.payload
        },

        resetPage: (state) => {
            state.page = "search"
        }
    }
})

export const { changePage } = pageSlice.actions

export default pageSlice.reducer