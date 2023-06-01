import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
    name: "media",

    initialState: {
        media: "all"
    },

    reducers: {
        changeMedia: (state, action) => {
            state.media = action.payload
        },
    }
})

export const { changeMedia } = mediaSlice.actions

export default mediaSlice.reducer